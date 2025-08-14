---
layout: page
title: Universal Antenna Remounting System
description: High-precision GPS antenna mount for satellite and drone tracking
img: assets/img/e4-hero.jpg
importance: 1
category: Engineering Projects @ HMC
related_publications: false
---

## Overview

GPS tracking is only as good as the mount it rests on — so I built one that leaves no room for “close enough.”  
The **Universal Antenna Remounting System** integrates seamlessly with a motorized telescope mount and achieves **±0.1 mm positional accuracy** with reliable, repeatable alignment every time.

---

## Problem Statement

Existing mounts often fail to combine universality, durability, and high-precision re-alignment.  
The common problems:

- Only fitting specific antenna models  
- Time-consuming, inconsistent repositioning  
- Mechanical drift that undermines GPS accuracy  

The goal: design a **modular, lightweight, and robust** system that works across multiple antenna types while delivering consistent, precision alignment.

---

## Design Requirements

- **Precision:** ±0.1 mm repeatability  
- **Universal Compatibility:** Adjustable to multiple antenna form factors  
- **Lightweight & Strong:** CFRP for weight savings, CNC aluminum for high strength  
- **GD&T Compliance:** Ensured consistent manufacturing and assembly tolerances

---

## Design & Development Process

- Sketched and evaluated geometries for stiffness and stability  
- Created **SolidWorks CAD models** with modular, quick-disassembly assemblies  
- Applied **GD&T tolerancing** to critical alignment surfaces  
- Performed **FEA analysis** to confirm rigidity and reduce vibration effects

<!--
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/e4-cad1.jpg" title="CAD model - front view" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/e4-cad2.jpg" title="CAD model - exploded view" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/e4-fea.jpg" title="FEA analysis results" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  CAD renders and FEA results showing structural performance and assembly design.
</div>
-->

---

## Prototyping & Fabrication

- **CFRP 3D printing** for lightweight antenna brackets  
- **CNC machining** of aluminum components for durability  
- Integrated quick-release fasteners for faster field assembly

<!--
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/e4-cfrp.jpg" title="CFRP part printing" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/e4-cnc.jpg" title="CNC machining process" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  CFRP for lightweight performance; CNC aluminum for structural reliability.
</div>
-->

---

## Testing & Validation

- Verified **±0.1 mm accuracy** using a coordinate measuring machine (CMM)  
- Conducted repeatability and environmental durability tests  
- Field trials showed improved GPS lock stability and consistent alignment

<!--
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/e4-test.jpg" title="CMM measurement process" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/e4-chart.jpg" title="Accuracy measurement chart" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  CMM verification confirmed repeatability within ±0.1 mm tolerance.
</div>
-->

---

## Project Management

- Maintained a **Gantt chart** for timelines and deliverables  
- Led **daily stand-up meetings** to coordinate progress  
- Documented decisions and changes for clear project tracking

---

## Final Outcome

- Integrated seamlessly with various GPS antenna models  
- Achieved consistent sub-millimeter alignment  
- Enhanced GPS tracking reliability for both satellite and drone applications

---

## Reflections & Lessons Learned

This project refined my skills in **precision mechanical design**, **GD&T implementation**, and **team coordination**.  
If expanded in the future, I would explore adding **automated alignment feedback** to further improve setup speed and accuracy.
