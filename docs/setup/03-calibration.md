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

1. Connect to the robot in VSCode.
2. Select "Open Folder" then open the Home folder, `/home/mbot`.
3. Drag and drop all the firmware files onto the File Explorer panel to copy the firmware onto the robot.

## 2. Calibrate the MBot

We will now flash the calibration script onto the Pico to calibrate it before we flash it with the firmware.

The calibration script detects the motor and encoder polarity and then calibrates the motor coefficients. The robot will move around for this step so you will need clear space on the floor (preferably on the same type of surface that you plan to use the robots on).

**Warning:** *Do not run the calibration script with the MBot on a table!!*
{: .notice--warning}

To calibrate the robot, do:
```bash
sudo mbot-upload-firmware flash mbot_calibrate_<TYPE>.uf2
```

**Got an error?** You may need to [manually put the board into Flashing mode](#manual-flashing-mode) before you run the above command.
{: .notice--info}

The Pico will reboot automatically, and will then run its calibration routine. *Don't touch the robot while it does this procedure.* The calibration procedure looks like this:

<iframe class="aligh-center" width="560" height="315" src="https://www.youtube.com/embed/Fl2M0zanTJc?si=LukUDRFrAkW_Dnkt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Manual Flashing Mode

If you get the error:
```bash
$ No accessible RP2040 devices in BOOTSEL mode were found.
```
you may not have the ability to automatically put your MBot Control Board in "flashing" mode. You need to manually put the robot in flashing more before you run the calibration command.

1. Locate the "BOOTSEL" and "RST" buttons on the board (short for "Boot Select" and "Reset").
    ![BOOTSEL Button](/assets/images/setup/bootsel-location.jpg){:style="width:800px;" .align-center}
2. Hold down both "RST" and "BOOTSEL"
3. Release "RST" *then* "BOOTSEL" to put the board into flashing mode.
4. Run the upload script again.

## 3. Flash the Firmware

**Flash the MBot Firmware onto the Pico.** The calibration script will have saved parameters onto the Pico's memory. We can now flash the firmware that will run on the Pico during operation.

**Do you need to manually put your MBot Control Board in Flashing Mode?** If you needed to manually put the board in flashing mode during calibration, you will need to do this again before running the next command. See [the manual flashing instructions above](#manual-flashing-mode).
{: .notice--info}

To flash the MBot Control Board with the firmware, do:
```bash
sudo mbot-upload-firmware flash mbot-<TYPE>.uf2
```

## 4. Test your Setup

[Drive the robot](/docs/tutorials/drive) to make sure your firmware is working as expected!

**Something not right?** If your robot doesn't drive properly, you may have a hardware issue. See the [debugging tips](/docs/hardware/debugging) to check for hardware issues.
{: .notice--info}

[**Previous Step:** Configure your image](/docs/setup/02-configuration){: .btn .btn--inverse .align-left}
[**Next Step:** Test your setup!](/docs/tutorials/drive){: .btn .btn--inverse .align-right}
