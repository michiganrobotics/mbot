---
layout: single
title: What's my MBot's IP?
toc: true
---

Your robot's *IP address* is a set of numbers in this form: `XX.XX.XX.XX` (but the `XX`'s are replaced with numbers) that tells other computers on the network how to communicate with the robot. We need this IP to access the robot's web app and to [program the robot with VSCode](/docs/tutorials/vscode).

There are three ways to get the robot's IP, depending on your hardware and your setup:

1. **Does your robot have a display?** If your robot has an OLED Display connected, [get the IP from the display](#getting-the-ip-from-the-mbots-display).
2. **Is your robot configured with an IP registry?** If your fleet has an IP registry, [get the IP from the registry](#getting-the-ip-from-the-mbot-ip-registry).
3. **No display or IP registry?** [Get the IP from the SD card](#getting-the-ip-from-the-sd-card).

**Note:** Your IP address might change occasionally. You should double check the IP every time your use your robot.
{: .notice--info}

## Getting the IP from the MBot's Display

If your robot has an OLED display connected to the Raspberry Pi, it will automatically show the robot's IP. Read the IP from the display as shown here:

![Get IP - Display](/assets/images/TODO.png){:style="width:500px;" .align-center}

## Getting the IP from the MBot IP Registry

Get the IP registry for your course from course staff or from the [robot configuration](/docs/setup/02-configuration).
{: .notice--info}

The robot pushes its IP to a file called `data/<ROBOT-NAME>.json` where `<ROBOT-NAME>` is your robot's hostname. The hostname should match the label on the robot. Get the robot's IP from the data folder in the registry:

![Get IP - Registry](/assets/images/setup/get_ip.png){: .align-center}

## Getting the IP from the SD Card

**Note:** You will need to be able to read an SD card for this method.
{: .notice--info}

1. Turn on your robot and wait 1-2 minutes for it to start up and connect to WiFi.
2. Turn the robot off.
3. Remove the SD card from the robot's Raspberry Pi and plug it into your laptop.
4. Locate the file `ip_out.txt` on the SD card. Open it and write down the robot's IP.
5. Replace the SD card in the Raspberry Pi and turn the robot back on.

**Note:** This is the least convenient and least robust way to get your robot's IP address. Consider getting a display, setting up an IP registry, or setting a static IP instead.
{: .notice--warning}

## Static IPs and the MBots

If your network allows it, you can set static IPs for the MBots in your fleet and connect using their hostnames instead.

**Note:** Many enterprise networks, like MWireless at Michigan, do not allow static IPs.
{: .notice--info}
