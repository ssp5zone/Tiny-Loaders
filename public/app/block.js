function Block(name, color, children) {
    this.name = name || "";
    this.color = color || '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.children = children || [];

    this.render = function (container) {
        var html = $("<div></div>");
        html.attr("name", this.name);
        html.css("background-color", this.color);
        html.css("padding", "10px");
        html.append("<p><b>" + this.name + "</b></p>");
        if(isDark(this.color)) {
            html.find(">p").css("color", "wheat");
        }
        if (typeof container === "string") {
            $(container).append(html);
        } else {
            $("[name='" + container.name + "']").append(html);
        }
        
    };

    function isDark(color) {
        var c = color.substring(1);      // strip #
        var rgb = parseInt(c, 16);   // convert rrggbb to decimal
        var r = (rgb >> 16) & 0xff;  // extract red
        var g = (rgb >>  8) & 0xff;  // extract green
        var b = (rgb >>  0) & 0xff;  // extract blue

        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        return luma < 60;
    }

}