var nameInput = document.getElementById("user");
var pwdInput = document.getElementById("password");
var loginBtn = document.getElementById("login");

var xmlHttp = new XMLHttpRequest();
var jsonObj = null;
		xmlHttp.onload = function(){
			if(xmlHttp.readyState == 4){ //表示响应完成
				if(xmlHttp.status == 200){ //响应码为200  表示服务器正确响应
					//获取响应内容
					txt = xmlHttp.responseText ;
					//把json字符串解析成json对象
					jsonObj = JSON.parse(txt);
					console.info(jsonObj)
					
				}else{
					console.info('数据返回失败！状态代码：'+xmlHttp.status+'状态信息：'+xmlHttp.statusText);
				}
			}
		}
		xmlHttp.open('GET','http://localhost:3000/userAdmin',true);
		xmlHttp.send();


function login(){
	var uname = nameInput.value;
	var pwd = pwdInput.value;
    var suc = null;
    //logic of login
    for(var i =0; i<jsonObj.length;i++){
        if(uname==jsonObj[i]['name'] && pwd==jsonObj[i]['psw']){   
			window.open("index.html","_parent");
			console.info("success");
			suc = 1;
		}
	 }
	 if(!suc)
	    window.alert("ID or password is wrong!");
}