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
var color1pReal;
var color2pReal;
var color1Real;
var color2Real;
var colorSun =[230,230,130];
var colorSunP;
var colorpointSun1 =[230,230,130];
var colorpointSun2 =[230,135,105];
var colorSunBPoint = [250,250,200];
var colorSunBPointP;
var colorSunBPoint1 =[250,250,200];
var colorSunBPoint2 =[250,60,0];
var interval1 = 50;
var interval11 = 7200000;
var interval2 = 25;
var interval21 =18000000;
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
var colortreeKeyPoint11 =[[145, 120, 140],[189, 183, 239],[185, 160, 185],[175, 140, 160]];
var colortreeKeyPoint12 =[[45, 20, 90],[89, 83, 189],[85, 60, 135],[75, 40, 110]];
var colortreeKeyPoint13 =[[45, 20, 90],[89, 83, 189],[85, 60, 135],[75, 40, 110]];
var colortreeKeyPoint14 =[[170, 120, 140],[214, 183, 239],[210, 160, 185],[200, 140, 160]];
var colortreeKeyPoint15 =[[132.5, 120, 102.5],[176.5, 183, 201.5],[172.5, 160, 147.5],[162.5, 140, 122.5]];

var colortree2 = [[155,135,150],[140,115,155],[140,160,165]];
var colortreeKeyPoint21 = [[155,135,150],[140,115,155],[140,160,165]];
var colortreeKeyPoint22 = [[55,35,100],[40,15,105],[40,60,115]];
var colortreeKeyPoint23 = [[55,35,100],[40,15,105],[40,60,115]];
var colortreeKeyPoint24= [[180,135,150],[165,115,155],[165,160,165]];
var colortreeKeyPoint25= [[142.5,135,112.5],[127.5,115,117.5],[127.5,160,127.5]];


var colortree3 = [[110,120,130],[90,95,115],[140,160,165],[75,75,100],[50,70,100],[110,120,100],[135,140,140],[70,90,105]];
var colortreeKeyPoint31 = [[110,120,130],[90,95,115],[140,160,165],[75,75,100],[50,70,100],[110,120,100],[135,140,140],[70,90,105]];
var colortreeKeyPoint32 = [[10,20,80],[0,0,65],[40,60,115],[0,0,50],[0,0,50],[10,20,50],[35,40,90],[0,0,65]];
var colortreeKeyPoint33 = [[10,20,80],[0,0,65],[40,60,115],[0,0,50],[0,0,50],[10,20,50],[35,40,90],[0,0,65]];
var colortreeKeyPoint34 = [[135,120,130],[115,95,115],[165,160,165],[100,75,100],[75,70,100],[135,120,100],[160,140,140],[95,90,105]];
var colortreeKeyPoint35 = [[97.5,120,102.5],[77.5,95,77.5],[127.5,160,127.5],[62.5,75,62.5],[37.5,70,62.5],[97.5,120,62.5],[122.5,140,102.5],[57.5,90,67.5]];


var colortree4 = [[115,90,110],[170,160,165],[75,85,100],[135,120,140],[60,65,95],[115,110,115]];
var colortreeKeyPoint41 = [[115,90,110],[170,160,165],[75,85,100],[135,120,140],[60,65,95],[115,110,115]];
var colortreeKeyPoint42 = [[15,0,60],[70,60,115],[0,0,50],[35,20,90],[0,0,45],[15,10,65]];
var colortreeKeyPoint43 = [[15,0,60],[70,60,115],[0,0,50],[35,20,90],[0,0,45],[15,10,65]];
var colortreeKeyPoint44 = [[140,90,110],[195,160,165],[100,85,100],[160,120,140],[85,65,95],[140,110,115]];
var colortreeKeyPoint45 = [[102.5,90,72.5],[157.5,160,127.5],[62.5,85,62.5],[122.5,120,102.5],[47.5,65,57.5],[102.5,110,178.5]];

var colortree5 = [[180,175,180],[150,150,180],[225,210,215],[165,170,165],[145,135,155]];
var colortreeKeyPoint51= [[180,175,180],[150,150,180],[225,210,215],[165,170,165],[145,135,155]];
var colortreeKeyPoint52= [[80,75,130],[50,50,130],[125,110,185],[65,70,115],[45,35,105]];
var colortreeKeyPoint53= [[80,75,130],[50,50,130],[125,110,185],[65,70,115],[45,35,105]];
var colortreeKeyPoint54= [[205,175,180],[175,150,180],[250,210,215],[190,170,165],[170,135,155]];
var colortreeKeyPoint55= [[167.5,175,142.5],[137.5,150,147.5],[212.5,210,177.5],[152.5,170,127.5],[132.5,135,117.5]];


