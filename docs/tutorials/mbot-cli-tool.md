---
layout: single
title: MBot Command Line Tool
toc: true
last_modified_at: 2024-10-22
---

> This guide provides an overview of all command line tools in the MBot ecosystem.

Currently, there are 3 tools available:
- mbot-lcm-spy: Monitors all LCM traffic on the MBot.
- mbot-service: Manages and monitors MBot system services.
- mbot-lcm-msg: Inspects the data structure of MBot LCM messages.

The codebase for these tools is located in `mbot_lcm_base/mbot_sys_cli`.

## Installation
If `mbot_lcm_base` is installed correctly, all MBot CLI tools are already installed.

To find them:
- Enter `mbot` in the terminal and hit "Enter" key. The available tools will be printed out:
    ```bash
    mbot@mbot-pi5base-test1:~ $ mbot
    Usage: mbot {service|lcm-spy|lcm-msg} [args]
    ```
- Auto-completion is also available: type `mbot ` (with a space) and hit the "Tab" key to list available tools.
    ```bash
    mbot@mbot-pi5base-test1:~ $ mbot
    lcm-msg  lcm-spy  service
    ```
- If the above command doesn't work, close current terminal and open a new one. (Although this shouldn't be necessary)

Demo:
<iframe width="560" height="315" src="https://www.youtube.com/embed/B150ZqKUrf4?si=LJhwXcSYsiszmjU7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## mbot-lcm-spy
### Usage
```shell
mbot lcm-spy [-h] [--channels CHANNELS] [--rate RATE] [--module MODULE]
```

**Options**
- `-h, --help`: Show this help message and exit
- `--channels CHANNELS`: Comma-separated list of channel names to print decoded messages
- `--rate RATE`: Rate at which data is printed in Hz (default: 1 Hz)
- `--module MODULE`: Module to use for decoding messages (default: "mbot_lcm_msgs")

**Press CTRL+C to quit**

### When to use?
When you are looking for the answers to:
- Is the MBot velocity message being sent out?
  - `mbot lcm-spy`
- What is current odometry value?
  - `mbot lcm-spy --channels MBOT_ODOMETRY`
- Are both the MBot velocity and odometry being updated?
  - `mbot lcm-spy --channels MBOT_ODOMETRY,MBOT_VEL`


### Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/9egBSuIqhUo?si=1FX_YsQl0J3ePfa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## mbot-service
### Usage

```bash
mbot service {list|status|log|start|stop|restart|enable|disable} [service_name]
```
```
Actions:
  list       List all mbot- services
  status     Status of all mbot- services or a specific service
  log        Show log for the service
  start      Start the service
  stop       Stop the service
  restart    Restart the service
  enable     Enable the service (not immediate start)
  disable    Disable the service (not immediate stop)

Examples:
  mbot service list
  mbot service status
  mbot service status mbot-xxx.service
  mbot service log mbot-xxx.service
  mbot service start mbot-xxx.service
  mbot service stop mbot-xxx.service
  mbot service restart mbot-xxx.service
  mbot service enable mbot-xxx.service
  mbot service disable mbot-xxx.service
```
### When to use?
When you are looking for the answers to:
- What services are installed?
  - `mbot service list`
- What was the name of that service... motion controller something?
  - `mbot service list`
- Is mbot-motion-controller.service running?
  - `mbot service status mbot-motion-controller.service`
- Why did mbot-start-network.service failed?
  - `mbot service log mbot-start-network.service`
- I need to stop mbot-motion-controller.service for now
  - `mbot service stop mbot-motion-controller.service`
- I'm in development and want to disable mbot-motion-controller.service
  - `mbot service disable mbot-motion-controller.service`
- Did I stop mbot-slam.service? Was it still running?
  - `mbot service status mbot-slam.service`
  - `mbot service log mbot-slam.service`

### Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/KTV3hlaVQY4?si=uVJxBW5Q7-K6N-rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## mbot-lcm-msg
### Usage
```
mbot lcm-msg [-h] [--module MODULE] {show,list} ...

positional arguments:
  {show,list}      sub-command help
    show           Output the message definition
    list           List all available LCM messages

options:
  -h, --help       show this help message and exit
  --module MODULE  Module to use for decoding messages
```

### When to use?
When you are looking for the answers to:
- What LCM message types are available?
  - `mbot lcm-msg list`
- What is pose3D_t? How about pose2D_t?
  - `mbot lcm-msg show pose3D_t`
  - `mbot lcm-msg show pose3D_t,pose2D_t` (this will print both pose3D_t and pose2D_t data structure)
- I just added a new message type, is it installed?
  - `mbot lcm-msg list`

### Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/zSHahiZNv_A?si=GBOBaFaTz3UKvp6r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

