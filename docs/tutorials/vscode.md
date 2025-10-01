---
layout: single
title: Connecting to the MBot in VSCode
toc: true
last_modified_at: 2024-08-23
---

We will program the robot using VSCode's Remote Development extension. This extension allows us to connect to a remote host in a VSCode window and write code on its filesystem.

When you have completed this guide, check out the [MBot Bridge API documentation](/docs/tutorials/bridge) to make your robot move!

---

## Prerequisites

This tutorial assumes you have installed [VSCode](https://code.visualstudio.com/). You will need a laptop connected to the same WiFi as the robot (this is MWireless on the UM campus).

You will also need to turn the robot on and [get its IP address](/docs/setup/networking).

---

## Connecting to the robot

### 1. Add the Remote Development extension

First, we need the VSCode Remote Development extension, which will allow us to connect VSCode to the robot's environment. Open VSCode and click on the "Extensions" icon ![Extensions Icon](https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/light/extensions.svg?sanitize=true) in the toolbar on the left. Search for "Remote Development" and select the extension called "Remote Development." Click "Install" to install it.

![Install Remote Development Extension](/assets/images/programming/install-remote-ext.jpg){:style="width:800px;" .align-center}

### 2. Add the Raspberry Pi as a remote host

Now we will tell VSCode how to connect to the Raspberry Pi board on the robot. To add the Raspberry Pi as a remote host in VSCode, click on the "Remote Explorer" in the toolbar on the left. Then, select the + beside "SSH" to add a new host:

![Add Remote Host](/assets/images/programming/remote-add-target.png){:style="width:400px;" .align-center .rd-corners}

In the box that appears, type in the following command:
```bash
ssh <ROBOT-USER>@<ROBOT-IP>
```
Replace all of `<ROBOT-IP>` with the IP address of your robot, and all of `<ROBOT-USER>` with the robot's username (default is `mbot`). Check with course staff if you aren't sure.

![Remote SSH Command](/assets/images/programming/remote-ssh-command.png){:style="width:600px;" .align-center}

Press Enter, then select the default configuration file when the option appears:

![Remote SSH Config](/assets/images/programming/remote-ssh-config.png){:style="width:600px;" .align-center}

### 3. Connect to the Raspberry Pi

To connect to the Raspberry Pi, open the "Remote Explorer" tab again, and select the new remote host you just added. If it doesn't appear, press the refresh button. Click on the icon to the right of the address to connect to the host in a new window.

![Connect to Remote Host](/assets/images/programming/remote-connect-host.png){:style="width:400px;" .align-center}

If you are already in a new VSCode window with no other files open, you can also right-click on the host address to connect in the current window. You will be asked to select a platform. Select "Linux."

![Select Linux Platform](/assets/images/programming/remote-platform-linux.png){:style="width:600px;" .align-center}

You will be asked for the password to the Raspberry Pi. The default password is **i<3robots!**. The first time you connect, it will take a few minutes for VSCode to do some setup on the Raspberry Pi. You should see the address of the Raspberry Pi on the bottom left of the VSCode window.

![Connected to Raspberry Pi](/assets/images/programming/remote-connected.png){:style="width:300px;" .align-center}

### 4. Opening a terminal

In the VSCode window connected to the robot, open a terminal by clicking on "Terminal" > "New Terminal." A terminal will open on the Raspberry Pi. You can type command-line commands in this terminal.

![Open Terminal](/assets/images/programming/remote-connect-vsc.png){:style="width:800px;" .align-center}

## Video Tutorial

This video tutorial goes through the process outlined above.

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe style="display:block" width="560" height="315" src="https://www.youtube.com/embed/65J26m_rSxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