var colortree = [colortree1,colortree2,colortree3,colortree4,colortree5];
var colortreeKP1 = [colortreeKeyPoint11,colortreeKeyPoint21,colortreeKeyPoint31,colortreeKeyPoint41,colortreeKeyPoint51];
var colortreeKP2 = [colortreeKeyPoint12,colortreeKeyPoint22,colortreeKeyPoint32,colortreeKeyPoint42,colortreeKeyPoint52];

var colortreeKP3 = [colortreeKeyPoint13,colortreeKeyPoint23,colortreeKeyPoint33,colortreeKeyPoint43,colortreeKeyPoint53];

var colortreeKP4 = [colortreeKeyPoint14,colortreeKeyPoint24,colortreeKeyPoint34,colortreeKeyPoint44,colortreeKeyPoint54];

var colortreeKP5 = [colortreeKeyPoint15,colortreeKeyPoint25,colortreeKeyPoint35,colortreeKeyPoint45,colortreeKeyPoint55];
var gardenColor = [190,200,180];
var gardenColorKP1 = [190,200,180];
var gardenColorKP2 = [90,100,130];
var gardenColorKP3 = [90,100,130];
var gardenColorKP4 = [165,150,130];
var gardenColorKP5 = [132.5,140,132.5];
var gardenColorKP = [100,100,100];


var waterTowerColor = [200,200,200];
var test = [130,150,100];
var test1 = 130;
var test2 = 150;
var test3 = 100;
var cityName = "davis";
var cityNameReal;

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
var countStar = 0;
var longtitude;
var latitude;
var unitController = "imperial"
var timestampTrue;
var sunRiseTime;
var sunSetTime;
var timePoint1;
var timePoint2;
var timer;
var todayDateSR1;
var todayDateSR2;
var todayDateSR3;
var todayDateSS1;
var todayDateSS2;
var todayDateSS3;
var timeCorrector;
var timeUse;
var timePointer;
var locTime;
var timestamp;
var cloudsScore;
var rainScore;
var weatherC;

function changeColor(){
  if(timeUse<sunRiseTime+ 36000000){
  sunSetTime = sunSetTime - 24*3600*1000;}
  if(timer > 0 && timeUse>sunRiseTime&&timer<6){
      sunRiseTime = sunRiseTime + 24*3600*1000;
  }
  // alert("time now:" + timeUse + " SunsetTime:" + sunSetTime + " SunRiseTime:" + sunRiseTime);
  // alert(timer);






  if(sunSetTime <timeUse && timeUse< sunSetTime + interval11){
    // alert(sunSetTime + " " + timestampTrue);
  // alert(sunSetTime + " " + timeUse + " 11111111");


    // alert(sunSetTime);
    // alert(sunSetTime+interval11);
  var a = interval11/interval1;

  var timePast = timeUse - sunSetTime;
  printTheColor(keypoint1,keypoint2,keypoint3,keypoint4,interval11,timePast);
  setTreeColor(colortreeKP1,colortreeKP2,timePast,interval11);
  arrangeTreeColor(1);
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);

  setGardenColor(gardenColorKP1,gardenColorKP2,timePast,interval11);
  // alert(gardenColor[0] + " " + gardenColor[1] + " " + gardenColor[2]);
  // document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0]+ "," + gardenColor[1]+ "," + gardenColor[2]+ ")";
  // colorGarder();
  count0++;
  if(weatherCondition!="Rain" && weatherCondition != "Clouds")

  showStar();
    setGardenColor(gardenColorKP3,gardenColorKP4,timePast,b);
  // document.getElementById("stars").style.opacity = 1/interval11*count0;
  //
  // if(count0%4 == 0)
  // document.getElementById("stars").style.opacity = document.getElementById("stars").style.opacity*0.8;
}
else if(sunSetTime + interval11<timeUse&&timeUse<sunSetTime + interval11+interval21){
  // alert(sunSetTime);
  // alert("22222222222222");
  count1++;
  var a = interval21;
  var timePast = timeUse - sunSetTime - interval11;
  printTheColor(keypoint3,keypoint4,keypoint3,keypoint4,a,timePast);
  setGardenColor(gardenColorKP1,gardenColorKP2,timePast,a);

  setTreeColor(colortreeKP2,colortreeKP3,timePast,a);
  setGardenColor(gardenColorKP3,gardenColorKP4,timePast,b);
  arrangeTreeColor(1);
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);

  showStar();


}
else if(sunSetTime + interval11+interval21<timeUse&&timeUse< sunRiseTime+3600000) {

  // alert("333333333");
  var a = (sunRiseTime+3600000 -sunSetTime - interval11-interval21)/interval3;
  var b =  sunRiseTime+3600000 -sunSetTime - interval11-interval21;
  var timePast = timeUse - sunSetTime - interval11-interval21
  // setGardenColor(3,2,0);


  // document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0]+ "," + gardenColor[1]+ "," + gardenColor[2]+ ")";
  setTreeColor(colortreeKP3,colortreeKP4,timePast,b);
  // alert(timePast/b);
  arrangeTreeColor(1);
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);
  printTheColor(keypoint3,keypoint4,keypoint5,keypoint6,b,timePast);
    setGardenColor(gardenColorKP3,gardenColorKP4,timePast,b);
  count2 ++;
    // if(weatherCondition!="Rain" && weatherCondition != "Clouds")
    showStar();

}
else if (sunRiseTime + 3600000<timeUse&&timeUse< sunRiseTime + 36000000) {
    // alert("444444444444");
  var a = 36000000-3600000
  var b = (36000000 -3600000)/interval4;
  var timePast = timeUse - sunRiseTime - 3600000;
  // alert(gardenColor[0] + " " + gardenColor[1] + " " + gardenColor[2] );
  // setGardenColor(-0.5/b,0,-0.5/b);
  setGardenColor(gardenColorKP4,gardenColorKP5,timePast,a);

  // document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0]+ "," + gardenColor[1]+ "," + gardenColor[2]+ ")";
  // setWaterTowerColor(3,5,5);
  // var abc = waterTowerColor[0];
  // alert(waterTowerColor[0] + " " + abc);
  // document.getElementById("waterTower").style.color = "rgb(" + abc+ "," + 0 + "," +0 + ")";
  setTreeColor(colortreeKP4,colortreeKP5,timePast,a);
  arrangeTreeColor(1);
  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);
  printTheColor(keypoint5,keypoint6,keypoint7,keypoint8,a,timePast);
  // alert(timePast/a);
  count3 ++;}
