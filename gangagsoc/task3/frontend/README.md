# Frontend
Ganga GUI frontend

## About
Frontend is build using ReactJS(UI), React Router(managing navigation), Redux(managing state), Scss(Stylesheet), Webpack(module bunlder), Node (javascript runtime).

### Requirements
* Node (v12.13.1 or greater) and npm(v6.12.1 or greater). Installation instructions are available here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Install npm packages
First install all the npm packages. Run:

```bash
npm install
```

### To build
To build frontend run

```bash
npm run build
```

### Developement
To run in developement mode run

```bash
npm run dev
```

### To run test

To run unit test
```bash
npm run test:unit
```

To run integration test, we need to first start Ganga Backend Server. After you start Ganga Backend Server

```bash
npm run server & npm run test:integration 

# for headless
npm run server & npm run test:integration:headless
```


