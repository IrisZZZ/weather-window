var todayDate = Date();
var a = 150;
var keypoint1 = [120,120,130];
var keypoint2 = [235,170,170];
var keypoint3 =[60,60,70];
var keypoint4 = [95,95,100];
var keypoint5 = [240,230,145];
var keypoint6 = [180,180,180];

var keypoint7 = [225,230,230];
var keypoint8 = [220,230,220];
var keypoint9 = [120,120,130];
var keypoint10 = [235,170,170];
var color1 = [110,105,115];
var color2 = [235,170,170];
var colorSun =[230,230,130];
var colorSunP;
var colorpointSun1 =[230,230,130];
var colorpointSun2 =[230,135,105];
var colorSunBPoint = [250,250,200];
var colorSunBPointP;
var colorSunBPoint1 =[250,250,200];
var colorSunBPoint2 =[250,60,0];
var interval1 = 50;
var interval2 = 25;
var interval3 = 25;
var interval4 = 75;
var interval5 = 25;
var month = 1;
var count;
var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var colortree1 = [[145, 120, 140],[189, 183, 239],[185, 160, 185],[175, 140, 160]];
var colortree2 = [[155,135,150],[140,115,155],[140,160,165]];
var colortree3 = [[110,120,130],[90,95,115],[140,160,165],[75,75,100],[50,70,100],[110,120,100],[135,140,140],[70,90,105]];
var colortree4 = [[115,90,110],[170,160,165],[75,85,100],[135,120,140],[60,65,95],[115,110,115]];
var colortree5 = [[180,175,180],[150,150,180],[225,210,215],[165,170,165],[145,135,155]];
var colortree = [colortree1,colortree2,colortree3,colortree4,colortree5];
var waterTowerColor = [200,200,200];
var gardenColor = [190,200,180];
var test = [130,150,100];
var test1 = 130;
var test2 = 150;
var test3 = 100;
var cityName = "new york";
var realTimeHour;

var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
var APPID = "cf4a6dc3c8bb940cbe711566875629ef";
var todayDate1;
var todayDate2;
var todayDate3;

var longtitude;
var latitude;
var unitController = "imperial"
var targetDate = new Date();
var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;

function changeColor(){
  if(count0<interval1){
  printTheColor(keypoint1,keypoint2,keypoint3,keypoint4,interval1);
  count0++;
  setTreeColor(-2,-2,-1);
  arrangeTreeColor(1);
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);

  setGardenColor(-2,-2,-1);
  // alert(gardenColor[0] + " " + gardenColor[1] + " " + gardenColor[2]);
  document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0]+ "," + gardenColor[1]+ "," + gardenColor[2]+ ")";
  // colorGarder();

  document.getElementById("stars").style.opacity = 1/interval1*count0;

  if(count0%4 == 0)
  document.getElementById("stars").style.opacity = document.getElementById("stars").style.opacity*0.8;
}
else if(count1< interval2){
  count1++;
  setGardenColor(0,0,0);
  document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0]+ "," + gardenColor[1]+ "," + gardenColor[2]+ ")";

  setTreeColor(0,0,0);
  arrangeTreeColor(1);
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);
  if(count1<16){
    document.getElementById("stars").style.opacity =1;

    if(count1%4 == 0)
    document.getElementById("stars").style.opacity = 0.8;
  }

  if(count1>15){
  document.getElementById("stars").style.opacity = 1-1/10*(count1-15);}

  if(count1%4 == 0) {
    document.getElementById("stars").style.opacity =document.getElementById("stars").style.opacity * 0.95;
  }
}
else if(count2<interval3) {
  setGardenColor(3,2,0);
  document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0]+ "," + gardenColor[1]+ "," + gardenColor[2]+ ")";
  setTreeColor(5,4,2);
  arrangeTreeColor(1);
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);
  printTheColor(keypoint3,keypoint4,keypoint5,keypoint6,interval3);
  count2 ++;

}
else if (count3<interval4) {
  // alert(gardenColor[0] + " " + gardenColor[1] + " " + gardenColor[2] );
  setGardenColor(-0.5,0,-0.5);
  document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0]+ "," + gardenColor[1]+ "," + gardenColor[2]+ ")";
  // setWaterTowerColor(3,5,5);
  // var abc = waterTowerColor[0];
  // alert(waterTowerColor[0] + " " + abc);
  // document.getElementById("waterTower").style.color = "rgb(" + abc+ "," + 0 + "," +0 + ")";
  setTreeColor(-0.5,0,-0.5);
  arrangeTreeColor(1);
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);
  printTheColor(keypoint5,keypoint6,keypoint7,keypoint8,interval4);
  count3 ++;}
