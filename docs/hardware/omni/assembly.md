---
layout: single
title: MBot Omni Assembly Guide
author: abhishek
toc: true
last_modified_at: 2024-11-21
---

This guide will walk you through the steps needed to assemble the MBot Omni. The MBot Omni Bot is comprised of 3 sections: the [bottom plate](#bottom-assembly), [middle plate](#middle-assembly) and the [top plate](#top-assembly). Each of these plates are assembled separately first, before attaching them together to create the MBot Omni.

<a class="image-link" href="/assets/images/hardware/omni/omni.jpg">
  <img src="/assets/images/hardware/omni/omni.jpg" alt="MBot Omni Finish" style="max-width:500px;"/>
</a>

## Bottom Assembly

<a class="image-link" href="/assets/images/hardware/omni/bottomPlate/bottom-finish.jpg">
<img src="/assets/images/hardware/omni/bottomPlate/bottom-finish.jpg" alt="" style="max-width:300px;"/>
</a>

### 1. Assemble control board and wheels

| Components     | #         |
|:-------------  |:--------- |
|Robotics Control Board|1|
| Raspberry Pi Pico | 1|
|Omni-wheel Sets|3|

1. Attach the Pico board to the control board as shown in the images below.
    <div class="popup-gallery">
        <a href="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-1.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-1.png" width="250"  ></a>
        <a href="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-2.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-2.png" width="250" ></a>
    </div>

2. Collect all the wheel components as shown in the image below.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-3.png">
    <img src="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-3.png" alt="" width="300" />
    </a>

    Note: The wheels used here have a diameter of 96 mm.

    Then assemble the wheels:

    <div class="popup-gallery">
        <a href="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-4.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-4.png"  width="250" ></a>
        <a href="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-5.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-5.png"  width="250" ></a>
    </div>

    <div class="popup-gallery">
        <a href="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-6.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-6.png"  width="250" ></a>
        <a href="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-7.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/1-assemble-parts-7.png"  width="250" ></a>
    </div>
    1. Insert four long screws through the holes in the wheel (wheel facing direction doesn’t matter).
    2. Stack a spacer onto the screws, then place another wheel on top. 
    3. Add the coupler on top and tighten everything securely. 
    4. Finally, use a hex key to attach two short screws into the coupler. These screws secure the wheel to the MBot later.

### 2. Attach the motor mount 

| Components     | #         |
|:-------------|:------------|
| M2.5 x 8mm Screws        |12|
| Motor Mount (3D printed) |2|

1. Look at the bottom of the motor mount. If the holes don’t already have **M2.5 threaded inserts** (as shown in the image below), you’ll need to install them yourself:
    1. Heat the inserts with a soldering iron until they can melt into the plastic.
    2. Push the heated inserts into the holes until they are flush. Let them cool and solidify before continuing.
        <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/2-put-motor-mounts-1.png">
        <img src="/assets/images/hardware/omni/bottomPlate/2-put-motor-mounts-1.png" alt=""  width="300" />
        </a>
2. Attach them as illustrated in the images below. When attaching the mount to the bottom plate, ensure that the slot faces inward.
    <div class="popup-gallery">
        <a href="/assets/images/hardware/omni/bottomPlate/2-put-motor-mounts-2.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/2-put-motor-mounts-2.png"  width="250" ></a>
        <a href="/assets/images/hardware/omni/bottomPlate/2-put-motor-mounts-3.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/2-put-motor-mounts-3.png"  width="250" ></a>
    </div>

### 3. Attach control board

| Components   | #         |
|:-------------|:-----------|
| M2.5 8mm Nylon Standoffs |4|
| M2.5 x 6mm Screws        |4|
| Jumper Cap (Shorting block)  |1|

1. Find the standoffs and screws, and secure them to the holes on the control board.

    <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/3-put-control-board-1.png">
    <img src="/assets/images/hardware/omni/bottomPlate/3-put-control-board-1.png" alt="" width="300"/>
    </a>

2. Put the jumper cap on. Notice that in the 2nd image there are 3 pins squared together. Since we are using 12V, make sure to position the jumper cap over the VM and 12V pins, as demonstrated in the 3rd image.
    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/bottomPlate/6-jumper-cap1.jpg" title="jumper cap on 1"><img src="/assets/images/hardware/classic/assembly/bottomPlate/6-jumper-cap1.jpg"  width="200" ></a>
    <a href="/assets/images/hardware/classic/assembly/bottomPlate/6-jumper-cap2.jpg" title="jumper cap on 2"><img src="/assets/images/hardware/classic/assembly/bottomPlate/6-jumper-cap2.jpg"   width="200" ></a>
    <a href="/assets/images/hardware/classic/assembly/bottomPlate/6-jumper-cap3.jpg" title="jumper cap on 3"><img src="/assets/images/hardware/classic/assembly/bottomPlate/6-jumper-cap3.jpg"  width="200" ></a>
    </div>

3. Attach the control board to the bottom plate like shown in the images below.
    <div class="popup-gallery">
        <a href="/assets/images/hardware/omni/bottomPlate/3-put-control-board-2.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/3-put-control-board-2.png"  width="250" ></a>
        <a href="/assets/images/hardware/omni/bottomPlate/3-put-control-board-3.png" title=""><img src="/assets/images/hardware/omni/bottomPlate/3-put-control-board-3.png"  width="250" ></a>
    </div>


### 4. Attach the motors

| Components   | #         |
|:-------------|:-----------|
| M2.5x5mm Screws |6|

The new 48 resolution motor has encoder pre-attached, which is the one you should use. Don't know which encoder you have? - Check this [page](/docs/setup/03-calibration/#whats-my-encoder-resolution).

Align the motor's unthreaded holes vertically with the motor mount holes, secure the motor to the mount using two **M2.5x5** bolts, as shown in the image. Repeat this process for all three motors.

<a class="image-link" href="/assets/images/hardware/omni/bottomPlate/4-put-motor.png">
<img src="/assets/images/hardware/omni/bottomPlate/4-put-motor.png" alt="" style="max-width:300px;"/>
</a>

### 5. Attach the wheels
Slide the three (3) Omni wheel assemblies onto the motor shafts, leaving a nominal gap between the couplers and the motor mount screw heads like shown in the first image below, and fasten by tightening the two hex-head bolts on the coupler.

<div class="popup-gallery">
    <a href="/assets/images/hardware/omni/bottomPlate/5-put-wheels-1.png" ><img src="/assets/images/hardware/omni/bottomPlate/5-put-wheels-1.png"  width="200" ></a>
    <a href="/assets/images/hardware/omni/bottomPlate/5-put-wheels-2.png" ><img src="/assets/images/hardware/omni/bottomPlate/5-put-wheels-2.png"  width="200" ></a>
    <a href="/assets/images/hardware/omni/bottomPlate/5-put-wheels-3.png" ><img src="/assets/images/hardware/omni/bottomPlate/5-put-wheels-3.png"  width="200" ></a>
</div>

### 6. Connect motors to the control board

Route the motor wires through the cut-out in the acrylic plate and connect them to the pin-outs on the control board as follows:
- Right wheel → M0 slot
- Back wheel → M1 slot
- Left wheel → M2 slot

 <a class="image-link" href="/assets/images/hardware/omni/bottomPlate/6-connect-motors.png">
 <img src="/assets/images/hardware/omni/bottomPlate/6-connect-motors.png" alt="" style="max-width:500px;"/>
 </a>

⚠️ Note: Make sure each harness is connected as shown in the image. The white pin must align with the GND pin, which is marked on the control board.

### 7. Put on standoffs

| Components               |# |
|:-----------------------  |:-|
| 4-40 x 1.5inch aluminum standoffs  |4 |
| 4-40 x 3/8inch screws  |4 |

Fasten four (4) #4-40x1.5” aluminum standoffs to the top side of the bottom plate using four (4) #4-40x0.5” bolts. Note that the two standoffs at the back are intentionally asymmetrical—it’s part of the design.

<div class="popup-gallery">
    <a href="/assets/images/hardware/omni/bottomPlate/bottom-finish1.jpg" title="Bottom Plate - Top"><img src="/assets/images/hardware/omni/bottomPlate/bottom-finish1.jpg" width="250" ></a>
    <a href="/assets/images/hardware/omni/bottomPlate/bottom-finish2.jpg" title="Bottom Plate - Underneath"><img src="/assets/images/hardware/omni/bottomPlate/bottom-finish2.jpg" width="250" ></a>
</div>


## Middle Assembly
<a class="image-link" href="/assets/images/hardware/omni/middlePlate/middle-finish.jpg">
<img src="/assets/images/hardware/omni/middlePlate/middle-finish.jpg" alt="" style="max-width:300px;"/>
</a>

### 1. Prepare the Pi 4

| Components               |# |
|:-----------------------  |:-|
| Raspberry Pi 4B 4GB |1 |
| Raspberry Pi Heatsink Case | 1 |
|Raspberry Pi 5MP Camera with Cable|1|

1. Carefully peel off the protective plastic on both sides of the thermal pads that come packaged with the heatsink case.  Stick them onto the three chips shown on the Raspberry Pi, or directly onto the heatsink.  There are 3 spots for the thermal pads and the thermal pads are precut to the required shape.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/1.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/1.jpg" alt="" style="max-width:300px;"/>
    </a>

2. Insert the camera data cable that comes packaged with the camera into the RPi’s camera connector.  You will pull up the black plastic clamping piece, and slide the cable in with the metal contacts pointing away from the black plastic clamping piece.  Ensure it is properly seated and push down on the black plastic clamping piece to keep in place.  You should just barely see the contacts above the top of the connector.

    <div class="popup-gallery">
        <a href="/assets/images/hardware/omni/middlePlate/2.jpg"><img src="/assets/images/hardware/omni/middlePlate/2.jpg" width="250" ></a>
        <a href="/assets/images/hardware/omni/middlePlate/3.jpg"><img src="/assets/images/hardware/omni/middlePlate/3.jpg" width="250" ></a>
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

| Components               |# |
|:-----------------------  |:-|
| 3D Printed Camera Mount| 1|
|M2x8 bolts| 2|

1. Fasten the camera PCB to the 3D-printed camera mount with two (2) M2x8 bolts threading directly into the 3D-printed material (only 2 necessary, diagonal orientation preferred)

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/7.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/7.jpg" alt="" style="max-width:400px;"/>
    </a>

2. Insert USB-C-to-USB cable into port on Raspberry Pi as shown

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/8.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/8.jpg" alt="" style="max-width:400px;"/>
    </a>

### 3. Add battery slot

| Components               |# |
|:-----------------------  |:-|
| Middle Acrylic Plate| 1|
| Zip tie |4|
| battery slot pieces       |5| 

Assemble the battery slot as shown in the images below. Attach 1 slot piece to the area marked with a red square using a zip tie. Stack 4 slot pieces together in the area marked with a blue square.
<div class="popup-gallery">
    <a href="/assets/images/hardware/omni/middlePlate/3-battery-slot-1.png" ><img src="/assets/images/hardware/omni/middlePlate/3-battery-slot-1.png"  width="200" ></a>
    <a href="/assets/images/hardware/omni/middlePlate/3-battery-slot-2.png" ><img src="/assets/images/hardware/omni/middlePlate/3-battery-slot-2.png"  width="200" ></a>
    <a href="/assets/images/hardware/omni/middlePlate/3-battery-slot-3.png" ><img src="/assets/images/hardware/omni/middlePlate/3-battery-slot-3.png"  width="200" ></a>
</div>

Next we are going to attach the Raspberry Pi & the Camera to the middle acrylic plate.

<a class="image-link" href="/assets/images/hardware/omni/middlePlate/9.jpg">
<img src="/assets/images/hardware/omni/middlePlate/9.jpg" alt="" style="max-width:400px;"/>
</a>
 
### 4. Attach Pi4 and camera to the middle plate

| Components               |# |
|:-----------------------  |:-|
| 1.5in Aluminum 4-40 Standoffs| 4|
|M2.5x20 bolts|2|
|M2.5x8 bolt|1|
|#4-40x0.5” bolts|4|

1. Fasten Raspberry Pi/Camera assembly onto the top of the blue acrylic plate by threading two (2) M2.5x20 bolts from the bottom-side through to the corresponding holes on the Raspberry Pi case/heatsink.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/10.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/10.jpg" alt="" style="max-width:400px;"/>
    </a>

2. Fasten the camera mount to the top of the acrylic plate as shown, with a single M2.5x8 bolt from the bottom-side.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/11.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/11.jpg" alt="" style="max-width:500px;"/>
    </a>

3. Fasten four (4) #4-40x1.5” aluminum standoffs to the top-side of the blue acrylic plate with four (4) #4-40x0.5” bolts.

    <a class="image-link" href="/assets/images/hardware/omni/middlePlate/12.jpg">
    <img src="/assets/images/hardware/omni/middlePlate/12.jpg" alt="" style="max-width:500px;"/>
    </a>

## Top Assembly

<a class="image-link" href="/assets/images/hardware/omni/topPlate/top-finish.jpg">
<img src="/assets/images/hardware/omni/topPlate/top-finish.jpg" alt="" style="max-width:400px;"/>
</a>

### 1. Attach the Lidar to the top plate

| Components     | #         |
|:-------------|:-----------|
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

| Components     | #         |
|:-------------  |:--------- |
|Top Assembly|1|
|Middle Assembly|1|
|Bottom Assembly|1|
|4-40 Thumbscrews|8|
|USB-C Cable|2|
|TalentCell Battery with Power Cable|1|
|Assembled 3-heads jumper wire cable|1|

<a class="image-link" href="/assets/images/hardware/omni/wiring/2-components.jpg">
    <img src="/assets/images/hardware/omni/wiring/2-components.jpg" alt="" style="max-width:400px;"/>
</a>

1. Plug the 6-pin connector into the Raspberry Pi pins.

    According to the image below, the red cable should be connected to Pin 1 (the number inside the circle, not the number marked on the side), and the white cable should be connected to Pin 11. Plug into the Pi as shown in the image.
    <div class="popup-gallery">
    <a href="https://pinout-ai.s3.eu-west-2.amazonaws.com/raspberry-pi-5-gpio-pinout-diagram.webp" title=""><img src="https://pinout-ai.s3.eu-west-2.amazonaws.com/raspberry-pi-5-gpio-pinout-diagram.webp" width="800" height="200"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/3-jumper-wires2.jpg" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/3-jumper-wires2.jpg" width="350"></a>
    <a href="/assets/images/hardware/omni/wiring/2-plug-jumper-wire.jpg" title=""><img src="/assets/images/hardware/omni/wiring/2-plug-jumper-wire.jpg" width="350"></a>
    </div>


2. **(Optional)** Pull the 2-pin header thru the hole and plug into the control board. This step is in beta for the automatic firmawre flash method (see [link](/docs/setup/firmware/#automatic-boot-mode)). You'll get more details about this during the firmware flashing step, so it's up to you whether to plug it in now or skip it for now.

    <a class="image-link" href="/assets/images/hardware/omni/wiring/2-plug-bootloader.jpg">
        <img src="/assets/images/hardware/omni/wiring/2-plug-bootloader.jpg" alt="" style="max-width:400px;"/>
    </a>
    - White cable to RUN
    - Green cable to BTLD

3. Then, use the thumb screws to attach the middle plate to the bottom plate and secure the screws to the standoffs.

    <a class="image-link" href="/assets/images/hardware/omni/wiring/2-middle-to-bottom.jpg">
        <img src="/assets/images/hardware/omni/wiring/2-middle-to-bottom.jpg" alt="" style="max-width:400px;"/>
    </a>

4. Connect the 4PIN connector to the OLED, ensuring that the pins align with the marked positions, black wire to GND pin. And also put the battery in the battery slot.

    <a class="image-link" href="/assets/images/hardware/omni/wiring/2-jumper-to-oled.jpg">
        <img src="/assets/images/hardware/omni/wiring/2-jumper-to-oled.jpg" alt="" style="max-width:400px;"/>
    </a>

5. Then, use the thumb screws to attach the top plate to the middle plate and secure the screws to the standoffs.
   
    <a class="image-link" href="/assets/images/hardware/omni/wiring/2-top-to-middle.jpg">
        <img src="/assets/images/hardware/omni/wiring/2-top-to-middle.jpg" alt="" style="max-width:400px;"/>
    </a>

### 3. Final wiring
1. Connect LiDAR to the Pi.
   
    <a class="image-link" href="/assets/images/hardware/omni/wiring/3-lidar-to-pi.jpg">
        <img src="/assets/images/hardware/omni/wiring/3-lidar-to-pi.jpg" alt="" style="max-width:400px;"/>
    </a>

2. Connect Pi and Pico using USB-C Cable.

    Plug the Type A end into one of the Raspberry Pi's USB ports and the Type C end into the PICO on the bottom board.

    <a class="image-link" href="/assets/images/hardware/omni/wiring/3-pico-to-pi.jpg">
        <img src="/assets/images/hardware/omni/wiring/3-pico-to-pi.jpg" alt="" style="max-width:400px;"/>
    </a>
3. Connect Pi to the battery.

    Plug the Type A end into the battery and the Type C end into the power supply slot on the side of the Raspberry Pi 4. This connection powers the Raspberry Pi.

    <a class="image-link" href="/assets/images/hardware/omni/wiring/3-pi-to-battery.jpg">
        <img src="/assets/images/hardware/omni/wiring/3-pi-to-battery.jpg" alt="" style="max-width:400px;"/>
    </a>
4. Connect Control board to battery.

    Connect one barrel plug to the control board and the other to the battery. This powers the control board.

    <div class="popup-gallery">
    <a href="/assets/images/hardware/omni/wiring/3-pico-to-battery1.jpg" title=""><img src="/assets/images/hardware/omni/wiring/3-pico-to-battery1.jpg" width="200" height="200"></a>
    <a href="/assets/images/hardware/omni/wiring/3-pico-to-battery2.jpg" title=""><img src="/assets/images/hardware/omni/wiring/3-pico-to-battery2.jpg" width="200" height="200"></a>
    </div>

Now you have a complete version of MBot. You are ready to set up the software and make the robot move!

