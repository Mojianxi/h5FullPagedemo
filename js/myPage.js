/*
* @Author: apple
* @Date:   2017-09-17 18:16:20
* @Last Modified by:   apple
* @Last Modified time: 2017-09-24 14:22:02
*/
$(function(){
	var k = $(window).height(); // 当前屏幕的高度
	var flag = false;  // 控制动画
    // 点击next 往下播放一屏幕
    $(".next").click(function(event) {
       $.fn.fullpage.moveSectionDown();
    });
    $('#fullpage').fullpage({ // fullpage  方法里面接受json对象形式
    	// 是否显示项目导航
    	navigation: true,
    	// navigationPosition: "left",
    	// loopBottom: true,
    	// 滚动速度，单位为毫秒
    	scrollingSpeed: 1200,

    	// 回调函数滚动到第二屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        
    	afterLoad: function(anchorLink, index) {
            // 往第2屏幕滚动的时候，next 先消失  等所有动画都完毕了 next 才淡出 
    		if(index == 2) {
                $(".next").fadeOut();
                // 缓动动画要加到时间的后面，回调函数的前面
    			$(".search").show().animate({"right": 370}, 1500, "easeOutBack", function() {
    				// 方块走进来，沙发2个字显示
    				$(".search-wrods").animate({"opacity": 1},500, function() {
    					$(".search").hide();
    					// 图片 往右上角， 缩小
    					$(".search-02-1").show().animate({"height": 30, "right": 250, "bottom": 452}, 1000);
    					// 同时 沙发图片 变大
    					$(".goods-02").show().animate({"height": 218}, 1000, "easeInOutQuart");
    					// 同时 白色文字渐渐的显示出来
    					$(".words-02").animate({"opacity": 1},500, function() {
                            $(".next").fadeIn();
                        })
    				});
    			});
    		}
    	},

    	// 刚开始滚动屏幕就触发的回调函数 onLeave
    	// 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
    	onLeave: function(index, nextIndex, direction) {
             $(".next").fadeOut();
    		if(index == 2 && nextIndex == 3) {
    			// 当第二屏幕往第三屏幕滚动的时候， 沙发显示并且往第三屏幕跑  白色盒子显示
    			// 沙发要往第三屏幕走，  走的距离 就是  当前哦屏幕的高度 - main 到底部的高度 - 沙发到main的距离    (当前屏幕的高度  - 250 )
    			$(".shirt-02").show().animate({"bottom": -(k - 250), "width": 207 , "left": 260}, 2000, function() {
    				$(".img-01-a").animate({"opacity": 1}, 500, function() {
    					$(".btn-01-a").animate({"opacity": 1}, 500, function() {
                            $(".next").fadeIn();
                        });
    				})
    			});
    			$(".cover").show();
    		}
    		// 第3屏幕到第4屏幕过渡
    		if(index == 3 && nextIndex == 4 ) {
    			$(".shirt-02").hide();
    			 // 沙发的距离   当前屏幕的高度  - 250    + 第三屏幕的 50距离
    			$(".t1f").show().animate({"bottom" : -((k - 250) + 50), "left": 260}, 2000, function() {
    				 $(this).hide();  // 动画完毕之后，自动隐藏
    				 $(".car-img").show();
    				 // 这购物车就开始往右走
    				 $(".car").animate({"left": "150%"}, 3000, "easeInElastic",function() {
                         $(".note").show();
                         $(".note-img, .words-04-a").animate({"opacity": 1}, 1000, function() {
                             $(".next").fadeIn();
                         });

                     });
    			})

    		}

            // 第4屏幕到第5屏幕过渡
            if(index == 4 && nextIndex == 5 ) {
                    // 小手上来
                    $(".hand-05").animate({"bottom": 0}, 2000, function() {
                        // 鼠标显示
                        $(".mouse-05-a").animate({"opacity": 1});
                        // 沙发从 800 到  70
                        $(".t1f-05").show().animate({"bottom": 70}, 1000, function() {
                            // 单子上走 走完之后， 我们的文字翻转
                            $(".order-05").animate({"bottom": 390}, function() {
                                $(".words-05").addClass("words-05-a");
                                 $(".next").fadeIn();
                            });
                        })
                    });
            }
            // 第5屏幕到第6屏幕过渡
            if(index == 5 && nextIndex == 6 ) {
                // 沙发的距离 当前屏幕的高度 减去  box 的 bottom  500
                    $(".t1f-05").animate({"bottom": -(k - 500), "left": "40%", "width": 65}, 1500, function() {
                        $(".t1f-05").hide();
                    });

                    $(".box-06").animate({"left": "38%"}, 1500, function() {
                         $(this).animate({"bottom": 40}, 500, function() {
                            $(this).hide();

                            // 行走的过程就是 背景移动的过程
                            // 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标 
                            // 
                            $(".section6").animate({"backgroundPositionX": "100%"}, 4000, function() {
                                // 当背景动画执行完毕  boy 大小复原  
                                $(".boy").animate({"height": 305, "bottom": 116}, 1000, function() {
                                    $(this).animate({ "right": 500}, 500, function() {
                                        // 门显示出来 模拟打开门的效果
                                        $(".door").animate({"opacity": 1},200, function() {
                                            // 之后girl 显示出来
                                            $(".girl").show().animate({"right": 350, "height": 306 },500, function() {
                                                  $(".pop-07").show();
                                                   $(".next").fadeIn();
                                            })
                                        });
                                    });
                                });
                            });
                            // 光的速度
                            $(".words-06-a").show().animate({"left": "30%"},2000, "easeOutElastic");
                            // 
                            $(".pop-06").show();
                         });
                    });
                   
            }

             // 第6屏幕到第7屏幕过渡
            if(index == 6 && nextIndex == 7 ) {
                setTimeout(function() {
                    $(".star").animate({"width": 120}, 500, function() {
                        $(".good-07").show();
                         $(".next").fadeIn();
                    });

                }, 2000);
            }
            // 这是第8屏幕动画
            
              // $(".beginShoping").mouseenter(function(event) {
              //     $(".btn-08-a").show();
              // }).mouseleave(function(event) {
              //    $(".btn-08-a").hide();
              // });
              // hover 来替代更简洁  以后一个盒子鼠标经过显示离开隐藏  我们就可以用hover和toggle混搭想必也是极好的
              $(".beginShoping").hover(function() {
                   $(".btn-08-a").toggle();  //  toggle  显示和隐藏的切换
              });
              // 大手跟随鼠标移动  
              $(document).mousemove(function(event) {
                   var x = event.pageX - $(".hand-08").width() / 2;  // 获得鼠标在页面中的x坐标
                   var y = event.pageY + 10;  // 获得鼠标在页面中的y坐标

                   // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449 
                   var minY = k - 449; 
                   // 把 鼠标在页面中的坐标 给  hand 大手 left  top 
                   if(y < minY ) {
                      y = minY;
                   }
                
                 $(".hand-08").css({"left": x, "top": y});
              });

               // 当我们点击 再来一次的 时候， 分两步进行
               $(".again").click(function(event) {
                 // 1. 返回第1屏幕 
                   $.fn.fullpage.moveTo(1);
                    // 2. 所有的动画都复原 就是原来没有看过的样子 
                    // 核心原理就是  让我们的图片（做动画的元素 清除 行内样式就可以）
                    // 所有带有动画的div 盒子 添加 move 类名
                   $("img, .move").attr("style", "");
               });
              
    	},
  
    });  
});