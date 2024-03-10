// Use Flexbox to place the three divs into columns, spaced evenly, with the letter centered in the middle of each column.
var containerElementStyle = document.getElementById("container").style
containerElementStyle.display = 'flex';
containerElementStyle.width = '100%';
containerElementStyle.height = '100vh';
containerElementStyle.textAlign = 'center';
// Use JavaScript to change the background color of the A,B, & C divs to the color of their border.  Use Javascript to change the INNER HTML of the A,B, & C divs to the NAME of the color (ie, #A should read 'red', #B should read 'green', etc.)
document.getElementById('A').style.background = 'red'
document.getElementById('B').style.background = 'green'
document.getElementById('C').style.background = 'yellow'

document.getElementById('A').innerHTML = '<h1>RED</h1>'
document.getElementById('B').innerHTML = '<h1>GREEN</h1>'
document.getElementById('C').innerHTML = '<h1>YELLOW</h1>'
// Create a header and a footer.








// block elements = take up the entire width of the screen
// inline elements = only going to take up the width/height of its contents and can't change the height and width of this element
// inline block element = only going to take up the width/height of its contents and can change the height and width of this element