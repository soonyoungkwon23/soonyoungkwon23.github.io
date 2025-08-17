---
layout: page
title: Universal Antenna Remounting System E004
description: High-precision GPS antenna mount for satellite and drone tracking
img: assets/img/e4-hero.jpg
importance: 1
category: Engineering Projects @ HMC
related_publications: false
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/e4-hero.jpg' | relative_url }}"
         alt="E4 Hero - Full System"
         class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption text-center">
  Final prototype of the Universal Antenna Remounting System.
</div>

## Overview

Our client needed a reliable way to **attach multiple antennas onto a motorized telescope mount**, specifically, parabolic and arrow antennas with the AZ Mount Pro by iOptron, for tracking satellites and drones. Existing solutions lacked modularity, precision, and field usability.  

The **Universal Antenna Remounting System** enables **quick-swapping of antennas** with a robust, modular, and adaptable attachment system. Designed for durability and ease of use, it integrates multiple prototype components into one solution.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/e4-mount.jpg' | relative_url }}"
         alt="AZ Mount Pro"
         class="img-fluid rounded z-depth-1"
         style="height:200px; object-fit:contain;">
  </div>
  <div class="col-sm mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/e4-antenna.jpg' | relative_url }}"
         alt="Arrow-head antenna"
         class="img-fluid rounded z-depth-1"
         style="height:200px; object-fit:contain;">
  </div>
</div>
<div class="caption text-center">
  System integration: Telescope mount (left) and the arrow-head antenna module (right).
</div>

---

## Problem Statement

The client’s challenge:  
- No proper method to mount antennas onto the telescope system  
- Needed **quick interchangeability** for “in the field” research  
- Required compatibility for two main antennas, with modularity for future antennas  

The design objectives:  
1. **Sturdiness** – withstand handling and field use  
2. **Ease of attachment** – antennas must be swappable within minutes  
3. **Adaptability** – scalable to future antenna designs  

---

## Design Process

1. Sketched and iterated multiple geometries for modularity and balance  
2. Created **SolidWorks CAD models** for each prototype component  
3. Integrated **radio-transparent materials** (CFRP, nylon, PVC) to avoid interference  
4. Machined aluminum parts for high-stress interfaces (telescope mount sleeve)  
5. Designed evaluation protocols with **objective scoring metrics** for sturdiness, compactness, usability, and adaptability  

<!--
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <img src="{{ '/assets/img/e4-cad1.jpg' | relative_url }}" alt="CAD model - joint design" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <img src="{{ '/assets/img/e4-cad2.jpg' | relative_url }}" alt="CAD model - telescope mount sleeve" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption">
  SolidWorks CAD models showing modular joints and telescope mount sleeve.
</div>
-->

---

## Prototyping

- **Antenna-to-PVC Joint:** Carbon fiber 3D printed for strength and lightness; nylon bolts for quick-swapping and antenna rotation  
- **Parabolic Antenna Attachment:** CFRP-printed adapter panel, slim design for compact storage, bolted connections for detachability  
- **Telescope Mount Piece & Sleeve:** CNC aluminum with threaded rods, counterbalance support, and engraved branding  
- **PVC Beam Joint:** Chemically bonded elbow + fasteners for structural stability  

<!--
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <img src="{{ '/assets/img/e4-cfrp.jpg' | relative_url }}" alt="CFRP 3D printed joint" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <img src="{{ '/assets/img/e4-cnc.jpg' | relative_url }}" alt="CNC aluminum machining" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption">
  Prototyping methods: CFRP 3D printing for lightweight antenna joints; CNC machining for telescope mount sleeve.
</div>
-->

---

## Evaluation

Each prototype was evaluated against objectives using structured tests:  

- **Sturdiness:** Intended-use cycles, drop tests, and deflection measurements  
- **Compactness:** Measured volume/height; evaluated storage feasibility  
- **Ease of Use:** Timed attachment/detachment trials with E4 peers  
- **Signal Integrity:** Confirmed no interfering materials in antenna read zone  
- **Adaptability:** Interview-based assessment of ease for future antenna integration  
- **Rotation:** Verified orientation adjustments for antenna polarization  

<!--
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    <img src="{{ '/assets/img/e4-test1.jpg' | relative_url }}" alt="Sturdiness test setup" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    <img src="{{ '/assets/img/e4-test2.jpg' | relative_url }}" alt="Timed attachment trials" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption">
  Testing setup for sturdiness and usability trials.
</div>
-->

---

## Final Outcome

- Delivered a **field-ready modular antenna mounting system**  
- Enabled **fast, reliable antenna swaps** on a motorized telescope mount  
- **Reduced setup time** while maintaining sturdiness and signal clarity  
- Designed with **extensibility** for future antennas  
- Awarded the **Davies Engineering Prize** by The Engineering Department

---

## Reflections & Lessons Learned

Through this project, I gained experience in:  
- **Carbon fiber 3D printing and CNC aluminum machining**  
- Designing for **GD&T tolerances, modularity, and future adaptability**  
- Creating structured **evaluation protocols** for engineering prototypes  

If developed further, I would refine the **quick-release mechanisms** and add **automated alignment feedback** to make field deployment even faster and more intuitive.
