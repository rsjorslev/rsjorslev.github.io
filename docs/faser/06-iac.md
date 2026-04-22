---
title: "Fase 6: Automatisering & Infrastructure-as-Code"
phase: 6
topic: "automatisering"
personas: ["arkitekt", "driftsleder"]
tags: ["IaC", "CI/CD", "VM-skabeloner", "servicekatalog", "self-service", "konfigurationsdrift"]
priority: "parallel"
dependencies: [2, 3]
---

# Fase 6: Automatisering & Infrastructure-as-Code

<div class="phase-meta">
  <span><strong>Sti:</strong> <span class="parallel-badge">Parallel</span></span>
  <span><strong>Afhænger af:</strong> Design fra dag 1; deployment kræver Fase 2+3</span>
  <span><strong>Skal være klar inden:</strong> Fase 9</span>
</div>

<div class="persona-badges">
  <span class="persona-badge arkitekt">🏗️ Arkitekt</span>
  <span class="persona-badge driftsleder">⚙️ Driftsleder</span>
</div>

Det forventes, at automatisering ikke er et efterfølgende optimeringsprojekt, men en grundlæggende designbeslutning fra dag ét. Al infrastruktur skal være reproducerbar fra kode, og manuelle ændringer skal være undtagelsen.

- Al infrastrukturkonfiguration (compute, netværk, storage, sikkerhed) defineres som kode i et versionsstyringssystem og udrulles via automatiserede CI/CD-pipelines.

- Standardiserede, hærdede VM-skabeloner etableres i et fælles servicekatalog med defineret livscyklus, versionsstyring og automatiseret opdatering.

- Automatiseret provisioneringsworkflow implementeres, så oprettelse af et komplet tenant-miljø (compute, netværk, segmentering, monitorering, backup) kan ske inden for minutter.

- Konfigurationsdrift-detektion etableres, så platformen automatisk identificerer og korrigerer afvigelser fra den godkendte konfiguration.

- Self-service-portal konfigureres for standardiserede tenant-forespørgsler med automatiseret godkendelsesflow, compliance-validering og provisionering.
