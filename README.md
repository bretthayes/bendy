# Bendy

[![npm version](https://badge.fury.io/js/bendy.svg)](https://badge.fury.io/js/bendy)

A grid system built for React apps inspired by [React Flexbox Grid](https://github.com/roylee0704/react-flexbox-grid) and [Flexbox Grid Sass](https://github.com/hugeinc/flexboxgrid-sass).

Bendy uses the same docs as [React Flexbox Grid](http://roylee0704.github.io/react-flexbox-grid/).

## Installation

This package assumes you're using [Webpack](https://github.com/webpack/webpack), [Babel](https://github.com/babel/babel-loader), and [CSS Modules](https://github.com/webpack/css-loader#css-modules).

```
npm i -D bendy
```

## Example

```jsx
import {Grid, Row, Col} from 'limber';

const App = () => (
  <Grid>
    <Row>
      <Col xs={6} md={3}>Hello, world!</Col>
    </Row>
  </Grid>
);
```

## License

MIT