else if (count4<interval5) {

  setGardenColor(1,0,2);
  // alert(gardenColor[0] + " " + gardenColor[1] + " " + gardenColor[2]);
  test1 = test1 + 2.5;
  test2 = test2 + 2;
  test3 = test3 + 3.5;
  changeTestValue(2.5,2,3.5);

  document.getElementById("garden").style['background-color'] = "rgb(" + test1 +" ," + test2 + "," + test3+ ")";
  printTheColor(keypoint7,keypoint8,keypoint9,keypoint10,interval5);
  document.getElementById("sun").style.top = 140/interval5 *count4 +"%";
  // printTheSingleColorB(colorpointSun1,colorpointSun2,interval5);
  // printTheSingleColorBox(colorSunBPoint1,colorSunBPoint2,interval5);

  // setTreeColor(-10,0,-1);
  // arrangeTreeColor(1);
  // var bbb = colortree[0][0][0];
  // alert(colortree[0][0][0] + " " + bbb);
  // document.getElementById("tree1-1").style.color = "rgb("+ bbb+","+50+","+50 +")";
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);
  count4 ++;
  }

  else{
      count0 = 0;
      count1 = 0;
      count2 = 0;
      count3 = 0;
      count4 = 0;
      document.getElementById("sun").style.top = -30+"%";
      colorSun =[230,230,130];
      colorSunBPoint = [250,250,200];
      colortree1 = [[145, 120, 140],[189, 183, 239],[185, 160, 185],[175, 140, 160]];
      colortree2 = [[155,135,150],[140,115,155],[140,160,165]];
      colortree3 = [[110,120,130],[90,95,115],[140,160,165],[75,75,100],[50,70,100],[110,120,100],[135,140,140],[70,90,105]];
      colortree4 = [[115,90,110],[170,160,165],[75,85,100],[135,120,140],[60,65,95],[115,110,115]];
      colortree5 = [[180,175,180],[150,150,180],[225,210,215],[165,170,165],[145,135,155]]
      colortree = [colortree1,colortree2,colortree3,colortree4,colortree5]
      arrangeTreeColor(1);
      arrangeTreeColor(2);
      arrangeTreeColor(3);
      arrangeTreeColor(4);
      arrangeTreeColor(5);
      test1 = 130;
      test2 = 150;
      test3 = 100;
      gardenColor = [190,200,180];
      document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0] + "," + gardenColor[1] + "," + gardenColor[2] + ")";
    }


}

function printTheColor(keypointa,keypointb,keypointc,keypointd,interval){
  var change31 =( keypointa[0] - keypointc[0])/interval;
  var change32 =( keypointa[1] - keypointc[1])/interval;
  var change33 =( keypointa[2] - keypointc[2])/interval;
  var change41 =( keypointb[0] - keypointd[0])/interval;
  var change42 =( keypointb[1] - keypointd[1])/interval;
  var change43 =( keypointb[2] - keypointd[2])/interval;
  color1 = [(color1[0] - change31), (color1[1] - change32), (color1[2]-change33)];
  color2 =  [(color2[0] -change41),( color2[1] - change42), (color2[2]-change43)];
  color1p = [Math.round(color1[0] -change31), Math.round(color1[1] - change32), Math.round(color1[2]-change33)];
  color2p =  [Math.round(color2[0] -change41),Math.round( color2[1] - change42), Math.round(color2[2]-change43)];
  console.log(color1p + " " + color2p);
  var print = "rgb("+ color1p[0] + "," + color1p[1] + "," + color2p[2] +"),rgb("+color2p[0]+ "," + color2p[1] + ","+color2p[2]+")"
  document.getElementById("sky").style.background =   "linear-gradient("+print+")";
}
function printTheSingleColorB(keypointa,keypointb,interval,a){
  var change51 =( keypointa[0] - keypointb[0])/interval;
  var change52 =( keypointa[1] - keypointb[1])/interval;
  var change53 =( keypointa[2] - keypointb[2])/interval;
  colorSun = [(colorSun[0] - change51), (colorSun[1] - change52), (colorSun[2]-change53)];
  colorSunP = [Math.round(colorSun[0] -change51), Math.round(colorSun[1] - change52), Math.round(colorSun[2]-change53)];
  var print = "rgb("+ colorSunP[0] + "," + colorSunP[1] + "," + colorSunP[2] +")"
  document.getElementById("sun").style.background =   print;
}
function printTheSingleColorBox(keypointa,keypointb,interval){
  var change51 =( keypointa[0] - keypointb[0])/interval;
  var change52 =( keypointa[1] - keypointb[1])/interval;
  var change53 =( keypointa[2] - keypointb[2])/interval;
  colorSunBPoint = [(colorSunBPoint[0] - change51), (colorSunBPoint[1] - change52), (colorSunBPoint[2]-change53)];
  colorSunBPointP = [Math.round(colorSunBPoint[0] -change51), Math.round(colorSunBPoint[1] - change52), Math.round(colorSunBPoint[2]-change53)];
  var print = "rgb("+ colorSunBPointP[0] + "," + colorSunBPointP[1] + "," + colorSunBPointP[2] +")"
  document.getElementById("sun").style['box-shadow'] = 0 + " " + 0 + " " + 200*(1+count4/interval5*10)+ "px" + " "+ print;
}
function arrangeTreeColor(a){

  for ( i = 1; i < colortree[a-1].length+1; i++){
    document.getElementById("tree"+ a + "-" +i).style.color = "rgb(" + colortree[a-1][i-1][0] + "," + colortree[a-1][i-1][1]+ ","+ colortree[a-1][i-1][2]+ ")";
  }
}


