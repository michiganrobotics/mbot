---
layout: single
title: Driving the MBot
toc: true
---

The **MBot** is a robot platform built for education. A fully setup robot should be drivable through the MBot Web App. This guide will show you how to drive around your MBot!

## Prerequisites

You will need:
1. A configured MBot,
2. Your MBot's IP address.

**Don't know your IP?** See the [tutorial on finding out your robot's IP](/docs/tutorials/get-ip).
{: .notice--info}

Your robot will need to be fully set up before driving. See the [setup instructions](/docs/setup/) if your robot has not been configured. **Students:** Check with your instructor if your aren't sure if your robot has been set up for you.
{: .notice--info}

## Driving the Robot

We will connect to the robot's web app and drive it around to make sure it's working.

**Warning:** Make sure that your robot is on the floor, on a flat surface before driving it!! *Never drive your robot on a table.*
{: .notice--warning}

1. **Turn the robot on.** For instructions, check [here](#).
2. **Get your robot's IP.** The robot should publish its IP to an IP registry when it starts up.

    **Don't know your IP?** See the [tutorial on finding out your robot's IP](/docs/tutorials/get-ip).
    {: .notice--info}

3. **Connect to the MBot Web App.** Each MBot is hosting its own web app. You can access it by typing the IP from the previous step into your browser.
4. **Drive the robot!** Toggle "Drive Mode" on the web app side panel to activate it. Use your keyboard keys AWSDQE to drive the robot. W and S will move backwards and forwards, A and D will move left and right (on omnidrive robots only), and Q and E will rotate the robot.

    ![Drive Panel on the Web App](/assets/images/tutorials/drive-web-app.png){:style="max-width: 500px" .align-center}

**Debugging Tip:** Make sure that the file in the IP registry is recent by checking the time that it was updated. The IP can change when rebooted. It can take a few minutes for the robot to boot up and connect, so be patient! If the IP is not updated after a few minutes, try restarting the robot.
{: .notice--info}
