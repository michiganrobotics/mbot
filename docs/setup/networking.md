---
layout: single
title: Networking on the MBot
toc: true
---

In order to control and program your MBot from your laptop, we will need the robot and laptop to be connected to the same WiFi network. We will then be able to connect to it with [VSCode](/docs/tutorials/vscode) or [NoMachine](/docs/tutorials/no-machine).

**Students:** Check with your instructor for instructions about how to connect to WiFi in your classroom.
{: .notice--warning}

**Tip:** Your laptop must be on the same network as the MBot to connect.
{: .notice--info}

## Connecting to WiFi

There are two ways to connect your robot to WiFi:

1. **If you are on a regular password-protected WiFi network:** [Use the configuration file](#connecting-to-a-password-protected-wifi-network).

2. **If you are on an Enterprise network:** [Manually log in](#connecting-to-an-enterprise-wifi-network).

No WiFi? [Use the MBot's Access Point](#connecting-to-the-mbots-access-point).

### Connecting to a Password Protected WiFi Network

On a regular password-protected network, like most home networks, connecting to WiFi can be done from the MBot's configuration file.

**Note:** You will need to be able to read an SD card for this method.
{: .notice--info}

1. With the robot off, remove the SD card from the Raspberry Pi.
2. Plug the SD card into your laptop and open the SD card device in your file explorer. It will likely be called "bootfs".

    ![Open SD Card](/assets/images/setup/sd_device.png){:style="width:500px;" .align-center}

3. Open the file `mbot_config.txt`. You can use any text editor for this.

    ![Open mbot_config.txt](/assets/images/setup/mbot_config.png){:style="width:500px;" .align-center}

4. Set `new_wifi_ssid` to the name of your WiFi network, and `new_wifi_password` to the password.

    ![Edit mbot_config.txt](/assets/images/setup/mbot_config_contents.png){:style="width:600px;" .align-center}

**Tip:** In a pinch, you can use your phone's hotspot to create a password-protected network to connect your robot to.
{: .notice--info}

### Connecting to an Enterprise WiFi Network

If your WiFi network requires you to log in with a username and password (for example, your campus WiFi), or if it requires two factor authentication, you will need to connect to it manually.

**Tip:** You should only have to manually connect to WiFi once. After that, the robot should remember the network and connect automatically. If it fails to connect (for example, if the saved credentials expire), you will need to do these steps again.
{: .notice--info}

1. Plug your robot into a monitor, and plug in a keyboard and mouse.
    **Tip:** You will need a mini-HDMI to HDMI cable to do this since the Raspberry Pi 4 and 5 use mini-HDMI connections.
    {: .notice--info}
2. Turn the robot on.
3. When you see the Raspberry Pi desktop appear, log in to the network following your network's instructions.
    **Tip:** The Raspberry Pi uses a Linux-based operating system, so make sure to follow Linux-specific instructions if there are any.
    {: .notice--info}

**At the University of Michigan?** You need to connect to MWireless using the MSetup script. You can find the script `SecureW2_JoinNow.run` in the home directory in the base image. Or, download it from the [MSetup website](https://cloud.securew2.com/public/92472/UMich-WiFi/?device=Linux) (select "Join Now" to download the file). Then, run it:
```bash
sh SecureW2_JoinNow.run
```

## Connecting to the MBot's Access Point

If the MBot *fails to connect to any known WiFi network*, it will create its own WiFi access point.

*Coming soon!*

**Tip:** If you don't need WiFi on your robot, you can use the access point to connect to the robot and avoid connecting to WiFi. For example, if you are running a demo and don't need to download any files or access GitHub, or if you are okay with copying any files or code from your laptop to the robot.
{: .notice--info}
