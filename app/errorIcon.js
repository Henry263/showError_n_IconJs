/**
 * Created by harshilkumar on 1/31/17.
 */

var err_n_icon = function(){

    $("head").append("<link>");
    var css = $("head").children(":last");
    css.attr({
        rel: "stylesheet",
        type: "text/css",
        href: "dest/css/main.css"
    });
}
$(document).ready(err_n_icon);

var showFerror = function(element, _borderColor, _borderSize){
    _showErrFunc(element, _borderColor, _borderSize);
    this.checkNode = new _get_nodeType(element);
}

var errFicon = function($element, _iconName, _iconSize, _iconColor, _position){
    _ErrIcon($element, _iconName, _iconSize, _iconColor, _position);
    this.checkNode = new _get_nodeType($element);
}

/*========= Start of code: Custom error css ===================*/

var customErrStyle = function(element, _borderColor, _iconColor, _borderSize, _iconSize, _iconName, _position){
    _showErrFunc(element, _borderColor, _borderSize);
    _ErrIcon(element, _iconName, _iconSize, _iconColor, _position);
}
/*=============================================================*/

var _get_nodeType = function(elem)
{
    var $_checkElem = elem;
    var _nodeType = $_checkElem.get(0).nodeType;
    if (_nodeType == 1)
    {
        var _nodeName = $_checkElem.get(0).nodeName;
        if (_nodeName == "SPAN" || _nodeName == "DIV" || _nodeName == "P")
        {
            $_checkElem.css({
                "padding": "2px"
            });
            return true;
        }
        else if (_nodeName == "BUTTON" || _nodeName == "TEXTAREA" || _nodeName == "INPUT")
        {
            return false;
        }
        console.log(_nodeName);
    }
    console.log(_nodeType);
}

_get_nodeType.prototype.getnodetype = function(elem)
{
    return _get_nodeType(elem);
}
/*========= start of code : Default error of border ============*/

$.fn.showErrFunc = function () {
    _showErrFunc(this);
    _get_nodeType(this);
};

/*========= End of code : Default error of border ============*/

/*========= start of code : Default error icon ============*/
$.fn.ErrIcon = function () {
    var $element = this;
    _ErrIcon($element);
};
/*========= End of code : Default error icon ============*/

/*========= start of code : Only info icon ============*/

var $infoSpan = $("<span class='icon_pos icon_pos_top'><i class='icon_specs fa fa-info-circle' aria-hidden='true'></i><span/>");// +

$.fn.InfoIcon = function () {
    var $element = this;
    _InfoIcon($element);
};

function _InfoIcon($element) {
    $infoSpan.insertAfter($element);
}
/*======================= Code End ===========================*/

/*========= start of code : Default error with icon ============*/

$.fn.showErrIcon = function () {
    var $element = this;
    _showErrIcon($element);
};

var _showErrIcon = function($element){
    _showErrFunc($element);
    _ErrIcon($element);
}
/*======================= Code End ===========================*/

/*========= start of code : Default error info with icon ============*/

$.fn.showInfoIcon = function () {
    var $element = this;
    _showInfoIcon($element);
};
var _showInfoIcon = function($element) {
    _showErrFunc($element);
    _InfoIcon($element);
}
/*======================= Code End ===========================*/

/******************************
 // Attach Method to element
 //http://fontawesome.io/icons/

 *******************************/

/*========= start of code : Custom value of border error ============*/

var _showErrFunc = function($element, _bColor, _bSize) {

    //_get_nodeType($element);
    var propertyName = 'border';

    var _br_color = '#b91717';
    var _br_brize = '1.5px';

    if (_bColor == undefined) {
        //return false;
        _br_color = _br_color;
    }
    else if (_bColor == null)
    {
        _br_color = _br_color;
    }
    else
    {
        _br_color = _bColor;
    }
    if (_bSize == undefined) {
        //return false;
        _br_brize = _br_brize;
    }
    else if (_bSize == null)
    {
        _br_brize = _br_brize;
    }
    else
    {
        if (_bSize.indexOf('px') > -1) {
            _br_brize = _bSize;
        }
        else
        {
            _bSize = _bSize.replace(/[^\d.-]/g, '');
            _br_brize = _bSize + 'px';
        }

    }

    var defaultVal = _br_brize + ' solid ' + _br_color;

    $element.css(propertyName, defaultVal);
    return defaultVal;

}

/*======================= Code End ===========================*/

