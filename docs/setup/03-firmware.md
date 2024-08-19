---
layout: single
title: "MBot Setup: Calibrating & Flashing"
toc: true
---

Each robot needs to be individually calibrated in order to control it. Once it's calibrated, the firmware can be flashed onto the robot. You will need to flash programs onto the Pico to calibrate and load the firmware onto your robot. To do this, you should connect to the robot using a program called NoMachine, that allows you to view the robot's desktop from your laptop.

## Prerequisites

You will need:
* The calibration script for your hardware configuration,
* The MBot firmware for your hardware configuration,
* Your robot's IP.

**TODO:** Add links to the firmware.
{: .notice--danger}

## 1. Get the Firmware

**TODO:** Add links to the firmware.
{: .notice--danger}

## 2. Calibrate the MBot

We will now flash the calibration script onto the Pico to calibrate it before we flash it with the firmware.

The calibration script detects the motor and encoder polarity and then calibrates the motor coefficients. The robot will move around for this step so you will need clear space on the floor (preferably on the same type of surface that you plan to use the robots on).

**Warning:** *Do not run the calibration script with the MBot on a table!!*
{: .notice--warning}

**TODO:** Add flashing script and better flashing instructions.
{: .notice--danger}

1. First, unplug the Robotics Control Board by disconnecting the barrel plug from the battery (leave the USB that powers the RPi plugged in). Also unplug the USB that connects the Pico to the Raspberry Pi.
2. We will now put the Pico in flashing mode. Hold down the `BOOTSEL` button on the Pico board (it's near the USB port). The location of the button depends on the version of your Robotics Control Board. The button is highlighted in red for each board in this photo:
    ![BOOTSEL Button](/assets/images/setup/bootsel-location.jpg){:style="width:800px;" .align-center}
    With the button held down, plug the Pico's USB cord back into the Raspberry Pi. Then release the button. The Pico should now show up as a device in NoMachine (see below).
    ![Pico device in NoMachine](/assets/images/setup/pop-up-plug-in.png){:style="width:800px;" .align-center}
3. Plug the barrel plug that powers the Robotics Control Board back into the battery.
4. Place the MBot on the floor in a spot with at least 2 feet of clear space all around the robot.
5. Open the Pico device folder in NoMachine. Drag and drop the script `mbot_calibrate_omni.uf2` into the folder. The Pico will reboot automatically, and will then run its calibration routine. *Don't touch the robot while it does this procedure.* The calibration procedure looks like this:

<iframe class="aligh-center" width="560" height="315" src="https://www.youtube.com/embed/Fl2M0zanTJc?si=LukUDRFrAkW_Dnkt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 3. Flash the Firmware

3. **Flash the MBot Firmware onto the Pico.** The calibration script will have saved parameters onto the Pico's memory. We can now flash the firmware that will run on the Pico during operation. We will be repeating the flashing procedure.
    1. Repeat steps [2.1-2.3 from the calibration instructions](#2-calibrate-the-mbot) to put the Pico into flashing mode.
    2. Open the Pico device folder in NoMachine. Drag and drop the script `mbot.uf2` into the folder. The Pico will reboot automatically.

## 4. Test your Setup

Follow the [Quick Start Guide](/docs/tutorials/drive) to make sure your robot can drive around!

**Something not right?** If your robot doesn't drive properly, you may have a hardware issue. See the [debugging tips](/docs/hardware/debugging) to check for hardware issues.
{: .notice--info}

[**Previous Step:** Configure your image](/docs/setup/02-configuration){: .btn .btn--inverse .align-left}
[**Next Step:** Test your setup!](/docs/tutorials/drive){: .btn .btn--inverse .align-right}
