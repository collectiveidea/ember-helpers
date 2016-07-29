# ember-helpers

A collection of helpers for Ember enabling advanced templating logic.

[![](https://img.shields.io/circleci/project/abcum/ember-helpers/master.svg?style=flat-square)](https://circleci.com/gh/abcum/ember-helpers) [![](https://img.shields.io/npm/v/@abcum/ember-helpers.svg?style=flat-square)](https://www.npmjs.com/package/@abcum/ember-helpers) [![](https://img.shields.io/badge/ember-2.0.0+-orange.svg?style=flat-square)](https://github.com/abcum/ember-helpers) [![](https://david-dm.org/abcum/ember-helpers/status.svg?style=flat-square)](https://david-dm.org/abcum/ember-helpers#info=dependencies&view=table) [![](https://david-dm.org/abcum/ember-helpers/dev-status.svg?style=flat-square)](https://david-dm.org/abcum/ember-helpers#info=devDependencies&view=table) [![](https://img.shields.io/badge/license-MIT-00bfff.svg?style=flat-square)](https://github.com/abcum/ember-helpers) 

## Usage

### Installation

`ember install @abcum/ember-helpers`

### Action helpers

#### route

The `route` helper works in the same way as `link-to` but allows the route to be changed from an action on a component.

```handlebars
{{#my-component onclick=(route "basket" sort=true)}}
	Go to basket
{{/my-component}}
```

#### debounce

The `debounce` helper ensures an action is triggered once during the specified time.
```handlebars
{{#my-component onclick=(debounce (action 'increment') 1000)}}
	+1
{{/my-component}}
```

#### throttle

The `throttle` helper waits for the specified time before running an action, discarding all events in the meantime.
```handlebars
{{#my-component onclick=(throttle (action 'increment') 1000)}}
	+1
{{/my-component}}
```

#### open

The `open` helper runs `window.open()` enabling opening a new browser tab or browser window from an action on a component.

```handlebars
{{my-component onkeypress=(open "https://github.com/" "abcum/ember-helpers" width=1200 height=600 center=true)}}
```

#### reload

The `reload` helper runs `window.location.reload()` enabling reloading the page, or changin the location from an action on a component.

```handlebars
{{my-component onkeypress=(reload)}}
```

#### notify

The `notify` helper adds functionality to display os notifications as a result of an action on a component.

```handlebars
{{#my-component onsave=(notify "Thanks" "The blog post data has been saved.")}}
	Save
{{/my-component}}
```

#### alert

The `alert` helper adds functionality to display an alert message as a result of an action on a component.

```handlebars
{{#my-component onsave=(alert "The blog post" blog.title "has been saved.")}}
	Save
{{/my-component}}
```

### Text helpers

The text helpers enable easy formatting of text, numbers, and currencies.

Helper     | JavaScript equivalent        | HTMLBars                          | Result
-----------|------------------------------|-----------------------------------|----------------
bytes      | -                            | `{{bytes 134186)}}`               | 1.34MB
country    | -                            | `{{country "GBR"}}`               | United Kingdom
currency   | -                            | `{{currency "GBP"}}`              | £
lcwords    | -                            | `{{lcwords "some TEXT"}}`         | some tEXT
lowercase  | `str.toLowerCase()`          | `{{lowercase "some TEXT"}}`       | some text
md5        | -                            | `{{md5 "info@abcum.com"}}`        | 2a14a47beb82beba88c705145d572702
money      | -                            | `{{money 10000 symbol="GBP"}}`    | £10,000.00
number     | -                            | `{{number 134153 decimals=0}}`    | 13,415,53
slug       | -                            | `{{slug "This is some TEXT"}}`    | this-is-some-text
swapcase   | -                            | `{{swapcase "some TEXT"}}`        | SOME text
ucwords    | -                            | `{{ucwords "some TEXT"}}`         | Some TEXT
uppercase  | `str.toUpperCase()`          | `{{uppercase "some TEXT"}}`       | SOME TEXT
uuid       | -                            | `{{uuid}}`                        | 2690242b-a1f9-47a0-9347-4ed8bc7f09a8

### Truth helpers

The truth helpers enable advanced logic in handlebars statements.

Helper     | JavaScript equivalent        | HTMLBars
-----------|------------------------------|-----------------------------------
and        | `if (a && b)`                | `{{if (and a b)}}`
contains   | `if (a.indexOf(b)) > -1`     | `{{if (contains a b}}`
eq         | `if (a == b)`                | `{{if (eq a b)}}`
gt         | `if (a > b)`                 | `{{if (gt a b)}}`
gte        | `if (a >= b)`                | `{{if (gte a b)}}`
is         | `if (a === true)`            | `{{if (is a)}}`
isnt       | `if (a !== true)`            | `{{if (isnt a)}}`
ix         | `if (a !== true)`            | `{{if (ix a)}}`
lt         | `if (a < b)`                 | `{{if (lt a b)}}`
lte        | `if (a <= b)`                | `{{if (lte a b)}}`
ne         | `if (a !== b)`               | `{{if (ne a b))}}`
nontains   | `if (a.indexOf(b)) === -1`   | `{{if (nontains a b)}}`
or         | `if (a || b)`                | `{{if (or a b)}}`
xor        | `if (a && !b || !a && b)`    | `{{if (xor a b)}}`

### Math helpers

The math helpers enable maths operations in handlebars statements.

Helper     | JavaScript equivalent        | HTMLBars
-----------|------------------------------|-----------------------------------
add        | `a + b`                      | `{{add a b}}`
ceil       | `Math.ceil(a)`               | `{{ceil a}}`
div        | `a / b`                      | `{{div a b}}`
floor      | `Math.floor(a)`              | `{{floor a}}`
max        | `Math.max([a, b, c])`        | `{{max a b c}}`
min        | `Math.min([a, b, c])`        | `{{min a b c}}`
mod        | `a % b`                      | `{{mod a b}}`
mult       | `a * b`                      | `{{mult a b}}`
percent    | `a / b * 100`                | `{{percent a b}}`
random     | `Math.random(a, b)`          | `{{random a b}}`
round      | `Math.round(a)`              | `{{round a}}`
sqrt       | `Math.sqrt(a)`               | `{{sqrt a}}`
sub        | `a - b`                      | `{{sub a b}}`

## Development

#### Setup

- Install node - `brew install node`
- Install bower - `npm install -g bower`
- Install ember-cli - `npm install -g ember-cli@2.6.3`

#### Installing

- Clean cache - `npm cache clean && bower cache clean`
- Clean build - `rm -rf node_modules bower_components dist tmp`
- Install application dependencies - `npm install && bower install`

#### Upgrading

- Clean cache - `npm cache clean && bower cache clean`
- Clean build - `rm -rf node_modules bower_components dist tmp`
- Upgrade project ember-cli `npm install --save-dev ember-cli@2.6.3`
- Install application dependencies - `npm install && bower install`
- Initialise ember - `ember init`

#### Testing

- Initialise tests - `npm test`

#### Deployment

- Deploy production app by pushing to master branch on github.com