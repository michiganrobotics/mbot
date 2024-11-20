---
layout: single
title: MBot Omni Assembly Guide
author: abhishek
toc: true
last_modified_at: 2024-11-19
---

This guide will walk you through the steps needed to assemble the MBot Omni. The MBot Omni Bot is comprised of 3 sections: the [bottom plate](#bottom-assembly), [middle plate](#middle-assembly) and the [top plate](#top-assembly). Each of these plates are assembled separately first, before attaching them together to create the MBot Omni.

<a class="image-link" href="/assets/images/hardware/omni/omni.jpg">
  <img src="/assets/images/hardware/omni/omni.jpg" alt="MBot Omni Finish" style="max-width:500px;"/>
</a>

## Bottom Assembly

<div class="popup-gallery">
    <a href="/assets/images/hardware/omni/bottomPlate/bottom-finish1.jpg" title="Bottom Plate - Top"><img src="/assets/images/hardware/omni/bottomPlate/bottom-finish1.jpg" width="300" height="200"></a>
    <a href="/assets/images/hardware/omni/bottomPlate/bottom-finish2.jpg" title="Bottom Plate - Underneath"><img src="/assets/images/hardware/omni/bottomPlate/bottom-finish2.jpg" width="300" height="200"></a>
</div>

### Required Components
- 1 X Bottom Acrylic Plate
- 3 X 6V DC Motors with Encoders
- 3 X 3D Printed Motor Mounts
- [3 X Motor Cables](/docs/hardware/omni/omni-motor-cables)
- 1 X Robotics Control Board
- 4 X 2.5M-8mm Nylon Standoffs
- 3 X Omni-wheel Sets
- 4 X 1.5in Aluminum 4-40 Standoffs


### 1. Assemble the motors
1. Align unthreaded holes in motor vertically to the holes in the motor mount, with the motor connector on the left side of the mount (while facing motor shaft), and fasten two (2) M2.5x5 bolts to secure motor to mount. NOTE: connector GND pin should be at the top

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/2.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/2.jpg" alt="" style="max-width:500px;"/>
    </a>

2.  Connect motor harness to motor pins, ensuring the green wire is connected to the GND pin

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/3.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/3.jpg" alt="" style="max-width:500px;"/>
    </a>

3. Repeat Steps 1 & 2 to for the remaining 2 Motors & Motor Mounts.

### 2. Attach control board


1. Next we will assembly the Robotics Control Board.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/4.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/4.jpg" alt="" style="max-width:500px;"/>
    </a>

2. Fasten four (4) M2.5x5 bolts through PCB mounting holes and into M2.5x8 nylon standoffs.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/5.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/5.jpg" alt="" style="max-width:500px;"/>
    </a>

5. Insert either male end of the DC battery cable into PCB power receptacle, and micro-USB connector into PICO microcontroller.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/6.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/6.jpg" alt="" style="max-width:500px;"/>
    </a>

6. We will now attach the motors and the Robotics Control Board to the bottom acrylic plate.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/7.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/7.jpg" alt="" style="max-width:500px;"/>
    </a>

7. Fasten three (3) motor assemblies to the bottom-side of the yellow acrylic plate with four (4) M2.5x8 bolts each, threading into the heat-set inserts on the mounts. NOTE: the “front” or “forward” direction of the robot as shown.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/8.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/8.jpg" alt="" style="max-width:500px;"/>
    </a>

8. Fasten the PCB assembly to the top-side of the yellow acrylic plate with four (4) M2.5x8 bolts, threading into the nylon standoffs attached to the PCB

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/10.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/10.jpg" alt="" style="max-width:500px;"/>
    </a>

### 3. Attach the wheels
9. Slide the three (3) Omni wheel assemblies onto the motor shafts, leaving a nominal gap between the couplers and the motor mount screw heads, and fasten by tightening the two hex-head bolts on the coupler.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/11.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/11.jpg" alt="" style="max-width:500px;"/>
    </a>

10. Route the three (3) motor assembly harnesses through the cut-out in the acrylic plate, and connect to the pin-outs on the end of the PCB assembly. NOTE: each harness must be connected in the orientation shown: if looking at the PCB from the back of the robot, the red wires should be on the left, and white wires on the right.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/12.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/12.jpg" alt="" style="max-width:500px;"/>
    </a>

11. Note that the Male Headers on the Robotics Control Board are numbered M0, M1 & M2. The back Motor will be connected to M1. The right motor will be connected to M0 and the left motor will be connected to M2.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/12b.jpg">
    <img src="/assets/images/hardware/omni/bottomPlate/12b.jpg" alt="" style="max-width:500px;"/>
    </a>

### 4. Put on standoffs
Fasten four (4) #4-40x1.5” aluminum standoffs to the top side of the bottom plate using four (4) #4-40x0.5” bolts. Note that the two standoffs at the back are intentionally asymmetrical—it’s part of the design.

<div class="popup-gallery">
    <a href="/assets/images/hardware/omni/bottomPlate/bottom-finish1.jpg" title="Bottom Plate - Top"><img src="/assets/images/hardware/omni/bottomPlate/bottom-finish1.jpg" width="300" height="200"></a>
    <a href="/assets/images/hardware/omni/bottomPlate/bottom-finish2.jpg" title="Bottom Plate - Underneath"><img src="/assets/images/hardware/omni/bottomPlate/bottom-finish2.jpg" width="300" height="200"></a>
</div>


## Middle Assembly

<a class="image-link" href="/assets/images/hardware/omni/middlePlate/13.jpg">
<img src="/assets/images/hardware/omni/middlePlate/13.jpg" alt="" style="max-width:400px;"/>
</a>

### Required Components
- 1 X Middle Acrylic Plate
- 1 X Raspberry Pi 4B 4GB
- 1 X Raspberry Pi Heatsink Case
- 1 X Raspberry Pi 5MP Camera with Cable
- 1 X 3D Printed Camera Mount
- 4 X 1.5in Aluminum 4-40 Standoffs


### 1. Prepare the Pi 4

1. Carefully peel off the protective plastic on both sides of the thermal pads that come packaged with the heatsink case.  Stick them onto the three chips shown on the Raspberry Pi, or directly onto the heatsink.  There are 3 spots for the thermal pads and the thermal pads are precut to the required shape.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/1.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/1.jpg" alt="" style="max-width:300px;"/>
    </a>

2. Insert the camera data cable that comes packaged with the camera into the RPi’s camera connector.  You will pull up the black plastic clamping piece, and slide the cable in with the metal contacts pointing away from the black plastic clamping piece.  Ensure it is properly seated and push down on the black plastic clamping piece to keep in place.  You should just barely see the contacts above the top of the connector.

    <div class="popup-gallery">
        <a href="/assets/images/hardware/omni/middlePlate/2.jpg"><img src="/assets/images/hardware/omni/middlePlate/2.jpg" width="300" height="300"></a>
        <a href="/assets/images/hardware/omni/middlePlate/3.jpg"><img src="/assets/images/hardware/omni/middlePlate/3.jpg" width="300" height="300"></a>
    </div>

3. Thread the camera data cable through the corresponding slot on the heatsink case top.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/4.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/4.jpg" alt="" style="max-width:300px;"/>
    </a>

4. Screw the bottom of the heatsink case onto the RPi with two of the included M2.5 socket cap screws through holes on two opposite corners of the case.  We will screw longer screws into the other two holes to mount the case to the middle plate.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/5.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/5.jpg" alt="" style="max-width:300px;"/>
    </a>

5. With the black piece of the connector pulled out on the camera, insert the Raspberry Pi ribbon cable into the camera PCB as shown (metal contacts facing toward the camera side, blue side on the rear), and then close the black connector.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/6.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/6.jpg" alt="" style="max-width:400px;"/>
    </a>

### 2. Prepare the camera and camera mount
6. Fasten the camera PCB to the 3D-printed camera mount with two (2) M2x8 bolts threading directly into the 3D-printed material (only 2 necessary, diagonal orientation preferred)

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/7.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/7.jpg" alt="" style="max-width:400px;"/>
    </a>

7. Insert USB-C-to-USB cable into port on Raspberry Pi as shown

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/8.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/8.jpg" alt="" style="max-width:400px;"/>
    </a>

8. Next we are going to attach the Raspberry Pi & the Camera to the middle acrylic plate.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/9.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/9.jpg" alt="" style="max-width:400px;"/>
    </a>

### 3. Attach Pi4 and camera to the middle plate
9. Fasten Raspberry Pi/Camera assembly onto the top of the blue acrylic plate by threading two (2) M2.5x20 bolts from the bottom-side through to the corresponding holes on the Raspberry Pi case/heatsink.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/10.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/10.jpg" alt="" style="max-width:400px;"/>
    </a>

10. Fasten the camera mount to the top of the acrylic plate as shown, with a single M2.5x8 bolt from the bottom-side.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/11.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/11.jpg" alt="" style="max-width:500px;"/>
    </a>

11. Fasten four (4) #4-40x1.5” aluminum standoffs to the top-side of the blue acrylic plate with four (4) #4-40x0.5” bolts.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/12.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/12.jpg" alt="" style="max-width:500px;"/>
    </a>

## Top Assembly

<a class="image-link" href="/assets/images/hardware/omni/topPlate/top-finish.jpg">
<img src="/assets/images/hardware/omni/topPlate/top-finish.jpg" alt="" style="max-width:400px;"/>
</a>

### 1. Attach the Lidar to the top plate

| Components     | #         |
|:-------------|:---- -------|
| Bottom Plate |1|
| RPLidar A1 with USB Interface  |1|
| Zip tie |1|
| Micro USB Cable|1|

<div class="popup-gallery">
<a href="/assets/images/hardware/omni/topPlate/lidar1.jpg" title=""><img src="/assets/images/hardware/omni/topPlate/lidar1.jpg" width="300"></a>
<a href="/assets/images/hardware/omni/topPlate/lidar2.jpg" title=""><img src="/assets/images/hardware/omni/topPlate/lidar2.jpg" width="300"></a>
<a href="/assets/images/hardware/omni/topPlate/lidar3.jpg" title=""><img src="/assets/images/hardware/omni/topPlate/lidar3.jpg" width="300"></a>
<a href="/assets/images/hardware/omni/topPlate/lidar4.jpg" title=""><img src="/assets/images/hardware/omni/topPlate/lidar4.jpg" width="300"></a>
</div>

1. Fish the RPLidar USB Interface (the little green board with micro usb slot) through the opening in the top plate and align with holes shown in the image.
2. Using two M2 screws and nuts, screw the USB interface on the bottom side of the top plate.
3. Place the RPLidar on top of the top plate and align with the holes as shown below.  Using four 2.5MX8 mm screw, secure the RPLidar to the top plate.
4. Attach a MircoUSB cable to the USB interface. Using a Zip tie secure the USB cable to the top plate.


### 2. OLED Screen

| Components     | #         |
|:-------------|:---- -------|
| OLED screen |1|
| OLED mount  |1|
| M2 x 8mm screws  |4|
| M2.5 x 8mm screws |2|
| M2.5 threaded inserts |2|

1. Insert the threaded inserts into the OLED mount, you need soldering iron for this to heat up the inserts.
    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/topPlate/2-oled-mount1.jpg" title="Inserts in mount 1"><img src="/assets/images/hardware/classic/assembly/topPlate/2-oled-mount1.jpg" width="200" height="225"></a>
    <a href="/assets/images/hardware/classic/assembly/topPlate/2-oled-mount2.jpg" title="Inserts in mount 2"><img src="/assets/images/hardware/classic/assembly/topPlate/2-oled-mount2.jpg" width="200" height="200"></a>
    </div>
2. Secure the OLED screen to the mount using four M2 x 8mm screws.
3. Attach the mount to the right side of the robot using M2.5 x 8mm screws.
    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/topPlate/2-oled1.jpg" title="Attach OLED 1"><img src="/assets/images/hardware/classic/assembly/topPlate/2-oled1.jpg" width="200" height="225"></a>
    <a href="/assets/images/hardware/omni/topPlate/lidar1.jpg" title="Attach OLED 2"><img src="/assets/images/hardware/omni/topPlate/lidar1.jpg" width="190" height="200"></a>
    </div>

## Final Assembly and Wiring
{: .line}

### Required Components
- 1 X Top Assembly
- 1 X Middle Assembly
- 1 X Bottom Assembly
- 8 X 4-40 Thumbscrews
- 1 X USB-C Cable
- 1 X Micro USB Cable
- 1X TalentCell Battery with Power Cable

<a class="image-link" href="/assets/images/hardware/omni/final/1.jpg">
<img src="/assets/images/hardware/omni/final/1.jpg" alt="" style="max-width:600px;"/>
</a>

### 1. Assemble 3-heads jumper wire cable

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
<a href="/assets/images/hardware/classic/assembly/topPlate/3-jumper-wires1.jpg" title="Assemble the jumper wires 1"><img src="/assets/images/hardware/classic/assembly/topPlate/3-jumper-wires1.jpg" width="200" height="200"></a>
<a href="/assets/images/hardware/classic/assembly/topPlate/3-jumper-wires3.jpg" title="Assemble the jumper wires 2"><img src="/assets/images/hardware/classic/assembly/topPlate/3-jumper-wires3.jpg" width="200" height="200"></a>
<a href="/assets/images/hardware/classic/assembly/topPlate/3-jumper-wires2.jpg" title="Assemble the jumper wires 2"><img src="/assets/images/hardware/classic/assembly/topPlate/3-jumper-wires2.jpg" width="400" height="200"></a>
</div>


### 2. Assemble 3 plates

1. With four (4) thumbscrews, fasten the middle blue acrylic plate to the standoffs of the bottom yellow acrylic plate after aligning the camera to the frontward orientation of the robot. NOTE: You may have to remove the USB-C connector to fasten the 4th thumbscrew, just remember to re-connect after fastened.

    <a class="image-link" href="/assets/images/hardware/omni/final/2.jpg">
    <img src="/assets/images/hardware/omni/final/2.jpg" alt="" style="max-width:600px;"/>
    </a>

2. Sit the battery into its designated area with the on/off switch pointing toward the front of the robot, and connect the DC power connector from the bottom plate PCB and USB-C from the Raspberry Pi.

    <a class="image-link" href="/assets/images/hardware/omni/final/3.jpg">
    <img src="/assets/images/hardware/omni/final/3.jpg" alt="" style="max-width:600px;"/>
    </a>

3. Connect the bottom plate USB cable to a USB port on the Raspberry Pi

    <a class="image-link" href="/assets/images/hardware/omni/final/4.jpg">
    <img src="/assets/images/hardware/omni/final/4.jpg" alt="" style="max-width:600px;"/>
    </a>

4. With four (4) thumbscrews, fasten the top yellow acrylic plate assembly to the standoffs of the middle blue acrylic plate after aligning the LiDAR USB cable to the rearward orientation of the robot.

    <a class="image-link" href="/assets/images/hardware/omni/final/5.jpg">
    <img src="/assets/images/hardware/omni/final/5.jpg" alt="" style="max-width:600px;"/>
    </a>

5. Connect the LiDAR USB cable from the top plate assembly to a port on the Raspberry Pi

    <a class="image-link" href="/assets/images/hardware/omni/final/6.jpg">
    <img src="/assets/images/hardware/omni/final/6.jpg" alt="" style="max-width:600px;"/>
    </a>

6. The final assembly should appear as shown.

    <a class="image-link" href="/assets/images/hardware/omni/final/7.jpg">
    <img src="/assets/images/hardware/omni/final/7.jpg" alt="" style="max-width:600px;"/>
    </a>

### 3. Final wiring