else if (sunRiseTime + 36000000<timeUse&&timeUse< sunSetTime) {
    // alert("555555555555");
  var a = sunSetTime - sunRiseTime-36000000;
  var c = (sunSetTime - sunRiseTime)/interval5;
  var timePast = timeUse - sunRiseTime - 36000000;
  // setGardenColor(1/c,0,2/c);
  setGardenColor(gardenColorKP5,gardenColorKP1,timePast,a);

  // alert(gardenColor[0] + " " + gardenColor[1] + " " + gardenColor[2]);
  test1 = test1 + 2.5;
  test2 = test2 + 2;
  test3 = test3 + 3.5;
  changeTestValue(2.5/c,2/c,3.5/c);

  // document.getElementById("garden").style['background-color'] = "rgb(" + test1 +" ," + test2 + "," + test3+ ")";
  printTheColor(keypoint7,keypoint8,keypoint9,keypoint10,a,timePast);
  document.getElementById("sun").style.top = 140-140*(a/timePast) +"%";
  // printTheSingleColorB(colorpointSun1,colorpointSun2,interval5);
  // printTheSingleColorBox(colorSunBPoint1,colorSunBPoint2,interval5);

  // setTreeColor(-10,0,-1);
  // arrangeTreeColor(1);
  // var bbb = colortree[0][0][0];
  // alert(colortree[0][0][0] + " " + bbb);
  // document.getElementById("tree1-1").style.color = "rgb("+ bbb+","+50+","+50 +")";
  setTreeColor(colortreeKP5,colortreeKP1,timePast,a);

  arrangeTreeColor(2);
  arrangeTreeColor(3);
  arrangeTreeColor(4);
  arrangeTreeColor(5);
  count4 ++;
  }

  else{
      // alert((sunRiseTime+3600) + " "  +timeUse + " " + (sunRiseTime+28800) );
      // alert("Something wrong with the Page, please contact Iris to fix it!");
      count0 = 0;
      count1 = 0;
      count2 = 0;
      count3 = 0;
      count4 = 0;
      document.getElementById("sun").style.top = -30+"%";
    //   colorSun =[230,230,130];
    //   colorSunBPoint = [250,250,200];
    //   colortree1 = [[145, 120, 140],[189, 183, 239],[185, 160, 185],[175, 140, 160]];
    //   colortree2 = [[155,135,150],[140,115,155],[140,160,165]];
    //   colortree3 = [[110,120,130],[90,95,115],[140,160,165],[75,75,100],[50,70,100],[110,120,100],[135,140,140],[70,90,105]];
    //   colortree4 = [[115,90,110],[170,160,165],[75,85,100],[135,120,140],[60,65,95],[115,110,115]];
    //   colortree5 = [[180,175,180],[150,150,180],[225,210,215],[165,170,165],[145,135,155]]
    //   colortree = [colortree1,colortree2,colortree3,colortree4,colortree5]
    //   arrangeTreeColor(1);
    //   arrangeTreeColor(2);
    //   arrangeTreeColor(3);
    //   arrangeTreeColor(4);
    //   arrangeTreeColor(5);
    //   test1 = 130;
    //   test2 = 150;
    //   test3 = 100;
    //   gardenColor = [190,200,180];
    //   document.getElementById("garden").style['background-color'] = "rgb(" + gardenColor[0] + "," + gardenColor[1] + "," + gardenColor[2] + ")";
     }


}

