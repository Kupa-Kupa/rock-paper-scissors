# TOP Project: Rock Paper Scissors

https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors

[Live View](https://kupa-kupa.github.io/rock-paper-scissors/) - https://kupa-kupa.github.io/rock-paper-scissors/


## Learnt About:

### CSS Variables

#### What was I trying to do?

I was trying to test colours for button and heading stylings and it was annoying to change the rgb value throughout the CSS file.

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

Using CSS variables or "custom properties", allowed me to change the rgb values in a single place, `:root`, and have the colours change across the various buttons and headings I was styling.

```css
:root {
    --dark-green: rgb(21, 114, 78);
}

.selector {
    color: var(--dark-green);
}
```


### Media Queries

#### What was I trying to do?

I was trying to get the game to display on mobile correctly.

https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

I created a couple of media query break points so that the game would display better at smaller screen sizes.

```css
@media (max-width: 980px) {
    .selector {
        ...
    }
}
```

Note: max-width would be used when setting breaks for smaller screen sizes, while min-width would be used for setting breaks for larger screen sizes.


### Randomly Selecting from Arrays

#### What was I trying to do?

I was trying to randomly select rock, paper or scissors to use as the computer's choice.

Instead of randomly selecting a number between 1 and 3 and then using an if else statement to return the computer's selection it's much cleaner to store all the options in an array and then randomly select an array index.

```js
function randomSelection(){
    // declare array variable with choices
    const possibleChoices = [`option1`, `option2`, `option3`];

    // randomly choose array index between 0 and array length
    const selection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

    return selection;
}
```

Note: Math.floor() could be removed and the rounding down could be done with Bitwise operators such as ">> 0" "<< 0" ">>> 0" or "| 0"

```js
const selection = possibleChoices[Math.random() * possibleChoices.length >> 0];
```

stack overflow thread: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array


### The Document Object Model (DOM) and DOM Manipulation

#### What was I trying to do?

To create a functioning UI I needed to capture user input and then dynamically display results and styling.

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

The methods I used were:

`document.querySelector()`

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

`document.getElementById()`

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

`document.createElement()`

https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

`.addEventListener()`

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

`Array.from()`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

`.forEach()`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

`Node.removeChild()`

https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

`Node.insertBefore()`

https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

`Element.classList.remove`
`Element.classList.add`
`Element.classList.toggle`

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

`Node.textContent`

https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

`HTMLElement.innerText`

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText


`String.prototype.indexOf()`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

I used `.indexOf('substring') !== -1` to check the round results and set the styling for messages.


### DOM Events

I learnt about Events that take place in the DOM and how information about these events can be accessed through references to the event object.

https://developer.mozilla.org/en-US/docs/Web/API/Event

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

I used `event.target` to access the target element's information such as the its id (`event.target.id`).

https://developer.mozilla.org/en-US/docs/Web/API/Event/target


### String.fromCodePoint()

#### What was I trying to do?

I was trying to find a way to insert emojis into the page, without just having a copy of the emoji in the code.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint

```js
String.fromCodePoint(0x2702)
```

Note: `0x` is used to show that the value is a hexadecimal number, while `U+` is used to show that the value is Unicode.

I could have also used `\u` notation to achieve the same result.

https://stackoverflow.com/questions/13093126/insert-unicode-character-into-javascript