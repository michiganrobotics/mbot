---
layout: single
title: MBot Classic Wiring Guide
last_modified_at: 2024-11-19
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

1. **(Optional)** Plug the 2-pin header into the control board. This step is in beta for the automatic firmawre flash method (see [link](/docs/setup/firmware/#automatic-boot-mode)). You'll get more details about this during the firmware flashing step, so it's up to you whether to plug it in now or skip it for now.

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

- "Y" Shape Power Cable: Connect one barrel plug to the control board and the other to the battery. This powers the control board.
- USB-C Cable: Plug the Type A end into the battery and the Type C end into the power supply slot on the side of the Raspberry Pi 5. This connection powers the Raspberry Pi.

    <a class="image-link" href="https://cdn.shopify.com/s/files/1/0254/1191/1743/files/5047-5048_description-raspberry-pi-5-features.jpg?v=1695822743">
    <img src="https://cdn.shopify.com/s/files/1/0254/1191/1743/files/5047-5048_description-raspberry-pi-5-features.jpg?v=1695822743" alt="" style="max-width:400px;"/>
    </a>
- USB-C Cable: Plug the Type A end into one of the Raspberry Pi's USB ports and the Type C end into the PICO on the bottom board. This connection enables communication between the Raspberry Pi and the Robotics Control Board.
- Lidar's USB: Connect the Lidar's USB cable to one of the Raspberry Pi's USB ports.

The final result should look like this:

<a class="image-link" href="/assets/images/hardware/classic/assembly/wiring/2-final-wiring1.png">
    <img src="/assets/images/hardware/classic/assembly/wiring/2-final-wiring1.png" alt="" style="max-width:400px;"/>
</a>


Now you have a complete version of MBot. You are ready to set up the software and make the robot move!

[**Previous Step:** Top Plate](/docs/hardware/classic/assembly/mbot-classic-top-plate){: .btn .btn--inverse .align-left}
[**Next Step:** Software Setup](/docs/setup/){: .btn .btn--inverse .align-right}

