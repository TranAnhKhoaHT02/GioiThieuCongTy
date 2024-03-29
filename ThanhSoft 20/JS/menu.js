jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};
(function($) {
    $.fn.lavaLamp = function(o) {
        o = $.extend({ fx: "backout", speed: 1000, click: function(){} }, o || {});
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
        $('span', ul).css('color', '#a51717');
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
    $('#menu ul.menu').lavaLamp({
        fx : 'backout', speed : 1000
    });
    if (!($.browser.msie && $.browser.version.substr(0, 1) == '6'))
    {
        $('ul ul a span', '#menu').css('color', 'rgb(169,169,169)').hover(function ()
        {
            $(this).animate({
                color : '#090909'
            }, 500)
        },
        function ()
        {
            $(this).animate({
                color : '#a9a9a9'
            }, 200)
        })
    }
});