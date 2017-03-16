/**
 * Created by caipf on 2017/3/16.
 */
/**
 * Created by caipf on 2017/3/16.
 */

//暂无数据提示插件
(function ($) {
    $.fn.no_data_tips=function (options) {

        var settings=$.extend({
            'tips':'no data to display'
        },options);

        var tips_html="<div class='no_data'>"
                     +settings.tips
                     +"</div>";
            this.html(tips_html).css({
                "position":"relative"
            });
    }
})(jQuery);