$((function(){var o=$("#header"),a=$("#intro").innerHeight(),l=$(window).scrollTop();function n(l){l>=a?o.addClass("fixed"):o.removeClass("fixed")}n(l),$(window).on("scroll",(function(){n(l=$(this).scrollTop())})),$("[data-scroll]").on("click",(function(o){o.preventDefault();var a=$(this),l=a.data("scroll"),n=$(l).offset().top;$("#nav a").removeClass("active"),a.addClass("active"),$("html, body").animate({scrollTop:n},500)})),$("#nav_toggle").on("click",(function(o){o.preventDefault(),$(this).toggleClass("active"),$("#nav").toggleClass("active")})),$("#dropdown").on("click",(function(o){o.preventDefault(),$(this).toggleClass("active")})),$("#drag1").draggable({stack:"#drop1"}),$("#drop1").droppable({over:function(){$("#drag1").css("background-color","#d7fa99"),$("#drop1").css("background-color","#d7fa99")},drop:function(){$("#drag1").css("display","none"),$("#drop1").css("background-color","#c4f66f"),$("#drop1").html("Перемещение завершено успешно."),alert("Вы перетащили элемент с id=drag1 в область с id=drop1.")}})}));