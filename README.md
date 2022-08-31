## Usage
$ cd job-cacancy
$ docker-compose build
$ docker-compose up -d
$ docker-compose exec php bash
$ laravel new breeze_inertia_react
$ mv breeze_inertia_react laravel
$ chmod -R 777 laravel/storage
$ cd laravel
$ composer require laravel/breeze --dev
$ php artisan breeze:install react
$ php artisan migrate

laravel
http://localhost:8080/

phpmyadmin
http://localhost:8888/


## Container structures

```bash
├── mysql
├── nginx
├── php
└── server
```


