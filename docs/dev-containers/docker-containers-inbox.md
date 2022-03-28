
- 2022-03-26 [Running GUI apps within Docker containers – Trickster Dev](https://www.trickster.dev/post/running-gui-apps-within-docker-containers/)
> Suppose we have Docker installed on macOS or other Unix/Linux system. How do we run Firefox within Docker container? For a first attempt, let us consider the following Dockerfile:
```bash
FROM ubuntu:latest
RUN apt-get update && apt-get install -y firefox x11vnc xvfb
RUN echo "exec firefox" > ~/.xinitrc && chmod +x ~/.xinitrc
CMD ["x11vnc", "-create", "-noxrecord", "-noxfixes", "-noxdamage", "-forever", "-passwd", "trustno1"]
```

