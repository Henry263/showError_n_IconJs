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

## Custom value functions

### Example scenario 4 (Custom border properties)
 - Passing an element to function to display custom border with custom values.
 <br />
 
 ```
 _showErrFunc($element, _bColor, _bSize) 
 // _bColor : border color
 // _bSize: Border size (Accept in px format)
 ```
 - It will look like this.
 
  - example 
  ```
  _showErrFunc($element, 'green', '4px') 
  _showErrFunc($element, '#b91717', '1.8rem') // '1.8rem' will be converted to 1.8px
  ```
  - It will look like this.
  
  - example - if you want to apply only one property
  ```
  _showErrFunc(this, 'green', null)  // Apply default border size
  _showErrFunc($(this), null, '1.8rem') // '1.8rem' will be converted to 1.8px and apply default border color.
  ```
 - It will look like this.

### Example scenario 5 (Custom icon properties)
 - Passing an element to function to display custom border with custom values.
 <br />
 
 ```
 _ErrIcon($element, _iconName, _iconSize, _iconColor)
 // _iconColor : border color
 // _iconSize: Border size (Accept in px format)(Default sizes: "_xsmall", "_medium", "_large", "_xlarge")
 // _iconName: accept any classname of font from http://fontawesome.io/icons/  eg. 'fa-info-circle'
 ```
  - example 
  ```
  _ErrIcon($(this), 'fa-info-circle', "_xsmall", "blue")
  ```
 - It will look like this.
