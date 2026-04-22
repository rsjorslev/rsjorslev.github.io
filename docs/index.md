---
title: Procesguide — Redundante datacentre med HCI-platform
---

# Etablering af redundante datacentre med HCI-baseret platform

**Overordnet procesguide for den fælles kommunale infrastruktur**

## Sammenfatning

Dette dokument beskriver de centrale faser og principper for etablering af den logiske infrastruktur i redundante datacentre med en hyperkonvergent infrastruktur (HCI) som fundament for VM-baserede workloads. Processen er designet til at understøtte den kommende konsolidering af de 98 danske kommuners IT-infrastruktur ind i 5 fælles driftsenheder.

Det forventes, at de deltagende kommuner kommer fra vidt forskellige teknologiske udgangspunkter. Denne guide er derfor formuleret på et principniveau og er bevidst leverandør- og platformuafhængig. Formålet er at sikre, at de 5 driftsenheder etablerer en ensartet, redundant og skalerbar platform, der kan håndtere multi-tenant-drift med den driftsstabilitet, sikkerhed og automatiseringsgrad, som scoringsmodellen i konsolideringsparathedsanalysen beskriver som målbilledet (Niveau A).

Det forudsættes, at alle fysiske aspekter af datacenter-etableringen — herunder site-valg, strømforsyning, køling, fysisk sikkerhed og konnektivitet — er adresseret og på plads. Denne guide fokuserer på den logiske platform: fra netværksarkitektur og HCI-fundament til idriftsættelse af den første tenant, og er struktureret i 10 faser med tilhørende leverancer og opmærksomhedspunkter.

## Parallelle implementeringsfaser

Nedenstående oversigt viser, hvordan de 10 faser kan paralleliseres. Den kritiske sti (Fase 1 → 2 → 3 → 9 → 10) er sekventiel, mens faserne for sikkerhed, standarder, governance og automatisering kan påbegyndes fra dag ét og køre parallelt med infrastrukturetableringen.

![Parallelisering af de 10 faser](/parallel_faser.png)

**Kritisk sti:** Fase 1 → 2 → 3 → 9 → 10 (infrastruktur-sekvensen). Faserne 4, 5, 6, 7 og 8 kan køre parallelt med den kritiske sti og skal blot være afsluttet inden Fase 9 påbegyndes.

## Faseoversigt

| Fase | Område | Sti | Personas |
|------|--------|-----|----------|
| [Fase 1](/faser/01-netvaerk) | Netværksarkitektur & backbone | 🔴 Kritisk | Arkitekt, Driftsleder |
| [Fase 2](/faser/02-hci) | HCI-platform — compute & storage | 🔴 Kritisk | Arkitekt, Driftsleder |
| [Fase 3](/faser/03-storage) | Storage-tiering, replikering & backup | 🔴 Kritisk | Arkitekt, Driftsleder |
| [Fase 4](/faser/04-mikrosegmentering) | Mikrosegmentering & sikkerhed | 🔵 Parallel | Arkitekt, Sikkerhed |
| [Fase 5](/faser/05-iam) | Identitets- & adgangsstyring | 🔵 Parallel | Sikkerhed, IT-leder |
| [Fase 6](/faser/06-iac) | IaC & automatisering | 🔵 Parallel | Arkitekt, Driftsleder |
| [Fase 7](/faser/07-standardisering) | Standardisering, labelling & CMDB | 🔵 Parallel | Driftsleder, IT-leder |
| [Fase 8](/faser/08-governance) | Governance & SLA-framework | 🔵 Parallel | IT-leder |
| [Fase 9](/faser/09-dr-test) | DR-test, validering & hærdning | 🔴 Kritisk | Alle |
| [Fase 10](/faser/10-onboarding) | Onboarding af første tenant | 🔴 Kritisk | Alle |
