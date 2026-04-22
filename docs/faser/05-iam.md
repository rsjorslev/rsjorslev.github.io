---
title: "Fase 5: Identitets- & adgangsstyring"
phase: 5
topic: "sikkerhed"
personas: ["sikkerhed", "leder"]
tags: ["IAM", "RBAC", "MFA", "just-in-time", "adgangsreview", "zero-trust"]
priority: "parallel"
dependencies: []
---

# Fase 5: Identitets- & adgangsstyring

<div class="phase-meta">
  <span><strong>Sti:</strong> <span class="parallel-badge">Parallel</span></span>
  <span><strong>Afhænger af:</strong> Ingen — kan starte fra dag 1</span>
  <span><strong>Skal være klar inden:</strong> Fase 9</span>
</div>

<div class="persona-badges">
  <span class="persona-badge sikkerhed">🛡️ Sikkerhedsansvarlig</span>
  <span class="persona-badge leder">📊 IT-leder</span>
</div>

Det vurderes, at en robust adgangsstyringsmodel er en forudsætning for sikker multi-tenant-drift, hvor driftspersonale fra den fælles organisation og fra de individuelle kommuner skal operere på den samme platform med klart afgrænsede rettigheder.

- RBAC med tenant-afgrænsede roller implementeres, så administratorer kun har adgang til de tenants, de er autoriseret til; cross-tenant adgang kræver separat godkendelse.

- MFA påkræves for al administrativ adgang til alle infrastrukturkomponenter, uanset adgangsmetode.

- Just-in-time access implementeres for privilegerede operationer, så rettigheder tildeles temporært og automatisk tilbagekaldes.

- Kvartalsvise adgangsreviews planlægges for alle privilegerede konti med dokumenterede resultater og korrigerende handlinger.
