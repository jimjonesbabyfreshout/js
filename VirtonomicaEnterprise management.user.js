// ==UserScript==
// @name           Virtonomica: управление предприятиями
// @namespace      virtonomica
// @version 	   1.60
// @description    Adding new functionality to enterprise management
// @include        https://*virtonomic*.*/*/main/company/view/*/unit_list
// @include        https://*virtonomic*.*/*/main/company/view/*
// ==/UserScript==

var run = function () {
    var win = typeof unsafeWindow != "undefined" ? unsafeWindow : top.window;
    $ = win.$;

    // Search for efficiency and search in red of everything that is not 100%
    $("td.prod").each(function () {
        // Efficiency
        ef = parseInt($(this).text());
        if (ef < 100) {
            $(this).css("color", "red");
        }
    });

    function getStyle() {
        var out = "<style>";
        out += ".tchk {";
        out += "padding: 0px; background: #D8D8D8; float:left; height: 6px; width: 6px; margin: 1px;";
        out += "}";
        out += ".geocombo {";
        out += "background-position: 2px 50%; background-repeat: no-repeat; padding-left: 20px;";
        out += "}";
        out += "</style>";
        return out;
    }

    function getSizeHtml(size) {
        var out = "<div>";
        for (var i = 0; i < size; i++) {
            out += "<div class=tchk >&nbsp;</div>";
            if (i == 2) out += "<div style='clear:both'></div>";
        }

        out += "</div>";

        return out;
    }

    // Reduced size for unit sizes
    $("table.unit-top").append(getStyle());
    /*
   $("td.size").each(function(){
	$(this).html( getSizeHtml( $("img", this).length) );
   });
*/
    var title = $("div.field_title").eq(3);
    //console.log( title.text() );
    title.html(title.html().replace("Dimensions", "Р.")).attr("title", "размер подраздления (от 1 до 6)");

    // Repaint the title
    //$("th").css('background', 'none repeat scroll 0 0 #CED8F6').css('color', 'grey');

    // Move to create a department in one line from the unit type
    var type_toolbar = $("td.u-l");
    //var el = type_toolbar.parent().next();
    var el = $("img.img_button").parent();
    //console.log( "len = " + el.length);
    //console.log( el.html() );
    var ttt = $("img", el);
    //console.log( ttt.attr('src') );
    var create_img =
        "<a href=" + el.attr("href") + " title='Create a department'><img src=" + ttt.attr("src") + "></a>";
    //console.log( create_img );
    type_toolbar.append(create_img);
    //$("a", el).parent().hide();
    el.hide();

    var url = /^https:\/\/virtonomic[as]\.(\w+)\/\w+\//.exec(location.href)[0];

    // List with cells containing department names.
    var list = $("td.info");

    list.each(function () {
        //console.log( $(this).html() );
        var str = $(this).html();
        var n = str.indexOf("<br>");
        if (n == -1) return;
        str = str.substr(0, n);
        $(this).html(str);
    });

    var input_ef = $("<select>")
        .append("<option value=-1>Все</option>")
        .append("<option value=10>< 100%</option>")
        .append("<option value=100>100%</option>")
        .append("<option value=0>0%</option>")
        .change(function () {
            var find_count = 0;
            list.each(function () {
                var needle = input_ef.val();
                // Search for efficiency
                var ef = parseInt($(this).next().next().next().next().text());

                var find = -1;
                switch (needle) {
                    case "10": {
                        if (ef > 0 && ef != 100) find = 1;
                        break;
                    }
                    case "100": {
                        if (ef == 100) find = 1;
                        break;
                    }
                    case "0": {
                        if (ef == 0) find = 1;
                        break;
                    }
                    case "-1":
                        find = 1;
                        break;
                }

                // Notes
                var find_notes = 0;
                if (
                    $(this).parent().next().prop("class") == "u-z" ||
                    $(this).parent().next().prop("class") == "u-z ozz"
                ) {
                    find_notes = 1;
                }
                if (find == -1) {
                    $(this).parent().hide();
                    if (find_notes == 1) $(this).parent().next().hide();
                } else {
                    $(this).parent().show();
                    find_count++;
                    if (find_notes == 1) $(this).parent().next().show();
                }
            });
            if (find_count == 0) $("#ef_info").html("&nbsp;");
            else $("#ef_info").html("(" + find_count + ")");
        });

    // Click on efficiency
    $(list)
        .next()
        .next()
        .next()
        .next()
        .css("cursor", "pointer")
        .prop("title", "Узнать прогноз эффективности")
        .click(function () {
            var td = $(this);
            td.empty().append(
                $("<img>")
                    .attr({ src: "http://s3.devels.info/load.gif", height: 16, width: 16 })
                    .css("padding-right", "20px"),
            );

            var el = $("td.unit_id", $(this).parent());
            var id = el.text();
            $.get(url + "window/unit/productivity_info/" + id, function (data) {
                var percent = $("td:contains(Work efficiency) + td td:eq(1)", data).text().replace("%", "").trim();
                var color = percent == "100.00" ? "green" : "red";
                var html = percent + "<i>%</i>";

                td.css("color", color).html(html);
            });
        });

    var container = $("td.u-l").parent().parent();

    var input = $("<input>")
        .attr({ type: "text", value: "" })
        .change(function () {
            //alert( list.length );
            var needle = new RegExp("^\\s*" + input.val(), "i");

            var find_count = 0;
            list.each(function () {
                // If the filter is not set, then show everything that is
                if (needle.length == 0) {
                    $(this).parent().show();
                    return;
                }
                // Notes
                var find_notes = 0;
                if (
                    $(this).parent().next().prop("class") == "u-z" ||
                    $(this).parent().next().prop("class") == "u-z ozz"
                ) {
                    find_notes = 1;
                }
                // Apply a filter
                if ($(this).text().search(needle) == -1) {
                    $(this).parent().hide();
                    if (find_notes == 1) $(this).parent().next().hide();
                } else {
                    $(this).parent().show();
                    find_count++;
                    if (find_notes == 1) $(this).parent().next().show();
                }
            });
            if (find_count == 0) $("#find_info").html("&nbsp;");
            else $("#find_info").html("(" + find_count + ")");
        });

    // Search for id

    // Don’t forget to clean up
    var input_id = $(" <button>id</button>").click(function () {
        out = "";
        var el = $("td.unit_id");
        for (i = 0; i < el.length; i++) {
            if (!el.eq(i).is(":visible")) continue;
            id = el.eq(i).text();
            out += id + ", ";
        }
        //===================
        //out = '';
        //supply_id = JSON.parse( window.localStorage.getItem('supply_id') );
        //for (key in supply_id){
        //	out+= key + ", ";
        //}

        alert(out);
    });

    // Filter by region
    var flags = $("td.geo");
    var list_region = new Object();
    var list_flags = new Object();

    for (i = 0; i < flags.length; i++) {
        var reg = flags.eq(i).attr("title");
        //console.log(reg);
        if (list_region[reg] != null) {
            list_region[reg]++;
        } else {
            list_region[reg] = 1;
        }
        list_flags[reg] = flags.eq(i).attr("class").replace("geo", "geocombo");
    }
    // Sorting the object as rows
    function sortObj(arr) {
        // Setup Arrays
        var sortedKeys = new Array();
        var sortedObj = {};

        // Separate keys and sort them
        for (var i in arr) {
            sortedKeys.push(i);
        }
        sortedKeys.sort();

        // Reconstruct sorted obj based on keys
        for (var i in sortedKeys) {
            sortedObj[sortedKeys[i]] = arr[sortedKeys[i]];
        }
        return sortedObj;
    }
    list_region = sortObj(list_region);

    var Filter_region = $(" <select style='max-width:140px;'>")
        .append("<option value=0>&nbsp;</option>")
        .change(function () {
            search = $(this).val();

            var el = $("td.geo").each(function () {
                // If the filter is not set, then show everything that is
                if (search == 0) {
                    $(this).parent().show();
                    return;
                }
                var reg = $.trim($(this).attr("title"));
                //console.log( reg + "[" + search +"]");
                // Apply a filter
                if (reg.search(search) == -1) {
                    $(this).parent().hide();
                } else {
                    $(this).parent().show();
                }
            });
        });

    for (name in list_region) {
        str = '<option class="' + list_flags[name] + '" value="' + name + '">' + name;
        if (list_region[name] > 1) str += " (" + list_region[name] + ")";
        str += "</option>";
        Filter_region.append(str);
    }

    // Filter by city
    var input_city = $("<input>")
        .attr({ type: "text", value: "" })
        .change(function () {
            var needle = new RegExp("^\\s*" + input_city.val(), "i");
            console.log(needle);

            var find_count = 0;
            var el = $("td.geo").each(function () {
                // If the filter is not set, then show everything that is
                if (needle.length == 0) {
                    $(this).parent().show();
                    return;
                }
                // Apply a filter
                if ($(this).text().search(needle) == -1) {
                    $(this).parent().hide();
                } else {
                    $(this).parent().show();
                    find_count++;
                }

                if (find_count == 0) $("#city_info").html("&nbsp;");
                else $("#city_info").html("(" + find_count + ")");
            });
        });

    var ext_panel = $("#extension_panel");
    if (ext_panel.length == 0) {
        // If there is no panel yet, then add it
        var panel =
            "<div style='padding: 2px; border: 1px solid #0184D0; border-radius: 4px 4px 4px 4px; float:left; white-space:nowrap; color:#0184D0; display:none;'  id=extension_panel></div>";
        container.append("<tr><td>" + panel);
    }
    $("#extension_panel").append(Filter_region);
    $("#extension_panel").append(" Город: ").append("<span id=city_info>&nbsp;</span> ").append(input_city);

    $("#extension_panel")
        .append(" Name: ")
        .append("<span id=find_info>&nbsp;</span> ")
        .append(input)
        .append("&nbsp;")
        .append("Efficiency: ")
        .append("<span id=ef_info>&nbsp;</span> ")
        .append(input_ef);
    //Don’t forget to clean up
    $("#extension_panel").append("&nbsp;").append(input_id);
    $("#extension_panel").show();
};

if (window.top == window) {
    var script = document.createElement("script");
    script.textContent = "(" + run.toString() + ")();";
    document.documentElement.appendChild(script);
}
