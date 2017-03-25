	/*
				* js file for teachers form validator by Deepak kumar pansari 
				* Created on 6/25/2015 12:56 PM on Thrusday
				* elements are selected by their name and data is displayed by their id 
			*/
			var validationFailFirstName = 1,validationFailLastName = 1,validationFailUserName = 1,validationFailEmail= 1,validationFailContact = 1,validationFailPassword = 1,validationFailDesig = 1,validationFailUACODE	=	1;
			$(document).ready(function(){
				
				/* for input of firstname */
				$("[name = 'first_name']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'first_name']").val();
					splitString	=	string_read.split("");
					for(x in splitString){
						if(splitString[x]==='?'||splitString[x]==='`'||splitString[x]==='@'||splitString[x]==='!'||splitString[x]==='%'||splitString[x]==='#'||splitString[x]===')'||splitString[x]==='('||splitString[x]==='&'||splitString[x]==='^'||splitString[x]==='_'||splitString[x]==='|'||splitString[x]==='"'||splitString[x]==='.'||splitString[x]===','||splitString[x]==='/'||splitString[x]==='*'||splitString[x]==='~'||splitString[x]===';'||splitString[x]===':'||splitString[x]==='0'||splitString[x]==='1'||splitString[x]==='2'||splitString[x]==='3'||splitString[x]==='4'||splitString[x]==='5'||splitString[x]==='6'||splitString[x]==='7'||splitString[x]==='8'||splitString[x]==='9'){
							$("#firstName").html("~ ` ! @ # $ % ^ & * _  , . are not allowed!!");
							validationFailFirstName	=	1;
							break;
							}else{
							$("#firstName").html("&nbsp;");
							validationFailFirstName	=	0;
						}
					}
				});	
				
				/* for input of lastname */
				$("[name = 'last_name']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'last_name']").val();
					splitString	=	string_read.split("");
					for(x in splitString){
						if(splitString[x]==='?'||splitString[x]==='`'||splitString[x]==='@'||splitString[x]==='!'||splitString[x]==='%'||splitString[x]==='#'||splitString[x]===')'||splitString[x]==='('||splitString[x]==='&'||splitString[x]==='^'||splitString[x]==='_'||splitString[x]==='|'||splitString[x]==='"'||splitString[x]==='.'||splitString[x]===','||splitString[x]==='/'||splitString[x]==='*'||splitString[x]==='~'||splitString[x]===';'||splitString[x]===':'||splitString[x]==='0'||splitString[x]==='1'||splitString[x]==='2'||splitString[x]==='3'||splitString[x]==='4'||splitString[x]==='5'||splitString[x]==='6'||splitString[x]==='7'||splitString[x]==='8'||splitString[x]==='9'){
							$("#lastName").html("~ ` ! @ # $ % ^ & * _  , . are not allowed!!");
							validationFailLastName	=	1;
							break;
							}else{
							$("#lastName").html("&nbsp;");
							validationFailLastName	=	0;
						}
					}
				});	
				
				/* for input of username */
				$("[name = 'username']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'username']").val();
					splitString	=	string_read.split("");
					for(x in splitString){
						if(splitString[x]==='-'||splitString[x]==='!'||splitString[x]==='%'||splitString[x]==='#'||splitString[x]===')'||splitString[x]==='('||splitString[x]==='&'||splitString[x]==='^'||splitString[x]==='/'||splitString[x]==='|'||splitString[x]==='"'||splitString[x]==='.'||splitString[x]===','||splitString[x]===' '||splitString[x]==='\''||splitString[x]==='*'||splitString[x]==='~'||splitString[x]===';'||splitString[x]===':'||splitString[x]===','||splitString[x]==='$'||splitString[x]==='?'){
							$("#userName").html("only a-z, A-Z, _, 0-9 are allowed!!");
							validationFailUserName	=	1;
							break;
							}else{
							if(string_read.length>=8){
								$("#userName").html("&nbsp;");
								validationFailUserName	=	0;
								}else{
								$("#userName").html("username should be 8 character or more");
								validationFailUserName	=	1;
							}	
						}
					}
					
				});	
				
				/* for email address */
				$("[name = 'email_addr']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'email_addr']").val();
					splitString	=	string_read.split("");
					for(x in splitString){
						if(splitString[x]==='-'||splitString[x]==='!'||splitString[x]==='%'||splitString[x]==='#'||splitString[x]===')'||splitString[x]==='('||splitString[x]==='&'||splitString[x]==='^'||splitString[x]==='/'||splitString[x]==='|'||splitString[x]==='"'||splitString[x]===','||splitString[x]===' '||splitString[x]==='\''||splitString[x]==='*'||splitString[x]==='~'||splitString[x]===';'||splitString[x]===':'||splitString[x]===','||splitString[x]==='$'||splitString[x]==='?'){
							$("#emailAddr").html("Email Address Invalid!!");
							validationFailEmail	=	1;
							break;
							}else{
							for(x in splitString){
								if(splitString[x]==="@"){
									$("#emailAddr").html("&nbsp;");
									validationFailEmail	=	0;
									break;
									}else{
									$("#emailAddr").html("Invalid Email Address!!");
									validationFailEmail	=	1;
								}	}
						}
					}
					
				});	
				
			
				
				/* for contact */
				$("[name = 'contact']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'contact']").val();
					splitString	=	string_read.split("");
					for(x in splitString){
						if(splitString[x]==='1'||splitString[x]==='2'||splitString[x]==='3'||splitString[x]==='4'||splitString[x]==='5'||splitString[x]==='6'||splitString[x]==='7'||splitString[x]==='8'||splitString[x]==='9'||splitString[x]==='0'||splitString[x]==='+'){
							$("#conTact").html("&nbsp;");
							validationFailContact = 0;
							}else{
							$("#conTact").html("Invalid Contact No.!!");
							validationFailContact	=	1;
						}
					}
					
				});	
			
			/* for password */
				$("[name = 'password']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'password']").val();
					splitString	=	string_read.split("");
					for(x in splitString){
						if(splitString[x]==='-'||splitString[x]==='@'||splitString[x]==='='||splitString[x]==='+'||splitString[x]==='!'||splitString[x]==='%'||splitString[x]==='#'||splitString[x]===')'||splitString[x]==='('||splitString[x]==='&'||splitString[x]==='^'||splitString[x]==='/'||splitString[x]==='|'||splitString[x]==='"'||splitString[x]==='.'||splitString[x]===','||splitString[x]===' '||splitString[x]==='\''||splitString[x]==='*'||splitString[x]==='~'||splitString[x]===';'||splitString[x]===':'||splitString[x]===','||splitString[x]==='$'||splitString[x]==='?'){
							$("#passWord").html("only a-z, A-Z, _, 0-9 are allowed!!");
							break;
							}else{
							if(string_read.length>=8){
								$("#passWord").html("Strong Password!! ");
								}else{
								$("#passWord").html("Password Should be 8 Character or More!!");
								}	
							}
						}
					
				});	
				
			
			/* for confirm password */
				$("[name = 'c_password']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'c_password']").val();
					splitString	=	string_read.split("");
					for(x in splitString){
						if(splitString[x]==='`'||splitString[x]==='-'||splitString[x]==='@'||splitString[x]==='='||splitString[x]==='+'||splitString[x]==='!'||splitString[x]==='%'||splitString[x]==='#'||splitString[x]===')'||splitString[x]==='('||splitString[x]==='&'||splitString[x]==='^'||splitString[x]==='/'||splitString[x]==='|'||splitString[x]==='"'||splitString[x]==='.'||splitString[x]===','||splitString[x]===' '||splitString[x]==='\''||splitString[x]==='*'||splitString[x]==='~'||splitString[x]===';'||splitString[x]===':'||splitString[x]===','||splitString[x]==='$'||splitString[x]==='?'){
							$("#passWordC").html("only a-z, A-Z, _, 0-9 are allowed!!");
							validationFailPassword	=	1;
							break;
							}else{
							if(string_read.length>=8){
								$("#passWordC").html("&nbsp;");
									if(string_read===$("[name = 'password']").val()){
										$("#passWordC").html("Password Matched!!");
										validationFailPassword	=	0;
										}else{
											$("#passWordC").html("Password not matching!!");
											validationFailPassword	=	1;
										}
							
								}else{
								$("#passWordC").html("Password Should be 8 Character or More!!");
								validationFailPassword	=	1;
								}	
							}
						}
					
				});	
				
				/* for designation part */
					$("[name = 'desig']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'desig']").val();
					if(string_read.length>0){
					$("#desiG").html("&nbsp;");
					validationFailDesig=0;
					}else{
						$("#desiG").html("Field Can't be Empty!!");
						validationFailDesig=1;
						}
					
				});	
				
				
				/* for UA code*/
					$("[name = 'ua_code']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'ua_code']").val();
					if(string_read.length>0){
					$("#UACODE").html("&nbsp;");
						if(string_read.length>=2){
							if(string_read.substr(0,2)==="UA"){					
									$("#UACODE").html("&nbsp;");
									validationFailUACODE=0;
								}else{
								$("#UACODE").html("Code Error!!");
								validationFailUACODE=1;
								}
							}
					}else{
						$("#UACODE").html("Essential Code for SignUp!!");
						validationFailUACODE=1;
						}
					
				});	
				
				
			
				/* for submit */
					$("form").on("click mouseover",function(){
					if(validationFailEmail||validationFailFirstName||validationFailLastName||validationFailPassword||validationFailUserName||validationFailDesig||validationFailUACODE){
							$("#button2").attr("disabled","disabled");
						}else{
						$("#button2").removeAttr("disabled");
					}
				});	
				});
				
				
				