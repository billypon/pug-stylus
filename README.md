## Setup filter

Install dependencies

```sh
npm install stylus
```

Set as pug filter

```javascript
const pug = require('pug');
pug.filters.stylus = require('pug-stylus')();
```

Set filename for stylus when render

```javascript
pug.filters.stylus = require('pug-stylus')(function (render, options) {
  render.set('filename', options.filename);
});
```

## Use filter

```pug
:stylus
  body
    color red
```

Output:

```css
body{color:red}
```

Pretty render.

```pug
:stylus(compress=false)
  body
    color red
```

Output:

```css
body {
  color: red;
}
```

Render with style tag.

```pug
:stylus(wrap=true)
  body
    color red
```

Output:

```html
<style>body{color:red}</style>
```
