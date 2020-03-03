# ReX React UI Components Library
## ReX React UI Component: rex-grid

This project is part of ReX Design Language and it can be used to create React UI Components.   
For more information visit:   

Github  
https://github.com/rakuten-rex

NPM  
https://www.npmjs.com/org/rakuten-rex

## How it was built 

1. Build tool: webpack 4
1. Codebase: Fork of Bootstrap project + ReX custom styles
1. Css engine: Sass
1. JavaScript component: React

# How to install

```
npm install rex-grid@1.3.1 --save
```

## What you can do

Use the grid system based on ReX Grid guidelines to set your project using a responsive grid.
The components are named as Container, Column and Row for an easy integration.

### Live examples

For a complete guide of properties for React and HTML classes please visit the Storybook site:  

https://rakuten-rex.github.io/rex-grid/

### JavaScript modules

#### React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

```js
import 'rex-core'; // ReX Core dependency
import { Container, Row, Col } from 'rex-grid';

function MyComponent() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}
```

#### CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

Example: 

```js
import 'rex-core/css'; // ReX Core dependency
import 'rex-grid/css';

function MyComponent() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">1 of 2</div>
        <div class="col">2 of 2</div>
      </div>
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col">2 of 3</div>
        <div class="col">3 of 3</div>
      </div>
    </div>
  );
}
```

### Static HTML

Add it from our CDN into your HTML template or HTML static page.

For development mode:

```markdown
<!-- ReX Core -->
<link href="https://r.r10s.jp/com/rex/rex-core/1.4.0/rex-core.development.css" rel="stylesheet">
<!-- rex-grid -->
<link href="https://r.r10s.jp/com/rex/rex-grid/1.3.1/rex-grid.development.css" rel="stylesheet">
```

For production mode:

```markdown
<!-- ReX Core -->
<link href="https://r.r10s.jp/com/rex/rex-core/1.4.0/rex-core.production.min.css" rel="stylesheet">
<!-- rex-grid -->
<link href="https://r.r10s.jp/com/rex/rex-grid/1.3.1/rex-grid.production.min.css" rel="stylesheet">
```

Example: 

```markdown
<div class="rex-css-style my-component">
  <div class="container">
    <div class="row">
      <div class="col">1 of 2</div>
      <div class="col">2 of 2</div>
    </div>
    <div class="row">
      <div class="col">1 of 3</div>
      <div class="col">2 of 3</div>
      <div class="col">3 of 3</div>
    </div>
  </div>
</div>
```

## How to start the project

The development environment is based on Storybook, for more info visit https://storybook.js.org/ .   

```
npm start
```

## How to build

The build task will generate a NPM package ready to be published and also a static version of Storybook, one folder for NPM `./build/node_modules/rex-grid` and other one for Github pages `./docs`.   

```
npm run build
```

## How to check build version

By using Node http-server, you can check the static version of Storybook with production settings and builds.

```
npm run serve
```

## How to publish to NPM
### Build the project

```
npm run build
```

### Login into NPM

Build the project first.  
After that run the following commands:

```
cd build/node_modules/rex-grid
npm login
npm publish
```

Once the process finish, take a look to the NPM site:   

https://www.npmjs.com/package/rex-grid

## How to test

This starter kit includes `jest` and `enzyme` for unit testing.

```
# Run test once
npm test

# Watch mode
npm test -- -watch
```

### How to update snapshots

```
npm test -- -u
```

### How to report code coverage

```
npm test -- -coverage
```

and coverage report will be generated under `./coverage/` directory.

## Javascript and React related documents

Take a look to this nice documentation pages to be more familiar with React and modern Javascript:

### Official site
https://reactjs.org/docs/getting-started.html   

### Google Web Fundamentals (the whole site is a must to read)
https://developers.google.com/web/fundamentals/

### Webpack as magic bundler
https://webpack.js.org/

### Composing Software series (how to understand Funcional Programming)
https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea   

### Common React patterns
https://reactpatterns.com   

### Understanding Storybook with nice images
https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07   

### Some guidelines for clean code
https://americanexpress.io/clean-code-dirty-code/

