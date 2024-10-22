---
layout: single
title: Mapping & Localization
toc: true
last_modified_at: 2024-08-26
---

This tutorial will go over how to build a map of your current environment using SLAM.

## Prerequisites

This tutorial assumes that you can connect to your robot's web app and that you have your robot's IP address. It also assumes that you have the MBot SLAM service installed.

**Not sure if you have MBot SLAM?** On your robot, type `mbot-service status mbot-slam.service`. If the service is *not found* or if it is *not active*, you won't be able to use mapping and localization on your robot.
{: .notice--info}

**Don't know your IP?** See the [tutorial on finding out your robot's IP](/docs/tutorials/get-ip).
{: .notice--info}

---

## Building a Map

### 1. Access the Web App

First, we want to open the MBot Web App. Type your robot's IP address into your browser. This should open the web app, shown below:

![Starting Map](/assets/images/tutorials/mapping/mapp_starting.png){:style="width:800px;" .align-center}

If the robot is connected and working properly, you should be able to see the green "Connected" sign.

### 2. Turn on mapping mode

Toggle **Localization Mode** to on. You should see the map currently saved on the robot on the right. If you have never made a map before, it might be blank. If you don't see this or if localization mode toggles off again, make sure your LiDAR is spinning, and try restarting your robot.

When localization is enabled, you should see the **Mapping Mode** switch. Place your robot in your physical environment, and when you are ready to start mapping, toggle **Mapping Mode** to on. This will give you a popup stating "This will overwrite the current map. Are you sure?" Press **OK**.

![Mapping Mode](/assets/images/tutorials/mapping/mapping_mode.png){:style="width:800px;" .align-center}

### 3. Build a map

Now you should be ready to build your map. The idea is to drive around the physical space until you have an accurate reading of the physical environment with no missing borders. To drive around, toggle the **Drive Mode** switch.

<div class="notice--info">
    <i class="fas fa-cogs"></i>&nbsp;&nbsp;<strong>Driving Tips:</strong> Make sure you drive slowly and give the robot some time to build its current environment before you drive again. Try to limit jerky movements and excessive turning. Forward and backward movement works best. DO NOT bump into any of the obstacles. If you do, reset your map and try again.
</div>

The image below shows a good mapping of the environment, where the map is consistent with the physical space. There are also no incomplete edges or shifts.

![Good Map](/assets/images/tutorials/mapping/good_map.png){:style="width:800px;" .align-center}

The image below shows a bad mapping of the same environment above, where the map is inconsistent, and the edges are not clear. If your map looks like this, you might want to reset it using the "Reset Map" button.

![Bad Map](/assets/images/tutorials/mapping/bad_map.png){:style="width:800px;" .align-center}

### 4. Switch to localization mode

Once you have a good map of the environment, turn off mapping mode. The map will be automatically saved on the robot in file `~/current.map`.

You can reuse this map to localize in the same environment if you restart the robot or toggle localization on and off again. You should make sure the robot is correctly localized in the map when localization is turned back on.

If you want to download your map for testing off the robot, click on the **Download Map** button to save it.

---

## Video Tutorial

This video tutorial goes through the process outlined above.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LzMrtliWKR8?si=mJmqGSr2yx0oF7xy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

