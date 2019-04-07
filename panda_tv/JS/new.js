var i_fix=document.getElementsByClassName("breathe");
var dotimer = uptimer = null;
var speed=-2;
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
var stars_ul=$(".index-shuffer .stars .bx-viewport ul:eq(0)");
stars_ul.prepend(li_af.clone(true));
stars_ul.append(li_be.clone(true));


var a=$(".index-shuffer .stars .bx-viewport ul:eq(0)");
var b=$(".index-shuffer .arrows a")

b.eq(1).on("click",function(){
	var ul_tra=parseInt(a.css("left").slice(0,-2))-980;
	a.css("left",ul_tra+"px");
	a.css("transition-duration","0.4s")
	if(a.css("left")=="-1960px"){
		setTimeout(function(){
			bbb()
		},500)
	}
})
b.eq(0).on("click",function(){
	var ul_tra=parseInt(a.css("left").slice(0,-2))+980;
	a.css("left",ul_tra+"px")
	a.css("transition-duration","0.4s")
	if(a.css("left")=="-980px"){
		setTimeout(function(){
			aaa()
		},500)
	}
})

function aaa(){
	a.css("transition-duration","0")
	a.css("left","-2940px")
}
function bbb(){
	a.css("transition-duration","0")
	a.css("left","0px")
}






/*var sec_stars=document.getElementsByClassName("index-shuffer")[0].getElementsByClassName("stars")[0].getElementsByClassName("bx-viewport")[0].getElementsByTagName("ul")[0];
var arr_stars=document.getElementsByClassName("index-shuffer")[0].getElementsByClassName("stars")[0].getElementsByClassName("arrows")[0].getElementsByTagName("a");
arr_stars[0].onclick=function()
{
	if(sec_stars.style.transform=="translateX(-3920px)"){
	sec_stars.style.transform="translateX(-2940px)";
}else if(sec_stars.style.transform=="translateX(-2940px)"){
	sec_stars.style.transition="all .4s ease-in";
	sec_stars.style.transform="translateX(-1960px)";
}else if(sec_stars.style.transform=="translateX(-1960px)"){
sec_stars.style.transform="translateX(-980px)";
}else if(sec_stars.style.transform=="translateX(-980px)"){
sec_stars.style.transform="translateX(0px)";
setTimeout(function(){aaaa()},500)

}
}
arr_stars[1].onclick=function(){
	if(sec_stars.style.transform=="translateX(-980px)"){
	sec_stars.style.transition="all .4s ease-in";
	sec_stars.style.transform="translateX(-1960px)";
}else if(sec_stars.style.transform=="translateX(-1960px)"){
	sec_stars.style.transform="translateX(-2940px)";
}else if(sec_stars.style.transform=="translateX(-2940px)"){
sec_stars.style.transform="translateX(-3920px)";
sec_stars.style.transition="all 0s ease-in";
sec_stars.style.transform="translateX(-980px)";
}else if(sec_stars.style.transform=="translateX(0px)"){
sec_stars.style.transform="translateX(-980px)";
}
}

function aaaa(){
	sec_stars.style.transition="all 0s ease-in";
	sec_stars.style.transform="translateX(-2940px)";
}
*/