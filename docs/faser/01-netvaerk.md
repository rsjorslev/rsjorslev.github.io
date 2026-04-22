---
title: "Fase 1: Netværksarkitektur & backbone"
phase: 1
topic: "infrastruktur"
personas: ["arkitekt", "driftsleder"]
tags: ["netværk", "spine-leaf", "QoS", "IPAM", "multi-tenancy"]
priority: "kritisk-sti"
dependencies: []
---

# Fase 1: Netværksarkitektur & backbone

<div class="phase-meta">
  <span><strong>Sti:</strong> <span class="critical-path-badge">Kritisk sti</span></span>
  <span><strong>Afhænger af:</strong> Ingen (startpunkt)</span>
  <span><strong>Blokerer:</strong> Fase 2, 4</span>
</div>

<div class="persona-badges">
  <span class="persona-badge arkitekt">🏗️ Arkitekt</span>
  <span class="persona-badge driftsleder">⚙️ Driftsleder</span>
</div>

Det vurderes, at netværksarkitekturen er rygraden i den fælles platform og skal designes til multi-tenancy, mikrosegmentering og automatisering fra første dag.

- Spine-leaf netværkstopologi (eller tilsvarende ikke-blokerende arkitektur) implementeres for at sikre forudsigelig, lav latency og høj båndbredde mellem alle noder i HCI-platformen.

- Dedikerede netværk for storage-replikering, vMotion/live migration, management og tenant-trafik separeres fysisk eller logisk for at eliminere trafikkonkurrence.

- Redundante forbindelser mellem sites (minimum to uafhængige ruter) dimensioneres til at håndtere fuld replikeringstrafik plus tenant-trafik ved site-failover.

- QoS-policies implementeres på alle inter-site forbindelser for at prioritere replikering og kritisk tenant-trafik.

- En skalerbar IP-adresseplan designes med forudallokerede subnets pr. tenant, miljøtype og funktion, understøttet af centraliseret IPAM.
