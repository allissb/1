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
	var aPos=[
	[
	{"left":0,"top":0},
	{"left":80,"top":0},
	{"left":240,"top":0},
	{"left":0,"top":160},
	{"left":80,"top":160},
	{"left":240,"top":160},
	{"left":0,"top":320},
	{"left":80,"top":240},
	{"left":160,"top":240},
	{"left":240,"top":320},
	{"left":80,"top":320},
	{"left":160,"top":320}
	],
	[{"left":0,"top":0},
	{"left":80,"top":0},
	{"left":240,"top":0},
	{"left":0,"top":240},
	{"left":80,"top":160},
	{"left":240,"top":240},
	{"left":0,"top":160},
	{"left":80,"top":240},
	{"left":160,"top":240},
	{"left":240,"top":160},
	{"left":80,"top":320},
	{"left":160,"top":320}
	],
	[{"left":0,"top":0},
	{"left":80,"top":0},
	{"left":240,"top":0},
	{"left":0,"top":240},
	{"left":80,"top":240},
	{"left":240,"top":240},
	{"left":0,"top":160},
	{"left":80,"top":160},
	{"left":160,"top":160},
	{"left":240,"top":160},
	{"left":80,"top":320},
	{"left":160,"top":320}
	],
	[{"left":0,"top":80},
	{"left":80,"top":0},
	{"left":240,"top":80},
	{"left":0,"top":240},
	{"left":80,"top":160},
	{"left":240,"top":240},
	{"left":0,"top":0},
	{"left":80,"top":240},
	{"left":160,"top":240},
	{"left":240,"top":0},
	{"left":80,"top":320},
	{"left":160,"top":320}
	],
	[{"left":160,"top":0},
	{"left":0,"top":0},
	{"left":240,"top":0},
	{"left":0,"top":240},
	{"left":0,"top":160},
	{"left":80,"top":240},
	{"left":160,"top":160},
	{"left":160,"top":240},
	{"left":240,"top":160},
	{"left":240,"top":240},
	{"left":160,"top":320},
	{"left":240,"top":320}
	]
	];
	se.onchange=function(){
		ire=this.value;
		reset();
	}
	aspan.innerHTML=step;
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
		obj.onclick=function(event){
			app(obj);
			imgPath=obj.index;
			aData={"left":obj.offsetLeft,"top":obj.offsetTop}
		}
	}
	sp[0].index=0;
	sp[1].index=1;
	sp[0].onclick=sp[1].onclick=function(){
		if(imgPath==6||imgPath==7||imgPath==8||imgPath==9){
			adiv={"left":this.offsetLeft,"top":this.offsetTop};
			xbjc(aLi[imgPath],this);
		}else if(imgPath==4){
			adiv={"left":this.offsetLeft,"top":this.offsetTop};
			gyjc(aLi[imgPath],this)
		}else if(imgPath==0||imgPath==2||imgPath==3||imgPath==5){
			adiv={"left":this.offsetLeft,"top":this.offsetTop};
			sxjc(aLi[imgPath],this);
		}else if(imgPath==1){
			adiv={"left":this.offsetLeft,"top":this.offsetTop};
			ccjc(aLi[imgPath],this)
		}
	}
	function ccjc(a,b){
		if((sp[0].offsetLeft==sp[1].offsetLeft)&&(a.offsetTop==b.offsetTop)){
			if(a.offsetLeft-b.offsetLeft==80){
				a.style.left=adiv.left+"px";
				sp[0].style.left=aData.left+80+"px";
				sp[1].style.left=aData.left+80+"px";
				aData={"left":a.offsetLeft,"top":a.offsetTop};
				aspan.innerHTML=++step;
				isfinish();
			}else if(a.offsetLeft-b.offsetLeft==-160){
				a.style.left=adiv.left-80+"px";
				sp[0].style.left=aData.left+"px";
				sp[1].style.left=aData.left+"px";
				aData={"left":a.offsetLeft,"top":a.offsetTop};
				aspan.innerHTML=++step;
				isfinish();
			}
		}else if((sp[0].offsetTop==sp[1].offsetTop)&&(a.offsetLeft==b.offsetLeft)){
			if(a.offsetTop-b.offsetTop==80){
				a.style.top=adiv.top+"px";
				sp[0].style.top=aData.top+80+"px";
				sp[1].style.top=aData.top+80+"px";
				aData={"left":a.offsetLeft,"top":a.offsetTop};
				aspan.innerHTML=++step;
				isfinish();
			}else if(a.offsetTop-b.offsetTop==-160){
				a.style.top=adiv.top-80+"px";
				sp[0].style.top=aData.top+"px";
				sp[1].style.top=aData.top+"px";
				aData={"left":a.offsetLeft,"top":a.offsetTop};
				aspan.innerHTML=++step;
				isfinish();
			}
		}
	}