function printTheColor(keypointa,keypointb,keypointc,keypointd,interval,timePast){
  var change31 =( keypointa[0] - keypointc[0])*(timePast/interval);
  var change32 =( keypointa[1] - keypointc[1])*(timePast/interval);
  var change33 =( keypointa[2] - keypointc[2])*(timePast/interval);
  var change41 =( keypointb[0] - keypointd[0])*(timePast/interval);
  var change42 =( keypointb[1] - keypointd[1])*(timePast/interval);
  var change43 =( keypointb[2] - keypointd[2])*(timePast/interval);
  color1Real = keypointa;
  color2Real=  keypointb;
  color1pReal = [Math.round(color1Real[0] -change31), Math.round(color1Real[1] - change32), Math.round(color1Real[2]-change33)];
  color2pReal=  [Math.round(color2Real[0] -change41),Math.round( color2Real[1] - change42), Math.round(color2Real[2]-change43)];
  // console.log(color1p + " " + color2p);
  var print = "rgb("+ color1pReal[0] + "," + color1pReal[1] + "," + color2pReal[2] +"),rgb("+color2pReal[0]+ "," + color2pReal[1] + ","+color2pReal[2]+")"
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


function setTreeColor(treePoint1,treePoint2,timePast,a){

  for(i=0;i<treePoint1.length;i++){
    for(x=0;x<treePoint1[i].length;x++)
{      // if(colortree[i][x][1]!=null &&colortree[i][x][2]!=null){
      var change1 = (treePoint2[i][x][0]-treePoint1[i][x][0])*(timePast/a);
      var change2 = (treePoint2[i][x][1]-treePoint1[i][x][1])*(timePast/a);
      var change3 = (treePoint2[i][x][2]-treePoint1[i][x][2])*(timePast/a);
      colortree[i][x][0] = Math.round(treePoint1[i][x][0] + change1);
      colortree[i][x][1] = Math.round(treePoint1[i][x][1] + change2);
      colortree[i][x][2] = Math.round(treePoint1[i][x][2] + change3);}

    }


  }

function setWaterTowerColor(a,b,c){
    waterTowerColor[0] = waterTowerColor[0] +a;
    waterTowerColor[1] = waterTowerColor[1] +b;
    waterTowerColor[2] = waterTowerColor[2] +c;
  }
  function colorGarden(){

    document.getElementById("garden").style['background-color'] = "rgb(" + gardenColorKP[0] + "," + gardenColorKP[1] + "," + gardenColorKP[2] + ")";
  }
function setGardenColor(treePoint1,treePoint2,timePast,a){
  var change1 = (treePoint2[0]-treePoint1[0])*(timePast/a);
  var change2 = (treePoint2[1]-treePoint1[1])*(timePast/a);
  var change3 = (treePoint2[2]-treePoint1[2])*(timePast/a);
  gardenColorKP[0] = Math.round(treePoint1[0] + change1);
  gardenColorKP[1] = Math.round(treePoint1[1] + change2);
  gardenColorKP[2] = Math.round(treePoint1[2] + change3);
  colorGarden();
    }

function changeTestValue(a, b, c){
    test[0] = test[0] + a;
    test[1] = test[1] + b;
    test[2] = test[2] +c;
}






function updateByName(cityName){
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units="+unitController+"&appid=" + APPID;

  sendRequest(url);
}
function sendRequest(url){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 404){
      alert("didn't find");
    }
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      cloudsScore = data.clouds.all;
      rainScore = data.main.humidity;


      weather.loc = data.name;
      weather.temp = Math.floor(data.main.temp);
      longtitude = data.coord.lon;
      latitude = data.coord.lat;
      var sunSetT = data.sys.sunset;
      var sunRiseT = data.sys.sunrise;

      var ndSunSet = new Date(sunSetT*1000 + timeCorrector);
      var ndSunRise = new Date(sunRiseT*1000 + timeCorrector);
      sunSetTime = ndSunSet.getTime();
      sunRiseTime = ndSunRise.getTime();

      // alert(sunRiseT*1000 + timeCorrector);
      // nd.toLocaleString('de-DE', {hour: '2-digit',   hour12: false});
      todayDateSS1 = ndSunSet.getHours();
      todayDateSS2 = ndSunSet.getMinutes();
      todayDateSS3 = ndSunSet.getSeconds();
      todayDateSR1 = ndSunRise.getHours();
      todayDateSR2 = ndSunRise.getMinutes();
      todayDateSR3 = ndSunRise.getSeconds();
      // alert(todayDateSR1 + ": " + todayDateSR2 + ":" + todayDateSR3);
      // alert(todayDateSS1 + ": " + todayDateSS2 + ":" + todayDateSS3);
      // alert("aaa");

      update(weather);
      changeWeather();


      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
function updateTimeByName(lon,lat){
  // alert(lon + " " + lat);
  var targetDate = new Date();

  var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
  var url = "https://maps.googleapis.com/maps/api/timezone/json?location="+lat+","+lon+"&timestamp="+timestamp+"&key=AIzaSyCpQPZYK0w7eMaaRLPkf3dk6RqqVPLkdzM";
  // var url="https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331766000&key=AIzaSyCpB-HatmnhbmxWCoZsOzBXr8XP3Kdqit0";
  // var url = "https://maps.googleapis.com/maps/api/timezone/json?location="+lat+","+lon+"&timestamp="+timestamp+"&key="+"AIzaSyC5xotkqn1YUXjnp2FP2YG7WHA1ofj7ynA";

  // &timestamp=1331766000&key=YOUR_API_KEY
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
      // alert("dOffSet:"+  dOffSet);
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
  timePointer = targetDate.getTime();
  timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
  var offsets = dOffSet * 1000 + rOffSet* 1000
  // alert("dOffSet" + dOffSet + "rOffSet" + rOffSet);

  var nd = new Date(timestamp * 1000 + offsets);

  timestampTrue = nd.getTime()/1000;
  timeCorrector = nd.getTime()-targetDate.getTime();
  timeUse = nd.getTime();
  // nd.toLocaleString('de-DE', {hour: '2-digit',   hour12: false});
  todayDate1 = nd.getHours();
  todayDate2 = nd.getMinutes();
  todayDate3 = nd.getSeconds();
  timer = todayDate1;
  if(todayDate1<10)
  todayDate1 = "0" + todayDate1;
  if(todayDate2<10)
  todayDate2 = "0" + todayDate2;
  if(todayDate3<10)
  todayDate3 = "0" + todayDate3;

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
  changeWeather();


}
function changeWeather(){
  // alert(rainScore);
  if(cloudsScore>30 && rainScore<95){
    weatherC= "Clouds";
  }
  if (rainScore>95) {

    weatherC = "Rain";
    // alert(weatherC);
  }

  if(weatherC == "Clouds"){
    document.getElementById("stars").style.opacity = 0;
    document.getElementById("clouds").style.display= "block";
    document.getElementById("rain").style.display = "none";
  }
  if(weatherC == "Drizzle"){}
  if(weatherC == "Rain"){
      document.getElementById("stars").style.opacity = 0;
        document.getElementById("rain").style.display = "block";
        document.getElementById("clouds").style.display= "none";

  }
  if(weatherC == "Clear"){}
}
setInterval(updateData,1000);
setInterval(changeColor, 1000);
function showButton(){
  document.getElementById("changeButton").style.display = "inline";
}
function hideButton(){
  document.getElementById("changeButton").style.display = "none";
}
function transValue(){
  cityName = document.getElementById("input-loc").value.toLowerCase();
  hideButton();
}
function showStar(){
   countStar++;
    if(weatherC!="Rain" && weatherC!="Clouds"){
    



    if(countStar%4==1)
    document.getElementById("stars").style.opacity = 1;
    if(countStar%4==2)
    document.getElementById("stars").style.opacity = Math.random() *0.5 + 0.5;
    if(countStar%4==3)
    document.getElementById("stars").style.opacity = Math.random()*0.5 + 0.5;
    if(countStar%4==0)
    document.getElementById("stars").style.opacity = Math.random()*0.5 + 0.5;
}
}
