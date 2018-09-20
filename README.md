# Griddy

> A Stylus plugin that makes it easy to create custom, simple, responsive grids

## Examples

* [12 columns grid](http://tancredi.github.io/griddy/examples/12-col-grid.html)
* [10 columns grid](http://tancredi.github.io/griddy/examples/10-col-grid.html)
* [Custom class grid](http://tancredi.github.io/griddy/examples/custom-class.html)

## Plugin setup

Install:

```npm install griddy```

#### Use with command-line stylus client:

```stylus src -o css -u griddy```

#### Use as a script

```
var stylus = require('stylus'),
    griddy = require('griddy')

function compile (src) {
    return stylus(src).set('filename', path).use(griddy());
}
```

## Simple setup

You can also just add griddy to your stylus files directory and import it

```
@import './griddy'
```

## Usage

Apply the mixin `grid-system` to any selector to define a grid system.

* `grid-system(cols = 12, gutter = 20px, child = '.col', offset = '.off', all-columns = true, separate = '-', breakpoint = 400px)`

#### Parameters

* `cols` - Number of total columns
* `gutter` - Horizontal space between columns and vertical space between rows
* `child` - Child selector suffix (Or full selector, if all-columns is set to false)
* `offset` - Offset selector suffix
* `all-columns` - Generate selectors for all numbers of spans, using `[selector][separate][spans]` convention
* `separate` - String separating `child` prefix from spans count, used when `all-columns` is set to true
* `breakpoint` - Max-size for responsive media query (Columns will break to full-width under specified size)

## Example

#### Stylus

```
@import 'griddy'

.row
    grid-system(12, 20px, '.col', '.off')
```

#### HTML

```html
<div class="row">
    <div class="col-3">

        <!-- 3 columns -->

    </div>
    <div class="col-8 off-1">

        <!-- 8 columns offset by 1 -->

    </div>
</div>
```

## Custom class

#### Stylus

```
@import 'griddy'

.split-3
    grid-system(3, 10px, '.thirds', true, ' thirds-')
```

#### HTML

```html
<div class="split-3">
    <div class="thirds thirds-1"> [...] </div>
    <div class="thirds thirds-1"> [...] </div>
    <div class="thirds thirds-1"> [...] </div>
</div>
```

## Licence

Copyright (c) 2014 Tancredi Trugenberger. - Released under the MIT license