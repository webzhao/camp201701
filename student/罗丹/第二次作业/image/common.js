//无图图像
var nullimg='../images/error.jpg';
function lod(t){
	t.onerror = null;
	t.src=nullimg
}
$(document).ready(function(){
	$("img").each(function(){
	if($(this).attr("src")=="")
	{
		$(this).attr({"src":nullimg})
	}
	})
})
var nullsimg='images/error.jpg';
function load(t){
	t.onerror = null;
	t.src=nullsimg
}
$(document).ready(function(){
	$("img").each(function(){
	if($(this).attr("src")=="")
	{
		$(this).attr({"src":nullsimg})
	}
	})
})



$(document).ready(function(){
	
//单独样式标记	
$(".nav li:last").addClass('last');
$(".nav li:first").addClass('first');
$(".flist dl:last").addClass('last');
$(".flist dl:first").addClass('first');
$(".footer ul li:last").addClass('last');

$('.header .nav li:eq(6)').addClass('li7');

/*$(".slidesbox ul.ul02 li span.ul_conn:nth-child(3n)").addClass('last');*/




$(".in_share .wx").hover(function(){
	$(this).next(".wx_con").show();
	})
$(".in_share").hover(function(){
	},function(){
	$(this).find(".wx_con").hide();
	})
	
	
	
})


//banner切换
$(function(){
(function(){
		var curr = 0;
		$(".ban_ico .trigger").each(function(i){
			$(this).click(function(){
				curr = i;
				//$(".ban_img li").eq(i).fadeIn("slow").siblings("li").hide();
				var w_ul=$(".banner").width();
				$(".ban_img").stop().animate({"left":-w_ul*i},1000)
				$(this).siblings(".trigger").removeClass("selected").end().addClass("selected");
				return false;
			});
		});
		var ico_num = $(".ban_ico li").size();
		var pg = function(flag){
			if (flag) {
				if (curr == 0) {
					todo = ico_num-1;
				} else {
					todo = (curr - 1) % ico_num;
				}
			} else {
				todo = (curr + 1) % ico_num;
			}
			$(".ban_ico .trigger").eq(todo).click();
		};
		
		/*$(".arr_ll").click(function(){
			pg(true);
			return false;
		});
		
		$(".arr_rr").click(function(){
			pg(false);
			return false;
		});*/
		
		var timer = setInterval(function(){
			todo = (curr + 1) % ico_num;
			$(".ban_ico .trigger").eq(todo).click();
		},5000);
		
		$(".ban_img,.arr_ll,.arr_rr").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % ico_num;
					$(".ban_ico .trigger").eq(todo).click();
				},5000);			
			}
		);
	})();
})




//sidebar
$(function(){
    $('.sidebar .item > li > a').click(function(){
        var e;
        e=$(this).parent();
        if(e.hasClass('open')){
            e.attr('class','close');
        }else{
            if(e.hasClass('close')){
            e.attr('class','open');
            }
        }
        e.siblings().attr('class','close');
    })
})



//问答展开收起
$(function(){   
    $('.course_m .bd dt').click(function(){
        var e;
        e=$(this).parent();
        if(e.hasClass('open')){
            e.attr('class','close');
        }else{
            if(e.hasClass('close')){
            e.attr('class','open');
            }
        }
        e.siblings().attr('class','close');
    })
})

/* yan */
//   安全产品
$(function(){
	$(".safe_faq .title .off").show();
	//$(".safe_faq .on .open").show();
	
	$(".safe_faq .title").click(function(){
		if($(this).next(".content").is(":hidden")){
			$(this).removeClass("on").addClass("on").siblings(".title").removeClass("on");
			$(this).find("span.open").show();
			$(this).find("span.off").hide();
			$(this).siblings(".title").find("span.open").hide();
			$(this).siblings(".title").find("span.off").show();
			$(this).next().show();
			$(this).next().siblings(".content").hide();
		}else{
			$(this).removeClass("on");
			$(this).find("span.open").hide();
			$(this).find("span.off").show();
			$(this).next().hide();
		}
	})
	$(".safe_faq .title:first").click();
	$(".safe_faq dl:odd").css("float","right")
	$(".join_table th:last").css({"border-right":"0"})
	$(".join_table tr").each(function() {
        $(this).find("td:first").css({"padding-left":"45px",width:179})
		$(this).find("td:last").css({"border-right":"0"})
    });
	$(".ask dl:first").css("z-index",2)
	$(".ask dl").each(function(i){
		$(this).find("dt").click(function(e){
			e.preventDefault();
			e.stopPropagation()
			$(".ask dl").eq(i).find("dd").show();
			$(".ask dl").eq(i).find("dd a").each(function(x){
				$(this).click(function(){
					$(".ask dl").eq(i).find("dd a").removeClass("on")
					$(this).addClass("on")
					$(".ask dl").eq(i).find("dt").text($(this).text())
					//$(".ask dl").eq(i).next(".select_hidden").val($(this).attr("data-val"))
				})
			})	
		})
	})
	$(document).click(function(){
		$(".ask dl dd").hide();
	})	
	$(".publication_cont:first").css("padding-top",0).next().css("padding-top",0)
//	$(".honnor_con").hide()
//	$(".honnor_con").first().show();
//	$(".honnor_list li").each(function(index){
//		$(this).hover(function(){
//			$(".honnor_con").hide()
//			$(".honnor_con:eq("+index+")").show();
//			$(".honnor_list li").removeClass("on")
//			$(this).addClass("on")
//		})
//	})
	
	$(".newlist ul li").each(function() {
        $(this).find("span").height($(this).height());
    });
	
})


