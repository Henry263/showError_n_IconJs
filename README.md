# validationErrorJs
This repo is containing JS library where you can call function or attach method to element to appear the validation error to any element.
 <br />
## Purpose of validationErrorJS
For an example you have some HTML element that is showing an icon and border around the element for validation purpose or for any other purpose you can call the function or method that will apply automatically border and display icon for that element.

## Default functions

### Example scenario 1 (Border around the element)
 - Directly attach an element to function to display default error as a border.
 <br />
 ```
 $("div").showErrFunc(); or _showErrFunc(this);
 ```
 - It will look like this.
 
  
### Example scenario 2 (Default error icon next to the element)
 - Directly attach an element to function to display default error icon.
 <br />
 
 ```
 $("textarea").ErrIcon(); or _ErrIcon($element);
 ```
 - It will look like this.
  
### Example scenario 3 (Default error info icon next to the element)
 - Directly attach an element to function to display default error info icon.
 
 <br />
 ```
 $("textarea").ErrIcon(); or _InfoIcon($element);
 ```
 - It will look like this.
