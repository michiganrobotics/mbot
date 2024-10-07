---
layout: single
title: MBot Classic Wiring Guide
last_modified_at: 2024-09-11 19:22:48 -0500
author: shaw
toc: true
---

This guide is for Differential Drive MBot Classic final wiring assembly. At the end of this guide, you should have a fully assembled mbot that looks like this:
<a class="image-link" href="/assets/images/hardware/classic/assembly/wiring/0-mbot.jpg">
    <img src="/assets/images/hardware/classic/assembly/wiring/0-mbot.jpg" alt="" style="height:400px;"/>
</a>

## 1. Assemble 3 plates

| Components     | #         |
|:-------------|:---- -------|
|  3-heads jumper wire cable |1|
|  4-40 thumb screw 3/8” |8|

1. Plug the 2-pin header into the control board.

    <a class="image-link" href="/assets/images/hardware/classic/assembly/wiring/1-final-assemble1.jpg">
        <img src="/assets/images/hardware/classic/assembly/wiring/1-final-assemble1.jpg" alt="" style="max-width:400px;"/>
    </a>
    - White cable to RUN
    - Green cable to BTLD

    Next, pull the cable out through the hole on the left side of the middle plate. Then, use the thumb screws to attach the middle plate to the bottom plate and secure the screws to the standoffs.

    <a class="image-link" href="/assets/images/hardware/classic/assembly/wiring/1-final-assemble2.png">
        <img src="/assets/images/hardware/classic/assembly/wiring/1-final-assemble2.png" alt="" style="max-width:400px;"/>
    </a>

2. Plug the 6-pin connector into the Raspberry Pi pins.

    According to the image below, the red cable should be connected to Pin 1 (the number inside the circle, not the number marked on the side), and the white cable should be connected to Pin 11.
    <div class="popup-gallery">
    <a href="https://pinout-ai.s3.eu-west-2.amazonaws.com/raspberry-pi-5-gpio-pinout-diagram.webp" title=""><img src="https://pinout-ai.s3.eu-west-2.amazonaws.com/raspberry-pi-5-gpio-pinout-diagram.webp" width="800" height="200"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/3-jumper-wires2.jpg" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/3-jumper-wires2.jpg" width="350"></a>
    <a href="/assets/images/hardware/classic/assembly/wiring/1-final-assemble3.png" title=""><img src="/assets/images/hardware/classic/assembly/wiring/1-final-assemble3.png" width="350"></a>
    </div>

3. Connect the 4PIN connector to the OLED, ensuring that the pins align with the marked positions.

    <a class="image-link" href="/assets/images/hardware/classic/assembly/wiring/1-final-assemble4.png">
        <img src="/assets/images/hardware/classic/assembly/wiring/1-final-assemble4.png" alt="" style="max-width:350px;"/>
    </a>

    Then, use the thumb screws to attach the top plate to the middle plate and secure the screws to the standoffs.

## 2. Final Wiring

| Components     | #         |
|:-------------|:---- -------|
|  12V Power Bank |1|
|  DC power “Y” cable with rounded ends |1|
|  USB-C Cable |2|

- "Y" Cable: Connects the power bank to the Robotics Control Board, providing power to the control board.
- USB-C Cable: Connects the power bank to the Raspberry Pi, supplying power to the Pi.
- USB-C Cable: Connects the Robotics Control Board to the Raspberry Pi for communication between the Pi and the control board.
- Lidar's USB: Connects to the Raspberry Pi's USB port.

Raspberry Pi 5 power supply slot is on the side:

<a class="image-link" href="https://cdn.shopify.com/s/files/1/0254/1191/1743/files/5047-5048_description-raspberry-pi-5-features.jpg?v=1695822743">
    <img src="https://cdn.shopify.com/s/files/1/0254/1191/1743/files/5047-5048_description-raspberry-pi-5-features.jpg?v=1695822743" alt="" style="max-width:400px;"/>
</a>


The final result should look like this:

<a class="image-link" href="/assets/images/hardware/classic/assembly/wiring/2-final-wiring1.png">
    <img src="/assets/images/hardware/classic/assembly/wiring/2-final-wiring1.png" alt="" style="max-width:400px;"/>
</a>


Now you have a complete version of MBot. You are ready to set up the software and make the robot move!

[**Previous Step:** Top Plate](/docs/hardware/classic/assembly/mbot-classic-top-plate){: .btn .btn--inverse .align-left}
[**Next Step:** Software Setup](/docs/setup/){: .btn .btn--inverse .align-right}
