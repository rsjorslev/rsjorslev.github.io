---
title: "Fase 4: Mikrosegmentering & sikkerhedsarkitektur"
phase: 4
topic: "sikkerhed"
personas: ["arkitekt", "sikkerhed"]
tags: ["mikrosegmentering", "firewall", "deny-by-default", "CIS", "logning", "hændelsesrespons"]
priority: "parallel"
dependencies: [1]
---

# Fase 4: Mikrosegmentering & sikkerhedsarkitektur

<div class="phase-meta">
  <span><strong>Sti:</strong> <span class="parallel-badge">Parallel</span></span>
  <span><strong>Afhænger af:</strong> Fase 1 (netværk)</span>
  <span><strong>Skal være klar inden:</strong> Fase 9</span>
</div>

<div class="persona-badges">
  <span class="persona-badge arkitekt">🏗️ Arkitekt</span>
  <span class="persona-badge sikkerhed">🛡️ Sikkerhedsansvarlig</span>
</div>

Det forventes, at sikkerhedsarkitekturen implementeres som en integreret del af platformdesignet — ikke som et efterfølgende lag. Mikrosegmentering er fundamentet for tenant-isolation i en multi-tenant-platform.

- Dedikerede netværkszoner pr. tenant med deny-by-default firewall-policies implementeres som standard; al trafik mellem tenants nægtes medmindre eksplicit godkendt.

- Mikrosegmentering på workload-niveau konfigureres, så lateral bevægelse mellem systemer — selv inden for samme tenant — kræver eksplicit policy-godkendelse.

- Hærdningsstandarder baseret på anerkendte frameworks (f.eks. CIS Benchmarks) defineres for alle systemtyper og håndhæves via automatiseret compliance-scanning.

- Centraliseret logning og overvågning med korrelering på tværs af alle infrastrukturlag konfigureres med tenant-specifik filtrering og adgangskontrol.

- Hændelsesresponsplan med specifikke procedurer for multi-tenant-scenarier dokumenteres og testes før første tenant onboardes.
