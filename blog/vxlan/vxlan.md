---
slug: vxlan
authors: [arteii]
keywords: [Vxlan, KVM, RedHat9, Almalinux9]
date: 2024-02-04T18:00
draft: true
---

# VXLAN

VXLAN, which stands for Virtual Extensible LAN, addresses the limitations and challenges associated with traditional network architectures in the context of modern virtualized and cloud environments. As organizations increasingly embrace virtualization and cloud computing, the need for a more flexible, scalable, and efficient network infrastructure becomes paramount.

<!--truncate-->

## Overview

The problem VXLAN resolves lies in the limitations of traditional VLANs (Virtual Local Area Networks). VLANs were designed to logically segment a physical network into smaller, isolated broadcast domains, enabling better network management and security. However, VLANs have constraints when it comes to scalability, as they are limited by a 12-bit VLAN ID, allowing only 4,096 unique VLANs.

In contrast, VXLAN introduces a more scalable and flexible approach by overlaying virtual networks on top of existing physical networks. It uses a 24-bit VXLAN Network Identifier (VNI), allowing for a significantly larger number of unique identifiers, theoretically supporting over 16 million virtual networks. This enables organizations to create more granular and dynamic network segments to accommodate the growing demands of modern applications and workloads.

Furthermore, VXLAN facilitates the seamless extension of Layer 2 networks across Layer 3 boundaries, making it well-suited for connecting geographically dispersed data centers and accommodating the mobility of virtual machines in cloud environments. By addressing the limitations of traditional VLANs and providing a scalable and extensible solution, VXLAN contributes to the evolution of network architectures, supporting the dynamic nature of today's computing environments.

Its primary goal is to enable the creation of virtual networks that can span across physical network boundaries, making it particularly suitable for virtualized and cloud environments. Here's a simplified explanation of how VXLAN works:

## Encapsulation

When a virtual machine (VM) or a device in a VXLAN-enabled network sends a Layer 2 frame, the original Ethernet frame is encapsulated within a VXLAN packet.
The encapsulation involves adding a VXLAN header to the original frame, which includes a 24-bit VXLAN Network Identifier (VNI) that uniquely identifies the virtual network.

## Tunneling

The encapsulated VXLAN packet is then sent across the underlying Layer 3 network. This process is often referred to as tunneling.
VXLAN typically uses User Datagram Protocol (UDP) for the transport of encapsulated packets. The use of UDP allows VXLAN to traverse existing network infrastructure, including routers and switches, without requiring any modifications.

## VTEPs (VXLAN Tunnel Endpoints)

Devices that participate in the VXLAN overlay network are known as VXLAN Tunnel Endpoints (VTEPs).
VTEPs are responsible for encapsulating and decapsulating the VXLAN packets. They serve as the endpoints of the VXLAN tunnels, connecting the virtual network with the physical underlay network.

## VXLAN Header

The VXLAN header contains essential information, including the VNI, which helps in identifying the appropriate virtual network.
The VTEP at the destination uses this information to decapsulate the VXLAN packet, revealing the original Layer 2 frame.

## Network Virtualization

VXLAN enables the creation of a significantly larger number of virtual networks compared to traditional VLANs, thanks to its 24-bit VNI.
This allows for better network segmentation, isolation, and scalability, addressing the limitations associated with VLANs.
In summary, VXLAN works by encapsulating Layer 2 frames in VXLAN packets, which are then transmitted across a Layer 3 network. The VTEPs at both ends of the communication tunnel handle the encapsulation and decapsulation, facilitating the extension of virtual networks across physical network boundaries. This overlay approach provides the flexibility and scalability needed in modern virtualized and cloud environments.

## Setup

### Step 1: Install Required Packages on Both Physical Hosts

Ensure that Almalinux 9.3 is installed on both hosts, and then install the necessary packages.

```bash
### On both hosts
sudo yum install libvirt libvirt-daemon-kvm qemu-kvm
sudo systemctl enable --now libvirtd
```

### Step 2: Configure Bridged Networking

Create a bridge interface on both hosts to provide VMs with direct access to the physical network.

```bash
### On both hosts
sudo nmcli con add type bridge autoconnect yes con-name br0 ifname br0
sudo nmcli con add type bridge-slave autoconnect yes con-name br0-port1 ifname <Physical NIC> master br0 # Physical NIC: ip addr
sudo nmcli con modify br0 ipv4.addresses <IP_Address/Mask> 
# choose the ip for the current device and the subnet example: 192.168.178.2/24
sudo nmcli con modify br0 ipv4.method manual
sudo nmcli con modify br0 ipv4.gateway <Gateway_IP> # gateway = router -n
sudo systemctl restart NetworkManager
```

Replace `<Physical NIC>`, `<IP_Address/Mask>`, and `<Gateway_IP>` with appropriate values.

### Step 3: Create VXLAN Interface

Install the necessary package for VXLAN support.

```bash
### On both hosts

sudo yum install iproute
```

Now, create a VXLAN interface on both hosts.

```bash
### On Host 1
sudo ip link add vxlan0 type vxlan id 100 dev br0 remote <Host2_IP> dstport 4789
sudo ip link set vxlan0 up

### On Host 2
sudo ip link add vxlan0 type vxlan id 100 dev br0 remote <Host1_IP> dstport 4789
sudo ip link set vxlan0 up
```

Replace <Host1_IP> and <Host2_IP> with the actual IP addresses of the hosts.

### Step 4: Configure VMs with VXLAN

Update the XML configuration of each VM to connect them to the VXLAN interface.

```bash
### On both hosts for each VM
sudo virsh edit <VM_Name>
```

Add the following lines inside the `<devices>` section:

```xml
<interface type='vhostuser'>
  <mac address='52:54:00:XX:XX:XX'/>
  <model type='virtio'/>
  <source type='unix' path='/var/run/openvswitch/vhost-user1'/>
  <address type='pci' domain='0x0000' bus='0x00' slot='0x03' function='0x0'/>
</interface>
```

Replace <VM_Name> with the name of the VM and set a unique MAC address.

### Step 5: Configure VXLAN Endpoints

Add VXLAN endpoints for VMs on both hosts.

```bash
### On both hosts
sudo ovs-vsctl add-port br0 vhost-user1 -- set Interface vhost-user1 type=dpdkvhostuserclient
```

### Step 6: Test Communication

Start the VMs on both hosts, and they should now be able to communicate over the VXLAN network.

```bash
### On both hosts for each VM
sudo virsh start <VM_Name>
```

Ensure that the VMs have appropriate network configurations (static IP addresses or DHCP) and can ping each other across hosts.
