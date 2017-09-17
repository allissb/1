// ����ȫ�ֱ���
var window_width=1024;
var window_height=768;
var radius=8;
var margin_top=60;
var margin_left=30;
// ��ȡҳ�����ʱ��ʱ��
var time_onload =new Date()
// ��ʹˢ�µ�ʱ��
var time_new =new Date()
// ��ʱ����
var time_down_seconds=0
// ��ǰʱ��
var time=0
// �����յ�С������
var balls=[]
var curShowTimeSeconds = 0
// ��ɫ�⡣��ֻ��
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]

var hours=0;var minutes=0;var seconds=0
window.onload=function(){
	window_width = document.body.clientWidth
    	window_height = document.body.clientHeight

    	margin_left = Math.round(window_width /10);
    	radius = Math.round(window_width * 4 / 5 / 108)-1

   	margin_top = Math.round(window_height /10);


	var canvas=document.getElementById('canvas');
	var context=canvas.getContext('2d');
	canvas.width=window_width;
	canvas.height=window_height;
	
	// ��ȡҳ�����ʱ��ʱ��
	time_onload = new Date();
	time = getCurrentShowTimeSeconds()
	

	setInterval(
		function (){
			render(context);
			update()
			// console.dir(time)
			// console.dir(time_down_seconds)
		}
		,50
		)
}
function getCurrentShowTimeSeconds() {
	time_new = new Date()
	var ret = time_new.getTime() - time_onload.getTime();
	ret = Math.round( ret/1000 )

	return ret >= 0 ? ret : 0;
}



function update(){
	// ��ʹˢ�µ�ʱ��

	time_down_seconds =getCurrentShowTimeSeconds()
	// console.dir(time_down_seconds)
	// +1S
	
	var next_seconds=Math.floor((time_down_seconds%60));
	var next_minutes=Math.floor(time_down_seconds/60)%60;
	var next_hours=parseInt(time_down_seconds/3600);
	


	hours=parseInt(time/3600);
	minutes=Math.floor(time/60)%60;
	seconds=Math.floor((time%60));

	if( seconds != next_seconds ){
		if( parseInt(hours/10) != parseInt(next_hours/10) ){
			addBalls( margin_left + 0 , margin_top , parseInt(hours/10) );
		}
		if( parseInt(hours%10) != parseInt(next_hours%10) ){
			addBalls( margin_left + 15*(radius+1) , margin_top , parseInt(hours/10) );
		}

		if( parseInt(minutes/10) != parseInt(next_minutes/10) ){
			addBalls( margin_left + 39*(radius+1) , margin_top , parseInt(minutes/10) );
		}
		if( parseInt(minutes%10) != parseInt(next_minutes%10) ){
			addBalls( margin_left + 54*(radius+1) , margin_top , parseInt(minutes%10) );
		}

		if( parseInt(seconds/10) != parseInt(next_seconds/10) ){
			addBalls( margin_left + 78*(radius+1) , margin_top , parseInt(seconds/10) );
		}
		if( parseInt(seconds%10) != parseInt(next_seconds%10) ){
			addBalls( margin_left + 93*(radius+1) , margin_top , parseInt(next_seconds%10) );
		}
		time=time_down_seconds
		
	}
	updateBalls();
}
function updateBalls(){
	// cxt.clearRect(0, 0, canvas.width, canvas.height)
	for( var i = 0 ; i < balls.length ; i ++ ){

		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;

		if( balls[i].y >= window_height-radius ){
			balls[i].y = window_height-radius;
			balls[i].vy = - balls[i].vy*0.6;
		}

	}

	var cnt=0
	for (var i = 0; i < balls.length; i++) {
		if (balls[i].x+radius>0 && balls[i].x-radius<window_width) {
			balls[cnt++]=balls[i]
		}
		
	}
	while(balls.length>cnt){
			balls.pop()
		}
	// console.dir(balls.length)
}

function addBalls(x , y , num){
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				var aBall ={
					x:x+j*2*(radius+1)+(radius+1),
					y:y+i*2*(radius+1)+(radius+1),
					g:1.5+Math.random(),
					vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
					vy:-5,
					color: colors[ Math.floor( Math.random()*colors.length ) ]
				}
				balls.push( aBall )
			}
		}
	}	
}


function render(cxt){
	// ���ԭ���Ķ���
	cxt.clearRect(0, 0, canvas.width, canvas.height)
	
	
	
	
	
	// console.dir(seconds)
	// console.dir(next_time)
	// ��������
	// ʱ��
	renderDigit(margin_left,margin_top,parseInt(hours/10),cxt)
	renderDigit(margin_left+15*(radius+1),margin_top,parseInt(hours%10),cxt)
	renderDigit(margin_left+30*(radius+1),margin_top,10,cxt)
	// ����
	renderDigit(margin_left+39*(radius+1),margin_top,parseInt(minutes/10),cxt)
	renderDigit(margin_left+54*(radius+1),margin_top,parseInt(minutes%10),cxt)
	renderDigit(margin_left+69*(radius+1),margin_top,10,cxt)
	// ����
	renderDigit(margin_left+78*(radius+1),margin_top,parseInt(seconds/10),cxt)
	renderDigit(margin_left+93*(radius+1),margin_top,parseInt(seconds%10),cxt)


	// ����С��
	for( var i = 0 ; i < balls.length ; i ++ ){
		cxt.fillStyle=balls[i].color;

		cxt.beginPath();
		cxt.arc( balls[i].x , balls[i].y , radius , 0 , 2*Math.PI , true );
		cxt.closePath();

		cxt.fill();
	}
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