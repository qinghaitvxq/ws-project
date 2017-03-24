/**
 * Created by caipf on 2017/3/16.
 */
//
// /*创建流程节点*/
// (function ($) {
//     var methods={
//         init:function (options) {
//
//            var _this=this;
//
//            var settings=$.extend({
//                 "Edit":false
//             },options);
//
//            this.createNode=function (level) {
//                this.title="";
//                this.content="";
//                this.index=level;
//                this.childrenNode=[];
//            };
//            //data属性用来存储空间当前的数据信息
//            this.data('nodelist',[]);
//
//            //添加一级节点事件处理
//            this.on("click",function (e) {
//                var thisobj=e.currentTarget;
//                //数据
//                var fnode_length=_this.data("nodelist").length;
//                var new_f_node   =new _this.createNode("f"+fnode_length);
//                _this.data("nodelist").push(new_f_node);
//
//                //表现
//                _this.trigger("datachange",[thisobj,"f"]);
//            });
//
//            //添加子节点事件监听
//            this.on('click','.flow_parent_ul .glyphicon',function (e) {
//                e.stopPropagation();
//
//                var add=$(e.currentTarget).hasClass("icon_add_child");
//
//                var node_index=$(e.currentTarget).attr('nodeindex');
//                var pos=node_index.split('_');
//
//                if(pos.length==2) {
//                    //添加二级节点
//                    //data
//
//                    var snode_length=_this.data("nodelist")[pos[1]].childrenNode.length;
//                    var new_s_node   =new _this.createNode(node_index+"_"+snode_length);
//                    _this.data("nodelist")[pos[1]].childrenNode.push(new_s_node);
//
//                    //表现
//                    var s_index=snode_length;
//                    _this.trigger("datachange",[e.currentTarget,"s",s_index]);
//
//                }else if(pos.length==3){
//                    //要添加三级节点
//                    console.log('添加三级节点');
//                     //data
//                    var tnode_length=_this.data("nodelist")[pos[1]].childrenNode[pos[2]].childrenNode.length;
//                    var new_t_node=new _this.createNode(node_index+"_"+tnode_length);
//                    _this.data("nodelist")[pos[1]].childrenNode[pos[2]].childrenNode.push(new_t_node);
//
//                    //表现
//                    var t_index=tnode_length;
//                    _this.trigger("datachange",[e.currentTarget,"t",t_index]);
//                }
//
//            });
//
//            //删除子节点事件监听
//            this.on('click','.flow_parent_ul .icon_remove_child',function (e) {
//                e.stopPropagation();
//                 alert('hi,要删除子节点啦');
//             });
//
//
//            // 添加或删除节点时触发
//             _this.bind('node.update',function (e,para) {
//                  console.log("node.update happend");
//                  console.log(e);
//                  console.log(para);
//             });
//             //data变化时触发
//             _this.bind('datachange',function (e,thisobj,target_node_level,s_index) {
//                 console.log('datachange');
//
//                 //ui 变化  (thisobj是最外层的容器对象)
//                 if(target_node_level=="f"){
//                     var nodeid=target_node_level+"_"+(_this.data("nodelist").length-1);
//
//                     var f_node="<li class='flow_parent_li' id='"+nodeid+"'>"+
//                                     "<div class='node_out_div' >"+
//                                        "<div class='edit-area'>"+
//                                           "<span class='glyphicon glyphicon-plus icon_add_child' nodeindex='"+nodeid+"'></span>"+
//                                           "<span class='glyphicon glyphicon-trash btn-red-font icon_remove_child' nodeindex='"+nodeid+"'></span>"+
//                                        "</div>"+
//                                        "<input  class='form-control' placeholder='输入一级节点名称'>"+
//                                        "<textarea class='form-control' rows='3' placeholder='请输入对该流程节点的解释说明'></textarea>"+
//                                      "</div>"+
//                                 "</li>";
//
//                     $(thisobj).find(".flow_parent_ul").append(f_node);
//
//                 }else{
//
//                     var nodeindex=$(thisobj).attr('nodeindex')
//                     var p_ele=_this.find("[id='"+nodeindex+"']");
//                     if(p_ele.find('ul').length==0){
//                         p_ele.append("<ul></ul>");
//                     }
//                     var nodeid=nodeindex+"_"+s_index;
//
//                     var span_add="<span class='glyphicon glyphicon-plus icon_add_child' nodeindex='"+nodeid+"'></span>",
//                         span_remove="<span class='glyphicon   btn-red-font glyphicon-trash icon_remove_child' nodeindex='"+nodeid+"'></span>";
//
//                     var span_html=target_node_level=="s"?(span_add+span_remove):(span_remove);
//                     var placeholder=target_node_level=="s"?"输入二级节点名称":"输入三级节点名称";
//
//
//                     var s_node="<li id='"+nodeid+"'>"+
//                                  "<div class='flow_parent_li node_out_div'>"+
//                                        "<div class='edit-area'>"+
//                                            span_html+
//                                        "</div>"+
//                                        "<input  class='form-control' placeholder='"+placeholder+"'>"+
//                                        "<textarea class='form-control' rows='3' placeholder='请输入对该流程节点的解释说明'></textarea>"+
//                                   "</div>"+
//                                 "</li>";
//
//                     p_ele.find(">ul").append(s_node);
//                 }
//             })
//             //删除数据时触发
//             _this.bind('removedata',function (e) {
//
//             });
//         }
//     }
//
//     //方法调用
//     $.fn.flow_level_node=function (method) {
//         // Method calling logic
//         if ( methods[method] ) {
//             return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
//         } else if ( typeof method === 'object' || ! method ) {
//             return methods.init.apply( this, arguments );
//         } else {
//             $.error( 'Method ' +  method + ' does not exist on jQuery.file_upload' );
//         }
//     }
//
// })(jQuery);



//弹框提示插件
/*
 $('父容器').no_data_tips({
 'tips':'string' ---你想提示的信息，默认为no data to display
 'data':number ---默认为0,出现提示字样，大于0，则删除字样
 );
 */
(function ($) {
    $.fn.modal_info=function (options) {

        var settings=$.extend({
            'tips':'操作成功'
        },options);

        var modal="<div class='modal-overlay'>"+
                        "<div class='modal-data'>"+
                            "<p>点击<a onclick='overlay()' href=''> 这里</a>关闭</p>"+
                        "</div>"+
                       "</div>";

        $("body").append(modal);
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