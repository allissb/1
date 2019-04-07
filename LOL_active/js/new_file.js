var j_nav=$("#J_nav");
var k_nav=$("#J_subNav")
j_nav.mouseover(function(){
	k_nav.css("display","block")
})
j_nav.mouseout(function(){
	k_nav.css("display","none")
})
$("#J_topUser").mouseover(function(){
	$("#J_userDrop").css("display","block")
})
$("#J_topUser").mouseout(function(){
	$("#J_userDrop").css("display","none")
})
$("#J_searchClick").click(function(){
	$("#J_search").css("display","block")
})
$("#top-clo").click(function(){
	$("#J_search").css("display","none")
})
