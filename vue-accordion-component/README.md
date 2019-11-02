#Stand-alone Project Setup

run the following commands:
~~~
npm init -y
npm i laravel-mix --save-dev
cp node_modules/laravel-mix/setup/webpack.mix.js ./
mkdir src && touch src/app.{js,scss}
~~~

put these into package.json:
~~~
"scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "npm run development -- --watch",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
}
~~~

you are ready:
~~~
npm run dev
~~~