function xbjc(a,b){
	if((a.offsetLeft==b.offsetLeft&&Math.abs(a.offsetTop-b.offsetTop)==80)||(a.offsetTop==b.offsetTop&&Math.abs(a.offsetLeft-b.offsetLeft)==80))
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
	if((sp[0].offsetTop==sp[1].offsetTop)&&(a.offsetLeft==b.offsetLeft)){
		a.style.top=adiv.top+"px";
		sp[0].style.top=aData.top+"px";
		sp[1].style.top=aData.top+"px";
		aData={"left":a.offsetLeft,"top":a.offsetTop};
		aspan.innerHTML=++step;
	}else if((a.offsetTop==b.offsetTop)&&(a.offsetLeft-b.offsetLeft==80)){
		a.style.left=adiv.left+"px";
		b.style.left=aData.left+80+"px";
		aData={"left":a.offsetLeft,"top":a.offsetTop};
		aspan.innerHTML=++step;
	}
	else if((a.offsetTop==b.offsetTop)&&(a.offsetLeft-b.offsetLeft==-160)){
			a.style.left=adiv.left-80+"px";
			b.style.left=aData.left+"px";
			aData={"left":a.offsetLeft,"top":a.offsetTop};
			aspan.innerHTML=++step;
		}
	}
function sxjc(a,b){
	if((sp[0].offsetLeft==sp[1].offsetLeft)&&(a.offsetTop==b.offsetTop)){
		a.style.left=adiv.left+"px";
		sp[0].style.left=aData.left+"px";
		sp[1].style.left=aData.left+"px";
		aData={"left":a.offsetLeft,"top":a.offsetTop};
		aspan.innerHTML=++step;
	}else if((a.offsetLeft==b.offsetLeft)&&(a.offsetTop-b.offsetTop==80)){
			a.style.top=adiv.top+"px";
			b.style.top=aData.top+80+"px";
			aData={"left":a.offsetLeft,"top":a.offsetTop};
			aspan.innerHTML=++step;
		}else if((a.offsetLeft==b.offsetLeft)&&(a.offsetTop-b.offsetTop==-160)){
			a.style.top=adiv.top-80+"px";
			b.style.top=aData.top+"px";
			aData={"left":a.offsetLeft,"top":a.offsetTop};
			aspan.innerHTML=++step;
		}
	}
function app(ob){
	var obimg=ob.getElementsByTagName("img")[0];
	for(var i=0;i<aLi.length;i++){
		aLi[i].getElementsByTagName("img")[0].src=aLi[i].getElementsByTagName("img")[0].src.replace(/(\d)(?=.png)/,"")
	}
	obimg.src=obimg.src.replace(/(\w+)(?=.png)/,"$1"+1)
	}

function isfinish(){
	if(aLi[1].offsetLeft==80&&aLi[1].offsetTop==240){
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
		for(var i=0;i<aLi.length;i++){
		aLi[i].getElementsByTagName("img")[0].src=aLi[i].getElementsByTagName("img")[0].src.replace(/(\d)(?=.png)/,"")
	}
	}
	})()