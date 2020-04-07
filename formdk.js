// JavaScript Document

function checkusr(){
	if(document.getElementById("usr").value=="")
		{document.getElementById("usr-dec").innerHTML="R?ng";
		document.getElementById("usr-dec").style.color="red";
		}
}

function checkname(){
	if(document.getElementById("name").value=="")
		{document.getElementById("name-dec").innerHTML="R?ng";
		document.getElementById("name-dec").style.color="red";
		}
}

function checkbd(){
	if(document.getElementById("bd").value=="")
		{document.getElementById("bd-dec").innerHTML="R?ng";
		document.getElementById("bd-dec").style.color="red";
		}
}

function checkpod(){
if(document.getElementById("pod").value=="")
		{document.getElementById("pod-dec").innerHTML="R?ng";
		document.getElementById("pod-dec").style.color="red";
		}
}

function checkpass(){
	if(document.getElementById("pass").value==""){
		document.getElementById("pass-dec").innerHTML="B?n chua nh?p m?t kh?u";
		document.getElementById("pass-dec").style.color="red";
	}
	if(document.getElementById("pass").value!=""){
		
		if(document.getElementById("pass").value.length<6||document.getElementById("pass").value.length>24){
			document.getElementById("pass-dec").innerHTML="Quá dài ho?c quá ng?n";
			document.getElementById("pass-dec").style.color="red";
			}
		else{
			if(document.getElementById("pass").value==document.getElementById("repass").value)
			{
				document.getElementById("repass-dec").innerHTML="M?t kh?u kh?p";
				document.getElementById("repass-dec").style.color="green";
			}
			else
			{
				document.getElementById("repass-dec").innerHTML="M?t kh?u không kh?p";
				document.getElementById("repass-dec").style.color="red";
			}
		}
	}	
}

function checktel(){
	var a=document.getElementById("tel");
	if(a.value==""){
		document.getElementById("tel-dec").innerHTML="B?n chua di?n s? di?n tho?i";
		document.getElementById("tel-dec").style.color="red";
	}
	else{
			if(isNaN(a.value)==true){
				document.getElementById("tel-dec").innerHTML="Không h?p lí";
				document.getElementById("tel-dec").style.color="red";
			}
			else{
				if(a.value.length>10||a.value.length<10){
			document.getElementById("tel-dec").innerHTML="SÐT quá dài ho?c quá ng?n";
			document.getElementById("tel-dec").style.color="red";
		}else
				{
				document.getElementById("tel-dec").innerHTML="H?p lí";
				document.getElementById("tel-dec").style.color="green";
				}
			}
		}	
}
function checksumbit(){
	var input=document.getElementsByTagName("input");
	for(var i=0;i<input.length-2;i++)
	if(input[i].value==""){
		alert("Ban chua nhap day du thong tin");
		return;
	}
	alert("Da dang ky thanh cong");
}


function reset_label(){
	var input=document.getElementsByTagName("input");
	for(var i=0;i<input.length;i++){
		if(input[i].value=="Register")
			break;
		input[i].value="";
	}	
}

function checkmail(){
	var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
	var e=document.getElementById("mail");
	if(reg_mail.test(e.value)==true){
		document.getElementById("mail-dec").innerHTML="Email h?p l?";
		document.getElementById("mail-dec").style.color="green";
	}
	else{
		document.getElementById("mail-dec").innerHTML="Email không h?p l?";
		document.getElementById("mail-dec").style.color="red";
	}	
}

/*function reloader(x){
	x.innerHTML="";
}*/

function reloadusr(){
	document.getElementById("usr-dec").innerHTML="";
}

function reloadpass(){
	document.getElementById("pass-dec").innerHTML="";
}

function reloadrepass(){
	document.getElementById("repass-dec").innerHTML="";
}

function reloadname(){
	document.getElementById("name-dec").innerHTML="";
}
function reloadbd(){
	document.getElementById("bd-dec").innerHTML="";
}

function reloadpod(){
	document.getElementById("pod-dec").innerHTML="";
}

function reloadtel(){
	document.getElementById("tel-dec").innerHTML="";
}

function reloadmail(){
	document.getElementById("mail-dec").innerHTML="";
}