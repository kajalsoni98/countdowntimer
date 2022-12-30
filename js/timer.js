// JavaScript Document
var countDate=new Date('Aug 06,2022 00:00:00').getTime();
function festiveSeason(){
	var now=new Date().getTime();
	var gap=countDate-now;
	var second=1000;
	var minute=second*60;
	var hour=minute*60;
	var day=hour*24;
	
	var d=Math.floor(gap/(day));
	var h=Math.floor((gap%(day))/(hour));
	var m=Math.floor((gap%(hour))/(minute));
	var s=Math.floor((gap%(minute))/(second));
	
	document.getElementById('box1').innerHTML=d +" "+"Days";
	document.getElementById('box2').innerHTML=h+" "+"Hours";
	document.getElementById('box3').innerHTML=m+" "+"Min";
	document.getElementById('box4').innerHTML=s+" "+"Sec";
}
setInterval(festiveSeason,1000);