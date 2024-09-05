---
layout: single
title: MBot Troubleshooting Guide
toc: true
---

Got a problem with your MBot? You're in the right place! This section has detailed guides to help you troubleshoot and fix the most common MBot problems.

**Where do I start?** Check out the [Common Problems](#common-problems) first. This section will have checklists of the most important things to check to fix the most common problems.
{: .notice--info}

These more detailed troubleshooting guides are available:
* [**Hardware**](/docs/troubleshooting/hardware/): Problems with the MBot Control Board, motors, encoders, or other sensors.
* [**Software**](/docs/troubleshooting/software/): Problems with the MBot software.
* [**Networking**](/docs/troubleshooting/networking/): Problems with connecting to the MBot.

## Common Problems
{: .line}

Here are some common issues and how to fix them:
* [My robot is not driving](#my-robot-is-not-driving)
* [My robot is driving crooked](#my-robot-is-driving-crooked)
* [I can't flash the MBot Control Board](#i-cant-flash-the-mbot-control-board)
* [My robot won't connect to WiFi](#my-robot-wont-connect-to-wifi)
* [Mapping isn't working](#mapping-isnt-working)

**Got a different problem?** If you have a problem you think should be added to this section, [create an issue](https://github.com/michiganrobotics/mbot/issues/new) or email [um-mbothelp@umich.edu](mailto:um-mbothelp@umich.edu).
{: .notice--info}

---

### My robot is not driving

After you [calibrate and flash your robot](/docs/setup/03-calibration/), you should test your robot by [driving it using the web app](/docs/tutorials/drive).

If the robot wheels *do not turn at all*, here are some things to check:
1. **Did you flash the correct firmware?** For the robot to be teleoperated from the web app, you need to have flashed the firmware. You can get the code from the [Calibration & Flashing Guide](/docs/setup/03-calibration/).

    **Make sure flashing succeeded without errors!** When you run the `mbot-upload-firmware` command, you should not see any errors. If you are getting errors, see ["I can't flash the MBot Control Board"](#i-cant-flash-the-mbot-control-board).
    {: .notice--info}

2. **Are the cables connected correctly?** You should have these connections for the MBot Control Board to work and communicate with the Raspberry Pi:
    * A USB cable connecting the MBot Control Board (USB-C) to the Raspberry Pi (USB).
    * A Y-shaped barrel cable with one end connected to the battery pack and the other connected to the MBot Control Board.

    For details and illustrations, see the Assembly Guide for your platform in the [Hardware](/docs/hardware) section.

**Still not working?** If you still can't drive your robot, you may have a hardware problem. Check that the device `/dev/mbot_tty` exists and check for errors in the service `mbot-lcm-serial.service` (see the [Software Guide]((/docs/troubleshooting/software/#checking-service-status)) for instructions). You may have to replace the USB cable or the Pico.
{: .notice--info}

---

### My robot is driving crooked

After you [calibrate and flash your robot](/docs/setup/03-calibration/), you should test your robot by [driving it using the web app](/docs/tutorials/drive).

The robot will not drive *perfectly* straight, but it should be pretty close! If your robot is **driving "wonky"**, see the [Hardware Troubleshooting Guide](/docs/troubleshooting/hardware).

---

### I can't flash the MBot Control Board

If you are trying to [flash the MBot Control Board with a firmware file](/docs/setup/firmware), using the `mbot-upload-firmware` command, you might see an error that says:
```
No accessible RP2040 devices in BOOTSEL mode were found.
```
{: .no-copy}
If you see this error, the firmware *did not flash correctly*. Here are some things to check:

1. **Make sure the Pico is in Boot Mode.** See the [Firmware Flashing Tutorial](/docs/setup/firmware/#1-manual-boot-mode) for instructions to do this. The buttons are small, so make sure you are pressing them and releasing them in the correct order!
2. **Do you have automatic flashing set up?** If you are using the `RST` and `BOOTSEL` buttons to put the Pico into Boot Mode and still getting the error above, you may have a *known issue* with automatic flashing (this feature is new and may not always work!).

    Check if you have these cables connected to the MBot Control Board (the green and white wires).
    ![The cable needed to automatically flash the MBot Control Board](/assets/images/setup/flash_pico_wire.jpg){:style="max-width:400px;" .align-center}

    If so, **unplug the connector from the MBot Control Board** to disable automatic flashing. Put the board in Boot Mode manually (see the [Firmware Flashing Tutorial](/docs/setup/firmware/#1-manual-boot-mode) for instructions), then try again.

3. **Try holding `BOOTSEL` for longer.** If step 1 and 2 don't work for you, when you are putting the board in Boot Mode, try holding down the `BOOTSEL` button for 5-10 seconds *after* you release `RST`.

**Still not working?** If you still can't flash your Pico, it may need to be replaced.
{: .notice--info}

---

### My robot won't connect to WiFi

If your robot is not connecting to WiFi or not reporting its IP, check the [Networking Troubleshooting Guide](/docs/troubleshooting/networking).

---

### Mapping isn't working

If you are toggling localization on and then it is immediately toggling off again, or if no map is being made in mapping mode, something is going wrong with SLAM.

Check the following, in this order:
1. **Is your Lidar plugged in?** SLAM needs the Lidar scan to work!
2. **Can you drive your robot?** If not, it is likely that odometry is not working either, and SLAM needs odometry to work. See the [Hardware Troubleshooting Guide](/docs/troubleshooting/hardware) to fix it.

Lidar spinning and Robot Control Board working but SLAM still isn't working? Try these steps:
3. **Restart your robot.** If any program got into a funny state or crashed, a reboot will fix it. If the problem persists, follow the next steps.
4. [**Check the logs and services**](/docs/troubleshooting/software/#checking-service-status). These instructions also tell you how to get a log to send to course staff for help if your problems persist.
5. [**Check LCM channels**](/docs/troubleshooting/software/#viewing-lcm-channels). If you can't find the issue in the services, you might check that all the correct data is being published. Do you see the Lidar scan and odometry data coming in?
