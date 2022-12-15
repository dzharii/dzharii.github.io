## NAT
- 2022-03-19 [How NAT traversal works · Tailscale](https://tailscale.com/blog/how-nat-traversal-works/)
> We covered a lot of ground in our post about How Tailscale Works. However, we glossed over how we can get through NATs (Network Address Translators) and connect your devices directly to each other, no matter what’s standing between them. Let’s talk about that now!

## HTTP Tools

## Benchmark
- 2022-02-28 [codesenberg/bombardier: Fast cross-platform HTTP benchmarking tool written in Go](https://github.com/codesenberg/bombardier)
> bombardier is a HTTP(S) benchmarking tool. It is written in Go programming language and uses excellent fasthttp instead of Go's default http library, because of its lightning fast performance.
Sample use:
```bash
docker run -ti --rm alpine/bombardier -c 1000 -d 3600s -l https://www.gosuslugi.ru
```

## Network Latency
- 2022-03-04 [jagt/clumsy: clumsy makes your network condition on Windows significantly worse, but in a controlled and interactive manner.](https://github.com/jagt/clumsy)
> clumsy makes your network condition on Windows significantly worse, but in a managed and interactive manner.