/*========= start of code : Custom value of Error icon ============*/
var _ErrIcon = function($element, _iconName, _iconSize, _iconColor, _position) {

    // this.checknode = new _get_nodeType($("input"));
    //function _ErrIcon($element, _iconName, _iconSize, _iconColor, _position) {
    //$errorSpan = $("<span class='icon_pos icon_pos_top'><i class='icon_specs fa fa-exclamation-triangle' aria-hidden='true'></i><span/>");// +
    var $errorSpan;
    var icon_class = _iconName;

    // Check which icon class is there.
    if (icon_class && !icon_class.trim()) {
        icon_class = "fa-exclamation-triangle";
    }
    else if (icon_class == undefined || icon_class == null)
    {
        icon_class = "fa-exclamation-triangle";
    }
    else
    {
        var pre_cls_name = "fa-";
        var len_pre_class = pre_cls_name.length;
        if (_iconName.indexOf("fa-") > -1)
        {
            var match_cls = _iconName.substr(_iconName.indexOf("fa-") + len_pre_class);
            var real_cls_name = match_cls.split(' ')[0];
            icon_class = pre_cls_name + real_cls_name;
        }
        else
        {
            icon_class = pre_cls_name + _iconName;
        }

    }
    $errorSpan = $("<span class='icon_pos icon_pos_top'><i class='icon_specs fa " + icon_class + "' aria-hidden='true'></i><span/>");// +
    var $errorSpanDiv = $("<div class='top_btm_pos'><span class='icon_pos'><i class='icon_specs fa " + icon_class + "' aria-hidden='true'></i><span/></div>");// +
    // Check the font size.


    var font_size_prop = 'font-size';
    var default_font_size = '16px';
    if (_iconSize && !_iconSize.trim()) {
        default_font_size = default_font_size;
    }
    else if (_iconSize == undefined || _iconSize == null)
    {
        default_font_size = default_font_size;
    }
    else
    {
        if (_iconSize == "_xsmall")
        {
            default_font_size = '14px';
        }
        else if (_iconSize == "_medium")
        {
            default_font_size = '20px'
        }
        else if (_iconSize == "_large")
        {
            default_font_size = '30px';
            $('.icon_pos_top').css('vertical-align', 'middle');
        }
        else if (_iconSize == "_xlarge")
        {
            default_font_size = '40px';
            $('.icon_pos_top').css('vertical-align', 'middle');
        }
        else
        {
            _iconSize = _iconSize.replace(/[^\d.-]/g, '');
            var tempSize = parseInt(_iconSize);
            if (tempSize > 20)
            {
                $('.icon_pos_top').css('vertical-align', 'middle');
            }
            _iconSize = _iconSize + 'px';
            default_font_size = _iconSize;
        }
    }

    // Check the icon color
    if (_iconColor && !_iconColor.trim()) {
        _iconColor = "#b91717";
    }
    else if (_iconColor == undefined)
    {
        _iconColor = "#b91717";
    }
    else if (_iconColor == null)
    {
        _iconColor = "#b91717";
    }
    else
    {
        _iconColor = _iconColor;
    }

    // Check icon position

    if (_position && !_position.trim()) {
        $errorSpan.insertAfter($element);
    }
    else if (_position == undefined)
    {
        $errorSpan.insertAfter($element);
    }
    else if (_position == null)
    {
        $errorSpan.insertAfter($element);
    }
    else
    {
        if (_position === "right")
        {
            $errorSpan.insertAfter($element);
            $element.next().find("i").css('color', _iconColor);
            $element.next().find("i").css(font_size_prop, default_font_size);
        }
        else if (_position === "left")
        {
            $errorSpan.insertBefore($element);
            $element.prev().find("i").css('color', _iconColor);
            $element.prev().find("i").css(font_size_prop, default_font_size);
        }
        else if (_position === "top")
        {
            $errorSpanDiv.insertBefore($element);
            $element.prev().find("i").css('color', _iconColor);
            $element.prev().find("i").css(font_size_prop, default_font_size);
        }
        else if (_position === "bottom")
        {
            $errorSpanDiv.insertAfter($element);
            $element.next().find("i").css('color', _iconColor);
            $element.next().find("i").css(font_size_prop, default_font_size);
        }
        else
        {
            $errorSpan.insertAfter($element);
        }
    }
    var errIconstring = icon_class+" "+default_font_size+" "+_iconColor+" "+_position;
    return errIconstring;
}
/*======================= Code End ===========================*/



