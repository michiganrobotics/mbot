---
layout: single
title: "MBot Setup: Setting up a new image (Advanced)"
toc: true
---

**Students:** You should not need to set up an image from scratch! Check with your instructor for the link to the OS image for your class. Then, start the setup process by [installing the image](/docs/setup/01-install-os).
{: .notice--warning}

This guide is intended to help you set up a new Raspberry Pi image from the base MBot image.

**Note:** This guide has been tested with the *Raspberry Pi 5*.
{: .notice--info}

**Note:** The base image has the following login credentials:
* Username: `mbot`
* Password: `i<3robots!`

*Coming soon: Instructions for setting up from the base Raspian image*

---

## 1. Flash the image

1. Download the base MBot Raspberry Pi image `mbot-rpi-base-v1.img.xz` from this [link](https://www.dropbox.com/scl/fi/f9jijqd5jctr3jmo62873/mbot-RPi5-base-Aug24.img.xz?rlkey=eqbjgdkby7md3tfei1vl742ep&st=kqrqg87g&dl=0).
    - We use a custom image with RPiOS based on Debian 12 Bookworm
2. Download [Balena Etcher](https://etcher.balena.io/) then flash the OS image to your SD card. Plug in the SD card to your laptop using SD card reader then following the steps in Balena Etcher.

You now have an SD card with the OS image flashed on it for the Raspberry Pi. Keep the card in your laptop for now and proceed to the next step.

**Warning:** If you use a Windows computer, you may see many file explorer windows and error messages pop up when you insert the SD card and when you finish flashing. Those are expected, and you can safely close the file explorer windows and dismiss the error messages. However, if Windows asks you to format the SD card through a popup dialog box, close the message through the "Cancel" button and **do not** click the "Format Disk" button.
{: .notice--danger}

---

## 2. Configure the image

If the flash succeeded, the SD card will have two partitions: a 134MB Volume formatted as fat32 and a 16GB Volume formated as ext4. When you insert the SD card in your laptop, it should mount the smaller fat32 partition.  Find the file `mbot_config.txt` on this volume and modify it as follows:
- Set `mbot_hostname` to a unique hostname for your robot.
    **Tip:** If you are setting up an MBot fleet (e.g. for a course) you may want to set a naming convention for the robots to keep track of them more easily, like `mbot-fleetname-XX`. You can then fill in `XX` for each robot later from your image.
    {: .notice--info}

### Set up WiFi

For the following steps, you will need to connect to your robot remotely. To do that, your laptop and the robot must be on the *same WiFi network*.

See the [Networking Guide](/docs/setup/networking) to choose how your robot will connect to the network.
{: .notice--info}

**If you are using a standard password-protected network:** Enter your WiFi details in `mbot_config.txt`.
* `new_wifi_ssid` is the *name* of the WiFi network.
* `new_wifi_password` is the *password* for the WiFi network.

**If you are using an institutional or enterprise network:** If your WiFi connection requires you to log on (e.g. a university WiFi network), you will need a monitor on first boot to log in to the WiFi. Proceed to [Step 3](#3-boot-the-pi5).

### Determine how to get your IP address

In order to connect to the MBot in the next steps, you will need a way of knowing the robot's IP address. See the [Networking Guide](/docs/setup/networking) for details on how to make this choice.

**If you are using the MBot's display or getting the IP from the SD Card:** This is set up by default on the MBot base image. No further action is needed. Go to [Step 3](#3-boot-the-pi5).

**If you are using an IP registry:** Enter the details of your IP registry in `mbot_config.txt`:
* `mbot_ip_list_url` is the URL to the IP registry on GitHub for your fleet of robots. It should be in the form `https://github.com/<my-org>/mbot_ip_registry.git`.
* `mbot_ip_list_user` is the username for the account that will manage publishing the data to the registry for your fleet.
* `mbot_ip_list_token` is a token for the GitHub account.

    See the [Networking Guide](/docs/setup/networking) for details on setting up an IP registry if you have not already done so.
    {: .notice--info}

---

## 3. Boot the robot

1. Insert the SD card into your Raspberry Pi. The SD card slot is located on the bottom on the side opposite the USB ports.

    <a class="image-link" href="https://projects-static.raspberrypi.org/projects/raspberry-pi-setting-up/94c43714c0e0536158409093ba28931e0fa5c9bc/en/images/pi-sd.png">
    <img src="https://projects-static.raspberrypi.org/projects/raspberry-pi-setting-up/94c43714c0e0536158409093ba28931e0fa5c9bc/en/images/pi-sd.png" alt="Image from RPi Foundation" style="max-width:300px;"/>
    </a>

2. Turn on the power bank and ensure that the power cables are connected as per the assembly guide.

3. **If you need to manually log in to WiFi:** Connect your robot to a monitor, keyboard and mouse. Log in to WiFi manually. Restart the robot.

    **If you set up a WiFi connection in [Step 2](#2-configure-the-image):** Skip to #4.
4. Allow a minute or so for the robot to initialize. Once the initialization is complete, get the MBot's IP address from the MBot display or from the IP registry.

## 4. Connect using VSCode Remote

In this step, we are going to establish remote access using the VSCode extension. After this setup, you will be able to access the Raspberry Pi remotely using your laptop.

1. Open VSCode on your laptop, and install the `Remote - SSH` extension

    <a class="image-link" href="/assets/images/setup/vscode_ssh1.png">
    <img src="/assets/images/setup/vscode_ssh1.png" alt=" " style="max-width:600px;"/>
    </a>

2. After installing the `Remote - SSH` extension, a new "Remote Explorer" icon will appear on the side panel. This is where you can add the SSH connection to your mbot. Click the New Remote `+` icon as shown below:

    <a class="image-link" href="/assets/images/setup/vscode_ssh2.png">
    <img src="/assets/images/setup/vscode_ssh2.png" alt=" " style="max-width:600px;"/>
    </a>

3. When the prompt window pops up, enter the connection command: `ssh mbot@your_mbot_ip_address` as shown below.

    <a class="image-link" href="/assets/images/setup/vscode_ssh3.png">
    <img src="/assets/images/setup/vscode_ssh3.png" alt=" " style="max-width:500px;"/>
    </a>

4. Select the default config file. Note that different operating systems may have different paths, but this isn't necessarily a problem. Here in the image, we select the one that contains your username.

    <a class="image-link" href="/assets/images/setup/vscode_ssh4.png">
    <img src="/assets/images/setup/vscode_ssh4.png" alt=" " style="max-width:500px;"/>
    </a>

5. Navigate to the "Remote Explorer" tab and click the refresh button. You should see your MBot's IP address listed under the SSH section, indicating that your connection has been saved.
    - **To start a remote connection:** Click on "Connect in New Window" and enter the password `i<3robots!`. After this, your SSH session should be up and running.
    - **To end a remote connection:** Click on the tab at the bottom left corner of the VS Code window labeled SSH: xx.x.xxx.xx. A pop-up menu will appear with the option to "close remote connection".


At this point, you should be able to connect to your MBot using VSCode extension.
{: .notice--info }


## 5. Change the password

For network security, we encourage you to change your password once you have set up your MBot. The default password is `i<3robots!`, which everyone uses. You should pick a unique password for your fleet. Here's how to change your MBot's password:

1. Open a VSCode terminal in the VSCode Remote session to the robot on your laptop.
2. Enter this command: `passwd`. You will be prompted to enter your current password.
3. Next, you will be asked to enter your new password and retype it to confirm.
4. If the passwords match, you will see a message indicating that your password has been updated successfully.

The output will look like this:
```bash
$  passwd
Changing password for mbot.
Current password:
New password:
Retype new password:
passwd: password updated successfully
```

## 6. Install the MBot Code

This step will pull all the code utilities for the MBot Web App, SLAM, sensor drivers, and communication with the MBot Control Board.

1. **Clone the necessary repos.** You will need the following repos (you will need access to them):
    * [MBot LCM Base](https://github.com/mbot-project/mbot_lcm_base){:target="_blank"}
    * [RP Lidar Driver](https://github.com/mbot-project/rplidar_lcm_driver){:target="_blank"}
    * [MBot Bridge](https://github.com/mbot-project/mbot_bridge){:target="_blank"}

  In a terminal on the MBot (using a VSCode Remote session), do:
  ```bash
  mkdir ~/mbot_ws
  cd ~/mbot_ws
  git clone https://github.com/mbot-project/mbot_lcm_base.git
  git clone https://github.com/mbot-project/rplidar_lcm_driver.git
  git clone https://github.com/mbot-project/mbot_bridge.git
  ```

2. **Install the base MBot code.** This includes the message types and serial server which communicates between the MBot Control Board and the RPi using LCM. The install script will compile the code and install it onto the robot. It will also install a service to automatically start the serial server on startup.
    ```bash
    cd ~/mbot_ws/mbot_lcm_base/
    git checkout <vX.Y.Z>
    ./scripts/install.sh
    ```
3. **Install the MBot Web App.** The web app is a useful tool for commanding the robot from your laptop's browser.
    1. Download the latest web app release and unpack it:
        ```bash
        wget https://github.com/MBot-Project-Development/mbot_web_app/releases/download/v1.2.0/mbot_web_app-v1.2.0.tar.gz
        tar -xvzf mbot_web_app-v1.2.0.tar.gz
        ```
    2. Install the web app dependencies:
        ```bash
        cd mbot_web_app-v1.2.0/
        ./install_nginx.sh
        ./install_python_deps.sh
        ```
    3. Build and install the app:
        ```bash
        ./deploy_app.sh --no-rebuild
        ```
    4. It's now safe to delete the folder `mbot_web_app-v1.2.0/` and the tar file `mbot_web_app-v1.2.0.tar.gz`.

    **Checkpoint:** The web app should now be available by going to your browser and typing in the robot's IP address.
    {: .notice--info}

4. **Install the RPLidar driver.** To install the Lidar driver, do:
    ```bash
    cd ~/mbot_ws/rplidar_lcm_driver/
    git checkout <vX.Y.Z>
    ./scripts/install.sh
    ```
    This will pull some code dependencies, compile and install the code, and install a service to start the driver on startup.

5. **Install the MBot Bridge and API.** The MBot Bridge includes a server that bridges student code with the MBot software, as well as APIs in C++ and Python. Install it with:
    ```bash
    cd ~/mbot_ws/mbot_bridge/
    git checkout <vX.Y.Z>
    ./scripts/install.sh
    ```
    This installs the scripts and services needed to run the MBot Bridge Server and installs the MBot API and its dependencies.

6. **Optional: Install the MBot Autonomy code.** *TODO: Update instructions with binaries.* The autonomy code includes SLAM and a motion controller program. Install it with:
    ```bash
    cd ~/mbot_ws/mbot_autonomy/
    git checkout <vX.Y.Z>
    ./scripts/install.sh
    ```
    Again, this installs the binaries and services needed to run SLAM and the motor controller.


## Testing your setup

You test your setup by [calibrating the robot and flashing the firmware onto the MBot Control Board](/docs/setup/03-firmware). Then you should be able to [drive your robot](/docs/tutorials/drive).

---

## Generating an image

If you followed this guide to create a base image for your whole fleet of robots, follow these steps.

### Cleaning up your current image

You should first clean up your current image by deleting any data you don't want on all the robots in your fleet. Choose these as necessary:
* **Delete the source code.** You may want to delete the whole folder `~/mbot_ws` now that all the files are installed.
* **Remove your credentials from the WiFi network.** If you logged into your personal account on the WiFi, you should delete the connection to remove your credentials.
* **Set default configurations.** Set the robot hostname to a good default for your fleet in `mbot_config.txt`, and remove any WiFi information that does not involve the whole fleet. If your fleet will share an IP registry, leave that in.
* **Remove session-specific files.** You can safely delete `~/.vscode-server`.

### Creating the image

*Coming soon!*
