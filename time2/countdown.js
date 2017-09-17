// ����ȫ�ֱ���
var window_width=1024;
var window_height=768;
var radius=8;
var margin_top=60;
var margin_left=30;
// ��ȡҳ�����ʱ��ʱ��
var time_onload
// ��ʹˢ�µ�ʱ��
var time_new
// ��ʱ����
var time_down_seconds


window.onload=function(){
	var canvas=document.getElementById('canvas');
	var context=canvas.getContext('2d');
	canvas.width=window_width;
	canvas.height=window_height;
	
	// ��ȡҳ�����ʱ��ʱ��
	time_onload = new Date();
	console.dir(time_onload)

	setInterval(
		function (){
			render(context);
		}
		,50
	)

	
}



function render(cxt){
	// ���ԭ���Ķ���
	cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height)
	// ��ʹˢ�µ�ʱ��
	time_new = new Date()
	
	time_down_seconds =parseInt((time_new-time_onload)/1000)
	
	var hours=parseInt(time_down_seconds/3600);
	var minutes=Math.floor(time_down_seconds/60)%60;
	var seconds=Math.floor((time_down_seconds%60));
	console.dir(seconds)
	console.dir(minutes)
	// ��������
	renderDigit(margin_left,margin_top,parseInt(hours/10),cxt)
	renderDigit(margin_left+15*(radius+1),margin_top,parseInt(hours%10),cxt)
	renderDigit(margin_left+30*(radius+1),margin_top,10,cxt)
	renderDigit(margin_left+39*(radius+1),margin_top,parseInt(minutes/10),cxt)
	renderDigit(margin_left+54*(radius+1),margin_top,parseInt(minutes%10),cxt)
	renderDigit(margin_left+69*(radius+1),margin_top,10,cxt)
	renderDigit(margin_left+78*(radius+1),margin_top,parseInt(seconds/10),cxt)
	renderDigit(margin_left+93*(radius+1),margin_top,parseInt(seconds%10),cxt)
}
function renderDigit(x,y,num,cxt){
	cxt.fillStyle="rgb(0,102,153)";
	for(var i=0;i<digit[num].length;i++)
		for(var j=0;j<digit[num][i].length;j++)
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(radius+1)+(radius+1),y+i*2*(radius+1)+(radius+1),radius,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
		}