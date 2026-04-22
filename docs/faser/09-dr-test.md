---
title: "Fase 9: DR-test, validering & hærdning"
phase: 9
topic: "validering"
personas: ["arkitekt", "driftsleder", "sikkerhed", "leder"]
tags: ["DR", "failover", "witness-site", "penetrationstest", "compliance", "RTO", "RPO"]
priority: "kritisk-sti"
dependencies: [1, 2, 3, 4, 5, 6, 7, 8]
---

# Fase 9: DR-test, validering & hærdning

<div class="phase-meta">
  <span><strong>Sti:</strong> <span class="critical-path-badge">Kritisk sti</span></span>
  <span><strong>Afhænger af:</strong> Fase 1–8 (alle skal være gennemført)</span>
  <span><strong>Blokerer:</strong> Fase 10</span>
</div>

<div class="persona-badges">
  <span class="persona-badge arkitekt">🏗️ Arkitekt</span>
  <span class="persona-badge driftsleder">⚙️ Driftsleder</span>
  <span class="persona-badge sikkerhed">🛡️ Sikkerhedsansvarlig</span>
  <span class="persona-badge leder">📊 IT-leder</span>
</div>

Det vurderes, at den samlede platform skal gennemgå en systematisk validering af alle resiliency-mekanismer før den første tenant onboardes. Denne fase er kritisk for at sikre, at designbeslutningerne også fungerer i praksis.

- Komplet site-failover testes ved kontrolleret nedlukning af et primært site med dokumentering af faktisk RPO, RTO og servicekapacitet på det tilbageværende site.

- Witness-site-funktionalitet valideres ved simulering af split-brain scenarier med verifikation af automatiseret quorum-beslutning.

- Compute-failover testes ved kontrolleret tab af individuelle noder og verifikation af automatisk workload-redistribution uden servicepåvirkning.

- Backup- og gendannelsestests gennemføres for alle kritikalitetsklasser med dokumenterede RTO'er og verifikation af dataintegritet.

- Penetrationstest og compliance-scanning gennemføres mod alle sikkerhedskomponenter, og resultater dokumenteres med korrigerende handlingsplaner.
