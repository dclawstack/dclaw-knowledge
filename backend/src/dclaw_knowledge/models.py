from pydantic import BaseModel
from datetime import datetime
from typing import List

class KnowledgeEntity(BaseModel):
    id: str
    topic: str
    related_entities: list[str]
    confidence_score: float
    source_documents: list[str]
    created_at: datetime

class EntityCreate(BaseModel):
    topic: str
