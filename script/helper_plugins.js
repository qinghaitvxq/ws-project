/**
 * Created by caipf on 2017/3/16.
 */

/*创建流程节点*/
(function ($) {
    var methods={
        init:function () {
           this.data('nodelist',[]);

           var outdiv="<div class='new-flow-form out_div'></div>";
           this.wrap(outdiv);

           this.on('click',function () {

               var outdiv=$(this).parent();

              //add first level node

               var f_node="<div class='node_out_div'>"+
                   "<div class='edit-area'>"+
                   "<span class='glyphicon glyphicon-plus icon_add_child'></span>"+
                   "<span class='glyphicon glyphicon-trash btn-red-font icon_remove_child'></span>"+
                   "</div>"+
                   "<input  class='form-control' placeholder='输入一级节点名称'>"+
                   "<textarea class='form-control' rows='3' placeholder='请输入对该流程节点的解释说明'></textarea>"+
                   "</div>";

               var p_ele="<div class='form-group'>"+
                            "<ul class='flow_parent_ul'>"+
                               "<li class='flow_parent_li'>"+
                                    f_node+
                                 "</li>"+
                            "</ul>"+
                         "</div>";

               // var f_node="<div class='node_out_div'>"+
               //               "<div class='edit-area'>"+
               //                 "<span class='glyphicon glyphicon-plus'></span>"+
               //                 "<span class='glyphicon glyphicon-trash btn-red-font'></span>"+
               //               "</div>"+
               //               "<input  class='form-control' placeholder='输入一级节点名称'>"+
               //               "<textarea class='form-control' rows='3' placeholder='请输入对该流程节点的解释说明'>"+
               //             "</div>";

               $(this).before(p_ele);
               $(".flow_parent_ul").on('click','.icon_add_child',function () {
                   console.log('add child');

               });





           });

        }
    }
    $.fn.flow_level_node=function (method) {

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