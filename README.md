# Progressive web app

> Progressive web app

## Build

``` bash
# install dependencies

npm install

# build for production with minification

npm run build

# Emulate an HTTP server with serve (https://github.com/zeit/serve)
# require node ≥ 6.9.0

sudo npm install -g serve
serve dist/ -p 8080

#Expose your localhost with ngrock to use https
npm install -g ngrok
ngrok http 8080

#Browse ngrok url https://5ef29506.ngrok.io with your smartphone

```

Becareful use https is important if you want test all features (location, camera, etc)

## Dev

``` bash
# install dependencies

npm install

# serve with hot reload at localhost:8080
npm run dev
```
