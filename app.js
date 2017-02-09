/*future features include: 
- an on function to display the lowest approval rating and display more information for that president.
- more scaleability for mobile
- additional presidents
- additional pages to display this information in several more traditional graphs
*/

d3.csv("./funk.csv",function(data){
	var highest = data.highest;
	for(var i=0;i<data.length;i++){
		numbers.push(Number(data[i].highest))
		press.push(data[i].pres)
	}
	var numbers = [];
	var press = []
	var gauge1 = loadLiquidFillGauge("fillgauge1", numbers[0]);
	var config1 = liquidFillGaugeDefaultSettings();
	
	config1.circleColor = "royalblue";
	config1.textColor = "firebrick";
	config1.waveTextColor = "#e77e7e";
	config1.waveColor = "lightgrey";
	config1.circleThickness = 0.1;
	config1.textVertPosition = 0.8;
	config1.waveAnimateTime = 900;

	var gauge2 = loadLiquidFillGauge("fillgauge2", numbers[1], config1);
	var gauge3 = loadLiquidFillGauge("fillgauge3", numbers[2], config1);
	var gauge4 = loadLiquidFillGauge("fillgauge4", numbers[3], config1);
	var gauge5 = loadLiquidFillGauge("fillgauge5", numbers[4], config1);
	var gauge6 = loadLiquidFillGauge("fillgauge6", numbers[5], config1);
    var gauge5 = loadLiquidFillGauge("fillgauge7", numbers[7], config1);
	var gauge6 = loadLiquidFillGauge("fillgauge8", numbers[8], config1);
	var gauge6 = loadLiquidFillGauge("fillgauge9", numbers[9], config1);

	document.getElementById("g").innerHTML = press[0];
	document.getElementById("g1").innerHTML = press[1];
	document.getElementById("g2").innerHTML = press[2];
	document.getElementById("g3").innerHTML = press[3];
	document.getElementById("g4").innerHTML = press[4];
	document.getElementById("g5").innerHTML = press[5];
	document.getElementById("g6").innerHTML = press[6];
	document.getElementById("g7").innerHTML = press[7];
	document.getElementById("g8").innerHTML = press[8];
	document.getElementById("g9").innerHTML = press[9];

	function NewValue(){
	    if(Math.random() > .5){
	        return Math.round(Math.random()*100);
	    } else {
	        return (Math.random()*100).toFixed(1);
	    }
	}
})
