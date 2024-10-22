---
layout: single
title: The MBot Bridge API
toc: true
last_modified_at: 2024-08-26
---

The MBot Bridge API is a simple interface to control the robot and read its data. The API is available in both [C++](#mbot-c-api) and [Python](#mbot-python-api).

---

## MBot Bridge Server
{: .line }

The API communicates with the *MBot Bridge Server*, which acts as a bridge between your code and the MBot's programs. The MBot Bridge Server should be running before you run any code that uses the API. On the *full* MBot images (available on the [flashing an image guide](/docs/setup/01-install-os)), the bridge should be running automatically.

---

## MBot C++ API
{: .line }

To use the API's robot functions, you must first create a *robot object*. This is done as follows:
```cpp
#include <mbot_bridge/robot.h>

int main(int argc, const char *argv[])
{
    // Initialize the robot.
    mbot_bridge::MBot my_robot;
}
```
All the functions in the API will use this robot object.

<div class="notice--info">
    <i class="fas fa-cogs"></i>&nbsp;&nbsp;<strong>Using this API:</strong> To use the functions below, you should use the object that you initialized previously, followed by a dot, followed by the function and pass it the correct variables. For example, to drive the robot we just declared forward at 0.5 meters per second, do:
    <div class="language-cpp highlighter-rouge" ><div class="highlight">
        <pre class="highlight"><code>my_robot.drive(0.5, 0, 0);</code></pre>
    </div></div>
    Do <i>not</i> use the class name to call the functions! For example, <code>MBot::drive(0.5, 0, 0)</code> will <i>not</i> work. The documentation is written this way to make it clear that these functions come from the MBot class.
</div>

---

### Sending Robot Commands

The following functions can be used to send robot commands.

#### Functions
{: .no_toc }

{: .api }
* void MBot::drive(const float vx, const float vy, const float wz)
  {: .fn}

    Sends a drive command to the robot.

    **Warning:** Once `drive` is called, the robot will continue to drive at the given speed until you tell it to stop! Use `stop` to stop the robot.

    Parameters:
    {: .sub-head}

    {: .params}
    * **vx**: The x-component of the robot's velocity in meters per second.
    * **vy**: The y-component of the robot's velocity in meters per second.
    * **wz**: The angular (turning) velocity of the robot in radians per second.

* void MBot::stop()
  {: .fn}

    Stops the robot by sending a zero velocity command.

    This is the same as calling `drive(0, 0, 0)`.

* void MBot::resetOdometry()
  {: .fn}

    Resets the robot odometry to zero.

* void MBot::drivePath(const std::vector&lt;std::array&lt;float, 3&gt; &gt;& path)
  {: .fn}

    Sends a path to the motion controller to follow.

    This function will return right away, while the robot is still following the path. If you have code that should only run when the path is completed, you must check if the path is finished executing separately.

    Parameters:
    {: .sub-head}

    {: .params}
    * **std::vector<std::array<float, 3> > path**: A vector of arrays of length 3, each of which contain a coordinate in the path to be followed in form `[x, y, theta]`, where `x` and `y` are in meters and `theta` is in radians.

---

### Reading Robot Data

The following functions can be used to read data from the robot.

#### Functions
{: .no_toc }

{: .api }
* void MBot::readLidarScan(std::vector&lt;float&gt;& ranges, std::vector&lt;float&gt;& thetas)
  {: .fn}

    Reads the latest Lidar scan from the robot and places the resulting ranges and angles in the vectors `ranges` and `thetas`.

    The vector `ranges` contains the length of each ray in the scan, and `thetas` contains the angle (in radians) of each ray. The vectors should have the same number of elements. If there is no scan available, a warning will be printed and both vectors will have length zero.

    **Warning:** Some rays in the scan never return (for example, if there are no obstacles, or the ray bounces off a material and goes in a different direction). If the ray does not return, its range will be zero. Make sure you check for rays with zero range and ignore them.

* std::vector&lt;float&gt; MBot::readOdometry()
  {: .fn}

    Reads the latest robot pose computed using odometry.

    The odometry pose is measured from the pose where the robot was turned on, or at which odometry was last reset. You might want to call `resetOdometry()` at the beginning of a program using odometry data.

    **Warning:** Odometry will not be accurate over long trajectories.

    Returns:
    {: .sub-head}

    A vector with three elements containing the position (in meters) and angle (in radians) of the robot (i.e. `[x, y, theta]`). If there is no odometry data available, a warning will be printed to the screen and the vector returned will have length zero.

* std::vector&lt;float&gt; MBot::readSlamPose()
  {: .fn}

    Reads the latest robot pose computed using Simultaneous Localization and Mapping (SLAM).

    SLAM must be active and the robot must be localized in a good map of its environment to use this function. See the [mapping guide](/mbot/mapping) for instructions. The SLAM pose is measured from the pose where the robot was when the mapping process started.

    Returns:
    {: .sub-head}

    A vector with three elements containing the position (in meters) and angle (in radians) of the robot (i.e. `[x, y, theta]`). If there is no SLAM data available, a warning will be printed to the screen and the vector returned will have length zero.

---

## MBot Python API
{: .line }

To use the API's robot functions, you must first create a *robot object*. This is done as follows:
```python
from mbot_bridge.api import MBot

# Initialize the robot.
my_robot = MBot()
```
All the functions in the API will use this robot object.

<div class="notice--info">
    <i class="fas fa-cogs"></i>&nbsp;&nbsp;<strong>Using this API:</strong> To use the functions below, you should use the object that you initialized previously, followed by a dot, followed by the function and pass it the correct variables. For example, to drive the robot we just declared forward at 0.5 meters per second, do:
    <div class="language-python highlighter-rouge" ><div class="highlight">
        <pre class="highlight"><code>my_robot.drive(0.5, 0, 0)</code></pre>
    </div></div>
    Do <i>not</i> use the class name to call the functions! For example, <code>MBot.drive(0.5, 0, 0)</code> will <i>not</i> work. The documentation is written this way to make it clear that these functions come from the Robot class.
</div>

---

### Sending Robot Commands

The following functions can be used to send robot commands. None of them return data.

#### Functions
{: .no_toc }

{: .api }
* MBot.drive(vx, vy, wz)
  {: .fn}

    Sends a drive command to the robot.

    **Warning:** Once `drive` is called, the robot will continue to drive at the given speed until you tell it to stop! Use `stop` to stop the robot.

    Parameters:
    {: .sub-head}

    {: .params}
    * **vx**: The x-component of the robot's velocity in meters per second.
    * **vy**: The y-component of the robot's velocity in meters per second.
    * **wz**: The angular (turning) velocity of the robot in radians per second.

* MBot.stop()
  {: .fn}

    Stops the robot by sending a zero velocity command.

    This is the same as calling `drive(0, 0, 0)`{: .language-python}.

    **Returns:** None

* MBot.reset_odometry()
  {: .fn}

    Resets the robot odometry to zero.

* MBot.drive_path(path)
  {: .fn}

    Sends a path to the motion controller to follow.

    This function will return right away, while the robot is still following the path. If you have code that should only run when the path is completed, you must check if the path is finished executing separately.

    Parameters:
    {: .sub-head}

    {: .params}
    * **path**: A list of coordinates (lists or tuples) in the path to be followed. If the coordinates have length 2, the values are assumed to be in form `[x, y]`, where `x` and `y` are in meters, with an angle of zero by default.  If the coordinates have length 3, the data is in form `[x, y, theta]`, where `x` and `y` are in meters and `theta` is in radians.

---

### Reading Robot Data

The following functions can be used to read robot commands. None of the reading functions take parameters.

#### Functions
{: .no_toc }

{: .api }
* MBot.read_lidar()
  {: .fn}

    Reads the latest Lidar scan from the robot.

    Returns:
    {: .sub-head}

    A tuple, `(ranges, thetas)`, where `ranges` contains the length of each ray in the scan, and `thetas` contains the angle (in radians) of each ray. The lists should have the same number of elements. If there is no scan available, a warning will be printed and both lists will have length zero.

    **Warning:** Some rays in the scan never return (for example, if there are no obstacles, or the ray bounces off a material and goes in a different direction). If the ray does not return, its range will be zero. Make sure you check for rays with zero range and ignore them.

* MBot.read_odometry()
  {: .fn}

    Reads the latest robot pose computed using odometry.

    The odometry pose is measured from the pose where the robot was turned on, or at which odometry was last reset. You might want to call `reset_odometry()` at the beginning of a program using odometry data.

    **Warning:** Odometry will not be accurate over long trajectories.

    Returns:
    {: .sub-head}

    A list with three elements containing the position (in meters) and angle (in radians) of the robot (i.e. `[x, y, theta]`). If there is no odometry data available, a warning will be printed to the screen and the list returned will have length zero.

* MBot.read_slam_pose()
  {: .fn}

    Reads the latest robot pose computed using Simultaneous Localization and Mapping (SLAM).

    SLAM must be active and the robot must be localized in a good map of its environment to use this function. See the [mapping guide](/mbot/mapping) for instructions. The SLAM pose is measured from the pose where the robot was when the mapping process started.

    Returns:
    {: .sub-head}

    A list with three elements containing the position (in meters) and angle (in radians) of the robot (i.e. `[x, y, theta]`). If there is no SLAM data available, a warning will be printed to the screen and the list returned will have length zero.

* MBot.read_hostname()
  {: .fn}

    Reads the robot's hostname.

    Returns:
    {: .sub-head}

    A string containing the robot's hostname.

