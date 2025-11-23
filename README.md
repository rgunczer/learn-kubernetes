# learn-kubernetes


## the home-lab cluster

```bash
❯ k get nodes -o wide
NAME                  STATUS   ROLES                  AGE    VERSION        INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                         KERNEL-VERSION         CONTAINER-RUNTIME
raspberrypi4worker1   Ready    <none>                 50d    v1.33.4+k3s1   192.168.1.129   <none>        Debian GNU/Linux 12 (bookworm)   6.12.34+rpt-rpi-v8     containerd://2.0.5-k3s2
raspberrypi4worker2   Ready    <none>                 46d    v1.33.4+k3s1   192.168.1.83    <none>        Debian GNU/Linux 12 (bookworm)   6.12.47+rpt-rpi-v8     containerd://2.0.5-k3s2
raspberrypi5          Ready    control-plane,master   123d   v1.32.6+k3s1   192.168.1.136   <none>        Debian GNU/Linux 12 (bookworm)   6.12.34+rpt-rpi-2712   containerd://2.0.5-k3s1.32
```


---

## static IP addresses 
added to router config, now nodes will remain IP locked
also added regular and short "aliases" into `/etc/hosts` easy fast access and refs
