/**
 * Created by caipf on 2017/3/16.
 */

function  isIELower(ver){
    var b = document.createElement('b');
    b.innerHTML = '<!--[if lt IE ' + ver + ']>1<![endif]-->';
    return b.innerHTML =="1";
}
/*弹框显示元素内部HTML*/
(function ($) {
    $.fn.popover_innerHTML=function (options) {
        var settings=$.extend({
            "target_ele_class":$(this).attr("class")
        },options);
        $(this).on("mouseenter mouseleave",function (e) {
            if(e.type=="mouseenter") {
                var popover = "<div class='popover fade left in tree-info-pover gray-font'"
                    + "style='display: none;min-height: 60px;width:450px'>"
                    + "<div class='arrow' style='top: 25px'></div><h3 class='popover-title' style='display: none;'></h3>"
                    + "<div class='popover-content'></div>"
                    + "</div>";

                $('body').append($(popover));

                var desc = $(this).parent().children('.'+settings.target_ele_class).html();
                if (!desc || desc.length <= 0) {
                    desc = "暂无信息";
                }
                var cur_ele_pos = $(this).offset();
                var left = cur_ele_pos.left;
                var top = cur_ele_pos.top;
                var width = $(".popover").width();
                var height = $(this).height();

                $('.popover').css({
                    "position": "absolute",
                    "display": "block",
                    "left":left-460+"px",
                    "top": top - 6 + "px",
                }).find('.popover-content').html(desc);
            }
            if(e.type=="mouseleave"){
                  $('.popover').remove();
            }
        });

        return this;
    }
})(jQuery);


//暂无数据提示插件
/*
$('父容器').no_data_tips({
  'tips':'string' ---你想提示的信息，默认为no data to display
  'data':number ---默认为0,出现提示字样，大于0，则删除字样
);
*/
(function ($) {
    $.fn.no_data_tips=function (options) {

        var settings=$.extend({
            'tips':'no data to display',
            'data':0
        },options);

        var tips_html="<div class='no_data'>"
            +settings.tips
            +"</div>";

        //若是有数据，则将字样删除，否则新增
        if(settings.data>0){
            $('.no_data').remove();
        }else{
            this.append(tips_html).css({
                "position":"relative"
            });
        }
        return this;
    }
})(jQuery);

/*添加附件*/
(function ($) {

    var methods={

        init:function (options) {

            if(isIELower(10)){
                return;
            }

            this.data('files',new Array());
            var _this=this;
            var a_element="<a href='#' class='btn btn-default a-upload' ></a>",
                span_element="<span>添加附件</span>",
                div_element="<div class='file_upload_area gray-font'></div>",
                ul_element="<ul class='none_style_ul filelist'></ul>";

            this.wrap(a_element).after(span_element);
            this.parent().wrap(div_element);
            this.parent().before(ul_element);

            //添加附件事件触发
            this.on('change',function () {
                var filelist=this.files;
                if(filelist.length==0) return;
                for(var i=0;i<filelist.length;i++){
                    var filename=filelist[i].name;
                    //检查同名
                    var exist=false;
                    for(var j=0;j<_this.data("files").length;j++){
                        if(filename ==_this.data("files")[j].name){
                            exist=true;
                            break;
                        }
                    }
                    if(!exist) {
                        //添加文件对象到对象data里
                        _this.data("files").push(filelist[i]);

                        var li_element = "<li><span class='file_name'>" + filename
                            + "</span><span class='glyphicon glyphicon-remove btn-red-font pointer_span del'></span>"
                            + "</li>";

                        _this.parent().parent().find(".filelist").append(li_element);
                    }
                }
            });

            //删除按钮事件
            _this.parent().parent().find(".filelist").on("click.file_del",".del",function (e) {

                var _delobj=$(e.target);
                var filename=_delobj.parent().find('.file_name').text();

                //删除对应文件数组中的元素
                for(var j=0;j<_this.data("files").length;j++){
                    if(filename==_this.data("files")[j].name){
                       _this.data("files").splice(j,1);
                    }
                }
                //清除原文件域中的文件,防止删除某个文件后再次添加时失败
                _this.val("");
                _delobj.parent().remove();

                // 回调函数
                 if(options && options.delserverfile && typeof options.delserverfile === 'function' ){
                        var delserverfile=options.delserverfile;
                            delserverfile(filename);
                 }
            });

            //编辑,已存在附件情况
            if(options &&options.filelist && options.filelist.length>0){

                //附件列表显示
                for(var i=0;i<options.filelist.length;i++){
                    var li_element = "<li><span class='file_name'>" + options.filelist[i]
                        + "</span><span class='glyphicon glyphicon-remove btn-red-font pointer_span del'></span>"
                        + "</li>";

                    _this.parent().parent().find('.filelist').append(li_element);
                }
            }
        }
    }
    $.fn.file_upload=function (method) {

        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.file_upload' );
        }
    }
})(jQuery);

