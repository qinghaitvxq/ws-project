/**
 * Created by caipf on 2017/3/16.
 */

//暂无数据提示插件
/*
$('父容器').no_data_tips({
  'tips':'string' ---你想提示的信息，默认为no data to display
  'data':'number' ---默认为0,出现提示字样，大于0，则删除字样
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
    }
})(jQuery);

/*文件上传*/
(function ($) {

    var methods={
        init:function (options) {
            var myfiles=new Array();
            console.log('this is init');
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
                    for(var j=0;j<_this.myfiles.length;j++){
                        if(filename==_this.myfiles[j].name)
                            return;
                    }
                    _this.myfiles.push(filelist[i]);
                    var li_element="<li><span class='file_name'>"+filename
                        +"</span><span class='glyphicon glyphicon-remove btn-red-font pointer_span del'></span>"
                        +"</li>";
                    $('.filelist').append(li_element);
                }
            });
            //删除按钮事件
            $(".filelist").on("click",".del",function (e) {
                var _delobj=$(e.target);
                var filename=_delobj.parent().find('.file_name').text();

                //删除对应文件数组中的元素
                for(var j=0;j<_this.myfiles.length;j++){
                    if(filename==_this.myfiles[j].name){
                        this.myfiles.splice(j,1);
                    }
                }
                _delobj.parent().remove();
            });
        },
        getfiles:function () {
            console.log('this is getfiles');
            return this.myfiles;
        }
    }
    $.fn.file_upload=function (method) {
        var myfiles=new Array();
        if(method=="init"){
          myfiles=methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        }
        console.log('not...sure');
        console.log(myfiles);

        // if ( methods[method] ) {
        //     return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        // } else if ( typeof method === 'object' || ! method ) {
        //     return methods.init.apply( this, arguments );
        // } else {
        //     $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        // }

        // <div class="file_upload_area gray-font">
        //     <ul class="none_style_ul">
        //     <li><span>国际竞品公司调研报告.doc</span><span class="glyphicon glyphicon-remove btn-red-font pointer_span"></span></li>
        //     <li><span>电脑申请流程图.png</span><span class="glyphicon glyphicon-remove btn-red-font pointer_span"></span></li>
        //     <li><span>国际竞品公司调研报告for test.xls</span><span class="glyphicon glyphicon-remove btn-red-font pointer_span"></span></li>
        //     </ul>
        //     <a href="javascript:;" class="btn btn-default a-upload  ">
        //     <input type="file" name="" id="">
        //     <span >添加附件</span>
        //     </a>
        //     </div>

        // var settings=$.extend({
        //
        // },options);



    }
})(jQuery);