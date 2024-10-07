---
layout: single
title: MBot Classic Top Plate Guide
last_modified_at: 2024-09-11 19:22:48 -0500
author: shaw
toc: true
---

This guide is for Differential Drive MBot Classic top plate assembly. At the end of this guide, you should have a fully assembled top plate that looks like this:

<a class="image-link" href="/assets/images/hardware/classic/assembly/topPlate/0-top-finish.jpg">
    <img src="/assets/images/hardware/classic/assembly/topPlate/0-top-finish.jpg" alt="" style="max-width:500px;"/>
</a>

## 1. RPLidar
1. Attach RPLidar USB Interface to top plate

    | Components     | #         |
    |:-------------|:---- -------|
    | M2 x 8mm Screws        |2|
    | M2 Nuts     |2|
    | RPLidar kit    |2|

    Begin by passing the cable through one of the square holes on the board, and plug the connector into the USB Interface. Secure the USB Interface to the plate using two sets of M2 screws and nuts. The side the USB Interface attached, is the under side.

    <div class="popup-gallery">
        <a href="/assets/images/hardware/classic/assembly/topPlate/1-lidar-usb1.jpg" title="Attach USB Interface to plate 2"><img src="/assets/images/hardware/classic/assembly/topPlate/1-lidar-usb1.jpg" width="200" height="200"></a>
        <a href="/assets/images/hardware/classic/assembly/topPlate/1-lidar-usb2.jpg" title="Attach USB Interface to plate 3"><img src="/assets/images/hardware/classic/assembly/topPlate/1-lidar-usb2.jpg" width="200" height="200"></a>
        <a href="/assets/images/hardware/classic/assembly/topPlate/1-lidar-usb3.jpg" title="Attach USB Interface to plate 4"><img src="/assets/images/hardware/classic/assembly/topPlate/1-lidar-usb3.jpg" width="380" ></a>
    </div>

2. Attach the RPLidar to the upper side of the plate

    | Components     | #         |
    |:-------------|:---- -------|
    | M2.5 x 8mm Screws     |4|

    <div class="popup-gallery">
        <a href="/assets/images/hardware/classic/assembly/topPlate/1-attach-lidar1.jpg" title="Attach lidar to plate 1"><img src="/assets/images/hardware/classic/assembly/topPlate/1-attach-lidar1.jpg" width="200" height="200"></a>
        <a href="/assets/images/hardware/classic/assembly/topPlate/1-attach-lidar2.jpg" title="Attach lidar to plate 2"><img src="/assets/images/hardware/classic/assembly/topPlate/1-attach-lidar2.jpg" width="200" height="200"></a>
    </div>

3. Plug in the USB cord to the RPLidar USB Interface, and fastening it with a zip tie. Cut the extra length off.

    | Components     | #         |
    |:-------------|:---- -------|
    | 9" USB Micro Cable  |1|
    | zip tie   |1|

    <div class="popup-gallery">
        <a href="/assets/images/hardware/classic/assembly/topPlate/1-plug-usb1.jpg" title="Plug in USB 1"><img src="/assets/images/hardware/classic/assembly/topPlate/1-plug-usb1.jpg" width="225" height="225"></a>
        <a href="/assets/images/hardware/classic/assembly/topPlate/1-plug-usb2.jpg" title="Plug in USB 2"><img src="/assets/images/hardware/classic/assembly/topPlate/1-plug-usb2.jpg" width="200" height="200"></a>
    </div>

## 2. OLED Screen

| Components     | #         |
|:-------------|:---- -------|
| OLED screen |1|
| OLED mount  |1|
| M2 x 8mm screws  |4|
| M2.5 x 8mm screws |2|
| M2.5 threaded inserts |2|

Note that the OLED mount and the camera mount are both white and look similar, but they are different!

1. Insert the threaded inserts into the OLED mount, you need soldering iron for this to heat up the inserts.
    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/topPlate/2-oled-mount1.jpg" title="Inserts in mount 1"><img src="/assets/images/hardware/classic/assembly/topPlate/2-oled-mount1.jpg" width="200" height="225"></a>
    <a href="/assets/images/hardware/classic/assembly/topPlate/2-oled-mount2.jpg" title="Inserts in mount 2"><img src="/assets/images/hardware/classic/assembly/topPlate/2-oled-mount2.jpg" width="200" height="200"></a>
    </div>
2. Secure the OLED screen to the mount using four M2 x 8mm screws.
3. Attach the mount to the right side of the robot using M2.5 x 8mm screws.
    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/topPlate/2-oled1.jpg" title="Attach OLED 1"><img src="/assets/images/hardware/classic/assembly/topPlate/2-oled1.jpg" width="200" height="225"></a>
    <a href="/assets/images/hardware/classic/assembly/topPlate/2-oled2.jpg" title="Attach OLED 2"><img src="/assets/images/hardware/classic/assembly/topPlate/2-oled2.jpg" width="190" height="200"></a>
    </div>


## 3. Assemble 3-heads jumper wire cable

| Components     | #         |
|:-------------|:-----------|
| jumper wires (Black/Red/Yellow/Blue/Green/White)   |6|
| Crimp connector housings (3/4/6 pins)   |3|

You will need to build the OLED/Bootloader cable assembly as shown. This cable has three heads, which plug into the following:
- Raspberry Pi header (6-pin header)
- OLED module (4-pin header)
- Control board (3-pin header)

This cable allows communication with the OLED and controls the run and bootload modes on the control board.

Assemble the 3-heads wire as depicted in the image. **Color and order matters!** Your assembled wire should look exactly like the image indicated.

<div class="popup-gallery">
<a href="/assets/images/hardware/classic/assembly/middlePlate/3-jumper-wires1.jpg" title="Assemble the jumper wires 1"><img src="/assets/images/hardware/classic/assembly/middlePlate/3-jumper-wires1.jpg" width="200" height="200"></a>
<a href="/assets/images/hardware/classic/assembly/middlePlate/3-jumper-wires2.jpg" title="Assemble the jumper wires 2"><img src="/assets/images/hardware/classic/assembly/middlePlate/3-jumper-wires2.jpg" width="400" height="200"></a>
</div>

After assembling the wires, do not plug them in yet.

Now, let's move on to the [wiring section](/docs/hardware/classic/assembly/mbot-wiring).

[**Previous Step:** Middle Plate](/docs/hardware/classic/assembly/mbot-classic-middle-plate){: .btn .btn--inverse .align-left}
[**Next Step:** Wiring](/docs/hardware/classic/assembly/mbot-wiring){: .btn .btn--inverse .align-right}
