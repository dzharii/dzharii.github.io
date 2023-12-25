---
layout: post
title:  "Links from my inbox 2023-12-25"
date:   2023-12-25T08:42:00-08:00
categories: links
---

![image-20231225084250136](./2023-12-25-links-from-my-inbox.assets/image-20231225084250136.png)





## 🦶🔫 C++ && C

2023-12-25 [The C++20 Naughty and Nice List for Game Devs – Jeremy's Blog](https://www.jeremyong.com/c++/2023/12/24/cpp20-gamedev-naughty-nice/)

> (Nice-ish) Designated initializers
>
> [Designated initializers](https://en.cppreference.com/w/cpp/language/aggregate_initialization#Designated_initializers) are a new form of initialization that initializes structured variable members by name.

```cpp
struct Point
{
    float x;
    float y;
    float z;
};

Point origin{.x = 0.f, .y = 0.f, .z = 0.f};
```

> (Nice) Default comparison and the three-way comparison operator (aka the spaceship: <=>)
>
> New in C++20 are [default comparison](https://en.cppreference.com/w/cpp/language/default_comparisons) rules for structured types that perform an automatic lexicographic comparison when requested.

```cpp
struct Date
{
    int year;
    int month;
    int day;

    auto operator<=>(Date const&) const = default;
    bool operator==(Date const&) const  = default;
};
```



## 🕸Network and Security

2023-12-24 [SSH over HTTPS](https://trofi.github.io/posts/295-ssh-over-https.html)

> Tl;DR: to pass `SSH` through `HTTPS` you need to tweak client and server sides as the following:
>
> Example client entry in `~/.ssh/config`:

```
# $ cat .ssh/config
Host ssh-via-https
        ProxyCommand ~/.ssh/https-tunnel.bash
        # some firewalls aggressively close idle TCP connections
        ServerAliveInterval 30
```

> The `~/.ssh/https-tunnel.bash` helper script we use above:

```
#!/usr/bin/env bash
{ printf "CONNECT ssh-server:22 HTTP/1.0\r\n\r\n"; cat; } | socat - SSL:https-server:443
```

>  Example server entry for `apache2` `HTTPS`:

```
# $ cat /etc/httpd/httpd.conf
LoadModule proxy_connect_module .../modules/mod_proxy_connect.so
# ...
AllowCONNECT 22
<Proxy *>
    Order deny,allow
    Deny from all
</Proxy>
<Proxy ssh-server>
    Order deny,allow
    Allow from all
</Proxy>
```

> Here we allow everyone to use `CONNECT` `HTTP` method on the server side hosted at `https-server` just for a single target: the `ssh-server` host.
>
> And on the client side we use `socat` to create `TLS` connection with a sent `CONNECT` method as a header.
>
> Now you can use `$ ssh ssh-via-https` to reach `ssh-server`.
>
> More words below...
