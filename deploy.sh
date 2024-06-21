#!/bin/bash
docker container stop statebotcontainer
docker container rm statebotcontainer
docker build -t statebot .
docker run -d --name statebotcontainer -p 3000:3000 statebot
