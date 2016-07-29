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

Helper     | HTMLBars                                | Result
:----------|:----------------------------------------|:----------------------------
bytes      | `{{bytes 134186)}}`                     | 1.34MB
country    | `{{country "GBR"}}`                     | United Kingdom
convert    | `{{convert 1 from="GBP" to="EUR"}}`     | 1.1861095104682045
currency   | `{{currency "GBP"}}`                    | £
lcwords    | `{{lcwords "some TEXT"}}`               | some tEXT
linkify    | `{{linkify "Click: https://abcum.com}}` | Click <a href="https://abcum.com">https://abcum.com</a>
lowercase  | `{{lowercase "some TEXT"}}`             | some text
md5        | `{{md5 "info@abcum.com"}}`              | 2a14a47beb82beba88c705145d572702
money      | `{{money 10000 symbol="GBP"}}`          | £10,000.00
number     | `{{number 134153 decimals=0}}`          | 13,415,53
slug       | `{{slug "This is some TEXT"}}`          | this-is-some-text
swapcase   | `{{swapcase "some TEXT"}}`              | SOME text
ucwords    | `{{ucwords "some TEXT"}}`               | Some TEXT
uppercase  | `{{uppercase "some TEXT"}}`             | SOME TEXT
uuid       | `{{uuid}}`                              | 2690242b-a1f9-47a0-9347-4ed8bc7f09a8

### Truth helpers

The truth helpers enable advanced logic in handlebars statements.

Helper     | HTMLBars                                | JavaScript equivalent             
:----------|:----------------------------------------|:----------------------------
and        | `{{if (and a b)}}`                      | `if (a && b)`                   
contains   | `{{if (contains a b}}`                  | `if (a.indexOf(b)) > -1`        
eq         | `{{if (eq a b)}}`                       | `if (a == b)`                    
gt         | `{{if (gt a b)}}`                       | `if (a > b)`                  
gte        | `{{if (gte a b)}}`                      | `if (a >= b)`                   
is         | `{{if (is a)}}`                         | `if (a === true)`               
isnt       | `{{if (isnt a)}}`                       | `if (a !== true)`                 
ix         | `{{if (ix a)}}`                         | `if (a !== true)`                
lt         | `{{if (lt a b)}}`                       | `if (a < b)`                     
lte        | `{{if (lte a b)}}`                      | `if (a <= b)`                     
ne         | `{{if (ne a b))}}`                      | `if (a !== b)`                    
nontains   | `{{if (nontains a b)}}`                 | `if (a.indexOf(b)) === -1`         
or         | `{{if (or a b)}}`                       | `if (a || b)`                    
xor        | `{{if (xor a b)}}`                      | `if (a && !b || !a && b)`        

### Math helpers

The math helpers enable maths operations in handlebars statements.

Helper     | HTMLBars                                | JavaScript equivalent        
:----------|:----------------------------------------|:----------------------------
add        | `{{add a b}}`                           | `a + b`                       
ceil       | `{{ceil a}}`                            | `Math.ceil(a)`                
div        | `{{div a b}}`                           | `a / b`                        
floor      | `{{floor a}}`                           | `Math.floor(a)`                 
max        | `{{max a b c}}`                         | `Math.max([a, b, c])`            
min        | `{{min a b c}}`                         | `Math.min([a, b, c])`             
mod        | `{{mod a b}}`                           | `a % b`                         
mult       | `{{mult a b}}`                          | `a * b`                         
percent    | `{{percent a b}}`                       | `a / b * 100`                   
random     | `{{random a b}}`                        | `Math.random(a, b)`             
round      | `{{round a}}`                           | `Math.round(a)`                  
sqrt       | `{{sqrt a}}`                            | `Math.sqrt(a)`                 
sub        | `{{sub a b}}`                           | `a - b`                         

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