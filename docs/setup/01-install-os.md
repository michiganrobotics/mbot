---
layout: single
title: "MBot Setup: Installing the OS"
toc: true

# Public image links
mbot_base_rpi_os_link: https://www.dropbox.com/scl/fi/5s7t0tnf2bqjifuchb5ia/2024-08-22-mbot-base-bookworm.img.gz?rlkey=pvy1z6mb0ybgj5o0cf1p7yv7x&st=t395qrqn&dl=0
mbot_full_classic_rpi_os_link: ""
mbot_full_omni_rpi_os_link: https://www.dropbox.com/scl/fi/11c4q6zhhv6rpcvvm47sd/2024-08-22-mbot-full-omni-bookworm.img.gz?rlkey=7zrekoep72wvqpq0p9xj0xwcf&st=2ikaw15b&dl=0
---

To configure a new robot, you must first flash a new SD card with the robot's image.

**Students:** Check with your instructor for the correct image download link.
{: .notice--warning}

## Prerequisites

You will need:
1. A way to read and write to a Micro SD card (you can use a laptop with an SD card slot or a USB adapter),
2. An MBot Raspberry Pi OS image.

Standard images for the MBot can be downloaded from here:

<div style="text-align: center;">
    <a href="{{ page.mbot_base_rpi_os_link }}" class="btn btn--info" target="_blank">
        <i class="fas fa-download"></i>&nbsp;&nbsp; MBot Base Image
    </a>
    <a href="{{ page.mbot_full_classic_rpi_os_link }}" class="btn btn--info inactive">
        <i class="fas fa-download"></i>&nbsp;&nbsp; MBot Full Image (Classic)
    </a>
    <a href="{{ page.mbot_full_omni_rpi_os_link }}" class="btn btn--info" target="_blank">
        <i class="fas fa-download"></i>&nbsp;&nbsp; MBot Full Image (Omni)
    </a>
</div>

**Which image should I use?** The "Full" images have all the MBot code installed, so you can start driving, making maps, and programming your robot out of the box! The "Base" image has no MBot code on it. You will need to [setup the image](/docs/setup/new-image) with any code that you need.
{: .notice--info}

**Note** *Classic Full Image coming soon!*
{: .notice--danger}

## Instructions

To install the OS image on the SD card, follow these instructions:

1. **Download the image.** This might take some time because the file is large. Make sure you have about 4GB available.
2. **Download [Balena Etcher](https://etcher.balena.io/){:target="_blank"}.** This is a tool for flashing OS images onto SD cards.
3. **Flash your SD card.** Launch Etcher and insert the SD card into your laptop.

    **Tip:** If you are using an SD card adapter, ensure that the switch on the adapter is not in "Lock" mode, which will make the SD card read-only.
    {: .notice--info}

    Select the correct device from Etcher, and navigate to the image you downloaded. Then press "Flash!". This process can take up to 30 minutes.

    ![Flash the SD card](/assets/images/setup/flash_sd.png){:style="width:500px;" .align-center}

**Flash failed?** If the flash is not successful, trying a second time might fix it. If it continues to fail, you can try another SD card.
{: .notice--warning}


[**Next Step:** Configure your image](/docs/setup/02-configuration){: .btn .btn--inverse .align-right}
