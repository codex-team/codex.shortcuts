# Codex Shortcuts

CodeX shortcuts is a micro-library for dispatching keyboard shortcuts in Javascript. 
You don't need external dependencies. 

## Usage

Require module if you use Webpack or ES6 
```javascript
let ShortCut = require('@codexteam/shortcuts');
```
or 
```javascript
import ShortCut from '@codexteam/shortcuts'
```

### Creating shortcut

library provided as class, so to create a shortcut first you need to 
create an instance of library. 

Example:

```javascript
let cmdA = new ShortCut({
    name : 'CMD+A',
    on : document.body,
    callback: function(event) {
        // your handler
    }
});
```
```name``` - this is shortcut name, keys must be separated by `+`

```on``` - binding element. Shortcut will be fired only on passed (this) element

```callback``` - you code that defines the behaviour

If you have AJAX web application and you don't need shortcuts handler
you can easily remove it

```javascript
cmdA.remove();
```

## How it works

library parses data given on constructor, defines commands and keys.

Supported commands : ```shift```, ```cmd```, ```command```, ```ctrl```,
```control```, ```windows```, ```alt```. 

other words we pass as keys and special commands. Special commands are:
```backspace```, ```enter```, ```right```, ```left```, ```up```, ```down```, 
```escape```, ```insert```, ```delete```.

## Contribution

To contribute, please fork, add your patch and tests for it (in the test/ folder) and submit a pull request.