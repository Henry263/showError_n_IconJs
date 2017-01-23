/************************************************************ 
 * 
 * JS to show the error class on page
 * 
 ************************************************************/

$(document).ready(function () {

    // Example
    //_ErrIcon($("input"), 'fa-info-circle', "_medium", "orange", "left");

    $("head").append("<link>");
    var css = $("head").children(":last");
    css.attr({
        rel: "stylesheet",
        type: "text/css",
        href: "error.css"
    });

    /*========= start of code : Default error of border ============*/
    $.fn.showErrFunc = function () {
        _showErrFunc(this);
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
    function _showErrIcon($element) {
        _showErrFunc($element);
        _ErrIcon($element);
    }
    /*======================= Code End ===========================*/

    /*========= start of code : Default error info with icon ============*/

    $.fn.showInfoIcon = function () {
        var $element = this;
        _showInfoIcon($element);
    };
    function _showInfoIcon($element) {
        _showErrFunc($element);
        _InfoIcon($element);
    }
    /*======================= Code End ===========================*/

    /******************************
     // Attach Method to element 
     //http://fontawesome.io/icons/
     
     *******************************/

    /*========= start of code : Custom value of border error ============*/

    function _showErrFunc($element, _bColor, _bSize) {

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
        if (_get_nodeType($element))
        {
            $element.css({
                "padding": "2.5px"
            });
        }
    }
    /*======================= Code End ===========================*/

    /*========= start of code : Custom value of Error icon ============*/

    function _ErrIcon($element, _iconName, _iconSize, _iconColor, _position) {
        //$errorSpan = $("<span class='icon_pos icon_pos_top'><i class='icon_specs fa fa-exclamation-triangle' aria-hidden='true'></i><span/>");// +
        var $errorSpan;
        var icon_class = _iconName;

        // Check which icon class is there.
        if (icon_class == undefined)
        {
            icon_class = "fa-exclamation-triangle";
        }
        else if (icon_class == null)
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
        if (_iconSize == undefined)
        {
            default_font_size = default_font_size;
        }
        else if (_iconSize == null)
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
        if (_iconColor == undefined)
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

        if (_position == undefined)
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
        
    }
    /*======================= Code End ===========================*/

    /*========= Start of code: Custom error css ===================*/

    function _customErrStyle(element, _borderColor, _iconColor, _borderSize, _iconSize, _iconName, _position)
    {
        var $element = element;
        _bColor = _borderColor;
        _bSize = _borderSize;
        _showErrFunc($element, _bColor, _bSize);
        _ErrIcon($element, _iconName, _iconSize, _iconColor, _position);
    }

    /*=============================================================*/

    function _get_nodeType(elem)
    {
        var $_checkElem = elem;
        var _nodeType = $_checkElem.get(0).nodeType;
        if (_nodeType == 1)
        {
            var _nodeName = $_checkElem.get(0).nodeName;
            if (_nodeName == "SPAN" || _nodeName == "DIV" || _nodeName == "P")
            {
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
});
