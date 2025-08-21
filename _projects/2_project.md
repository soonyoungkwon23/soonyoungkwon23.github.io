---
layout: page
title: Hybrid-Powered Go-Kart - Mudd Automotive Club
description: A hybrid drivetrain go-kart integrating IC and electric motor power
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

The **Hybrid-Powered Go-Kart Project** aims to design, fabricate, and integrate a **hybrid powertrain system** combining a **Yamaha SRX 440 ICE** with **four 12V electric motors** under a **parallel hybrid architecture**. The goal is a go-kart capable of **combined power delivery** and **regenerative braking**.

This project emphasizes **mechanical design, hybrid control integration, and precision fabrication**, blending advanced CAD modeling with hands-on machining.

---

## Problem Statement

The challenges for this project are:

- Integrating **two distinct drivetrain systems** (IC engine + electric motors)
- Achieving **reliable regenerative braking**
- Designing a **lightweight yet strong chassis**
- Ensuring **precision component mounting** for drivetrain alignment and safety

Design objectives:

1. **Hybrid Integration** – reliable transition between combustion and electric modes
2. **Performance** – maximize torque and speed while ensuring safety
3. **Strength-to-Weight** – use advanced materials and strategic chassis design for durability

---

## Design Process

1. **CAD Development:** Modeled chassis and components in **SolidWorks**, including assembly simulations and interference checks  
2. **Structural Design:** Optimized chassis geometry for load paths, rollover protection, and driver safety  
3. **Fabrication:** Applied **TIG welding** of 4130 chromoly steel tubing to balance strength and weight  
4. **Precision Machining:** CNC-machined **6061 aluminum brackets** for secure mounting of motors, batteries, and drivetrain components  
5. **Control Integration:** Developing hybrid drivetrain logic for **power blending and regenerative braking**  

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/gokart-cad1.png' | relative_url }}" alt="SolidWorks chassis model" class="img-fluid rounded z-depth-1" style="height:250px; object-fit:contain;">
  </div>
  <div class="col-sm mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/gokart-cad2.png' | relative_url }}" alt="Hybrid drivetrain assembly" class="img-fluid rounded z-depth-1" style="height:250px; object-fit:contain;">
  </div>
</div>
<div class="caption text-center">
  SolidWorks CAD models of the hybrid chassis and drivetrain integration.
</div>

---

## Prototyping & Fabrication

- **Chassis:** TIG welded 4130 chromoly tubing, tested for torsional stiffness and crash resistance  
- **Brackets & Mounts:** CNC-machined 6061 aluminum to ensure tight tolerances for motors and drivetrain alignment  
- **Hybrid Drivetrain:** Integration of Yamaha SRX 440 IC engine with electric motors through a shared drive system  
- **Controls:** In-progress hybrid logic development for **power blending and regenerative braking**  
- **Testing:** Early rolling tests and subsystem trials underway  

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <img src="{{ '/assets/img/gokart-welding.jpg' | absolute_url }}" alt="TIG welding 4130 chromoly chassis" class="img-fluid rounded z-depth-1" style="height:300px; object-fit:cover; width:100%;">
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <img src="{{ '/assets/img/gokart-cnc.jpg' | absolute_url }}" alt="CNC-machined aluminum 6061 brackets" class="img-fluid rounded z-depth-1" style="height:300px; object-fit:cover; width:100%;">
  </div>
</div>
<div class="caption">
  Fabrication methods: TIG welding of chromoly steel chassis and CNC machining of precision aluminum brackets.
</div>

---

## Current Outcome

- Completed **chassis fabrication** with TIG-welded chromoly steel  
- CNC-machined **motor and drivetrain brackets** with tight tolerances  
- Installed **hybrid drivetrain components** with preliminary integration completed  
- In-progress development of **control logic** for power blending and regenerative braking  
- Early **rolling and brake tests** underway to validate chassis and subsystem performance  

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="{{ '/assets/img/gokart-final.jpg' | absolute_url }}" alt="Hybrid go-kart prototype in current build stage" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption">
  Current hybrid go-kart prototype build progress.
</div>

---

## Lessons Learned

Through this project, I have gained experience in:

- **Chromoly TIG welding** for chassis fabrication  
- **CNC machining and tolerance control** for high-precision mounts  
- **Hybrid drivetrain integration** and early regenerative braking testing  
- Applying **SolidWorks for complex assemblies** and design-for-manufacture principles  

Future work will focus on refining **battery management**, optimizing **weight distribution**, and finalizing **hybrid control algorithms** for smooth performance.

---

## Acknowledgements

This project is made possible with the support of:

- **Mudd Automotive Club Members**  
- **Mentors and Faculty Advisors** who provide fabrication and engineering guidance
