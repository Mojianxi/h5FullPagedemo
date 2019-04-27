$(function() {
	var k=$(window).height();
	var flag=false;//控制沙发动画
	// $('#fullpage').fullpage();//fullPage内部可接收对象
	$(".next").click(function(event) {
		$.fn.fullpage.moveSectionDown();
	});
	$('#fullpage').fullpage({
		navigation:true,
		afterLoad:function(anchorLink,index) {
			if(index==2&&flag==false){
				$('.search').show().animate({"right":370},1500,"easeOutBack",function () {
					$(".search-words").animate({"opacity":1},500,function() {
						$('.search').hide();
						$('.search-02-1').show().animate({"height":30,"right":250,"bottom":452},1000,function() {
							flag=true;
						});
						$(".goods-02").show().animate({"height":218},1000);
						$(".words-02").animate({"opacity":1},500);
					});
				});
			}
		},

		//刚开始屏幕滚动就出发的函数onleave
		onLeave:function(index,nextIndex,direction) {
			if(index==2&&nextIndex==3&&flag){
				$(".shirt02").show().animate({"bottom":-(k-250),"width":207,"left":260},2000,function() {
					// body...
					$(".img-01-a").animate({"opacity":1},500,function() {
						$(".btn-01-a").animate({"opacity":1});
					})
				});
				$(".cover").show();
			}
			if(index==3&&nextIndex==4){
				$(".shirt02").hide();
				$('.t1f').show().animate({"bottom":-((k-250)+50),"left":260},2000,function() {
					// body...
					$(this).hide();
					$(".car-img").show();
					$(".car").animate({"left":"150%"},3000,"easeInElastic",function() {
						// body...
						$(".note").show();
						$(".note-img,.words-04-a").animate({"opacity":1},1000);
					});
				});
			}
			if(index==4&&nextIndex==5){
				$(".hand-05").animate({"bottom":0},2000,function() {
					// body...
					$(".mouse-05-a").animate({"opacity":1});
					$(".t1f-05").show().animate({"bottom":70},1000,function() {
						// body...
						$(".order-05").animate({"bottom":390},function() {
							// body...
							$(".words-05").addClass("words-05-a");
						});
					});
				});
			}
			if(index==5&&nextIndex==6){
				$(".t1f-05").animate({"bottom":-(k-500),"left":"40%","width":65},1500,function() {
					$(".t1f-05").hide();
				});
				$(".box-06").animate({"left":"38%"},1500,function() {
					$(".box-06").animate({"bottom":40},500,function() {
						$(".box-06").hide();
						$(".section6").animate({"backgroundPositionX":"100%"},4000,function() {
							// body...
							$(".boy").animate({"height":305,"bottom":116},1000,function() {
								// body...
								$(this).animate({"right":500},500,function() {
									$(".door").animate({"opacity":1},200,function() {
										$(".girl").show().animate({"right":350,"height":305},500,function () {
											$(".pop-07").show();
										});
									});
								});
							});
						});
						$(".words-06-a").show().animate({"left":"30%"},2000,"easeOutElastic");
						$(".pop-06").show();
					});
				});
			}

			if(index==6&&nextIndex==7){
				setTimeout(function() {
					$(".star").animate({"width":120},500,function() {
						$(".good-07").show();						
					});
				},2000);
			}
			// $(".beginShoping").mouseenter(function(event) {
			// 	$(".btn-08-a").show();
			// }).mouseleave(function(event) {
			// 	$(".btn-08-a").hide();
			// });
			$(".beginShoping").hover(function() {
				$(".btn-08-a").toggle();
			});
			$(document).mousemove(function(event) {
				var x=event.pageX-$(".hand-08").width()/2;
				var y=event.pageY+10;
				var minY=k-449;
				if(y<minY){
					y=minY;
				}
				$(".hand-08").css({"left":x,"top":y});
			});
			$(".again").click(function(event) {
				$.fn.fullpage.moveTo(1);
				// $("img,.move").attr("style","");
			});
		},
	});
});