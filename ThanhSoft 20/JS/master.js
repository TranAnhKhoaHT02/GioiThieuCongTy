function createMenuObj(TypeID, Expand)
{
    var elem = document.createElement('div');
    switch(TypeID)
    {
        case "1":
        {
            elem = document.createElement('div');
            elem.setAttribute('id', 'search');
            elem.setAttribute('class', 'main_left_drag');
            elem.innerHTML = "<h3 class=\"handle_drag\">TÌM KIẾM<a href=\"javascript:;\" class=\"" + (Expand == "True" ? "main_left_h" : "main_left_sh") + "\"></a></h3>" +
                            "<div id=\"search_content\"" + (Expand == "True" ? "" : " style=\"display:none;\"") + " >" +
                                 "<div id=\"txt_search\"><input title=\"Tìm kiếm\" name=\"search\" type=\"text\" /></div>" +
                                 "<div title=\"Tìm kiếm\" class=\"btn_search\" style=\"margin:auto;margin-top:15px;width:150px;height:30px;text-align:center;\">" +
                                 "<a href=\"javascript:;\">Tìm kiếm</a></div>" +
                            "</div>";
            break;
        }
        case "2":
        {
            elem = document.createElement('div');
            elem.setAttribute('id', 'navigation-block');
            elem.setAttribute('class', 'main_left_drag');
            elem.innerHTML = "<h3 class=\"handle_drag\">DANH MỤC CHÍNH<a href=\"javascript:;\" class=\"" + (Expand == "True" ? "main_left_h" : "main_left_sh") + "\"></a></h3> \n" +
                             "<div id=\"navigation-block_content\"" + (Expand == "True" ? "" : " style=\"display:none;\"") + " > \n" +
                                 "<ul id=\"sliding-navigation\"> \n" + 
                                     "<li style=\"margin-left: 0px;\" class=\"sliding-element\"><a href=\"#\">Tour nổi bật</a></li> \n" +
                                     "<li style=\"margin-left: 0px;\" class=\"sliding-element\"><a href=\"#\">Tìm kiếm tour</a></li> \n" +
                                     "<li style=\"margin-left: 0px;\" class=\"sliding-element\"><a href=\"/tin-tuc/tin-tuc-khuyen-mai/page-1.htm\">Tin khuyến mại</a></li> \n" +
                                     "<li style=\"margin-left: 0px;\" class=\"sliding-element\"><a href=\"PhoHienTravel.aspx?cid=1\">Bảng giá phòng</a></li> \n" +
                                     "<li style=\"margin-left: 0px;\" class=\"sliding-element\"><a href=\"#\">Thư viện hình ảnh</a></li> \n" +
                                 "</ul> \n" +
                             "</div>";
            break;
        }
        case "4":
        {
            elem = document.createElement('div');
            elem.setAttribute('id', 'google_map');
            elem.setAttribute('class', 'main_left_drag');
            elem.innerHTML = "<h3 class=\"handle_drag\">GOOGLE MAPS<a href=\"javascript:;\" class=\"" + (Expand == "True" ? "main_left_h" : "main_left_sh") + "\"></a></h3> \n" +
                              "<div id=\"cur_tour_content\"" + (Expand == "True" ? "" : " style=\"display:none;\"") + " >  \n" +
                               "<div style=\"width:169px;\"> \n" +
                                "<div id=\"map_canvas\"></div> \n" +
                                "<div id=\"map_search\"> \n" +
                                 "<div><input type=\"text\" id=\"txt_address\" style=\"height:20px;width:145px;margin-left:10px;\" /></div> \n" +
                                 "<div title=\"Tìm kiếm\" class=\"btn_search\" style=\"margin:auto;margin-top:10px;width:150px;height:30px;text-align:center;\"> \n" +
                                     "<a href=\"javascript:;\">Tìm kiếm</a></div> \n" +
                                "</div> \n" +
                               "</div> \n" +
                              "</div>";
            break;
        }
        case "5":
        {
            elem = document.createElement('div');
            elem.setAttribute('id', 'info');
            elem.setAttribute('class', 'main_left_drag');
            elem.innerHTML = "<h3 class=\"handle_drag\">PHOHIEN TRAVEL<a href=\"javascript:;\" class=\"" + (Expand == "True" ? "main_left_h" : "main_left_sh") + "\"></a></h3> \n" +
                             "<div id=\"info_content\"" + (Expand == "True" ? "" : " style=\"display:none;\"") + " > \n" +
                               "<p>Mail:&nbsp<a style=\"color:red\" href=\"mailto:tungnt90@gmail.com\">phohientravel.com</a></p> \n" +
                               "<p>Hưng Yên Office</p> \n" +
                               "<p>Đường Phan Chu Trinh</p> \n" +
                                "<p>Tel:(+84) 973 943 431 </p> \n" +
                               "<div style=\"height:1px;position:relative;left:20px;width:130px;background:Gray;margin-top:4px;margin-bottom:4px;\"></div> \n" +
                               "<p>Hỗ trợ trực tuyến: </p> \n" +
                               "<p><a href=\"ymsgr:sendim?tungbaby_love\"><img style=\"border-width:0px;\" alt=\"Yahoo hỗ trợ trực tuyến\" src=\"http://opi.yahoo.com/online?u=tungbaby_love&amp;m=g&amp;t=2&amp;l=us\" /></a></p> \n" +
                             "</div>";
            break;
        }
        case "6":
        {
            elem = document.createElement('div');
            elem.setAttribute('class', 'main_left_drag');
            elem.innerHTML = "<h3 class=\"handle_drag\">LIÊN KẾT<a href=\"javascript:;\" class=\"" + (Expand == "True" ? "main_left_h" : "main_left_sh") + "\"></a></h3> \n" +
                            "<div id=\"main_right_content\"" + (Expand == "True" ? "" : " style=\"display:none;\"") + " > \n" +
                                "<iframe src=\"/Images/Baner/banner.htm\" marginright=\"0\" marginleft=\"0\" margintop=\"0\" width=\"169\" frameborder=\"0\" height=\"695\" scrolling=\"no\"></iframe> \n" +
                            "</div>" ;
            break;
        }
    }
    return elem;
}
$(function() {
    for(var i = 0;i < left.length; i++)
    {
       document.getElementById('main_left').appendChild(createMenuObj(left[i].TypeID, left[i].Expand));
    }
    for(var i = 0;i < right.length; i++)
    {
       document.getElementById('main_right').appendChild(createMenuObj(right[i].TypeID, right[i].Expand));
    }
});
$(function() {
    $('img').lazyload({
      placeholder:"/Images/box.gif",
      effect:"fadeIn",
      threshhold: 200
    });
});
//Main_Left
//Google map
//var map;
//$(function() {
//      if (GBrowserIsCompatible()) {
//        map = new GMap2(document.getElementById("map_canvas"));
//        map.setCenter(new GLatLng(20.6492996, 106.0571899), 12);
//        map.openInfoWindowHtml(new GLatLng(20.6492996, 106.0571899), "PhoHienTravel");
//        //var myWife = new GLatLng(20.8859997, 106.4443054);
//        map.setUIToDefault();
//      }
//    }
//)
//function codeAddress() {
//    var address = document.getElementById("address").value;
//    var gcl = new GClientGeocoder();
//    gcl.getLatLng(address, function(pos)
//    {
//      map.setCenter(pos);
//    });
// }
//
$(function() {
$(".drag_main").sortable({
			revert: true,
			accept: 'main_left_drag',
			connectWith: '.drag_main',
			placeholder: 'module_place_holder',
			opacity: 0.5 ,
			handle: '.handle_drag',
			update: function(){
			}
		});
});
$(function(){
    $(".handle_drag a").click(function(){
     if($(this).parent().next().is(":hidden")){
            $(this).removeClass('main_left_sh').addClass('main_left_h');
            $(this).parent().next().slideDown("slow");
        }
        else{
            $(this).removeClass('main_left_h').addClass('main_left_sh');
            $(this).parent().next().slideUp("slow");
         }
    });
});
$(function(){
	$('#sliding-navigation li.sliding-element a').each(function(i)
	{
		$(this).hover(
		function()
		{
			$(this).animate({ paddingLeft: 25 }, 200);
		},		
		function()
		{
			$(this).animate({ paddingLeft: 15 }, 200);
		});
	});
})
//Menu
jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};
(function($) {
    $.fn.lavaLamp = function(o) {
        o = $.extend({ fx: "backout", speed: 500, click: function(){} }, o || {});
        return this.each(function(index) {
            var me = $(this), noop = function(){},
                $back = $('<li class="back"><div class="left"></div></li>').appendTo(me),
                $li = $(">li", this), curr = $("li.current", this)[0] || $($li[0]).addClass("current")[0];
            $li.not(".back").hover(function() {
                move(this);
            }, noop);
            $(this).hover(noop, function() {
                move(curr);
            });
            $li.click(function(e) {
                setCurr(this);
                return o.click.apply(this, [e, this]);
            });
            setCurr(curr);
            function setCurr(el) {
                $back.css({ "left": el.offsetLeft+"px", "width": el.offsetWidth+"px" });
                curr = el;
            };
            function move(el) {
                $back.each(function() {
                    $.dequeue(this, "fx"); }
                ).animate({
                    width: el.offsetWidth,
                    left: el.offsetLeft
                }, o.speed, o.fx);
            };
            if (index == 0){
                $(window).resize(function(){
                    $back.css({
                        width: curr.offsetWidth,
                        left: curr.offsetLeft
                    });
                });
            }
        });
    };
})(jQuery);
$(function ()
{
    var $ = jQuery;
    $.fn.retarder = function(delay, method){
        var node = this;
        if (node.length){
            if (node[0]._timer_) clearTimeout(node[0]._timer_);
            node[0]._timer_ = setTimeout(function(){ method(node); }, delay);
        }
        return this;
    };
    $('ul ul', '#menu').css({
        display : 'none', left :- 2
    });
    $('li', '#menu').hover(function ()
    {
        var ul = $('ul:first', this);
        $('span', ul).css('color', 'white');
        if (ul.length)
        {
            if (!ul[0].wid) {
                ul[0].wid = ul.width();
                ul[0].hei = ul.height();
            }
            ul.css({
                width : 0, height : 0, overflow : 'hidden', display : 'block'
            }).retarder(100, function (i)
            {
                i.animate({
                    width : ul[0].wid, height : ul[0].hei
                },
                {
                    duration : 300,
                    complete : function ()
                    {
                        ul.css('overflow', 'visible')
                    }
                })
            })
        }
    },//mouse out
    function ()
    {
        var ul = $('ul:first', this);
        if (ul.length)
        {
            var css = {
                display : 'none', width : ul[0].wid, height : ul[0].hei
            };
            ul.stop().css('overflow', 'hidden').retarder(50, function (i)
            {
                i.animate({
                    width : 0, height : 0
                },
                {
                    duration : 100,
                    complete : function ()
                    {
                        $(this).css(css)
                    }
                })
            })
        }
    });
    if(window.location.href.toLowerCase().indexOf('tin-tuc') != -1)
    {
      $('li#tintuc').addClass('current');
      if(window.location.href.toLowerCase().indexOf('tat-ca-cac-tin') != -1)
      {
        $('li#tintuc a:eq(0)').attr('href','#');
        $('li#tintuc a:eq(1)').attr('href','#');
      }
      else if(window.location.href.toLowerCase().indexOf('tin-tuc-du-lich') != -1)
      {
        $('li#tintuc a:eq(2)').attr('href','#');
      }
      else if(window.location.href.toLowerCase().indexOf('tin-tuc-khuyen-mai') != -1)
      {
        $('li#tintuc a:eq(3)').attr('href','#');
      }
    }
    if(window.location.href.toLowerCase().indexOf('lien-he') != -1) $('li#lienhe').addClass('current').children(":first").attr('href','#');
    $('#menu ul.menu').lavaLamp({
        fx : 'backout', speed : 1000
    });
    if (!($.browser.msie && $.browser.version.substr(0, 1) == '6'))
    {
        $('ul ul a span', '#menu').css('color', 'rgb(169,169,169)').hover(function ()
        {
            $(this).animate({
                color : '#ffffff'
            }, 500)
        },
        function ()
        {
            $(this).animate({
                color : 'White'
            }, 200)
        })
    }
});