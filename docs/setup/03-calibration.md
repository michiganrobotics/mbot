---
layout: single
title: "MBot Setup: Calibrating & Flashing"
toc: true

# Versions for the firmware.
mbot_firmware_version: v1.0.0
---

Each robot needs to be individually calibrated in order to control it. Once it's calibrated, the firmware can be flashed onto the robot. You will need to flash programs onto the Pico to calibrate and load the firmware onto your robot.

## 1. Download the Firmware

First, download the correct firmware type for your MBot. You will need to select the type (if you aren't sure which type of MBot you have, see [Hardware](/docs/hardware)) and some details on the configuration. Use the selector below to pick your type, then download the correct firmware files.

<div class="table-selector firmware-selector">
    <div class="row">
      <div class="label-cell">MBot Type</div>
      <div class="option-cell" onclick="selectType(this, 'CLASSIC')">Classic</div>
      <div class="option-cell" onclick="selectType(this, 'OMNI')">Omni</div>
    </div>
    <div class="row">
      <div class="label-cell">Encoder Resolution
        <a href="#whats-my-encoder-resolution" class="info-icon"><i class="fas fa-info-circle"></i></a>
      </div>
      <div class="option-cell" onclick="selectEncoderRes(this, 48)">48</div>
      <div class="option-cell" onclick="selectEncoderRes(this, 40)">40</div>
      <div class="option-cell" onclick="selectEncoderRes(this, 20)">20</div>
    </div>
    <div class="row hidden show-omni">
      <div class="label-cell">Omni Wheel Radius
        <a href="#whats-my-wheel-radius" class="info-icon"><i class="fas fa-info-circle"></i></a>
      </div>
      <div class="option-cell" onclick="selectWheelDiameter(this, 96)">96mm</div>
      <div class="option-cell" onclick="selectWheelDiameter(this, 101)">101mm</div>
    </div>
</div>

<div style="text-align: center;">
    <a href="#" id="btn-calibration" class="btn big download inactive">
        Calibration <br/> <i class="fas fa-ruler"></i>
    </a>
    <a href="#" id="btn-firmware" class="btn big download inactive">
        Firmware <br/> <i class="fas fa-cogs"></i>
    </a>
    <a href="#" id="btn-motor-test" class="btn big download inactive">
        Motor Test <br/> <i class="fas fa-cog"></i>
    </a>
    <a href="https://github.com/mbot-project/mbot_firmware/releases/download/{{ page.mbot_firmware_version }}/mbot_encoder_test.uf2" id="btn-motor-test" class="btn big download btn--info">
        Encoder Test <br/> <i class="fas fa-eye"></i>
    </a>
</div>

Or, on the robot, type:
<div class="language-bash highlighter-rouge" >
<div id="wget-command" class="highlight">
    <pre class="highlight"><code>wget [MAKE A SELECTION]
wget [MAKE A SELECTION]</code></pre>
</div>
</div>

### What's my encoder resolution?
{: .no_toc }

There are three possible encoders, each with a different resolution. Check the back of the motors on your MBot to determine which one you have.

<div class="image-row">
  <img src="/assets/images/setup/encoder-48.jpg" alt="Motors with encoder resolution 48." style="width: 30%;"/>
  <img src="/assets/images/setup/encoder-40.jpg" alt="Motors with encoder resolution 40." style="width: 30%;"/>
  <img src="/assets/images/setup/encoder-20.jpg" alt="Motors with encoder resolution 20." style="width: 30%;"/>
</div>

**Tip:** The encoder with resolution 48 has a sensor protruding perpendicular to the board. The encoder with resolution 40 has a *blue* board, while the encoder with resolution 20 has a *green* board.
{: .notice--info}

<div class="show-omni hidden" markdown=1>

### What's my wheel radius?
{: .no_toc }

There are two possible Omni wheels, with different diameters. Check your wheels to determine which ones you have.

<div class="image-row">
  <img src="/assets/images/setup/omni-wheel-96.jpg" alt="Omni wheels with 96mm diameter." style="width: 45%;"/>
  <img src="/assets/images/setup/omni-wheel-101.jpg" alt="Omni wheels with 101mm diameter." style="width: 45%;"/>
</div>

**Tip:** The different wheels have different hole patterns, highlighted in blue in the images. You can use the hole patterns to select your wheel instead of measuring.
{: .notice--info}

</div>

## 2. Calibrate the MBot

We will now flash the calibration script onto the Pico to calibrate it before we flash it with the firmware.

The calibration script detects the motor and encoder polarity and then calibrates the motor coefficients. The robot will move around for this step so you will need clear space on the floor (preferably on the same type of surface that you plan to use the robots on).

**Warning:** *Do not run the calibration script with the MBot on a table!!*
{: .notice--warning}

To calibrate the robot, do:
<div class="language-bash highlighter-rouge" >
<div id="calibrate-command" class="highlight">
    <pre class="highlight"><code>sudo mbot-upload-firmware flash mbot_calibrate_&lt;TYPE&gt;.uf2</code></pre>
</div>
</div>

**Got an error?** You may need to [manually put the board into Flashing mode](#manual-flashing-mode) before you run the above command.
{: .notice--info}

The Pico will reboot automatically, and will then run its calibration routine. *Don't touch the robot while it does this procedure.* The calibration procedure looks like this for the Omni robot:

<iframe class="aligh-center" width="560" height="315" src="https://www.youtube.com/embed/Fl2M0zanTJc?si=LukUDRFrAkW_Dnkt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Manual Flashing Mode

If you get the error:
```bash
$ No accessible RP2040 devices in BOOTSEL mode were found.
```
you may not have the ability to automatically put your MBot Control Board in "flashing" mode. You need to manually put the robot in flashing more before you run the calibration command.

1. Locate the "BOOTSEL" and "RST" buttons on the board (short for "Boot Select" and "Reset").
    ![BOOTSEL Button](/assets/images/setup/bootsel-location.png){:style="width:800px;" .align-center}
2. Hold down both "RST" and "BOOTSEL"
3. Release "RST" *then* "BOOTSEL" to put the board into flashing mode.
4. Run the upload script again.

## 3. Flash the Firmware

**Flash the MBot Firmware onto the Pico.** The calibration script will have saved parameters onto the Pico's memory. We can now flash the firmware that will run on the Pico during operation.

**Do you need to manually put your MBot Control Board in Flashing Mode?** If you needed to manually put the board in flashing mode during calibration, you will need to do this again before running the next command. See [the manual flashing instructions above](#manual-flashing-mode).
{: .notice--info}

To flash the MBot Control Board with the firmware, do:
<div class="language-bash highlighter-rouge" >
<div id="firmware-command" class="highlight">
    <pre class="highlight"><code>sudo mbot-upload-firmware flash mbot-&lt;TYPE&gt;.uf2</code></pre>
</div>
</div>

## 4. Test your Setup

**Your robot is ready!** [Drive the robot](/docs/tutorials/drive) to make sure your firmware is working as expected.

**Something not right?** If your robot doesn't drive properly, you may have a hardware issue. See the [debugging tips](/docs/troubleshooting) to check for hardware issues.
{: .notice--info}

[**Previous Step:** Configure your image](/docs/setup/02-configuration){: .btn .btn--inverse .align-left}
[**Next Step:** Test your setup!](/docs/tutorials/drive){: .btn .btn--inverse .align-right}

<script>
    // The external script needs the firmware version to be available.
    const mbotFirmwareVersion = "{{ page.mbot_firmware_version }}";
</script>
<script src="{{ '/assets/js/firmware_selector.js' | relative_url }}"></script>
