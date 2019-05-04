var vm=new Vue({
	el:'#box',
	mounted:function(){
		var height=30;
		var ac=document.getElementsByClassName("barrage-item");
		var _delay=[];
		for(var i=0;i<this.barrage.length;i++){
			var it=i%15;
			_delay.push(this.barrage[i].time);
			ac[i].style.color=this.barrage[i].color;
			ac[i].style.top=height*it+'px';
		}
		for(var i=0;i<this.barrage.length;i++){
			this.tween[i] = TweenLite.to(
			ac[i], 5, {
				x:-1200,
				delay:(function(a,b){
					return a[b]
				})(_delay,i),
				ease:Power0.easeNone,
				onComplete:function(){
					this.target.parentNode.removeChild(this.target)
				}
			}
		);	
		}
	},
	data:{
		tween:[],
		datet:'123',
		barrageColorArray:['#0099CC', '#333333', '#009966', '#FFFF66', '#9933FF', '#FFFF99', '#CCCCFF', '#CC9933', '#FFFF66'],
		barrage:[{
			id:0,
			url: '用户头像',
			text: '秋天爱美丽',
			level: 10,
			color:'#009966',
			time:2
		},
		{
			id:1,
			url: '用户头像',
			text: '今天很开心啊',
			level: 10,
			color:'#FFFF66',
			time:5
		},
		{
			id:2,
			url: '用户头像',
			text: 'winter has come',
			level: 10,
			color:'#9933FF',
			time:6
		},
		{
			id:3,
			url: '',
			text: '科科',
			level: 10,
			color:'#FFFF99',
			time:2
		},
		{
			id:4,
			url: '',
			text: '没事早点回家吃饭啊',
			level: 10,
			color:'#333333',
			time:1
		},
		{
			id:5,
			url: '',
			text: '这主角真实醉了，不会回啊',
			level: 10,
			color:'#FFFF66',
			time:8
		},
		{
			id:6,
			url: '',
			text: '背景音乐真好听啊',
			level: 10,
			color:'#CCCCFF',
			time:9
		},
		{
			id:7,
			url: '',
			text: '背景音乐是***',
			level: 10,
			color:'#CC9933',
			time:6
		},
		{
			id:8,
			url: '',
			text: '经费在燃烧啊',
			level: 10,
			color:'#0099CC',
			time:8
		},
		{
			id:9,
			url: '',
			text: '。。。。。。',
			level: 10,
			color:'#0099CC',
			time:0
		}]
	},
	methods:{
		stop:function(){
			for(var i=0;i<this.tween.length;i++){
				this.tween[i].paused( !this.tween[i].paused() )
			}
		},
		send:function(){
			if(this.datet.length==0){return false}
			this.barrage.push({url: '',text: this.datet,level: 10,color:this.barrageColorArray[Math.floor(Math.random()*(this.barrageColorArray.length-1))],time:0})
			this.datet='';
		}
	}
})
