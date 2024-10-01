---
layout: single
title: Generating an Image for your Course
toc: true
search: false
---

*Coming soon!*

## Generating an image

If you followed this guide to create a base image for your whole fleet of robots, follow these steps.

### Cleaning up your current image

You should first clean up your current image by deleting any data you don't want on all the robots in your fleet. Choose these as necessary:
* **Delete the source code.** You may want to delete the whole folder `~/mbot_ws` now that all the files are installed.
* **Remove your credentials from the WiFi network.** If you logged into your personal account on the WiFi, you should delete the connection to remove your credentials.
* **Set default configurations.** Set the robot hostname to a good default for your fleet in `mbot_config.txt`, and remove any WiFi information that does not involve the whole fleet. If your fleet will share an IP registry, leave that in.
* **Remove session-specific files.** You can safely delete `~/.vscode-server`.
