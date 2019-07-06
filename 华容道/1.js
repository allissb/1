	(function(){
		var aThumb = document.getElementsByTagName("img");
	var oBox = document.getElementsByTagName("ul")[0];
	var aLi = document.getElementsByTagName("li");
	var sp=document.getElementsByClassName("spa");
	var se=document.getElementsByTagName("select")[0];
	var aspan=document.getElementsByTagName("span")[0];
	var restart=document.getElementsByTagName("input")[0];
	var i = 0;
	var imgPath = 0;
	var aData;
	var adiv;
	var step=0;
	var ire=0;
	aspan.innerHTML=step;
	se.onchange=function(){
		ire=this.value;
		reset();
	}
	restart.onclick=function(){
		reset();
	};
	//布局转换
	for (i = 0; i < aLi.length; i++)
	{
		aLi[i].index = i;
		aLi[i].style.top = aLi[i].offsetTop + "px";	
		aLi[i].style.left = aLi[i].offsetLeft + "px";
	}	
	for (i = 0; i < aLi.length; i++)
	{
		aLi[i].style.position = "absolute";
		aLi[i].style.margin = "0";
		drag(aLi[i])
	}
	reset();
	function drag(obj){
		obj.onclick=function(){
			app(obj);
			imgPath=obj.index;
			aData={"left":obj.offsetLeft,"top":obj.offsetTop}
		}
	}
	sp[0].onclick=sp[1].onclick=function(){
		adiv={"left":this.offsetLeft,"top":this.offsetTop};
		if(imgPath==6||imgPath==7||imgPath==8||imgPath==9){
			xbjc(aLi[imgPath],this);
		}else if(imgPath==4){
			gyjc(aLi[imgPath],this)
		}else if(imgPath==0||imgPath==2||imgPath==3||imgPath==5){
			sxjc(aLi[imgPath],this);
		}else if(imgPath==1){
			ccjc(aLi[imgPath],this)
		}
	}
	function ccjc(a,b){
		var t_a=(sp[0].offsetLeft==sp[1].offsetLeft)&&(a.offsetTop==b.offsetTop)&&(sp[0].offsetTop+sp[1].offsetTop-a.offsetTop-a.offsetTop==120);
		var t_b=(sp[0].offsetTop==sp[1].offsetTop)&&(a.offsetLeft==b.offsetLeft)&&(sp[0].offsetLeft+sp[1].offsetLeft-a.offsetLeft-a.offsetLeft==120);
		if(t_a||t_b){
			if(t_a){
			if(a.offsetLeft-b.offsetLeft==120){
				a.style.left=adiv.left+"px";
				sp[1].style.left=sp[0].style.left=aData.left+120+"px";
			}else if(a.offsetLeft-b.offsetLeft==-240){
				a.style.left=adiv.left-120+"px";
				sp[1].style.left=sp[0].style.left=aData.left+"px";
			}
		}else if(t_b){
			if(a.offsetTop-b.offsetTop==120){
				a.style.top=adiv.top+"px";
				sp[1].style.top=sp[0].style.top=aData.top+120+"px";
			}else if(a.offsetTop-b.offsetTop==-240){
				a.style.top=adiv.top-120+"px";
				sp[1].style.top=sp[0].style.top=aData.top+"px";
			}
		}
		aData={"left":a.offsetLeft,"top":a.offsetTop};
		aspan.innerHTML=++step;
		isfinish();
		}
	}
function xbjc(a,b){
	if((a.offsetLeft==b.offsetLeft&&Math.abs(a.offsetTop-b.offsetTop)==120)||(a.offsetTop==b.offsetTop&&Math.abs(a.offsetLeft-b.offsetLeft)==120))
	{
		a.style.left=adiv.left+"px";
		a.style.top=adiv.top+"px";
		b.style.left=aData.left+"px";
		b.style.top=aData.top+"px";
		aData={"left":a.offsetLeft,"top":a.offsetTop};
		aspan.innerHTML=++step;
	}
}
function gyjc(a,b){
	var t_a=(sp[0].offsetTop==sp[1].offsetTop)&&(a.offsetLeft==b.offsetLeft)&&(Math.abs(a.offsetTop-b.offsetTop)==120)&&(sp[0].offsetLeft+sp[1].offsetLeft-a.offsetLeft-a.offsetLeft==120);
	var t_b=(a.offsetTop==b.offsetTop)&&(a.offsetLeft-b.offsetLeft==120);
	var t_c=(a.offsetTop==b.offsetTop)&&(a.offsetLeft-b.offsetLeft==-240);
	if(t_a||t_b||t_c){
		if(t_a){
		a.style.top=adiv.top+"px";
		sp[1].style.top=sp[0].style.top=aData.top+"px";
		}else if(t_b){
		a.style.left=adiv.left+"px";
		b.style.left=aData.left+120+"px";
		}
		else if(t_c){
			a.style.left=adiv.left-120+"px";
			b.style.left=aData.left+"px";
		}
		aData={"left":a.offsetLeft,"top":a.offsetTop};
		aspan.innerHTML=++step;
	}
}
function sxjc(a,b){
	var t_a=(sp[0].offsetLeft==sp[1].offsetLeft)&&(a.offsetTop==b.offsetTop)&&(Math.abs(a.offsetLeft-b.offsetLeft)==120)&&(sp[0].offsetTop+sp[1].offsetTop-a.offsetTop-a.offsetTop==120);
	var t_b=(a.offsetLeft==b.offsetLeft)&&(a.offsetTop-b.offsetTop==120);
	var t_c=(a.offsetLeft==b.offsetLeft)&&(a.offsetTop-b.offsetTop==-240);
	if(t_a||t_b||t_c){
		if(t_a){
			a.style.left=adiv.left+"px";
			sp[1].style.left=sp[0].style.left=aData.left+"px";
		}else if(t_b){
			a.style.top=adiv.top+"px";
			b.style.top=aData.top+120+"px";
		}else if(t_c){
			a.style.top=adiv.top-120+"px";
			b.style.top=aData.top+"px";
		}
		aData={"left":a.offsetLeft,"top":a.offsetTop};
		aspan.innerHTML=++step;
	}
}
function app(ob){
	var obimg=ob.getElementsByTagName("img")[0];
	aLi[imgPath].getElementsByTagName("img")[0].src=aLi[imgPath].getElementsByTagName("img")[0].src.replace(/(\d)(?=.png)/,"")
	obimg.src=obimg.src.replace(/(\w+)(?=.png)/,"$1"+1)
}
function isfinish(){
	if(aLi[1].offsetLeft==120&&aLi[1].offsetTop==240){
		alert("恭喜你用"+step+"步完成了游戏！");
		reset();
	}
}
function reset(){
		for (i = 0; i < aLi.length; i++){
			aLi[i].style.top = aPos[ire][i].top + "px";	
			aLi[i].style.left = aPos[ire][i].left + "px";
		}
		sp[0].style.left=aPos[ire][10].left+"px";
		sp[1].style.left=aPos[ire][11].left+"px";
		sp[0].style.top=aPos[ire][10].top+"px";
		sp[1].style.top=aPos[ire][11].top+"px";
		step=0;
		aspan.innerHTML=step;
		aLi[imgPath].getElementsByTagName("img")[0].src=aLi[imgPath].getElementsByTagName("img")[0].src.replace(/(\d)(?=.png)/,"")
	}
	})()