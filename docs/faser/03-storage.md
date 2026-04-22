---
title: "Fase 3: Storage-tiering, replikering & backup"
phase: 3
topic: "infrastruktur"
personas: ["arkitekt", "driftsleder"]
tags: ["storage", "tiering", "replikering", "backup", "RPO", "deduplikering", "immutable"]
priority: "kritisk-sti"
dependencies: [2]
---

# Fase 3: Storage-tiering, replikering & backup

<div class="phase-meta">
  <span><strong>Sti:</strong> <span class="critical-path-badge">Kritisk sti</span></span>
  <span><strong>Afhænger af:</strong> Fase 2 (HCI-platform)</span>
  <span><strong>Blokerer:</strong> Fase 9</span>
</div>

<div class="persona-badges">
  <span class="persona-badge arkitekt">🏗️ Arkitekt</span>
  <span class="persona-badge driftsleder">⚙️ Driftsleder</span>
</div>

Det vurderes, at en differentieret storage-strategi er afgørende for at balancere performance, resiliency og omkostningseffektivitet på tværs af kommunernes vidt forskellige workload-profiler.

- En tiering-model med mindst to niveauer (høj-performance og kapacitet) defineres, og placering sker automatisk baseret på workloadens kritikalitetsklasse.

- Synkron replikering konfigureres for Tier 1-data (RPO = 0) mellem de to primære sites; asynkron replikering for Tier 2-3 data med differentierede RPO'er.

- Deduplikering og komprimering aktiveres som standard på alle storage-lag for at maksimere kapacitetsudnyttelsen.

- Backup-strategi implementeres med differentierede politikker pr. kritikalitetsklasse, immutable kopier og opbevaring på mindst to geografisk adskilte lokationer.

- Automatiseret gendannelsesverifikation konfigureres, så backup-integriteten valideres løbende uden manuel intervention.