//大事记
//$(function(){
//	$(".eventCon_list li").each(function(index){
//		$(this).mouseover(function(){
//			var nIndex=$(this).attr("rel");
//			$(".newlist").addClass("hid")//addClass("hid") 添加class样式
//			$(".newlist:eq("+nIndex+")").removeClass("hid")//removeClass("hid") 删除class样式
//			$(".eventCon_list li").removeClass("hover")
//			$(this).addClass("hover")
//		})
//	})
//})

$(function(){
var count=0;
var moveWrap=$(".eventCon_list");
var moveLiWidth=$(".eventCon_list li:eq(0)").width()+2;
var eventScroll={
		move:function(){
				
			},
		leftMenu:function(){
				if(!moveWrap.is(":animated")){
					if(moveWrap.find("li").size() <= 5){return false};
					//console.log(count)
					if(count<=0){
						moveWrap.css("marginLeft",0);
					}else{
						count--;
						moveWrap.animate({"marginLeft":"+="+moveLiWidth});
					}
				}
			},
		rightMenu:function(){
				if(!moveWrap.is(":animated")){
					//console.log(count)
					if(moveWrap.find("li").size() <= 5){return false};
					if(count>=moveWrap.find("li").size()-5){
						moveWrap.css("marginLeft",moveWrap.find("li").size()*moveLiWidth*-1+5*moveLiWidth);
					}else{
						count++;
						moveWrap.animate({"marginLeft":"-="+moveLiWidth});
						}
				}
			}
	}
	
$("#LeftArr").click(function(){
		//alert("left")
		eventScroll.leftMenu();		
	})
	
$("#RightArr").click(function(){
		//alert("right");
		eventScroll.rightMenu();					
	})
	
})



$(function(){
		function scroll_manage(){
				var oUl = $(".list ul");
				var oLiWid = $(".list ul li:eq(0)").width()+22;
				var timer = null;
				var leB = $(".link_left");
				var riB = $(".link_right");
				
				if(oUl.find("li").size() < 8){return false};
				
				function prevLeft(){
					if(!oUl.is(":animated")){
						clearTimeout(timer);
						oUl.find("li:last").clone().prependTo(oUl);
						oUl.css("left","-" + oLiWid + "px");
						oUl.animate({"left":"+=" + oLiWid + "px"},1000);
						oUl.find("li:last").remove();
						timer = setTimeout(nextLeft,3000);
					};
				};
				
				function nextLeft(){
					if(!oUl.is(":animated")){
						clearTimeout(timer);
						oUl.animate({"left":"-=" + oLiWid + "px"},1000,function(){
							$(this).css("left","0px").find("li:first").appendTo($(this));
						});
						timer = setTimeout(nextLeft,3000);
					};
				};
				
				
				leB.click(function(){
					prevLeft();
				});
				
				riB.click(function(){
					nextLeft();
				});
				
				timer = setTimeout(nextLeft,3000);
				$(".swcl_con,.btnLeft,.btnRight").hover(function(){
					clearTimeout(timer);
				},function(){
					timer = setTimeout(nextLeft,3000);
				});
		}
					
		scroll_manage();
	
})


//print

function doPrint() {
bdhtml=window.document.body.innerHTML;
sprnstr="<!--startprint-->";
eprnstr="<!--endprint-->";
prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17);
prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));
OpenWindow = window.open("");  
OpenWindow.document.write("<!DOCTYPE html PUBLIC '-\/\/W3C\/\/DTD XHTML 1.0 Transitional\/\/EN' 'http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-transitional.dtd'><html xmlns='http:\/\/www.w3.org\/1999\/xhtml'><HEAD><meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\" \/><TITLE>打印页面<\/TITLE><link href=\"..\/css\/common.css\" rel=\"stylesheet\" type=\"text\/css\" \/><\/HEAD><BODY><div id=\"printbox\" ><\/div><\/BODY><\/HTML>"); 
OpenWindow.document.getElementById("printbox").innerHTML=prnhtml;  
OpenWindow.document.close(); 
OpenWindow.print();  
}
$(document).ready(function(){
	$('.font_size a').click(function () {
        var index = jQuery(this).index();
        jQuery(this).addClass('on').siblings().removeClass('on');
        if (index == 0) {
            $('.conts').css('font-size', '12px');
			$('.conts').css('line-height', '20px');
			
        }
        else if (index == 1) {
            $('.conts').css('font-size', '14px');
			$('.conts').css('line-height', '24px');
			
        }
        else {
            $('.conts').css('font-size', '16px');
			$('.conts').css('line-height', '28px');
			
        }
    })
})
/*
$(function(){
	$('.footer ul li:eq(2)').hover(function(){
		$('#doyoo_panel').css("visibility","visible");
		$('#doyoo_panel').show();
	},function(){
		//$('#doyoo_panel').hide();
	})
	jQuery('#doyoo_panel').bind('mouseleave',function(){this.style.visibility='hidden'})
})*/
