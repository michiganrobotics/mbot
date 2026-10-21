---
layout: single
title: "MBot Setup: Flashing the MBot Control Board"
toc: true
last_modified_at: 2024-10-21
---

The MBot Control Board uses a Raspberry Pi Pico microcontroller for its processing. You can *flash firmware* onto the microcontroller in order to program it.

The main MBot firmware for the supported hardware, as well as calibration and test programs, are available on the [Firmware GitHub page](https://github.com/mbot-project/mbot_firmware/releases).

## Flashing Firmware

To flash the firmware onto the MBot Control Board, either download the firmware file to the Raspberry Pi, or compile it from the source code. The firmware file will have a .uf2 extension.

### 1. Put the Pico in BOOTSEL Mode
{: #1-manual-boot-mode}

For the `mbot-upload-firmware` script to flash new firmware, the Pico must be in `BOOTSEL` mode. Do this **every time** before you flash:
1. Locate the "BOOTSEL" and "RST" buttons on the board (short for "Boot Select" and "Reset").

    <a class="image-link" href="/assets/images/setup/bootsel-location.png">
    <img src="/assets/images/setup/bootsel-location.png" alt="BOOTSEL Button" style="max-width:600px;"/>
    </a>
2. Hold down both "RST" and "BOOTSEL"
3. Release "RST" *then* "BOOTSEL" to put the board into flashing mode.

**Tip:** The Pico stays in `BOOTSEL` mode until it is flashed or reset, so you can run the flash command right after pressing the buttons.
{: .notice--info}

### 2. Flashing the Firmware

From a terminal on the MBot's Raspberry Pi, do:
```bash
sudo mbot-upload-firmware flash <MY-FIRMWARE>.uf2
```
replacing `<MY-FIRMWARE>` with the name of the firmware file you downloaded. If you compiled from the source code, the file should be located in the `build` folder.

**Getting an error?** If you see a message that says `No accessible RP2040 devices in BOOTSEL mode were found` when you run the script, the Pico is not in `BOOTSEL` mode. [Put the Pico in BOOTSEL mode](#1-manual-boot-mode) and run the command again. <br/><br/>
**Still getting an error?** See [I can't flash the MBot Control Board](/docs/troubleshooting/#i-cant-flash-the-mbot-control-board) in the Troubleshooting Guide, or try [flashing the firmware from the file explorer](#manually-flashing-firmware).
{: .notice--warning}

**Note:** The `mbot-upload-firmware` script is installed as part of the MBot System Utilities. If you don't have it, install it from [`mbot_sys_utils`](https://github.com/mbot-project/mbot_sys_utils).
{: .notice--info}

## Manually Flashing Firmware

You can also flash the firmware manually, through the Raspberry Pi desktop (e.g. through [NoMachine](/docs/tutorials/no-machine)), or from a laptop connected to the MBot Control Board through USB.

To manually flash firmware, you will need the firmware downloaded onto the device you are flashing from (the Raspberry Pi or your laptop). Then, follow these steps:
1. [Put the Pico in BOOTSEL mode](#1-manual-boot-mode).
2. The Pico should now show up as a device in the file explorer as a USB device (see Raspberry Pi below).
        ![Pico device in NoMachine](/assets/images/setup/pop-up-plug-in.png){:style="width:800px;" .centered }
3. Open the USB device in the file explorer.
4. Drag and drop the firmware you want to flash (it should end with a `.uf2` extension) into the folder. The Pico will reboot automatically, and will then run the script you flashed.

