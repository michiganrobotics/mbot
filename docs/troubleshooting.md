---
layout: single
title: Troubleshooting
toc: true
---

Got a problem with your MBot? You're in the right place! Check out the [Common Problems](#common-problems) to get started.

## Common Problems
{: .line}

### My robot is not driving or driving crooked

After you [calibrate and flash your robot](/docs/setup/03-calibration/), you should test your robot by [driving it using the web app](/docs/tutorials/drive).

The robot will not drive *perfectly* straight, but it should be pretty close! If your robot is **not moving** or your robot is **driving "wonky"**, see the [Hardware Troubleshooting Guide](/docs/hardware/troubleshooting).

### My robot won't connect to WiFi

If your robot is not connecting to WiFi or not reporting its IP, check the [Networking Tips](#networking-problems) below.

### Mapping isn't working

If you are toggling localization on and then it is immediately toggling off again, something is going wrong with SLAM. See the [Mapping & Localization Debugging Tips](#mapping--localization-problems) below for help.

## Hardware Problems
{: .line}

If your robot is *not driving*, or your robot is *driving "wonky"*, see the [Hardware Troubleshooting Guide](/docs/hardware/troubleshooting).

## Software Problems
{: .line}

If you believe you have a software problem, try some of the tips below.

### Viewing LCM Channels

If some function of the robot isn't working, it's often helpful to look at the *LCM channels* on the Raspberry Pi. If certain channels are missing, that provides a clue about which program might not be working. There are two ways to see the LCM channels:

1. **The LCM Monitor Web App:** The full MBot OS image comes with the LCM Monitor web app installed. Go to `http://<MY-IP>/spy` to access the LCM Monitor (replace `<MY-PI>` with your robot's IP).

    **Want the LCM Monitor?** Instructions to install the latest release of the LCM Monitor tool can be found [on GitHub](https://github.com/mbot-project/mbot_lcm_monitor/?tab=readme-ov-file#installing-from-the-latest-release-recommended){:target="_blank"}.
    {: .notice--info}

2. **Using LCM Spy:** If you don't have the web-based LCM monitor, you can look at the channels with a program provided by LCM called LCM Spy. We require a GUI to use the tool, so we must be connected to the Raspberry Pi using [NoMachine](/docs/tutorials/no-machine) or a monitor.

    Open a terminal on the Raspberry Pi from NoMachine and type:
    ```bash
    lcm-spy
    ```

    You should see a window that looks like this:

    ![LCM Spy window](/assets/images/debug/lcm-spy.png){:style="width:600px;" .align-center}

    You can also double click on a channel to see the data that's being published.

    ![LCM Spy data](/assets/images/debug/lcm-spy-details.png){:style="width:600px;" .align-center}


    **Hint:** If you don't see the types defined beside each of the channels in LCM Spy, your `CLASSPATH` variable might not be sent correctly. See the instructions in the [LCM base](https://github.com/mbot-project/mbot_lcm_base){:target="_blank"} repo for how to set it to find the messages.
    {: .notice--info}

---

### Checking Service Status

Background processes are run on the robot on startup using Linux *services*. If something is not working or not responding on the robot, you check whether the corresponding services are running. You can also check the service logs for any errors or messages of interest. To check the status of a service, do:
```bash
sudo systemctl status [SERVICE-NAME].service
```
where all of `[SERVICE-NAME]` is replaced with the name of the service. All relevant services should be `active`. The might have some information printed out. Make note of any warning or error messages.

You can look at the logs of a service with:
```bash
sudo journalctl -b -u [SERVICE-NAME].service
```
This will show you all the log messages for the service for the current boot (otherwise, it will show you logs from however many sessions it is storing).

<div class="notice--info">
    <i class="fas fa-cogs"></i>&nbsp;&nbsp;<strong>Hint:</strong> When seeking debugging help, run this command:
    <div class="language-bash highlighter-rouge" ><div class="highlight">
        <pre class="highlight"><code>sudo journalctl -b > ~/Desktop/out.txt</code></pre>
    </div></div>
    Then download file <code>~/Desktop/out.txt</code> onto your computer and send it to staff along with a description of your problem. This will contain all the system logs for your bot.
</div>

#### Networking Services

The following services run *once* on startup, to set the networking. They should have exited successfully after running:
*  `mbot-start-network.service`
*  `mbot-publish-info.service`

These services also have additional logs generated which are stored in the directory `/var/log/mbot/`. If you have a problem with the IP publishing script or networking, also look at these logs.

#### MBot Services

The following services run the code that the robot needs. The service of interest depends on your problem.

* `mbot-lcm-serial.service`: This runs the server that communicates between the RPi and the Pico. Check this service if the wheels aren't responding to drive commands or if you can't read the odometry.
* `mbot-rplidar-driver.service`: This controls the Lidar driver. Check this service if SLAM isn't working or if you can't read Lidar data.
* `mbot-bridge.service`: This runs the MBot Bridge server needed to use the [MBot Bridge API](/docs/tutorials/bridge). Check this service if you are getting errors about websocket connections when using the API.
* `mbot-slam.service`: This runs SLAM. Check this service if SLAM is not responding.
* `mbot-motion-controller.service`: This generates motion commands to follow paths. Check this if you are publishing a path but the robot is not following it correctly.

---

### Mapping & Localization Problems

If you are toggling localization on and then it is immediately toggling off again, or if no map is being made in mapping mode, something is going wrong with SLAM.

Check the following, in this order:
1. **Is your Lidar plugged in?** SLAM needs the Lidar scan to work!
2. **Can you drive your robot?** If not, it is likely that odometry is not working either, and SLAM needs odometry to work. See the [Hardware Troubleshooting Guide](/docs/hardware/troubleshooting) to fix it.

Lidar spinning and Robot Control Board working but SLAM still isn't working? Try these steps:
3. **Restart your robot.** If any program got into a funny state or crashed, a reboot will fix it. If the problem persists, follow the next steps.
4. [**Check the logs and services**](#checking-service-status). These instructions also tell you how to get a log to send to course staff for help if your problems persist.
5. [**Check LCM channels**](#viewing-lcm-channels). If you can't find the issue in the services, you might check that all the correct data is being published. Do you see the Lidar scan and odometry data coming in?

## Networking Problems
{: .line}

<i class="fas fa-tools"></i>&nbsp;&nbsp;*Coming soon!*
{: .notice--danger}