function setTreeColor(a,b,c){
  for(i=0;i<colortree.length;i++){
    for(x=0;x<colortree[i].length;x++)
      if(colortree[i][x][1]!=null &&colortree[i][x][2]){
      colortree[i][x][0] = colortree[i][x][0] + a;
      colortree[i][x][1] = colortree[i][x][1] + b;
      colortree[i][x][2] = colortree[i][x][2] + c;
    }
  }
}
function setWaterTowerColor(a,b,c){
    waterTowerColor[0] = waterTowerColor[0] +a;
    waterTowerColor[1] = waterTowerColor[1] +b;
    waterTowerColor[2] = waterTowerColor[2] +c;
  }
function setGardenColor(a,b,c){
      gardenColor[0] = gardenColor[0] +a;
      gardenColor[1] = gardenColor[1] +b;
      gardenColor[2] = gardenColor[2] +c;
    }
// function colorGarder(){
//   alert("change");
//   document.getElementById("garden").style['background-color'] = "rgb(" + colorGarder[0] + "," + colorGarder[1] + "," + colorGarder[2] + ")";
// }
function changeTestValue(a, b, c){
    test[0] = test[0] + a;
    test[1] = test[1] + b;
    test[2] = test[2] +c;
}
setInterval(changeColor, 100);





function updateByName(cityName){
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units="+unitController+"&appid=" + APPID;

  sendRequest(url);
}
function sendRequest(url){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.loc = data.name;
      weather.temp = Math.floor(data.main.temp);
      longtitude = data.coord.lon;
      latitude = data.coord.lat;
      update(weather);

      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
function updateTimeByName(lon,lat){
  var targetDate = new Date();
  var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
  var url = "https://maps.googleapis.com/maps/api/timezone/json?location="+lat+","+lon+"&timestamp="+timestamp+"&key="+"AIzaSyC5xotkqn1YUXjnp2FP2YG7WHA1ofj7ynA";
  sendRequestTime(url);
  // AIzaSyC5xotkqn1YUXjnp2FP2YG7WHA1ofj7ynA
}
function sendRequestTime(url){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data = JSON.parse(xmlhttp.responseText);
      var dOffSet = data.dstOffset;
      var rOffSet = data.rawOffset;

      updateTime(dOffSet,rOffSet);

      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}








function update(weather){
  // wind.innerHTML = weather.wind;
  loc.innerHTML = weather.loc;
  // direction.innerHTML = weather.direction;
  temp.innerHTML = weather.temp + "&#x2109;";

  // time.innerHTML = todayDate1 + " : " + todayDate2 + " : "+todayDate3;
  // humidity.innerHTML = weather.humidity;
}
function updateTime(dOffSet,rOffSet){
  var targetDate = new Date();
  var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
  var offsets = dOffSet * 1000 + rOffSet* 1000
  var nd = new Date(timestamp * 1000 + offsets);
  // time.innerHTML = timeZone;
  // d.toLocaleString('de-DE', {hour: '2-digit',   hour12: false, timeZone:'Asia/Shanghai'});
  todayDate1 = nd.getHours();
  todayDate2 = nd.getMinutes();
  todayDate3 = nd.getSeconds();
  realTimeHour = todayDate1;
  time.innerHTML = todayDate1 + " : " + todayDate2 + " : "+todayDate3;

}
function getTimes(){
  var d = new Date();
  todayDate1 = d.getHours();
  todayDate2 = d.getMinutes();
  todayDate3 = d.getSeconds();

}
function updateData(){
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  time = document.getElementById("time");
  getTimes();
  updateByName(cityName);
  updateTimeByName(longtitude,latitude);

}
setInterval(updateData,1000);
