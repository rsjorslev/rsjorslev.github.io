---
title: "Fase 2: HCI-platform — compute & storage fundament"
phase: 2
topic: "infrastruktur"
personas: ["arkitekt", "driftsleder"]
tags: ["HCI", "compute", "storage", "hyperkonvergent", "klynge", "skalering"]
priority: "kritisk-sti"
dependencies: [1]
---

# Fase 2: HCI-platform — compute & storage fundament

<div class="phase-meta">
  <span><strong>Sti:</strong> <span class="critical-path-badge">Kritisk sti</span></span>
  <span><strong>Afhænger af:</strong> Fase 1 (netværk)</span>
  <span><strong>Blokerer:</strong> Fase 3</span>
</div>

<div class="persona-badges">
  <span class="persona-badge arkitekt">🏗️ Arkitekt</span>
  <span class="persona-badge driftsleder">⚙️ Driftsleder</span>
</div>

Det forventes, at den hyperkonvergente platform udgør det samlede compute- og storage-fundament, hvor processorkraft, hukommelse og lagringskapacitet leveres som en integreret, skalerbar enhed.

- HCI-noder deployed i klynger på begge primære sites med identisk eller ækvivalent kapacitet, så hvert site kan håndtere den fulde workload ved failover (N-1 site-kapacitet).

- Storage-laget konfigureres med den påkrævede redundans (typisk RF2 eller RF3 / erasure coding) for at sikre dataintegritet ved tab af individuelle diske eller noder.

- Compute-ressourcer organiseres i ressourcepools med definerede kapacitetsgrænser pr. tenant, håndhævet via policies for at forhindre ressource-overforbrug.

- Platformen designes til horisontal skalering: tilføjelse af nye noder skal være en standardiseret, ikke-disruptiv operation, der øger både compute og storage proportionelt.

- Hypervisor og HCI-management konfigureres med høj tilgængelighed, så tab af management-komponenter ikke påvirker den løbende drift af workloads.
