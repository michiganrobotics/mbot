---
layout: single
title: Mbot Classic Middle Plate Guide
last_modified_at: 2024-09-11 19:22:48 -0500
author: shaw
toc: true
---
{: .important}
This guide is for Differential Drive MBot Classic.

## 1. Assemble the main plate

| Components     | #         | Details|
|:-------------|:---- -------|    |
| Middle Acrylic Sheet     |1|    |
| Raspberry PI 5           |1|    |
| M2.5 8mm Nylon Standoffs |4| The grey ones (shortest)|
| M2.5 x 6mm Screws        |8| Use with Nylon standsoffs |
| 2.5” Aluminum standoffs  |4| Longest standoffs |
| M2.5 x 8mm Screws        |4| Use the the 2.5” standoffs|
| M2.5 X 30mm Standoffs    |4| Second shortest standoffs |
| M2.5 x 6mm Screws        |8| Use with the 30mm standoffs|
| Zip tie                  |4|
| battery slot pieces       |4| U shaped pieces |

1. Assemble the battery slot

    Using zip ties and the battery slot pieces, assemble as shown in the images below.
    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/middlePlate/1-battery-slot1.jpg" title="Zip tie the battery slot pieces"><img src="/assets/images/hardware/classic/assembly/middlePlate/1-battery-slot1.jpg" width="300" height="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/1-battery-slot2.jpg" title="battery slot result"><img src="/assets/images/hardware/classic/assembly/middlePlate/1-battery-slot2.jpg" width="300" height="300"></a>
    </div>

2. Mount the standoffs and Pi 5

    <a class="image-link" href="/assets/images/hardware/classic/assembly/middlePlate/1-middle-detail.png">
        <img src="/assets/images/hardware/classic/assembly/middlePlate/1-middle-detail.png" alt="" style="max-width:600px;"/>
    </a>
    - The Green Box: Where you use the nylon standoffs to attach the Pi 5 to the platform.
    - The Blue Box: Where you attach the Pi 5 platform to the bottom.
    - The Red Box: Where you mount the 2.5" aluminum standoffs, the longest ones.

    Once you finish all three levels, the result should look like this (**without the camera part attached; we will do that in the next step**):
    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/middlePlate/1-middle-back.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/1-middle-back.png" width="300" height="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/1-middle-front.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/1-middle-front.png" width="300" height="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/1-middle-left.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/1-middle-left.png" width="300" height="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/1-middle-right.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/1-middle-right.png" width="300" height="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/1-middle-top.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/1-middle-top.png" width="300" height="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/1-middle-bottom.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/1-middle-bottom.png" width="300" height="300"></a>
    </div>

## 2. Attach the camera

| Components     | #         |
|:-------------|:---- -------|
| Camera mount |1|
| Camera       |1 |
| 15-to-22 pin camera cable (one end is narrower, and the other is wider)|  1 |
| Transparent spacer for camera|1|
| M2 x 6mm Screws        |4|
| M2.5 x 8mm Screws     |2|
| M2.5 threaded inserts |2|

Note that the OLED mount and the camera mount are both white and look similar, but they are different!

1. Insert the threaded inserts into the camera mount, you need soldering iron for this to heat up the inserts.
2. Attach the camera mount below the middle plate with the screw slot facing upwards, as shown in the image.
3. Next, attach the camera to the mount and put the transparent spacer between camera and the mount to protect the components on the camera's electronics.

    Note: If you can't find M2 x 6mm screws, M2 x 8mm will also work. However, please be cautious when using the longer screws for the top two holes, as they will stick out and against the middle plate. Avoid overtightening those top two screws.

    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/middlePlate/2-camera-mount1.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/2-camera-mount1.png" width="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/2-camera-mount2.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/2-camera-mount2.png" width="300"></a>
    </div>
4. Insert the camera cable. The wider end goes into the camera, and the narrower end goes into the Pi. You can use any of the Pi's camera slots.
    > Credit to Arducam [official guide](https://docs.arducam.com/Nvidia-Jetson-Camera/Jetvariety-Camera/Quick-Start-Guide/)
    1. Gently pull up the plastic edges of the camera port.
    2. Insert the camera ribbon, ensuring the contacts are facing the correct side as shown in the image.
    3. Push the plastic connector back down to secure the cable.

    <div class="popup-gallery">
    <a href="/assets/images/hardware/classic/assembly/middlePlate/2-camera-cable1.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/2-camera-cable1.png" width="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/2-camera-cable2.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/2-camera-cable2.png" width="300"></a>
    <a href="/assets/images/hardware/classic/assembly/middlePlate/2-camera-cable3.png" title=""><img src="/assets/images/hardware/classic/assembly/middlePlate/2-camera-cable3.png" width="300"></a>
    </div>
5. Then use 4 screws attach the camera to the camera mount.


Now, let's move on to the [top section](/docs/hardware/classic/assembly/mbot-classic-top-plate).

[**Previous Step:** Bottom Plate](/docs/hardware/classic/assembly/mbot-classic-bottom-plate){: .btn .btn--inverse .align-left}
[**Next Step:** Top Plate](/docs/hardware/classic/assembly/mbot-classic-top-plate){: .btn .btn--inverse .align-right}
