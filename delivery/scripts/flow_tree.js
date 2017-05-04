/**
 * Created by yunxi on 2017/3/26.
 */

/*创建流程节点*/
(function ($) {
    $.extend($.fn, {
        replaceClass: function (c1, c2) {
            return this.removeClass(c1).addClass(c2).end();
        },
        prepareFlowNodes: function (settings) {
            return this.find("li");
        },
        prepareAddPos: function () {
            var parent_ele = this.parent().parent();
            var ul_ele = parent_ele.children("ul");
            if (ul_ele.length == 0) {
                parent_ele.append("<ul></ul>");
            }
            return parent_ele.children("ul");
        },
        prepareDelPos: function (ctrl_id) {
            var li_ele = this.parent().parent();
            if (li_ele.parent().children('li').length > 1 ||
                ( $("#" + ctrl_id).children("li").length == 1 && li_ele.parent().attr("id") == ctrl_id )) {
                return li_ele;
            }
            else {
                return li_ele.parent();
            }
        },
        applyClasses: function (ctrl_id,settings) {

             if(!settings.readonly) {
                var icon_plus = "<span class='" + CLASSES.glyphicon + " " + CLASSES.glyphicon_plus + "'></span>";
                var pid = this.parent().parent().parent().parent().parent().attr("id");
                if (pid == ctrl_id) {
                    icon_plus = "";
                }
                var editarea = "<div class='" + CLASSES.edit_area + "'>" +
                    icon_plus +
                    "<span class='" + CLASSES.glyphicon + " " + CLASSES.glyphicon_trash + " " + CLASSES.btn_red_font + "'/></span>" +
                    "</div>";
                console.log('check this herer');
                console.log(this);
                this.children('div').before(editarea);
             }
        },

        createnode: function () {
            var newnode = "<li>" +
                "<div style='min-width:118px'>" +
                "<input class='" + CLASSES.form_control + "' placeholder='节点名称'>" +
                "<textarea class='" + CLASSES.form_control + " " + CLASSES.hide + " 'row='3' placeholder='节点解释说明'></textarea>" +
                "</div>" +
                "</li>";
            return newnode;
        },
        flowtree: function (settings) {
            var settings = $.extend({}, settings);

            var _this = this;
            var ctrl_id = _this.attr("id");

            this.addClass("flowtree");

            if (!settings.readonly) {

                var flownodes = this.prepareFlowNodes();

                flownodes.each(function () {
                    $(this).applyClasses(_this.attr("id"),settings);
                });
                var addnode = "<div class='" + CLASSES.add_fnode + "'>" +
                    "<span class='" + CLASSES.glyphicon + " " + CLASSES.glyphicon_plus + "'></span>" +
                    "<span class='" + CLASSES.btn_topnode_add + "'>添加一级节点</span>" +
                    "</div>";
                this.after(addnode);
            }

            var createFirstNode = function () {
                var newnode = $(_this.createnode());
                _this.append(newnode);
                newnode.applyClasses(_this.attr("id"),settings);
            }
            //新增时默认显示一个节点框
            if (_this.children("li").length == 0) {
                createFirstNode();
            }
            //判断禁用标题和内容
            if(settings.input_r){
                _this.find("input").attr("disabled","disabled").css({
                    "background-color":"#eee"
                });

            }
            if(settings.textarea_r){
                _this.find("textarea").attr("disabled","disabled").css({
                    "background-color":"#eee"
                });
            }
            this.parent().on("click", "span", function (e) {
                var thisobj = $(e.currentTarget);

                if (thisobj.hasClass(CLASSES.btn_topnode_add)) {
                    createFirstNode();
                }
                if (thisobj.hasClass(CLASSES.glyphicon_plus)) {
                    //添加二、三级级节点
                    var newnode = $(_this.createnode());
                    var ul_ele = _this.prepareAddPos.apply(thisobj);
                    ul_ele.append(newnode);
                    newnode.applyClasses(_this.attr("id"),settings);

                }
                if (thisobj.hasClass(CLASSES.glyphicon_trash)) {
                    _this.prepareDelPos.apply(thisobj, [_this.attr("id")]).remove();

                }
            })
            this.parent().on("focus", "input.form-control", function (e) {
                //检查其他的textarea,没有字的全部隐藏
                _this.find("textarea").each(function () {
                    var cur_textarea = $(this)[0];
                    if (cur_textarea.value.trim().length == 0) {
                        $(cur_textarea).replaceClass(CLASSES.show, CLASSES.hide);
                    }
                });
                //展开自己下面的textarea
                $(e.currentTarget).siblings("textarea").replaceClass(CLASSES.hide, CLASSES.show);

            });

        }
    });
    $.flowtree = {};
    var CLASSES = ($.flowtree.classes = {
        glyphicon: "glyphicon",
        glyphicon_plus: "glyphicon-plus",
        icon_add_child: "icon_add_child",
        glyphicon_trash: "glyphicon-trash",
        icon_remove_child: "icon_remove_child",
        btn_red_font: "btn-red-font",
        form_control: "form-control",
        node_out_div: "node_out_div",
        edit_area: "edit-area",
        add_fnode: "add-fnode",
        btn_topnode_add: "btn_topnode_add",
        show: "show",
        hide: "hide"
    });

    // //方法调用
    // $.fn.flow_level_node=function (method) {
    //     // Method calling logic
    //     if ( methods[method] ) {
    //         return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    //     } else if ( typeof method === 'object' || ! method ) {
    //         return methods.init.apply( this, arguments );
    //     } else {
    //         $.error( 'Method ' +  method + ' does not exist on jQuery.file_upload' );
    //     }
    // }

})(jQuery);

