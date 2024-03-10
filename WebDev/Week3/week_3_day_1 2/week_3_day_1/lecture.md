# Week 3 Day 1 Lecture

So far, our JavaScript code gets loaded into the browser and it runs immediately upon render.

Today we want to **trigger** specific JavaScript actions, and therefore we need a trigger point.

## EVENTS

HTML events are "actions" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

A HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

- A HTML drop-down list or input field value has changed  
- A HTML web page has finished loading
- A HTML button was clicked

Real world examples of why we may want to code different "reactions" to events a particular way?
Ex. input field and form validation 
Ex. checking or unchecking to dos
Ex. Moving a slider
Ex. Changing the value of a radio button

(See Intstructor demonstration)

Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

### Common HTML Events
Here is a list of some common HTML events:

Event	        Description
- onchange	    An HTML element has been changed
- onclick	    The user clicks an HTML element
- onmouseover	The user moves the mouse over an HTML element
- onmouseout	The user moves the mouse away from an HTML element
- onkeydown	    The user pushes a keyboard key
- onload	    The browser has finished loading the page

Let's check them out. 

[onchange](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange)
[onclick](https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onclick1)
[onmouseover and onmouseout](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover)
[onkeydown](https://www.w3schools.com/jsref/event_onkeydown.asp)
[onload](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeydown)


HTML allows **event handler attributes**, with JavaScript code, to be added to HTML elements.


## EVENT HANDLERS

Event handlers can be used to handle and verify user input, user actions, and browser actions:

- Things that should be done every time a page loads
- Things that should be done when the page is closed
- Action that should be performed when a user clicks a button
- Content that should be verified when a user inputs data
- And more ...

Many different methods can be used to let JavaScript work with events:

- HTML event attributes can execute JavaScript code directly
- HTML event attributes can call JavaScript functions
- You can assign your own event handler functions to HTML elements
- You can prevent events from being sent or being handled
- And more ...


With single quotes:

```html
<element event='some JavaScript'>
```

With double quotes:

```html
<element event="some JavaScript">
```

## ONCLICK


Back to HTML - introducing the button.
<!-- Instructor to DEMO this without the eventHandler -->
```html
<button>Click Me!</button>
```

this renders a <button>button</button>

We add the attribute onclick to the button.

Inside the onclick, we can add JavaScript code inbetween. 
<!-- Instructor to DEMO this with the eventHandler -->
```html
<button onclick="document.getElementById('something').style.backgroundColor = 'blue'; document.getElementById('something').style.color = 'green';">Change Color!</button>
```

NOTE: since the value of the onclick starts with double quotes, the inner quotations need to be single quotes. This works vice versa as well!

Let's check them out. 
<!-- Instructor Demo from lecture.html file -->
[onchange](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange)
[onclick](https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onclick1)
[onmouseover and onmouseout](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover)
[onkeydown](https://www.w3schools.com/jsref/event_onkeydown.asp)
[onload](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeydown)

## FUNCTION

Instead of writing JavaScript directly in the attributes of the opening tag, we can write the code into JavaScript files inside of functions.

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

### JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The code to be executed, by the function, is placed inside curly brackets: {}

```js
function name() {
    // the logic to be executed
}
```

This helps us especially if our onclick logic is going to take more than 1 line of code.

We can take the logic from our onclick and put it in between our function declaration.

```js
function doSomething() {
    const sum = 2 + 2;
    alert('The sum of 2 + 2 is ' + sum);
}
```

We then can call the function in it's place in the onclick in the HTML side.

```html
<button onclick="doSomething()">Click Me</button>
```
## Class Try Using the above (You Do)

## Break 

## PRACTICE (We Do)

Inside the practice folder, there is a start code for a box and 3 buttons.

Apply onclick to each button to:
- make the box bigger
- return the box to nromal
- make the box smaller

## Exercise (You Do)

Inside the practice folder, there is a start code for a box and 3 buttons.

Apply onclick to each button to:
- make the box bigger
- return the box to nromal
- make the box smaller 

/EXERCISE
- see instructions in exercise.js