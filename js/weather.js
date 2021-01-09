
function getCity() {
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function getinfo(position){
        city = position.address.city; //获取城市信息
        city = city.substring(0,2);
        $.ajax({
        type          : 'get',
        async         : false,
        url           : 'http://api.k780.com/?app=weather.today&weaid='+city+'&appkey=36793&sign=8f56f4e92ddf49a6b2a8d7e67c3e514b&format=json&jsoncallback=data',
        dataType      : 'jsonp',
        jsonp         : 'callback',
        jsonpCallback : 'data',
        success       : function(data){
            if(data.success!='1'){
                alert(data.msgid+' '+data.msg);
                exit;
            }
            $(".city").text(data.result.citynm);
            $(".weather").text(data.result.weather);
            $(".temperature").text(data.result.temperature_curr);
            $(".img").attr("src",data.result.weather_icon);

            
        },
        error:function(){
            alert('fail');
        }
    });
     $.ajax({
        type          : 'get',
        async         : false,
        url           : 'http://api.k780.com/?app=weather.pm25&weaid='+city+'&appkey=36793&sign=8f56f4e92ddf49a6b2a8d7e67c3e514b&format=json&jsoncallback=data',
        dataType      : 'jsonp',
        jsonp         : 'callback',
        jsonpCallback : 'data',
        success       : function(data){
            if(data.success!='1'){
                alert(data.msgid+' '+data.msg);
                exit;
            }
            $(".air").text(data.result.aqi_levnm);
            $(".air_num").text(data.result.aqi);
            
        },
        error:function(){
            alert('fail');
        }
    });
    }, function(e) {
        alert("获取百度定位位置信息失败");
    }, {provider: 'baidu'});
}
function search(){
        var cityName = $("#searchCity").val();
        $.ajax({
        type          : 'get',
        async         : false,
        url           : 'http://api.k780.com/?app=weather.today&weaid='+cityName+'&appkey=36793&sign=8f56f4e92ddf49a6b2a8d7e67c3e514b&format=json&jsoncallback=data',
        dataType      : 'jsonp',
        jsonp         : 'callback',
        jsonpCallback : 'data',
        success       : function(data){
            if(data.success!='1'){
                alert(data.msgid+' '+data.msg);
                exit;
            }
            $(".city").text(data.result.citynm);
            $(".weather").text(data.result.weather);
            $(".temperature").text(data.result.temperature_curr);
            $(".img").attr("src",data.result.weather_icon);
        },
        error:function(){
            alert('fail');
        }
    });
     $.ajax({
        type          : 'get',
        async         : false,
        url           : 'http://api.k780.com/?app=weather.pm25&weaid='+cityName+'&appkey=36793&sign=8f56f4e92ddf49a6b2a8d7e67c3e514b&format=json&jsoncallback=data',
        dataType      : 'jsonp',
        jsonp         : 'callback',
        jsonpCallback : 'data',
        success       : function(data){
            if(data.success!='1'){
                alert(data.msgid+' '+data.msg);
                exit;
            }
            $(".air").text(data.result.aqi_levnm);
            $(".air_num").text(data.result.aqi);
        },
        error:function(){
            alert('fail');
        }
    });
   }
function test(){
    alert("message?: DOMString");
}
$(document).ready(function(){
   getCity();
});