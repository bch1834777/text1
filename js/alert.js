
function alertx(title,content){
	
	if(title.length>15){
		title=title.substring(0,14)+"...";
	}
	if(content.length>42){
		content=content.substring(0,40)+"...";
	}
	var alertText = '<div style="position: fixed;top: 0px;bottom: 0px;left: 0px;right: 0px;background-color: rgba(111,111,111,0.5);font-family: "微软雅黑";"><div style="width: 250px;height: 300px;border: 1px,solid,ghostwhite;border-radius: 20px;margin: 0 auto;margin-top: 175px;background-color: #fff;opacity: 0.95;" ><div style="padding: 10%;padding-bottom: 0 ;height: 20%;font-size: 24px;font-weight: bold;" >'+title+'</div><div style="padding: 10%;padding-top: 0;margin-top: 0px;height: 80%;" >'+content+'</div></div><div style="border: solid 1px white;width: 20px;height: 20px;text-align: center;border-radius: 50%;color: white;margin: 0 auto;margin-top: 50px;" onclick="alert_close(this)">X</div></div>'
	
	var $x = $(alertText);
	$("body").append($x);
}
function alert_close(div){
	$(div).parent().remove();
}


function alertp1(){
				alertx("高级版-"+$("#p1").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp2(){
				alertx("高级版-"+$("#p2").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp3(){
				alertx("高级版-"+$("#p3").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp4(){
				alertx("高级版-"+$("#p4").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp5(){
				alertx("高级版-"+$("#p5").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp6(){
				alertx("高级版-"+$("#p6").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp7(){
				alertx("高级版-"+$("#p7").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp8(){
				alertx("高级版-"+$("#p8").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp9(){
				alertx("高级版-"+$("#p9").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertp10(){
				alertx("高级版-"+$("#p10").text(),'高级版正文高级版正文高级版正文高级版正文高级版正文');
			}
			function alertd1(){
				alertx("定制版-"+$("#d1").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd2(){
				alertx("定制版-"+$("#d2").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd3(){
				alertx("定制版-"+$("#d3").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd4(){
				alertx("定制版-"+$("#d4").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd5(){
				alertx("定制版-"+$("#d5").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd6(){
				alertx("定制版-"+$("#d6").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd7(){
				alertx("定制版-"+$("#d7").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd8(){
				alertx("定制版-"+$("#d8").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd9(){
				alertx("定制版-"+$("#d9").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}
			function alertd10(){
				alertx("定制版-"+$("#d10").text(),'定制版正文定制版正文定制版正文定制版正文定制版正文');
			}