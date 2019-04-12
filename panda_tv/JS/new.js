var i_fix=document.getElementsByClassName("breathe");
var dotimer = uptimer = null;
var speed=-2;

var time=0;
var i_stars_li=document.getElementsByClassName("stars-lists")[0].getElementsByClassName("stars-list");
var i_stars_move=document.getElementsByClassName("index-pandastars")[0].getElementsByClassName("bw")[0].getElementsByClassName("stars")[0].getElementsByClassName("stars-lists")[0]
var i_arrow=document.getElementsByClassName("index-pandastars")[0].getElementsByClassName("bw")[0].getElementsByClassName("stars")[0].getElementsByClassName("arrow");


function checkWebp() {
    try{
        return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
    }catch(err) {
    	return false;
    }
}

function change_img(){
	if(checkWebp()==false){
	var a=$("img");
	a.each(function(a,b){
		if(b.src.slice(-4)=="webp"){
			b.src=b.src.slice(0,-1)+".png"
		}
})
}
}
change_img()

var big_sr=document.getElementsByClassName("index-slider-video-container")[0].style.background;
document.getElementsByClassName("index-slider-video-container")[0].style.background=big_sr.replace("webp","web.png");
//stars两侧的箭头
i_arrow[0].onclick=function(){
	if(i_stars_move.style.transform=="translateX(-980px)"){
		i_stars_move.style.transform="translateX(0px)";
	}else if(i_stars_move.style.transform=="translateX(-1400px)"){
		i_stars_move.style.transform="translateX(-980px)";
	}
}
i_arrow[1].onclick=function(){
	if(i_stars_move.style.transform=="translateX(0px)"){
		i_stars_move.style.transform="translateX(-980px)";
	}else if(i_stars_move.style.transform=="translateX(-980px)"){
		i_stars_move.style.transform="translateX(-1400px)";
	}
}

var li_af=$(".index-shuffer .stars .bx-viewport ul:eq(0) li:gt(7)");
var li_be=$(".index-shuffer .stars .bx-viewport ul:eq(0) li:lt(4)");
var a=$(".index-shuffer .stars .bx-viewport ul:eq(0)");
a.prepend(li_af.clone(true));
a.append(li_be.clone(true));

var b=$(".index-shuffer .arrows a")


b.eq(1).click(debounce(bb,400));
b.eq(0).click(debounce(aa,400));

function debounce(fn, wait) {
var timer = null;            
    return function() { 
    	fn()
    	var _this=this;
    	$(this).off("click");
        if (!timer) {
        	timer = setTimeout(function() {
        		$(_this).click(debounce(fn,wait));
                timer = null;                    
            }, wait);                
        }            
    }
}

function aa(){
	var ul_tra=parseInt(a.css("left").slice(0,-2))+980;
	a.css("left",ul_tra+"px")
	a.css("transition-duration","0.4s")
	if(a.css("left")=="-980px"){
		setTimeout(function(){
			a.css("transition-duration","0")
			a.css("left","-2940px")
			},400)
	}
}
function bb(){
	var ul_tra=parseInt(a.css("left").slice(0,-2))-980;
	a.css("left",ul_tra+"px");
	a.css("transition-duration","0.4s")
	if(a.css("left")=="-2940px"){
		setTimeout(function(){
			a.css("transition-duration","0")
			a.css("left","-980px")
		},400)
	}
}



