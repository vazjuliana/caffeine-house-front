# caffeine-house-front

It's the Coffe shop page and e-commerce.

You will need install
* docker
* docker-compose
* git client

## How to start the project

after clone the repository
you will need to build the container

```bash
docker-compose build
```

If it build succefully, you will need to set the container up

```bash
docker-compose up -d
```

Now let's check if our server is up:

```bash
docker-compose ps
```

If everything is fine we can follow to start the web application server. In this case the static content is served by NGINX server.
To put the server up just execute:

```bash
docker-compose exec front service nginx start
```

It it start suceffully you are now able to test the web site

## How to start the project

This is easy, NGINX is serving static content at localhost port 80.
So you just need to open you browser and access "localhost:80".
If the Caffeine House opened with the corectly content and assets, everything is worked.
