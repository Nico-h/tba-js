# How to use the storybook

Go to project folder and launch the docker container

`docker build -t tba-storybook .`

Run the storybook

`docker run -p 9001:9001 --name tba-storybook tba-storybook`

Open browser at http://localhost:9001

Note: If you are using Docker Toolbox on Windows 7 or higher, use the Docker Machine IP instead of localhost. For example, http://192.168.99.100:9001.
To find the IP address, use the command `docker-machine ip`