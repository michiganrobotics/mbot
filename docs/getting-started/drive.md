---
layout: single
title: Driving the MBot
toc: true
---

The **MBot** is an omnidrive robot platform built for education. A fully setup robot should be drivable through the MBot Web App. This guide will show you how to drive around your MBot!

## Prerequisites

You will need:
1. A configured MBot,
2. Your MBot's hostname (this should be labeled on the robot),
3. The URL for your group's MBot IP Registry.

If you don't know the MBot's IP registry or name, that information can be found in the MBot's [configuration file](/docs/setup/02-configuration), or ask your instructor.

Your robot will need to be fully configured with a hostname and a WiFi connection. See the [configuration instructions](/docs/setup/02-configuration) if your robot has not been configured. **Students:** Check with your instructor if your aren't sure if your robot has been set up for you.
{: .notice--info}

## Driving the Robot

We will connect to the robot's web app and drive it around to make sure it's working.

**Warning:** Make sure that your robot is on the floor, on a flat surface before driving it!! *Never drive your robot on a table.*
{: .notice--warning}

1. **Turn the robot on.** For instructions, check [here](#).
2. **Get your robot's IP.** The robot should publish its IP to an IP registry when it starts up.

    *TODO:* Add instructions for the LCD screen vs. IP registry.
    {: .notice--danger}

    Get the IP registry for your course from course staff or from the [robot configuration](/docs/setup/02-configuration).
    {: .notice--info}

    The robot pushes its IP to a file called `data/mbot[-GROUP]-XXX.json` corresponding to the robot's name and ID. The name should match the label on the robot. Get the robot's IP from the data folder in the registry:
    ![Get IP](/assets/images/setup/get_ip.png){: .align-center}
3. **Connect to the MBot Web App.** Each MBot is hosting its own web app. You can access it by typing the IP from the previous step into your browser.
4. **Drive the robot!** Toggle "Drive Mode" on the web app side panel to activate it. Use your keyboard keys AWSDQE to drive the robot. W and S will move backwards and forwards, A and D will move left and right (on omnidrive robots only), and Q and E will rotate the robot.

**Debugging Tip:** Make sure that the file in the IP registry is recent by checking the time that it was updated. The IP can change when rebooted. It can take a few minutes for the robot to boot up and connect, so be patient! If the IP is not updated after a few minutes, try restarting the robot.
{: .notice--info}
