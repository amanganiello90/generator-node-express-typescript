[![Build Status](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/{{github-user-name}}/{{github-app-name}}/badge.svg?branch=master)](https://coveralls.io/github/{{github-user-name}}/{{github-app-name}}?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Showcase for NodeJS microservices

## Description
This is a *Showcase project* used to show how to use new feature of my [Generator Node Express Typescript](https://github.com/amanganiello90/generator-node-express-typescript)

## How-To use
To try this showcase, follows these simple instructions.
1. Clone this project on your filesystem.
2. Open the project with your *Visual Studio Code*.

*you will see that into Explorer frame the **node_modules** is absence or empty.*

3. Within *Visual Studio Code* terminal edit:
```
> npm install
```

*the system will download all dependencies required. Now *node_modules* is created and filled.*

4. And to finish launch
```
> npm start:dev
```

*the server starts and the message: "App listening on port 8089!" in **Terminal Tab** showing the port used to invoke the services published.

## Test
This project uses *Jest* as framework test. 
For this run:

```
> npm test
```

Instead for coverage results:

```
> npm run coverage
```

## Debug

In visual studio Code press **F5** after setting a breakpoint.

## Build and publish
To build the microservice (from ts to js in lib output dir):

```
> npm run build
```

> This is a development mode where you will have a lib dir with js and d.ts files. Therefore directly you will **transpile** the ts file to js file with its source map and definition (You need to run npm install to have the node_modules with external dependencies yet). **So this last is a mode to build a library not a product microservice**.

To build the microservice in an outuput bundle using **webpack**:


```
> npm run build:bundle
```

You will have a *bundle* folder with only the **main server.js and config env directory**.

> The last is a production build mode where you have a main file with all necessary for running (you don't need to install anything).

To publish:

```
> npm publish
```

On default this command run also the **npm run build:bundle** task.

## Running microservice after publishing

You have to download the published .targz from your registry.

According the webpack build, you have only to unpack the file, and run in the **package** folder:

```
> npm run start:bundle
```

or

```
> node bundle/server.js
```
