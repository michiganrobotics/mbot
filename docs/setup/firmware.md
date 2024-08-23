---
layout: single
title: "MBot Setup: Flashing the MBot Control Board"
toc: true
---

The MBot Control Board uses a Raspberry Pi Pico microcontroller for its processing. You can *flash firmware* onto the microcontroller in order to program it.

The main MBot firmware for the supported hardware, as well as calibration and test programs, are available on the [Firmware GitHub page](https://github.com/mbot-project/mbot_firmware/releases).

## Flashing Firmware

To flash firmware onto the MBot Control Board, you will need to download the firmware file onto the MBot's Raspberry Pi. This will have a `.uf2` extension.

From a terminal on the MBot's Raspberry Pi, do:
```bash
sudo mbot-upload-firmware flash <MY-FIRMWARE>.uf2
```
replacing `<MY-FIRMWARE>` with the name of the firmware file you downloaded.

**Getting an error?** If you see a message that says `No accessible RP2040 devices in BOOTSEL mode were found` when you run the script, you need to [manually put your Pico into boot mode](#manual-boot-mode) before you run the command.
{: .notice--warning}

**Note:** The `mbot-upload-firmware` script is installed as part of the MBot System Utilities. If you don't have it, install it from [`mbot_sys_utils`](https://github.com/mbot-project/mbot_sys_utils).
{: .notice--info}

### Manual Boot Mode

In order for the `mbot-upload-firmware` script to flash new firmware, it needs to be able to automatically reboot the Pico in `BOOTSEL` mode. To do this, the appropriate pins on the MBot Control Board need to be connected to the Raspberry Pi.

This picture shows the connection on the MBot Control Board that is required (the white and green wires):

![The cable needed to automatically flash the MBot Control Board](/assets/images/setup/flash_pico_wire.jpg){:style="max-width:400px;" .align-center}

If you try to run the `mbot-upload-firmware` script without this connection, and without manually putting the Pico in `BOOTSEL` mode, you will get the error:
```
No accessible RP2040 devices in BOOTSEL mode were found.
```

Luckily, we can *manually* boot the Pico into `BOOTSEL` mode, then run the script again. Follow these steps:
1. Locate the "BOOTSEL" and "RST" buttons on the board (short for "Boot Select" and "Reset").
    ![BOOTSEL Button](/assets/images/setup/bootsel-location.png){:style="width:800px;" .align-center}
2. Hold down both "RST" and "BOOTSEL"
3. Release "RST" *then* "BOOTSEL" to put the board into flashing mode.
4. Run the upload script:
    ```bash
    sudo mbot-upload-firmware flash <MY-FIRMWARE>.uf2
    ```

**Tip:** If you are missing the connector shown in the picture above, make sure to always manually put the Pico in `BOOTSEL` mode *before* flashing the Pico with the `mbot-upload-firmware` script.
{: .notice--info}

## Manually Flashing Firmware

You can also flash the firmware manually, through the Raspberry Pi desktop (e.g. through [NoMachine](/docs/tutorials/no-machine)), or from a laptop connected to the MBot Control Board through USB.

To manually flash firmware, you will need the firmware downloaded onto the device you are flashing from (the Raspberry Pi or your laptop). Then, follow these steps:
1. [Put the Pico into BOOTSEL mode](#manual-boot-mode).
2. The Pico should now show up as a device in the file explorer as a USB device (see Raspberry Pi below).
        ![Pico device in NoMachine](/assets/images/setup/pop-up-plug-in.png){:style="width:800px;" .centered }
3. Open the USB device in the file explorer.
4. Drag and drop the firmware you want to flash (it should end with a `.uf2` extension) into the folder. The Pico will reboot automatically, and will then run the script you flashed.
