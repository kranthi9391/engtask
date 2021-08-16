$(document).ready(function () {

    // Header Color Change    
    $("#backgroundColor").change(function () {
        let bgColor = $("#backgroundColor").val();
        // console.log(bgColor);
        $("#header").css("background-color", bgColor);
    })

    // Menu Text Color Change    
    $("#menuTextColor").change(function () {
        let menuTxtColor = $("#menuTextColor").val();
        $("#nav > ul > li a").css("color", menuTxtColor)
    });

    //user name color Change    
    $("#username").change(function () {
        let textColor = $("#username").val();
        $("#kranthi").css("color", textColor)
    });

    //designation color change
    $("#desig").change(function () {
        let textColor = $("#desig").val();
        $("#designation").css("color", textColor)
    });

    //Contact Button Color chnage
    $("#contactButtonColor").change(function () {
        let bgColor = $("#contactButtonColor").val();
        $("#contact").css("background-color", bgColor)
    });

    //contactButtonTextColor change
    $("#contactButtonTextColor").change(function () {
        let textColor = $("#contactButtonTextColor").val();
        $("#contact").css("color", textColor)
    });
});
