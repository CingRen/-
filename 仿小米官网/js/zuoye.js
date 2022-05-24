var datas = [
    ["Redmi 9","腾讯黑鲨游戏手机3","Redmi 8A","小米移动 电话卡"],
    ["小米电视 大师 65英寸OLED","小米电视5 75英寸","全面屏电视Pro 55英寸","小米电视4A 58英寸"],
    ["RedmiBook 13","显示器"],
    ["冰箱","微波炉","电磁炉","插线板"],
    ["手环5NFC","滑板车","无线车充"],
    ["打印机","摄像机","小爱音箱"],
    ["移动电源","手机壳"],
    ["洗手机","体脂称","婴儿推车"],
    ["小爱音箱Art","Redmi音箱","蓝牙音箱"],
    ["小背包","床垫","驱蚊器"]
]
for(var i = 0;i<datas.length;i++){
    $(".detail").append($('<div class="item" style="display: block;"></div>'));
    for(var j = 0;j<datas[i].length;j++){
        var uls = $(`<ul>
        <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
        <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
        <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
        <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
        <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
        <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
    </ul>`)
    $(".item").eq(i).append(uls);
    }
}

// 左侧导航
$(".banner .nav").hover(function(){
    $(".banner .nav .detail").show();
},function(){
    $(".banner .nav .detail").hide();
    $(".nav_title li").css("background" , "");
});

$(".nav_title li").mousemove(function(){
    $(".detail .item").eq($(this).index()).show().siblings(".item").hide();
    $(this).css("background" , "#FF6700").siblings("li").css("background" , "");
})


//侧边栏回到顶部
$(window).scroll(function(){
    if($(window).scrollTop() >= $(".iflashbuy").offset().top){
        $(".backTop").css("display","block")
    }else{
        $(".backTop").css("display","none")
    }
});

//点击回到顶部
$(".backTop").on("click",function(){
    $("html").stop().animate({
        scrollTop : 0
    })
});

//家电 选项卡
$(".nav.fr").eq(0).find("a").on("click",function(){
    //如果当前处于激活状态, 拦截
    if(this.className == 'active'){
        return ;
    }
    $(this).addClass("active").siblings().removeClass("active");

}); 

//家电 热门
$(".nav.fr").eq(0).find("a").eq(0).on("click",function(){
    $(".show").show().siblings("ul").hide();
})

//家电 电视影音
$(".nav.fr").eq(0).find("a").eq(1).on("click",function(){
    $(".hide").show().siblings("ul").hide();
});

//创建li
var num = 5;
for(var i = 1 ;i<=12;i++){
    var Li = $(`<li>
        <a href="#">
            <img src="images/shangou/iflashbuy${num++}.jpg">
            <p class="biaoti">小米小爱音箱 Play（白色）量产版 白色</p>
            <p class="desc">听音乐、语音遥控家电</p>
            <p class="price">
                <span>99元</span>
                <del>169元</del>
            </p>
        </a>
    </li>`);
    $(".iflashbuy .content .right ul").append(Li);
    if( i % 4 == 0 || i == 8){
        $(Li).css("margin-right","0").siblings("li").css("margin-right","14")
    }
}

var ulLeft = $(".iflashbuy ul").position().left;
var ulWidth = $(".iflashbuy ul").width();
var liLength = $(".iflashbuy .content .right ul li").length;
//小米闪购左右滑动功能
//右箭头
$(".iflashbuy").find(".iconfont").eq(1).on("click",function(){
    //ul向左滑动
    ulLeft = ulLeft - ulWidth;
    //ul前进的步数
    if(ulLeft > -2934){
        $(".iflashbuy .content .right ul").stop().animate({"left" : ulLeft});
    }else{
        $(".iflashbuy .content .right ul").stop().animate({"left" : -2934});
        ulLeft = -2934;
    }

    setTimeout(function(){
        //时时获取ul的宽度
        var ulsWidth = $(".iflashbuy ul").width();
        if(ulsWidth == 3912){
            $(".arrow span").eq(1).addClass("disabled");
        }
    },500)
    $(".arrow span").eq(0).removeClass("disabled");
});

// 左箭头
$(".iflashbuy").find(".iconfont").eq(0).on("click",function(){
    //ul向右滑动
    ulLeft = ulLeft + ulWidth;
    //ul前进的步数
    if(ulLeft < 0){
        $(".iflashbuy .content .right ul").stop().animate({"left" : ulLeft});
    }else{
        $(".iflashbuy .content .right ul").stop().animate({"left" : 0});
        ulLeft = 0;
    }
    //箭头变暗，无法点击
    setTimeout(function(){
        //时时获取ul的宽度
        var ulsWidth = $(".iflashbuy ul").width();
        if(ulsWidth == 978){
            $(".arrow span").eq(0).addClass("disabled");
        }
    },500)
    $(".arrow span").eq(1).removeClass("disabled");
});

