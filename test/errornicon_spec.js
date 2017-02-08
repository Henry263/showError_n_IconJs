/**
 * Created by harshilkumar on 1/31/17.
 */


describe("Check all functions are called or not", function(){

    it("Check spy function for showerror and check nodetype function is called", function() {
        var $element = $("input");
        spyOn(window, "_get_nodeType");
        showFerror($element);
        expect(window._get_nodeType).toHaveBeenCalled();
    });

    it("Check show error functnion with parameter", function() {
        spyOn(window, "_get_nodeType");
        var $element = $("input");
        var _bColor = "blue";
        var _bSize = "2px";
        var string_format = "2px solid blue";
        expect(_showErrFunc($element,_bColor, _bSize)).toEqual(string_format);
    });

    it("Check spy function for custom icon with parameter", function() {
        var $element = $("input");
        spyOn(window, "_get_nodeType");
        errFicon($element);
        expect(window._get_nodeType).toHaveBeenCalled();
    });

    it("Check show icon function independentaly called or not", function() {
        spyOn(window, "_get_nodeType");
        var $element = $("input");
        var _iconName = "info-circle";
        var _iconSize = null;
        var _iconColor = "blue";
        var _position = "right";
        var string_format_showerr = "fa-info-circle 16px blue right";
        expect(_ErrIcon($element, _iconName, _iconSize, _iconColor, _position)).toEqual(string_format_showerr);
    });

    it("Check spy for independant two functions are called or not ", function() {
        var $element = $("input");
        spyOn(window, "_showErrFunc");
        spyOn(window, "_ErrIcon");
        customErrStyle();
        _showErrIcon();
        expect(window._showErrFunc).toHaveBeenCalled();
        expect(window._ErrIcon).toHaveBeenCalled();
    });

    it("Check jquery method showErrIcon is called", function() {
        var $element = $("input");
        spyOn(window, "_showErrIcon");
        $("input").showErrIcon();
        expect(window._showErrIcon).toHaveBeenCalled();
    });

    it("Check independant two methods are called or not", function() {
        var $element = $("input");
        spyOn(window, "_InfoIcon");
        spyOn(window, "_showInfoIcon");
        $("input").InfoIcon();
        $("input").showInfoIcon();
        expect(window._InfoIcon).toHaveBeenCalled();
        expect(window._showInfoIcon).toHaveBeenCalled();
    });
/*
    it("Check and spy function for _showErrIcon function call ", function() {
        var $element = $("input");
        spyOn(window, "_showErrFunc");
        spyOn(window, "_ErrIcon");
        _showErrIcon();
        expect(window._showErrFunc).toHaveBeenCalled();
        expect(window._ErrIcon).toHaveBeenCalled();
    });

    it("Check and spy function for _showInfoIcon function call ", function() {
        var $element = $("input");
        spyOn(window, "_showErrFunc");
        spyOn(window, "_InfoIcon");
        _showInfoIcon();
        expect(window._showErrFunc).toHaveBeenCalled();
        expect(window._InfoIcon).toHaveBeenCalled();
    });
*/
});

/* TEsting test case

 describe("Testing spies", function () {

 it("Should skip over the function being spied on", function () {
 // Arrange
 var myApp = new MyApp();
 spyOn(myApp, "setFlag");

 // Act
 // Should set flag to true, but it's spied on
 myApp.setFlag();

 // Assert
 // So the flag is still set to false
 expect(myApp.flag).toEqual(false);
 });

 });
 */



