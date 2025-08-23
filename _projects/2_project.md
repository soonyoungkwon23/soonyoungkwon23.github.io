---
layout: page
title: Hybrid-Powered Go-Kart
description: A hybrid drivetrain go-kart integrating IC and electric motor
img: assets/img/gokart-hero.jpg
importance: 1
category: Engineering Projects @ HMC
related_publications: false
---

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="/assets/img/gokart-hero.jpg" title="Hybrid Go-Kart Hero Shot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption text-center">
  Hybrid-powered go-kart under development with the Mudd Automotive Club.
</div>

## Overview

The **Hybrid-Powered Go-Kart Project** aims to design, fabricate, and integrate a **parallel hybrid powertrain system** combining a **Yamaha SRX 440 internal combustion engine** with **four 12V electric motors**.  

The goal: **combined power delivery and regenerative braking** in a lightweight and safe high-performance chassis.

---

## Problem

The challenges for this project are:

- Integrating **two distinct drivetrain systems** (IC engine + electric motors)  
- Achieving **reliable regenerative braking**  
- Designing a **lightweight yet strong chassis**  
- Ensuring **reliable and precise manufacturing** for function and safety  

Design objectives:

1. **Hybrid Integration** – reliable transition between combustion and electric modes  
2. **Performance** – optimize torque and speed while ensuring safety  
3. **Strength-to-Weight** – use advanced materials and strategic chassis design for durability  

---

## Design Process

1. **Ideating:** Brainstormed core features and sketched chassis concepts  
2. **CAD Development:** Modeled chassis and components in **SolidWorks**, including simulations and detailed drawings  
3. **Structural Design:** Optimized chassis geometry for load paths, drivetrain housing, and driver safety  
4. **Fabrication:** Applied **MIG welding** of 4130 chromoly steel tubing for strength-to-weight balance  
5. **Precision Machining:** CNC-machined **6061 aluminum brackets** for secure mounting of motors, batteries, and drivetrain components  
6. **Control Integration:** Developing hybrid drivetrain logic for **power blending and regenerative braking**  

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/gokart-sketch.png' | relative_url }}" alt="Top-view sketch of go-kart" class="img-fluid rounded z-depth-1" style="height:250px; object-fit:contain;">
  </div>
  <div class="col-sm mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/gokart-cad.png' | relative_url }}" alt="SolidWorks chassis model" class="img-fluid rounded z-depth-1" style="height:250px; object-fit:contain;">
  </div>
</div>
<div class="caption text-center">
  Top-view sketch during the planning stage and SolidWorks CAD model of the chassis.
</div>

---

## Prototyping & Fabrication

- **Chassis:** MIG welded 4130 chromoly angle, designed for torsional stiffness and crash resistance  
- **Brackets & Mounts:** CNC-machined 6061 aluminum, ensuring tight tolerances for drivetrain alignment  
- **Hybrid Drivetrain:** Integration of Yamaha SRX 440 IC engine with electric motors in a **parallel hybrid system**, requiring custom clutch solutions  
- **Controls:** In-progress code development for motor and engine output control, plus regenerative braking  
- **Testing:** Early rolling and subsystem trials underway  

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <img src="{{ '/assets/img/gokart-cutting.jpg' | absolute_url }}" alt="Cutting 4130 chromoly for chassis" class="img-fluid rounded z-depth-1" style="height:300px; object-fit:cover; width:100%;">
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <img src="{{ '/assets/img/gokart-suspension.jpg' | absolute_url }}" alt="Rear-end suspension installation" class="img-fluid rounded z-depth-1" style="height:300px; object-fit:cover; width:100%;">
  </div>
</div>
<div class="caption">
  Fabrication methods: Cutting chromoly steel for chassis and complete rear-end suspension installation.
</div>

---

## Current Outcome

- **Completed chassis fabrication** using MIG-welded chromoly steel  
- Preparing **hybrid drivetrain components** for testing with preliminary integration completed  
- **Control logic development** underway for hybrid architecture and regenerative braking  
- Early **rolling and brake tests** in progress to validate subsystem performance  

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="{{ '/assets/img/gokart-logo.jpg' | absolute_url }}" alt="Logo of the Mudd Automotive Club" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption">
  Stay tuned for more updates from this project!
</div>

---

## Lessons Learned

Through this project, I have gained experience in:

- **MIG welding** for structural fabrication  
- **CNC machining and tolerance control** for high-precision parts  
- **Hybrid drivetrain integration** and early regenerative braking testing  
- Applying **SolidWorks** for complex assemblies and design-for-manufacture principles  

Future work will focus on:  

- Completing **drivetrain coupling + controls**  
- Full **battery and wiring integration**  
- Finalizing **hybrid control logic** (esp. regenerative braking)  
- Conducting **system-level tests**  
- Preparing **final documentation**  

---

## Acknowledgements

This project is made possible with the support of:

- **Mudd Automotive Club Members**
