---
layout: single
title: "MBot Setup: Calibrating & Flashing"
toc: true
---

Each robot needs to be individually calibrated in order to control it. Once it's calibrated, the firmware can be flashed onto the robot. You will need to flash programs onto the Pico to calibrate and load the firmware onto your robot.

## 1. Download the Firmware

First, download the correct firmware type for your MBot. You will need to select the type (if you aren't sure which type of MBot you have, see [Hardware](/docs/hardware) ) and some details on the configuration. Use the selector below to pick your type, then download the correct firmware files.

<div class="firmware-selector">
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

**TODO:** Add links to the firmware.
{: .notice--danger}

<div class="message" id="message"></div>

### What's my encoder resolution?
{: .no_toc }

There are three possible encoders, each with a different resolution. Check the back of the motors on your MBot to determine which one you have.

<div class="image-row">
  <img src="/assets/images/setup/encoder-48.jpg" alt="Motors with encoder resolution 48." style="width: 30%;"/>
  <img src="/assets/images/setup/encoder-40.jpg" alt="Motors with encoder resolution 40." style="width: 30%;"/>
  <img src="/assets/images/setup/encoder-20.jpg" alt="Motors with encoder resolution 20." style="width: 30%;"/>
</div>

**Tip:** The encoder with resolution 48 has a sensor protruding parallel to the board. The encoder with resolution 40 has a *blue* board, while the encoder with resolution 20 has a *green* board.
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

## 2. Upload the Firmware to the MBot

1. Connect to the robot in VSCode.
2. Select "Open Folder" then open the Home folder, `/home/mbot`.
3. Drag and drop all the firmware files onto the File Explorer panel to copy the firmware onto the robot.

## 3. Calibrate the MBot

We will now flash the calibration script onto the Pico to calibrate it before we flash it with the firmware.

The calibration script detects the motor and encoder polarity and then calibrates the motor coefficients. The robot will move around for this step so you will need clear space on the floor (preferably on the same type of surface that you plan to use the robots on).

**Warning:** *Do not run the calibration script with the MBot on a table!!*
{: .notice--warning}

To calibrate the robot, do:
```bash
sudo mbot-upload-firmware flash mbot_calibrate_<TYPE>.uf2
```

**Got an error?** You may need to [manually put the board into Flashing mode](#manual-flashing-mode) before you run the above command.
{: .notice--info}

The Pico will reboot automatically, and will then run its calibration routine. *Don't touch the robot while it does this procedure.* The calibration procedure looks like this:

<iframe class="aligh-center" width="560" height="315" src="https://www.youtube.com/embed/Fl2M0zanTJc?si=LukUDRFrAkW_Dnkt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Manual Flashing Mode

If you get the error:
```bash
$ No accessible RP2040 devices in BOOTSEL mode were found.
```
you may not have the ability to automatically put your MBot Control Board in "flashing" mode. You need to manually put the robot in flashing more before you run the calibration command.

1. Locate the "BOOTSEL" and "RST" buttons on the board (short for "Boot Select" and "Reset").
    ![BOOTSEL Button](/assets/images/setup/bootsel-location.jpg){:style="width:800px;" .align-center}
2. Hold down both "RST" and "BOOTSEL"
3. Release "RST" *then* "BOOTSEL" to put the board into flashing mode.
4. Run the upload script again.

## 4. Flash the Firmware

**Flash the MBot Firmware onto the Pico.** The calibration script will have saved parameters onto the Pico's memory. We can now flash the firmware that will run on the Pico during operation.

**Do you need to manually put your MBot Control Board in Flashing Mode?** If you needed to manually put the board in flashing mode during calibration, you will need to do this again before running the next command. See [the manual flashing instructions above](#manual-flashing-mode).
{: .notice--info}

To flash the MBot Control Board with the firmware, do:
```bash
sudo mbot-upload-firmware flash mbot-<TYPE>.uf2
```

## 5. Test your Setup

**Your robot is ready!** [Drive the robot](/docs/tutorials/drive) to make sure your firmware is working as expected.

**Something not right?** If your robot doesn't drive properly, you may have a hardware issue. See the [debugging tips](/docs/troubleshooting) to check for hardware issues.
{: .notice--info}

[**Previous Step:** Configure your image](/docs/setup/02-configuration){: .btn .btn--inverse .align-left}
[**Next Step:** Test your setup!](/docs/tutorials/drive){: .btn .btn--inverse .align-right}


<script>
    let MBOT_TYPE = "CLASSIC";
    let ENC_RES = 48;
    let OMNI_WHEEL_DIAMETER = 96;

    function selectOption(cell) {
        // Deselect previously selected cell in the row
        var row = cell.parentElement;
        var cells = row.getElementsByClassName("option-cell");
        for (var i = 0; i < cells.length; i++) {
            cells[i].classList.remove('selected');
        }

        // Select the clicked cell
        cell.classList.add('selected');
    }

    function selectType(cell, val) {
        selectOption(cell);

        // Store the selected option for the row
        MBOT_TYPE = val;

        // Update the message display
        updateMessages();

        // Check if "Option B" is selected
        toggleOmniElements(MBOT_TYPE == "OMNI");
    }

    function selectEncoderRes(cell, val) {
        selectOption(cell);

        // Store the selected option for the row
        ENC_RES = val;

        // Update the message display
        updateMessages();
    }

    function selectWheelDiameter(cell, val) {
        selectOption(cell);

        // Store the selected option for the row
        OMNI_WHEEL_DIAMETER = val;

        // Update the message display
        updateMessages();
    }

    function updateMessages() {
      var messageDiv = document.getElementById('message');
      var messages = "MBot Type: " + MBOT_TYPE + " Encoder Resolution: " + ENC_RES;
      if (MBOT_TYPE === "OMNI") {
        messages += " Wheel Diameter: " + OMNI_WHEEL_DIAMETER;
      }
      messageDiv.innerHTML = messages;
    }

    function toggleOmniElements(show) {
      var omniElements = document.getElementsByClassName('show-omni');
      for (var i = 0; i < omniElements.length; i++) {
        if (show) {
          omniElements[i].classList.remove('hidden');
        } else {
          omniElements[i].classList.add('hidden');
        }
      }
    }

</script>
