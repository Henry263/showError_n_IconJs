# showError_n_iconJs
This repo is containing JS library where you can call function or attach method to element to appear the border around the element and icon next to the element.
 <br />
## Purpose of showError_n_iconJs
For an example you have some HTML element that is showing an icon and border around the element for validation purpose or for any other purpose you can call the function or method that will apply automatically border and display icon for that element.

## Default functions

### Example scenario 1 (Border around the element)
 - Directly attach an element to function to display default error as a border.
 <br />
 
 ```
 $("div").showErrFunc(); or _showErrFunc(this);
 ```
 - It will look like this.
 
 ![default border](https://github.com/Henry263/showError_n_IconJs/blob/master/images/defaultborder.png?raw=true "default border")
 
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
 $("input").InfoIcon(); or _InfoIcon($element);
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
  _showErrFunc($element, 'green', null)
  _showErrFunc($("input"), 'orange', '3.8rem'); // '1.8rem' will be converted to 1.8px
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
 _ErrIcon($element, _iconName, _iconSize, _iconColor, _position)
 // _iconColor : border color
 // _iconSize: Border size (Accept in px format)(Default sizes: "_xsmall", "_medium", "_large", "_xlarge")
 // _iconName: accept any classname of font from http://fontawesome.io/icons/  eg. 'fa-info-circle'
 // _position: left, right, top and bottom (Allow yo to select the position of icon
 ```
 - example 
 
  ```
  _ErrIcon($("input"), 'fa-info-circle', "_medium", "blue", null);
  _ErrIcon($("input"), 'fa-info-circle', "24px", "blue", null);
  _ErrIcon($("input"), 'fa-info-circle', null, "blue", "top");
  _ErrIcon($("input"), 'fa-info-circle', "_medium", "blue", "left");
  ```
 - It will look like this.
 
### Example scenario 5 (All in one Border + icon)
 - Passing an element to function to display custom border with custom values.
 <br />
 
 ```
_customErrStyle(element, _borderColor, _iconColor, _borderSize, _iconSize, _iconName)
 ```
 - example 
 
  ```
_customErrStyle($("input"), "blue", "orange", null, null, "bell");
_customErrStyle($("input"), "blue", "orange", null, null, "fa-bell");
  ```
 - It will look like this.
