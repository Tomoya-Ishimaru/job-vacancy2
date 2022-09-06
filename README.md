companyから労働条件等登録<br>
userから気になった求人情報を登録<br>
companyから登録しているuserのメールアドレス、gitのURLを閲覧可能<br>

## Usage
cd job-cacancy/server/laravel<br>
composer install<br>

.env編集<br>
DB_CONNECTION=mysql<br>
DB_HOST=db<br>
DB_PORT=3306<br>
DB_DATABASE=laravel<br>
DB_USERNAME=docker<br>
DB_PASSWORD=docker<br>

php artisan storage:link<br>
npm install && npm run dev<br>
docker-compose build<br>
docker-compose up -d<br>
docker-compose exec php bash<br>
chmod -R 777 laravel/storage<br>
cd laravel<br>
php artisan migrate:refresh --seed<br>

laravel
http://localhost:8080/

phpmyadmin
http://localhost:8888/




