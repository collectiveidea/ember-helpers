# ember-helpers

A collection of helpers for Ember.js enabling advanced templating logic.

[![](https://img.shields.io/circleci/project/abcum/ember-helpers/master.svg?style=flat-square)](https://circleci.com/gh/abcum/ember-helpers) [![](https://img.shields.io/npm/v/@abcum/ember-helpers.svg?style=flat-square)](https://www.npmjs.com/package/@abcum/ember-helpers) [![](https://img.shields.io/badge/ember-2.0.0+-orange.svg?style=flat-square)](https://github.com/abcum/ember-helpers) [![](https://david-dm.org/abcum/ember-helpers/status.svg?style=flat-square)](https://david-dm.org/abcum/ember-helpers) [![](https://david-dm.org/abcum/ember-helpers/dev-status.svg?style=flat-square)](https://david-dm.org/abcum/ember-helpers?type=dev) [![](https://img.shields.io/badge/license-MIT-00bfff.svg?style=flat-square)](https://github.com/abcum/ember-helpers) 

## Usage

### Installation

`ember install @abcum/ember-helpers`

### Promise helpers

Coming soon ...

### Callback helpers

The action helpers enable a variety of advanced actions.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
[call](#call)                         | `{{some-component clicked=(call "log")}}`    | Calls method on route, and bubbles up
[invoke](#link-invoke)                | `{{#link-to 'index' invoke=(action 'save')}}`| Changes route and invokes action
[run](#run)                           | `{{run (transition-to 'route') post}}`       | Runs an action with ability to uncurry arguments

### Action helpers

The action helpers enable a variety of advanced actions.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
[alert](#alert)                       | `{{alert "Well hello" "there")}}`            | `alert("Well hello there")`
[chain](#chain)                       | `{{chain (action 'one') (action 'two')}}`    | `one(args).then(two)`
[debounce](#debounce)                 | `{{debounce (action 'increment') 500}}`      | `Ember.run.debounce(...)`
[define](#define)                     | `{{define this 'items' (reverse users)}}`    | `this.set('items', ...)`
[modify](#modify)                     | `{{modify model item}}`                      | `model.set('selected', item)`
[notify](#notify)                     | `{{notify "Title" "Body text"}}`             | `new Notification(...)`
[queue](#queue)                       | `{{queue (action 'one') (action 'two')}}`    | `one(args).then(() => two(args))`
[toggle](#toggle)                     | `{{toggle 'active' this}}`                   | `this.toggleProperty('active')`
[throttle](#throttle)                 | `{{throttle (action 'increment') 500}}`      | `Ember.run.throttle(...)`

### Event helpers

The event helpers enable manipulation of browser events.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
[drag-get](#drag-get)                 | `{{drag-get 'text'}}`                        | `event.dataTransfer.getData('text')`
[drag-set](#drag-set)                 | `{{drag-set 'text' data}}`                   | `event.dataTransfer.setData('text', data)`
[drop-effect](#drop-effect)           | `{{drop-effect 'move'}}`                     | `event.dataTransfer.dropEffect = 'move'`
[effect-allowed](#effect-allowed)     | `{{effect-allowed 'move'}}`                  | `event.dataTransfer.effectAllowed = 'move'`
[prevent-default](#prevent-default)   | `{{prevent-default}}`                        | `event.preventDefault()`
[stop-propagation](#stop-propagation) | `{{stop-propagation}}`                       | `event.stopPropagation()`

### Router helpers

The router helpers enable a selection of router methods.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
[is-active](#is-active)               | `{{if (is-active 'post')}}`                  | `if (this.get('router').isActive('post'))`
[history-back](#history-back)         | `{{history-back}}`                           | `window.history.back()`
[history-forward](#history-forward)   | `{{history-forward}}`                        | `window.history.forward()`
[open](#open)                         | `{{open "https://abcum.com"}}`               | `window.location.open(...)`
[reload](#reload)                     | `{{reload}}`                                 | `window.location.reload(...)`
[transition-to](#transition-to)       | `{{transition-to 'post' post.id}}`           | `this.transitionTo('post', post.id)`

### Object helpers

The array helpers enable advanced array logic and manipulation.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
[group-by](#group-by)                 | `{{group-by "category" products}}`           | `products` grouped by unique `category`
[invoke](#invoke)                     | `{{invoke "save" user}}`                     | `save` action called on `user` model
[match-by](#match-by)                 | `{{match-by "name" "email" search person}}`  | true if `name`, or `email` contains `search`
[object-key](#object-key)             | `{{object-key "name" person}}`               | name property of `person` object

### Array helpers

The array helpers enable advanced array logic and manipulation.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
[any-by](#any-by)                     | `{{#if (any-by "isAdult" users)}}`           | if `isAdult` is truthy on any one of `users`
[append](#append)                     | `{{#each (append users user)}}`              | `users` array with `user` appended
[array](#array)                       | `{{#each (array 1 2 3 4 5)}}`                | `[1, 2, 3, 4, 5]`
[compact](#compact)                   | `{{#each (compact users)}}`                  | `users` with `null` or `undefined` items removed
[contains](#contains)                 | `{{#if (contains user users)}}`              | if `users` contains `user`
[empty](#empty)                       | `{{#if (empty users)}}`                      | if `users` is an empty array
[every-by](#every-by)                 | `{{#if (every-by "isAdult" users)}}`         | if `isAdult` is truthy on every one of `users`
[filter](#filter)                     | `{{#each (filter (action 'check') users)}}`  | `users` where `check` action is truthy
[filter-by](#filter-by)               | `{{#each (filter-by "isAdult" users)}}`      | `users` where `isAdult` is truthy
[find](#find)                         | `{{#each (find (action 'check') users)}}`    | first of `users` where `check` action is truthy
[find-by](#find-by)                   | `{{#each (find-by "isAdult" users)}}`        | first of `users` where `isAdult` is truthy
[first](#first)                       | `{{first users)}}`                           | first item of `users`
[flatten](#flatten)                   | `{{#each (flatten multiarray)}}`             | flattened array of `multiarray`
[includes](#includes)                 | `{{#if (includes user users)}}`              | if `users` includes `user`
[intersect](#intersect)               | `{{#each (intersect admins users)}}`         | intersection of `admins` and `users`
[invoke](#invoke)                     | `{{invoke "save" users}}`                    | `save` action called on each model in `users`
[join](#join)                         | `{{#each (join ", " tags)}}`                 | Concatenates `tags` with the separator `, `
[last](#last)                         | `{{last users)}}`                            | last item of `users`
[map](#map)                           | `{{#each (map (action 'getName') users)}}`   | `users` mapped to the `getName` callback
[map-by](#map-by)                     | `{{#each (map-by "name" users)}}`            | `users` mapped to the `name` property
[object-at](#object-at)               | `{{object-at i users}}`                      | item at position `i` in `users`
[objects-at](#objects-at)             | `{{objects-at i j ... users}}`               | items at position `i j ...` in `users`
[omit](#omit)                         | `{{#each (omit 3 users)}}`                   | `users` with first `3` models omitted
[prepend](#prepend)                   | `{{#each (prepend users user)}}`             | `users` array with `user` prepended
[range](#range)                       | `{{#each (range 1 5)}}`                      | `[1, 2, 3, 4, 5]`
[reject](#reject)                     | `{{#each (reject (action 'check') users)}}`  | `users` where `check` action is falsy
[reject-by](#reject-by)               | `{{#each (reject-by "isAdult" users)}}`      | `users` where `isAdult` is falsy
[reverse](#reverse)                   | `{{#each (reverse users)}}`                  | `users` in reverse order
[slice](#slice)                       | `{{#each (slice 0 5 users)}}`                | items `0` through `4` from `users`
[search-by](#search-by)               | `{{#each (search-by "name" search users)}}`  | `users` where `name` contains `search`
[sort-by](#sort-by)                   | `{{#each (sort-by "name:desc" users)}}`      | `users` sorted by `name` descending
[split](#split)                       | `{{#each (split "/" "app/css/app.less")}}`   | `["app", "css", "app.less"]`
[take](#take)                         | `{{#each (take 3 users)}}`                   | first `3` models from `users`
[union](#union)                       | `{{#each (union admins users)}}`             | union of `admins` and `users`
[uniq](#uniq)                         | `{{#each (uniq users)}}`                     | unique items from `users`
[uniq-by](#uniq-by)                   | `{{#each (uniq-by "email" users)}}`          | unique items by `email` in `users`
[w](#w)                               | `{{#each (w "One Two Three" "Four")}}`       | `["One", "Two", "Three", "Four"]`
[without](#without)                   | `{{#each (without user users)}}`             | `users` array with `user` removed

### Format helpers

The format helpers enable easy formatting of different units.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
bytes                                 | `{{bytes 134186)}}`                          | 1.34MB
country                               | `{{country "GBR"}}`                          | United Kingdom
convert                               | `{{convert 1 from="GBP" to="EUR"}}`          | 1.1861095104682045
currency                              | `{{currency "GBP"}}`                         | £
duration                              | `{{duration 1283719281 exact=false}}`        | 1.283719281s
email                                 | `{{email "info@abcum.com"}}`                 | mailto:info@abcum.com
linkify                               | `{{linkify "Click https://abcum.com"}}`      | Click <a href="https://abcum.com">https://abcum.com</a>
md5                                   | `{{md5 "info@abcum.com"}}`                   | 2a14a47beb82beba88c705145d572702
money                                 | `{{money 10000 symbol="GBP"}}`               | £10,000.00
number                                | `{{number 134153 decimals=0}}`               | 13,415,53
regexp                                | `{{regexp "[a-zA-Z]*" "ig"}}`                | `new RegExp('[a-zA-Z]*', 'ig')`
uuid                                  | `{{uuid}}`                                   | 2690242b-a1f9-47a0-9347-4ed8bc7f09a8

### Browser helpers

The browser helpers enable easy detection of the consuming browser, or fastboot.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
browser-name                          | `{{browser-name}}`                           | The browser name in lowercase
browser-is-blink                      | `{{if (browser-is-blink)}}`                  | True if running in Blink
browser-is-chrome                     | `{{if (browser-is-chrome)}}`                 | True if running in Google Chrome
browser-is-edge                       | `{{if (browser-is-edge)}}`                   | True if running in Microsoft Edge
browser-is-electron                   | `{{if (browser-is-electron)}}`               | True if running in Electron
browser-is-explorer                   | `{{if (browser-is-explorer)}}`               | True if running in Microsoft Explorer
browser-is-fastboot                   | `{{if (browser-is-fastboot)}}`               | True if running in Ember Fastboot
browser-is-firefox                    | `{{if (browser-is-firefox)}}`                | True if running in Firefox
browser-is-opera                      | `{{if (browser-is-opera)}}`                  | True if running in Opera
browser-is-safari                     | `{{if (browser-is-safari)}}`                 | True if running in Safari

### Input helpers

The input helpers special easy detection of the consuming browser, or fastboot.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
input-stars                           | `{{input-stars min=1 max=5 value=3}}`        | A star rating input field
pattern-alphanum                      | `{{input pattern=(pattern-alphanum)}}`       | Allows `[a-zA-Z0-9-+]` values
pattern-country                       | `{{input pattern=(pattern-country)}}`        | Allows `ISO 3166` country codes
pattern-currency                      | `{{input pattern=(pattern-currency)}}`       | Allows `ISO 4217` currency codes
pattern-decimal                       | `{{input pattern=(pattern-decimal)}}`        | Allows `[0-9.-+]` values
pattern-email                         | `{{input pattern=(pattern-email)}}`          | Allows email addresses
pattern-facebook                      | `{{input pattern=(pattern-facebook)}}`       | Allows facebook usernames
pattern-integer                       | `{{input pattern=(pattern-integer)}}`        | Allows `[0-9-+]` values
pattern-letters                       | `{{input pattern=(pattern-letters)}}`        | Allows `[a-zA-Z]` values
pattern-numbers                       | `{{input pattern=(pattern-numbers)}}`        | Allows `[0-9]` values
pattern-phone                         | `{{input pattern=(pattern-phone)}}`          | Allows phone numbers
pattern-twitter                       | `{{input pattern=(pattern-twitter)}}`        | Allows twitter handles
pattern-url                           | `{{input pattern=(pattern-url)}}`            | Allows urls

### Text helpers

The text helpers enable easy formatting of strings and text.

Helper                                | HTMLBars                                     | Result
:-------------------------------------|:---------------------------------------------|:----------------------------
camelize                              | `{{camelize "this Is some TEXT"}}`           | thisIsSomeTEXT
capitalize                            | `{{capitalize "this Is some TEXT"}}`         | This Is some TEXT
classify                              | `{{classify "this Is some TEXT"}}`           | ThisIsSomeTEXT
dasherize                             | `{{dasherize "this Is some TEXT"}}`          | this-is-some-text
lcwords                               | `{{lcwords "this Is some TEXT"}}`            | this is some tEXT
lowercase                             | `{{lowercase "this Is some TEXT"}}`          | this is some text
replace                               | `{{replace "this Is some TEXT" "Is" "Was"}}` | this Was some TEXT
slug                                  | `{{slug "this Is some 'TEXT'"}}`             | this-is-some-text
swapcase                              | `{{swapcase "this Is some TEXT"}}`           | THIS iS SOME text
titleize                              | `{{titleize "this Is some TEXT"}}`           | This Is Some Text
truncate                              | `{{truncate "this Is some TEXT" 10}}`        | this Is so...
ucwords                               | `{{ucwords "this Is some TEXT"}}`            | This Is Some TEXT
underscore                            | `{{underscore "this Is some TEXT"}}`         | this_is_some_text
uppercase                             | `{{uppercase "this Is some TEXT"}}`          | THIS IS SOME TEXT

### Logic helpers

The logic helpers enable logic operations in handlebars statements.

Helper                                | HTMLBars                                     | JavaScript equivalent             
:-------------------------------------|:---------------------------------------------|:----------------------------
and                                   | `{{if (and a b ...)}}`                       | `if (a && b && ...)`                   
begs-with                             | `{{if (begs-with a b)}}`                     | `if (a.indexOf(b) === 0)`
ends-with                             | `{{if (ends-with a b)}}`                     | `if (a.indexOf(b, a.length - b.length) !== -1)`
eq                                    | `{{if (eq a b)}}`                            | `if (a == b)`                    
gt                                    | `{{if (gt a b)}}`                            | `if (a > b)`                  
gte                                   | `{{if (gte a b)}}`                           | `if (a >= b)`                   
inside                                | `{{if (inside a b)}}`                        | `if (a.indexOf(b) > -1)`        
is                                    | `{{if (is a ...)}}`                          | `if (a === true ...)`               
isnt                                  | `{{if (isnt a ...)}}`                        | `if (a !== true ...)`                 
ix                                    | `{{if (ix a ...)}}`                          | `if (a !== true ...)`                
lt                                    | `{{if (lt a b)}}`                            | `if (a < b)`                     
lte                                   | `{{if (lte a b)}}`                           | `if (a <= b)`                     
ne                                    | `{{if (ne a b))}}`                           | `if (a !== b)`                    
or                                    | `{{if (or a b ...)}}`                        | `if (a || b || ...)`                    
present                               | `{{if (present a ...)}}`                     | `if (Ember.isPresent(a) ...)`                    
xor                                   | `{{if (xor a b)}}`                           | `if (a && !b || !a && b)`        

### Math helpers

The math helpers enable maths calculations in handlebars statements.

Helper                                | HTMLBars                                     | JavaScript equivalent        
:-------------------------------------|:---------------------------------------------|:----------------------------
add                                   | `{{add a b ...}}`                            | `a + b + ...`                       
ceil                                  | `{{ceil a}}`                                 | `Math.ceil(a)`                
dec                                   | `{{dec a}}`                                  | `a - b ? b : 1`
div                                   | `{{div a b ...}}`                            | `a / b / ...`                        
floor                                 | `{{floor a}}`                                | `Math.floor(a)`                 
inc                                   | `{{inc a}}`                                  | `a + b ? b : 1`
max                                   | `{{max a b c ...}}`                          | `Math.max([a, b, c, ...])`            
min                                   | `{{min a b c ...}}`                          | `Math.min([a, b, c, ...])`             
mod                                   | `{{mod a b ...}}`                            | `a % b % ...`                         
mult                                  | `{{mult a b ...}}`                           | `a * b * ...`                         
percent                               | `{{percent a b}}`                            | `a / b * 100`                   
random                                | `{{random a b}}`                             | `Math.random(a, b)`             
round                                 | `{{round a}}`                                | `Math.round(a)`                  
sqrt                                  | `{{sqrt a}}`                                 | `Math.sqrt(a)`                 
sub                                   | `{{sub a b ...}}`                            | `a - b - ...`                         


### Examples

#### Callback helpers

##### call

Allows a method on the route to be called from a component.

```handlebars
{{#some-button clicked=(call "log" "Website")}}
	Log this error
{{/some-button}}
```

##### link-invoke

Allows an action to be called while transitioning to another route with `link-to`.

```handlebars
{{#link-to "index" invoke="save"}}
	Save and go back
{{/link-to}}
```

Or you can use a closure action instead of a action name.

```handlebars
{{#link-to "index" invoke=(action "save")}}
	Save and go back
{{/link-to}}
```

Or you can add action parameters to be passed to the invoked action.

```handlebars
{{#link-to "index" invoke=(action "save" firstname lastname)}}
	Save and go back
{{/link-to}}
```

##### run

Allows an action to be called with specified arguments.

```handlebars
{{#my-component onclick=(run (transition-to 'posts.post' post))}}
	View all posts
{{/my-component}}
```

Or you can specify that any additional curried arguments will be ignored.

```handlebars
{{#my-component onclick=(run (transition-to 'posts.post' post) curry=false)}}
	View all posts
{{/my-component}}
```

#### Action helpers

##### alert

Displays an alert message as a result of an action on a component.

```handlebars
{{#my-component onsave=(alert "The blog post" blog.title "has been saved.")}}
	Save
{{/my-component}}
```

##### chain

Enables chaining of a sequence of actions together to form a larger action, passing the result of each action to the next action.

```handlebars
{{#my-component onclick=(action (chain (action 'addBasket') (action 'goToPayment')) model)}}
	Add to basket and pay
{{/my-component}}
```

If any action in the chain returns a promise, then the chain will wait for the promise to return, and the return value will be piped into the next action. If the Promise rejects, the rest of the chain will be aborted.

##### debounce

Ensures an action is triggered only once during the specified time.

```handlebars
{{#my-component onclick=(debounce (action 'increment') 1000)}}
	+1
{{/my-component}}
```

##### define

Defines the given property on the given object.

```handlebars
{{define this 'reversed' (reverse users)}}
```

##### modify

Modifies the current selection of the given array with the curried item object.

```handlebars
{{#my-component onselect=(modify model)}}
	Select
{{/my-component}}
```

```javascript
export default Ember.Component.extend({
	click() {
		this.sendAction('onselect', model);
	}
});
```

Or toggle a selected item by passing the selected object and a `toggle` option.

```javascript
export default Ember.Component.extend({
	click() {
		this.sendAction('onselect', model, { toggle:true, retain: true });
	}
});
```

Or select a range of items by passing the selected object and a `range` option.

```javascript
export default Ember.Component.extend({
	click() {
		this.sendAction('onselect', model, { range:true, retain: true });
	}
});
```

##### notify

Displays a notification as a result of an action on a component.

```handlebars
{{#my-component onsave=(notify "Thanks" "The blog post data has been saved.")}}
	Save
{{/my-component}}
```

##### queue

Enables queuing of a sequence of actions together to form a larger action, passing the original arguments to each action.

```handlebars
{{#my-component onclick=(action (queue (action 'addBasket') (action 'goToPayment')) model)}}
	Add to basket and pay
{{/my-component}}
```

If any action in the queue returns a promise, then the queue will wait for the promise to return, before moving onto the next action. If the Promise rejects, the rest of the queue will be aborted.

##### toggle

Toggles the primary argument as a boolean value.

```handlebars
{{#my-component onclick=(toggle 'isEnabled' this)}}
	{{#if isEnabled}}Disable{{else}}Enable{{/if}}
{{/my-component}}
```

Or you can toggle between specific values the primary argument as a boolean value.

```handlebars
{{#my-component onclick=(toggle 'view' this "landscape" "portrait")}}
	{{#if (eq view "landscape")}}Switch to portrait{{else}}Switch to landscape{{/if}}
{{/my-component}}
```

##### throttle

Waits for the specified time before running an action, discarding all events in the meantime.

```handlebars
{{#my-component onclick=(throttle (action 'increment') 1000)}}
	+1
{{/my-component}}
```

#### Action helpers

##### drag-get

Gets metadata from the browser event dataTransfer object.

```handlebars
{{#my-component ondrop=(drag-get 'plain/text')}}
	Droppable Area
{{/my-component}}
```

Or you can use the `application/json` mime-type to get the data as an object.

```handlebars
{{#my-component ondrop=(drag-get 'application/json')}}
	Droppable Area
{{/my-component}}
```

Or use the `chain` helper to chain multiple actions together to complete the drag-and-drop functionality.

```handlebars
{{#my-component ondrop=(chain (prevent-default) (drag-get 'plain/text') (action 'droppedItem'))}}
	Droppable Area
{{/my-component}}
```

##### drag-set

Set custom metadata on the browser event dataTransfer object.

```handlebars
{{#my-component draggable="true" ondragstart=(drag-set 'plain/text' 'text data')}}
	Draggable Item
{{/my-component}}
```

Or you can use the `application/json` mime-type to set the data as an object.

```handlebars
{{#my-component draggable="true" ondragstart=(drag-set 'application/json' (hash id=1 type='card'))}}
	Draggable Item
{{/my-component}}
```

Or use the `chain` helper to chain multiple actions together to complete the drag-and-drop functionality.

```handlebars
{{#my-component draggable="true" ondragstart=(chain (drop-effect 'move') (effect-allowed 'move') (drag-set 'plain/text' 'text data'))}}
	Draggable Item
{{/my-component}}
```

##### drop-effect

Specifies the `dropEffect` property on the event dataTransfer object.

```handlebars
{{#my-component draggable="true" ondragstart=(drop-effect 'move')}}
	Draggable Item
{{/my-component}}
```

##### effect-allowed

Specifies the `effectAllowed` property on the event dataTransfer object.

```handlebars
{{#my-component draggable="true" ondragstart=(effect-allowed 'move')}}
	Draggable Item
{{/my-component}}
```

##### prevent-default

Runs the `preventDefault` method on the event handler object.

```handlebars
{{#my-component draggable="true" ondragstart=(prevent-default)}}
	Draggable Item
{{/my-component}}
```

##### stop-propagation

Runs the `stopPropagation` method on the event handler object.

```handlebars
{{#my-component draggable="true" ondragstart=(stop-propagation)}}
	Draggable Item
{{/my-component}}
```

#### Router helpers

##### is-active

Detects whether a specific route is active or not.

```handlebars
{{#if (is-active 'basket')}}
	My Basket
{{/if}}
```

##### history-back

Calls `window.history.back()` to reverse one position in the browser history.

```handlebars
{{my-component onkeypress=(history-back)}}
```

##### history-forward

Calls `window.history.forward()` to advance one position in the browser history.

```handlebars
{{my-component onkeypress=(history-forward)}}
```

##### open

Calls `window.open()` enabling opening a new browser tab or window from an action on a component.

```handlebars
{{my-component onkeypress=(open "https://github.com/" "abcum/ember-helpers" width=1200 height=600 center=true)}}
```

##### reload

Calls `window.location.reload()` enabling reloading the page, or changing the url from an action on a component.

```handlebars
{{my-component onkeypress=(reload)}}
```

##### transition-to

Allows the route to be changed from an action on a component, similar to `link-to`.

```handlebars
{{#my-component onclick=(transition-to "basket" sort=true)}}
	Go to basket
{{/my-component}}
```

#### Object helpers

##### group-by

Groups items in a given array by the given path.

```handlebars
{{#each-in (group-by "category" products) as |category products|}}
	- {{category}}
	{{#each products as |product|}}
		{{!-- Products grouped by category--}}
	{{/each}}
{{/each-in}}
```

##### match-by

Returns true if the given properties contain the given value.

```handlebars
{{input type="text" value=search}}
```

```handlebars
{{#if (match-by "firstname" "lastname" search person)}}
	{{!-- The firstname or lastname field contains search --}}
{{/if}}
```

You can also use an array containing the properties to search.

```handlebars
{{input type="text" value=search}}
```

```handlebars
{{input-select value=fields options=(array "firstname" "lastname")}}
```

```handlebars
{{#if (match-by fields search person)}}
	{{!-- The firstname or lastname field contains search --}}
{{/if}}
```

##### object-key

Extracts the property from the given object.

```handlebars
{{object-key "name" person}}
```

#### Array helpers

##### any-by

Checks whether the given property is `true` on any item in a given array.

```handlebars
{{#if (any-by "isAdult" people)}}
	{{!-- At least one of people has isAdult === true --}}
{{/if}}
```

Or if given property is equal to the given value on any item in a given array.

```handlebars
{{#if (any-by "isChild" false people)}}
	{{!-- At least one of people has isChild === false --}}
{{/if}}
```

##### append

Appends each given array to the previous given arrays, resulting in a single flat array.

```handlebars
{{#each (append user users) as |person|}}
	{{!-- Flat array of user and users --}}
{{/each}}
```

##### array

Lets you create arrays directly in the template.

```handlebars
{{#each (array 1 2 3 4 5) as |step|}}
	- Step {{step}} is ...
{{/each}}
```

##### compact

Removes empty values from the given array.

```handlebars
{{#each (compact people) as |person|}}
	{{!-- All with no null or undefined items --}}
{{/each}}
```

##### empty

Checks to see if an array is empty.

```handlebars
{{#if (empty people)}}
	No people exists...
{{/if}}
```

##### every-by

Checks whether the given property is `true` on every item in a given array.

```handlebars
{{#if (every-by "isAdult" people)}}
	{{!-- All people have isAdult === true --}}
{{/if}}
```

Or if given property is equal to the given value on every item in a given array.

```handlebars
{{#if (every-by "isChild" false people)}}
	{{!-- All people have isChild === false --}}
{{/if}}
```

##### filter

Returns the given array filtered by a callback.

```handlebars
{{#each (filter (action "checkAdult") people) as |adult|}}
	{{!-- All where checkAdult action is truthy --}}
{{/each}}
```

##### filter-by

Returns the given array filtered by a property.

```handlebars
{{#each (filter-by "isAdult" people) as |adult|}}
	{{!-- All where isAdult is truthy --}}
{{/each}}
```

Returns the given array filtered by a property.

```handlebars
{{#each (filter-by "isChild" false people) as |adult|}}
	{{!-- All where isChild is false --}}
{{/each}}
```

You can also pass an action as second argument.

```handlebars
{{#each (filter-by (gt 18 (object-key "age")) people) as |adult|}}
	{{!-- All where age is greater than 18 --}}
{{/each}}
```

##### find

Returns the first entry matching the given callback from the given array.

```handlebars
{{#with (find (action "checkAdult") people) as |adult|}}
	{{!-- The first item where isAdult is truthy. --}}
{{/with}}
```

##### find-by

Returns the first entry matching the given value from the given array.

```handlebars
{{#with (find-by "isAdult" people) as |adult|}}
	{{!-- The first item where isAdult is truthy. --}}
{{/with}}
```

Returns the first entry matching the given value from the given array.

```handlebars
{{#with (find-by "isChild" false people) as |adult|}}
	{{!-- The first item where isChild is false. --}}
{{/with}}
```

You can also pass an action as second argument.

```handlebars
{{#with (find-by (gt 18 (object-key "age")) people) as |adult|}}
	{{!-- The first item where age is greater than 18 --}}
{{/with}}
```

##### first

Returns the first object of the given array.

```handlebars
{{#with (first people) as |person|}}
	{{!-- The first person --}}
{{/with}}
```

##### flatten

Returns a flattened array from the given array.

```js
let array = [ [1], [2], [3] ];
```

```handlebars
{{#each (flatten array) as |step|}}
	- Step {{step}} is ...
{{/each}}
```

##### includes

Checks to see if an array includes an object.

```handlebars
{{#if (includes selectedPerson people)}}
	selectedPerson exists within people...
{{/if}}
```

Or if an array includes an array of objects.

```handlebars
{{#if (includes selectedPeople people)}}
	selectedPeople exist within people...
{{/if}}
```

##### invoke

Calls a method on an object.

```handlebars
{{#each users as |user|}}
	<button {{action (invoke "save" user)}}>Save</button>
{{/each}}
```

Or on each item in an array.

```handlebars
<button {{action (invoke "save" users)}}>Save</button>
```

##### intersect

Returns an array of unique items which are present in all given arrays.

```handlebars
{{#each (intersect users admins) as |testers|}}
	{{!-- All who are in both users and admins --}}
{{/each}}
```

##### join

Concatenates the given array with an optional separator.

```handlebars
{{join (array "tag1" "tag2" "tag3")}} {{!-- "tag1 tag2 tag3" --}}
```

You can use an optional separator.

```handlebars
{{join ", " (array "tag1" "tag2" "tag3")}} {{!-- "tag1, tag2, tag3" --}}
```

##### last

Returns the last object of the given array.

```handlebars
{{#with (last people) as |person|}}
	{{!-- The last person --}}
{{/with}}
```

##### map

Returns the given array mapped to the given callback.

```handlebars
{{#each (map (action "getName") users) as |name|}}
	{{name}}
{{/each}}
```

##### map-by

Returns the given array mapped to the given property.

```handlebars
{{#each (map-by "name" users) as |name|}}
	{{name}}
{{/each}}
```

##### object-at

Returns the object at the given `index` of an array.

```handlebars
{{#with (object-at 1 people) as |person|}}
	{{!-- The 1st person --}}
{{/with}}
```

##### objects-at

Returns the object at the given `indexes` of an array.

```handlebars
{{#each (objects-at 1 3 5 people) as |person|}}
	{{!-- The 1st, 3rd, 5th people --}}
{{/each}}
```

##### omit

Returns the given array with the first `count` items omitted.

```handlebars
{{#each (omit 3 people) as |person|}}
	{{!-- All except the first 3 people --}}
{{/each}}
```

##### prepend

Prepends each given array to the previous given arrays, resulting in a single flat array.

```handlebars
{{#each (prepend user users) as |person|}}
	{{!-- Flat array of users and user --}}
{{/each}}
```

##### range

Creates an array whose contents is a range of numbers between min and max.

```handlebars
{{#each (range 10 20) as |step|}}
	...
{{/each}}
```

##### reject

Returns the given array filtered by a callback.

```handlebars
{{#each (reject (action "checkAdult") people) as |child|}}
	{{!-- All except where checkAdult action is truthy --}}
{{/each}}
```

##### reject-by

Returns the given array omitting those matching the property.

```handlebars
{{#each (reject-by "isAdult" people) as |child|}}
	{{!-- All except where isAdult is truthy --}}
{{/each}}
```

Returns the given array omitting those matching the property.

```handlebars
{{#each (reject-by "isChild" false people) as |child|}}
	{{!-- All except where isChild is false --}}
{{/each}}
```

You can also pass an action as second argument.

```handlebars
{{#each (reject-by (gt 18 (object-key "age")) people) as |child|}}
	{{!-- All except where age is greater than 18 --}}
{{/each}}
```

##### reverse

Rearranges the array in reverse order.

```handlebars
{{#each (reverse users) as |user|}}
	{{!-- All in reverse order --}}
{{/each}}
```

##### slice

Returns a slice of the given array.

```handlebars
{{#each (slice 0 5 people) as |person|}}
	{{!-- Only the first 5 people --}}
{{/each}}
```

##### search-by

Returns the given array where the given properties contain the given value.

```handlebars
{{input type="text" value=search}}
```

```handlebars
{{#each (search-by "firstname" "lastname" search people) as |person|}}
	{{!-- All where firstname or lastname contains search --}}
{{/each}}
```

You can also use an array containing the properties to search.

```handlebars
{{input type="text" value=search}}
```

```handlebars
{{input-select value=fields options=(array "firstname" "lastname")}}
```

```handlebars
{{#each (search-by fields search people) as |person|}}
	{{!-- All where firstname or lastname contains search --}}
{{/each}}
```

##### sort-by

Returns the given array sorted by the defined properties.

```handlebars
{{#each (sort-by "age:asc" people) as |person|}}
	{{!-- All people sorted by age ascending --}}
{{/each}}
```

You can also pass an action as second argument.

```handlebars
{{#each (sort-by (action "mySortAction") people) as |person|}}
	{{!-- All people sorted by the custom sorting action --}}
{{/each}}
```

##### split

Splits a string/strings on a character and returns an array.

```handlebars
{{#each (split "/" "app/styles/sub/main.js") as |directory|}}
	{{!-- Array of directories without / character --}}
{{/each}}
```

##### take

Returns the given array with the first `count` items only.

```handlebars
{{#each (take 3 people) as |person|}}
	{{!-- Only the first 3 people --}}
{{/each}}
```

##### union

Returns an array of unique items from all of the given arrays.

```handlebars
{{#each (union users admins) as |person|}}
	{{!-- Unique users and admins --}}
{{/each}}
```

##### uniq

Returns an array of unique items from all of the given arrays.

```handlebars
{{#each (uniq users admins) as |person|}}
	{{!-- Unique users and admins --}}
{{/each}}
```

##### uniq-by

Returns an array of unique items, compared using the given property, from the given array.

```handlebars
{{#each (uniq-by "email" users) as |person|}}
	{{!-- Unique users by email --}}
{{/each}}
```

##### w

Splits a string/strings on whitespace or turns multiple words into an array.

```handlebars
{{#each (w "First Second" "Third") as |step|}}
	- Step {{step}} is ...
{{/each}}
```

##### without

Returns the given array without the given item or items.

```handlebars
{{#each (without selectedusers users) as |user|}}
	{{!-- All users who are not in selectedusers --}}
{{/each}}
```

## Development

- `make install` (install bower and ember-cli dependencies)
- `make upgrade` (upgrade ember-cli to the specified version)
- `make tests` (run all tests defined in the package)
