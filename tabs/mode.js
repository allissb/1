new Vue({
	el:'#nav',
	data:{
		lists:[
		{'title':'站长之家'},
		{'title':'行业资讯','value':['业界动态','收购融资','门户动态','搜索引擎','网络游戏','电子商务','广告传媒','厂商开发']},
		{'title':'站长在线','value':['站长报道','好站推荐','站长聚会','站长访谈','站长茶馆','网站排行']},
		{'title':'网站运营','value':['建站经验','策划盈利','搜索优化','网站推广','免费资源']},
		{'title':'设计在线','value':['酷站推荐','网页设计','WEB标准','视频处理','设计活动']},
		{'title':'网络编程','value':['Asp编程','Php编程','Net编程','Xml编程','Access','Mssql']},
		{'title':'联盟资讯','value':['联盟动态','联盟介绍','联盟点评','网赚技巧']},
		{'title':'服务器','value':['Web服务器','Ftp服务器','Mail服务器','Dns服务器','Win服务器','Linux服务器','安全防护','虚拟主机']}
		]
	},
	components:{
		'list-value':{
			props:['value'],
			template:'<div v-if="value" @mouseover.stop="clear" class="subnav"><em class="arrow"></em><p ><span><a v-for="(keke) in value" href="javascript:;">{{keke}}</a></span></p></div>',
			methods:{
				clear:function(){
					clearTimeout(timer)
				}
			}
		}
	},
	methods:{
		show:function(e){
			var oNav = document.getElementById("nav");
			var oSubNav=e.currentTarget.getElementsByClassName('subnav')[0];
			var oli=oNav.getElementsByClassName('subnav');
			clearTimeout(timer)
			for(var i=0;i<oli.length;i++){
				oli[i].style.display='none'
			}
			if(oSubNav){
				oSubNav.style.display = "block";
				oNav.offsetWidth - e.currentTarget.offsetLeft > oSubNav.offsetWidth ? oSubNav.style.left = this.offsetLeft + "px" :oSubNav.style.right = 0;
				oEm =e.currentTarget.getElementsByTagName("em")[0];
				oEm.style.left = this.offsetLeft - oSubNav.offsetLeft + 50 + "px";
			}
		},
		fli:function(e){
			var oSubNav=e.currentTarget.getElementsByClassName('subnav')[0];
			if(oSubNav){
				timer = setTimeout(function () {
                 oSubNav.style.display = "none"
            },300)  
			}
			
		}
	}
})
   