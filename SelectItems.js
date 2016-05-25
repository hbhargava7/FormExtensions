$(document).ready(function () {
    $(".ItemSelection").each(function (index) {
        var valuesArray = $(this).text().split(", ");
        var newContent = "";
        for (var i = 0; i < valuesArray.length; i++) {
            var finalSeparator = ", ";
            if (i == valuesArray.length - 1) {
                finalSeparator = "";
            }
            newContent += "<b class=\"Item\" id=\"" + i + "\">" + valuesArray[i] + finalSeparator + "</b>";
        }
        $(this).html(newContent);
    });
    $(".Item").click(function () {
        if ($(this).css("color") == "rgb(0, 0, 0)") {
            $(this).css("color", "red");

        } else {
            $(this).css("color", "black");
        }
    });

    function removeUnselectedItems() {
        console.log("found");

        $(".ItemSelection").each(function (index) {
            console.log("found");
            $(this).children("b").each(function () {
                console.log("element");
                if ($(this).css("color") == "rgb(0, 0, 0)") {
                    $(this).remove();
                }
            });
        });
    }
    $(".GetItems").click(function () {
        removeUnselectedItems();
    });
});