let MBOT_TYPE = "";
let ENC_RES = -1;
let OMNI_WHEEL_DIAMETER = -1;

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
    updateLinks();

    // Check if "Option B" is selected
    toggleOmniElements(MBOT_TYPE == "OMNI");
}

function selectEncoderRes(cell, val) {
    selectOption(cell);

    // Store the selected option for the row
    ENC_RES = val;

    // Update the message display
    updateLinks();
}

function selectWheelDiameter(cell, val) {
    selectOption(cell);

    // Store the selected option for the row
    OMNI_WHEEL_DIAMETER = val;

    // Update the message display
    updateLinks();
}

function updateLinks() {
    var btnCalibration = document.getElementById('btn-calibration');
    var btnFirmware = document.getElementById('btn-firmware');
    var btnMotorTest = document.getElementById('btn-motor-test');
    const root_url = `https://github.com/mbot-project/mbot_firmware/releases/download/${mbotFirmwareVersion}/`;

    // If the MBot Type is selected, we can add the link to the motor test.
    if (MBOT_TYPE.length > 0) {
        if (btnMotorTest.classList.contains('inactive')) {
                btnMotorTest.classList.remove('inactive');
                btnMotorTest.classList.add('btn--info');
            }
        if (MBOT_TYPE === "OMNI") {
            btnMotorTest.href = root_url + "mbot_omni_motor_test.uf2";
        }
        else if (MBOT_TYPE === "CLASSIC") {
            btnMotorTest.href = root_url + "mbot_classic_motor_test.uf2";
        }
    }
    // Check if the selections are all made.
    let selection_made = MBOT_TYPE.length > 0 && ENC_RES > 0;
    if (MBOT_TYPE === "OMNI") {
        selection_made = selection_made && OMNI_WHEEL_DIAMETER > 0;
    }

    if (selection_made) {
        if (btnCalibration.classList.contains('inactive')) {
            btnCalibration.classList.remove('inactive');
            btnCalibration.classList.add('btn--info');
        }

        if (btnFirmware.classList.contains('inactive')) {
            btnFirmware.classList.remove('inactive');
            btnFirmware.classList.add('btn--info');
        }

        var wgetCommand = document.getElementById('wget-command').querySelector('code');

        if (MBOT_TYPE === "CLASSIC") {
            const calib_file = `mbot_calibrate_classic_${mbotFirmwareVersion}_enc${ENC_RES}.uf2`;
            const main_file = `mbot_classic_${mbotFirmwareVersion}_enc${ENC_RES}.uf2`;
            btnCalibration.href = root_url + calib_file;
            btnFirmware.href = root_url + main_file;

            // Update the wget command text
            wgetCommand.textContent = `wget ${root_url + calib_file}\nwget ${root_url + main_file}`;
        }
        else if (MBOT_TYPE === "OMNI") {
            const suffix = `_enc${ENC_RES}_w${OMNI_WHEEL_DIAMETER}mm`;
            const calib_file = `mbot_calibrate_omni_${mbotFirmwareVersion}_${suffix}.uf2`;
            const main_file = `mbot_omni_${mbotFirmwareVersion}_${suffix}.uf2`;
            btnCalibration.href = root_url + calib_file;
            btnFirmware.href = root_url + main_file;

            // Update the wget command text
            wgetCommand.textContent = `wget ${root_url + calib_file}\nwget ${root_url + main_file}`;
        }
    }
    else {
        if (!btnCalibration.classList.contains('inactive')) {
            btnCalibration.classList.remove('btn--info');
            btnCalibration.classList.add('inactive');
        }

        if (!btnFirmware.classList.contains('inactive')) {
            btnFirmware.classList.remove('btn--info');
            btnFirmware.classList.add('inactive');
        }
    }
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
