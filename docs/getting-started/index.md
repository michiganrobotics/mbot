---
layout: single
title: Getting Started
nav_order: 3
has_children: true
last_modified_at: 2023-09-08 16:37:48 -0500
feature_row:
  - image_path: assets/images/mbot_aug23_photoshoot.jpg
    alt: "placeholder image 1"
    # title: "Build your MBot"
    url: "/docs/hardware/"
    btn_label: "Build your MBot"
    btn_class: "btn--primary"
    # excerpt: "**Build your MBot**"
  - image_path: /assets/images/mbot_aug23_photoshoot.jpg
    alt: "placeholder image 2"
    # title: "Placeholder 2"
    # excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "/docs/setup/"
    btn_label: "Setup your MBot"
    btn_class: "btn--primary"
  - image_path: /assets/images/mbot_aug23_photoshoot.jpg
    # title: "Placeholder 3"
    # excerpt: "hello"
    url: "/docs/tutorials/drive"
    btn_label: "Drive!"
    btn_class: "btn--primary"
---


To get started with MBot, both hardware and software set-ups are required. Please follow the given instructions for detailed guidance.

<div class="table-selector starting-selector">
    <div id="check-assembled" class="row">
      <div class="label-cell">Do you have a fully assembled MBot?</div>
      <div class="option-cell" onclick="selectAssembled(this, true)">Yes</div>
      <div class="option-cell" onclick="selectAssembled(this, false)">No</div>
    </div>
    <div id="check-setup" class="row hidden">
      <div class="label-cell">Has your MBot been setup?</div>
      <div class="option-cell" onclick="selectSetup(this, true)">Yes</div>
      <div class="option-cell" onclick="selectSetup(this, false)">No</div>
    </div>
    <div id="check-kit" class="row hidden">
      <div class="label-cell">Do you have an MBot kit?</div>
      <div class="option-cell" onclick="selectKit(this, true)">Yes</div>
      <div class="option-cell" onclick="selectKit(this, false)">No</div>
    </div>
    <div id="check-type" class="row hidden">
      <div class="label-cell">What type of MBot?</div>
      <div class="option-cell" onclick="selectType(this, 'CLASSIC')">Classic</div>
      <div class="option-cell" onclick="selectType(this, 'OMNI')">Omni</div>
    </div>
</div>

<h2 id="custom-workflow-title">
    Use the selector above to get your custom MBot Setup instructions!
</h2>

<div id="custom-workflow" style="text-align: center;">
</div>

<script>
    let MBOT_ASSEMBLED = null;
    let MBOT_SETUP = null;
    let MBOT_KIT = null;
    let MBOT_TYPE = null;

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

    function selectAssembled(cell, val) {
        selectOption(cell);

        MBOT_ASSEMBLED = val;

        updateState();
    }

    function selectSetup(cell, val) {
        selectOption(cell);

        MBOT_SETUP = val;

        updateState();
    }

    function selectKit(cell, val) {
        selectOption(cell);

        MBOT_KIT = val;

        updateState();
    }

    function selectType(cell, val) {
        selectOption(cell);

        // Store the selected option for the row
        MBOT_TYPE = val;

        // Update the message display
        updateState();

        // Check if "Option B" is selected
        // toggleElements(MBOT_TYPE == "OMNI");
    }

    function createButton(link_text, link, icon) {
        var a = document.createElement('a');
        a.classList.add("btn");
        a.classList.add("big");
        a.classList.add("btn--info");

        // Add link text and URL.
        a.innerHTML = link_text + " <br/> <i class=\"" + icon + "\"</i>";
        a.href = link;
        return a;
    }

    function createArrow() {
        var arrow = document.createElement('span');
        arrow.classList.add("step-arrow");

        // Add link text and URL.
        arrow.innerHTML = "<i class='fas fa-chevron-right'></i>";
        return arrow;
    }

    function activate(ele) {
        if (ele.classList.contains('hidden')) {
            ele.classList.remove('hidden');
        }
    }

    function deactivate(ele) {
        if (!ele.classList.contains('hidden')) {
            ele.classList.add('hidden');
        }
    }

    function updateState() {
        var setupElements = document.getElementById('check-setup');
        var kitElements = document.getElementById('check-kit');
        var typeElements = document.getElementById('check-type');

        var workflowDiv = document.getElementById('custom-workflow');
        workflowDiv.innerHTML = "";  // Empty the links.

        var instructionsReady = false;

        if (MBOT_ASSEMBLED !== null) {
            if (MBOT_ASSEMBLED) {
                activate(setupElements);
                deactivate(kitElements);
                deactivate(typeElements);
                if (MBOT_SETUP !== null) {
                    if (MBOT_SETUP) {
                        workflowDiv.appendChild(createButton("Drive!", "/docs/tutorials/drive", "fas fa-car-side"));
                    }
                    else {
                        workflowDiv.appendChild(createButton("Setup", "/docs/setup/", "fas fa-cogs"));
                        workflowDiv.appendChild(createArrow());
                        workflowDiv.appendChild(createButton("Drive!", "/docs/tutorials/drive", "fas fa-car-side"));
                    }
                    instructionsReady = true;
                }
            }
            else {
                // If not assembled, ask if user has a kit.
                activate(kitElements);
                // If not assembled, Don't ask if setup.
                deactivate(setupElements);
                MBOT_SETUP = null;

                if (MBOT_KIT !== null) {
                    activate(typeElements);
                    if (MBOT_KIT) {
                        if (MBOT_TYPE === "CLASSIC") {
                            workflowDiv.appendChild(createButton("Assemble", "/docs/hardware/classic/assembly", "fas fa-tools"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Setup", "/docs/setup/", "fas fa-cogs"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Drive!", "/docs/tutorials/drive", "fas fa-car-side"));
                            instructionsReady = true;
                        }
                        else if (MBOT_TYPE === "OMNI") {
                            workflowDiv.appendChild(createButton("Assemble", "/docs/hardware/omni/assembly", "fas fa-tools"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Setup", "/docs/setup/", "fas fa-cogs"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Drive!", "/docs/tutorials/drive", "fas fa-car-side"));
                            instructionsReady = true;
                        }
                    }
                    else {
                        if (MBOT_TYPE === "CLASSIC") {
                            workflowDiv.appendChild(createButton("Build", "/docs/hardware/classic/build", "fas fa-shopping-bag"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Assemble", "/docs/hardware/classic/assembly", "fas fa-tools"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Setup", "/docs/setup/", "fas fa-cogs"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Drive!", "/docs/tutorials/drive", "fas fa-car-side"));
                            instructionsReady = true;
                        }
                        else if (MBOT_TYPE === "OMNI") {
                            workflowDiv.appendChild(createButton("Build", "/docs/hardware/omni/build", "fas fa-shopping-bag"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Assemble", "/docs/hardware/omni/assembly", "fas fa-tools"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Setup", "/docs/setup/", "fas fa-cogs"));
                            workflowDiv.appendChild(createArrow());
                            workflowDiv.appendChild(createButton("Drive!", "/docs/tutorials/drive", "fas fa-car-side"));
                            instructionsReady = true;
                        }
                    }
                }
            }
        }

        var title = document.getElementById('custom-workflow-title');
        if (instructionsReady) {
            title.innerHTML = "Follow these steps to get your MBot set up:";
        }
        else {
            title.innerHTML = "Use the selector above to get your custom MBot Setup instructions!";
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

</script>
