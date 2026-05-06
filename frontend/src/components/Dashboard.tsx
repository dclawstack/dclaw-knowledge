"use client";

import { useState } from "react";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface KnowledgeEntity {
  id: string;
  topic: string;
  related_entities: string[];
  confidence_score: number;
  source_documents: string[];
  created_at: string
}

export default function Dashboard() {
  const [topic, setTopic] = useState("");
  const [knowledgeEntity, setKnowledgeEntity] = useState<KnowledgeEntity | null>(null);
  const [extraData, setExtraData] = useState<any>(null);
const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!topic) return;
    setLoading(true);
    try {
      const res = await fetch("/entities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        topic: topic,
        }),
      });
      const data = await res.json();
      setKnowledgeEntity(data);
      const extraRes = await fetch(`/entities/${entity_id}/relations`);
      const extraData = await extraRes.json();
      setExtraData(extraData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Brain className="w-8 h-8" style={{ color: "#6366F1" }} />
        <div>
          <h1 className="text-2xl font-bold">DClaw Knowledge</h1>
          <p className="text-sm text-slate-500">Enterprise knowledge graph</p>
        </div>
        <Badge className="ml-auto" style={{ backgroundColor: "#6366F1" }}>Platform</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Explore Knowledge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Topic</label>
              <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Artificial Intelligence" />
            </div>

          </div>
          <Button onClick={handleSubmit} disabled={loading || !topic}>
            {loading ? "Processing..." : "Explore Knowledge"}
          </Button>
        </CardContent>
      </Card>

      {knowledgeEntity && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Card>
            <CardHeader>
              <CardTitle>Entity Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>ID:</strong> {entity.id}</p>
              <p><strong>Topic:</strong> {entity.topic}</p>
              <p><strong>Confidence Score:</strong> {(entity.confidence_score * 100).toFixed(0) + '%'}</p>
              <p><strong>Created:</strong> {new Date(entity.created_at).toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Related Entities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {entity.related_entities.map((item: string, i: number) => (
                  <Badge key={i} variant="secondary">{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Source Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {entity.source_documents.map((item: string, i: number) => (
                  <Badge key={i} variant="secondary">{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Relationships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {extraData?.map((rec: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-sm">{rec.relation} → {rec.target}</span>
                    <Badge variant="secondary">{rec.relation}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
