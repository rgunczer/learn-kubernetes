# learn-kubernetes


## the home-lab cluster

```bash
❯ k get nodes -o wide
NAME                       STATUS   ROLES                  AGE     VERSION        INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                         KERNEL-VERSION         CONTAINER-RUNTIME
raspberrypi4worker1        Ready    <none>                 60d     v1.33.4+k3s1   192.168.1.129   <none>        Debian GNU/Linux 12 (bookworm)   6.12.34+rpt-rpi-v8     containerd://2.0.5-k3s2
raspberrypi4worker2        Ready    <none>                 56d     v1.33.4+k3s1   192.168.1.83    <none>        Debian GNU/Linux 12 (bookworm)   6.12.47+rpt-rpi-v8     containerd://2.0.5-k3s2
raspberrypi4worker3small   Ready    <none>                 2m29s   v1.33.6+k3s1   192.168.1.49    <none>        Debian GNU/Linux 13 (trixie)     6.12.47+rpt-rpi-v8     containerd://2.1.5-k3s1.33
raspberrypi5               Ready    control-plane,master   133d    v1.32.6+k3s1   192.168.1.136   <none>        Debian GNU/Linux 12 (bookworm)   6.12.34+rpt-rpi-2712   containerd://2.0.5-k3s1.32
```

first re-install (due to nuking the cluster) "side-effects" same versions throughout the cluster v1.33.6 and v2.1.5 for containerd
```bash
k get nodes -o wide
NAME                       STATUS   ROLES                  AGE     VERSION        INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                         KERNEL-VERSION         CONTAINER-RUNTIME
raspberrypi4worker1        Ready    <none>                 4h36m   v1.33.6+k3s1   192.168.1.129   <none>        Debian GNU/Linux 12 (bookworm)   6.12.34+rpt-rpi-v8     containerd://2.1.5-k3s1.33
raspberrypi4worker2        Ready    <none>                 4h31m   v1.33.6+k3s1   192.168.1.83    <none>        Debian GNU/Linux 12 (bookworm)   6.12.47+rpt-rpi-v8     containerd://2.1.5-k3s1.33
raspberrypi4worker3small   Ready    <none>                 4h23m   v1.33.6+k3s1   192.168.1.49    <none>        Debian GNU/Linux 13 (trixie)     6.12.47+rpt-rpi-v8     containerd://2.1.5-k3s1.33
raspberrypi5               Ready    control-plane,master   4h57m   v1.33.6+k3s1   192.168.1.136   <none>        Debian GNU/Linux 12 (bookworm)   6.12.34+rpt-rpi-2712   containerd://2.1.5-k3s1.33
```

---

## static IP addresses 
added to router config, now nodes will remain IP locked
also added regular and short "aliases" into `/etc/hosts` easy fast access and refs

```
# raspberry pi cluster
192.168.1.136   raspberrypi5        rpi5
192.168.1.129   raspberrypi4worker1 rpi4w1
192.168.1.83    raspberrypi4worker2 rpi4w2
192.168.1.49    raspberrypi4worker3small rpi4w3sm
```
