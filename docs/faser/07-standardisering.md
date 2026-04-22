---
title: "Fase 7: Standardisering, labelling & CMDB"
phase: 7
topic: "standardisering"
personas: ["driftsleder", "leder"]
tags: ["navngivning", "tagging", "CMDB", "chargeback", "metadata", "asset-management"]
priority: "parallel"
dependencies: []
---

# Fase 7: Standardisering, labelling & CMDB

<div class="phase-meta">
  <span><strong>Sti:</strong> <span class="parallel-badge">Parallel</span></span>
  <span><strong>Afhænger af:</strong> Ingen — kan starte fra dag 1</span>
  <span><strong>Skal være klar inden:</strong> Fase 9</span>
</div>

<div class="persona-badges">
  <span class="persona-badge driftsleder">⚙️ Driftsleder</span>
  <span class="persona-badge leder">📊 IT-leder</span>
</div>

Det vurderes, at standardisering af navngivning, tagging og asset management er en forudsætning for både automatisering, rapportering og chargeback i en multi-tenant-platform med 98 kommuner.

- Navngivningskonvention og tagging-strategi defineres og håndhæves automatisk via policies ved provisionering; afvigelser afvises automatisk.

- Obligatoriske metadata pr. objekt inkluderer: tenant, miljøtype, kritikalitetsklasse, ejer, backup-klasse og livscyklusstatus.

- CMDB etableres med automatiseret opdatering via integration med provisionerings- og monitoreringsplatforme; manuelle opdateringer elimineres.

- Chargeback-model baseret på tags implementeres, så ressourceforbrug automatisk allokeres til den korrekte tenant for økonomisk rapportering.
