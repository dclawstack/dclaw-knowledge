{{/* vim: set filetype=mustache: */}}
{{/* Expand the name of the chart. */}}
{{- define "dclaw-knowledge.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/* Create chart name and version */}}
{{- define "dclaw-knowledge.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}
