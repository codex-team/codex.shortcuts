# CodeX Shortcuts

CodeX shortcuts is a micro-library for dispatching keyboard shortcuts in Javascript. 
You don't need external dependencies. 

## Installation

Package is available on NPM

```
npm install @codexteam/shortcuts --save
```

## Usage

Require module if you use Webpack or ES6 
```javascript
const Shortcut = require('@codexteam/shortcuts');
```
or 
```javascript
import Shortcut from '@codexteam/shortcuts'
```

### Creating a shortcut

library provided as class, so to create a new shortcut, make a `Shortcut` instance with specified options. 

Example:

```javascript
let cmdA = new Shortcut({
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

If you have a single-page web application and you don't need shortcuts handler
you can easily remove it

```javascript
cmdA.remove();
```

## How it works

Library parses data given on constructor, defines commands and keys.

Supported commands : ```shift```, ```cmd```, ```command```, ```ctrl```,
```control```, ```windows```, ```alt```. 

other words we pass as keys and special commands. Special commands are:
```backspace```, ```enter```, ```right```, ```left```, ```up```, ```down```, 
```escape```, ```insert```, ```delete```.

## Contribution

To contribute, please fork, add your patch and tests for it (in the test/ folder) and submit a pull request.

CodeX is a team united of passionate people who loves web development, design and marketing.  
We build a full-valued projects on the world area.

Feel free to give us a feedback [team@ifmo.su](team@ifmo.su)

Follow us on:

VK: [https://vk.com/codex_team](https://vk.com/codex_team)

Telegram: [https://t.me/codex_team](https://t.me/codex_team)

Instagram: [https://www.instagram.com/codex_team](https://www.instagram.com/codex_team)