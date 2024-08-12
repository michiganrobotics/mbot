---
layout: single
title: "MBot Setup: Installing the OS"
toc: true
---

To configure a new robot, you must first flash a new SD card with the robot's image.

**Students:** Check with your instructor for the correct image download link.
{: .notice--warning}

## Prerequisites

You will need:
1. A way to read and write to a Micro SD card (you can use a laptop with an SD card slot or a USB adapter),
2. An MBot Raspberry Pi OS image.

**TODO:** Include links to base images.
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
