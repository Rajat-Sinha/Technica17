	/*
				* js file for form validation of the form by Deepak kumar pansari 
				* Created on 6/25/2015 12:56 PM on Thrusday
				* elements are selected by their name and data is displayed by their id 
			*/
			var validationFailFirstName = 1,validationFailLastName = 1,validationFailUserName = 1,validationFailEmail= 1,validationFailRegNo = 1,validationFailContact = 1,validationFailPassword = 1,validationFailTempAddress=1,validationFailHomestate = 1,validationFailPincode = 1;
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
						if(splitString[x]==='`'||splitString[x]==='-'||splitString[x]==='!'||splitString[x]==='%'||splitString[x]==='#'||splitString[x]===')'||splitString[x]==='('||splitString[x]==='&'||splitString[x]==='^'||splitString[x]==='/'||splitString[x]==='|'||splitString[x]==='"'||splitString[x]==='.'||splitString[x]===','||splitString[x]===' '||splitString[x]==='\''||splitString[x]==='*'||splitString[x]==='~'||splitString[x]===';'||splitString[x]===':'||splitString[x]===','||splitString[x]==='$'||splitString[x]==='?'){
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
				
				/* for reg no */
				$("[name = 'reg_no']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'reg_no']").val();
					dateNow = new Date();
					yearString = dateNow.getFullYear();
					if(string_read.length>3){
						if(string_read.substr(0,4)==yearString||string_read.substr(0,4)==yearString-1||string_read.substr(0,4)==yearString-2||string_read.substr(0,4)==yearString-3){
							$("#regNo").html("&nbsp;");
							if(string_read.length>7){
								if(string_read.substr(4,4)==='UGMM'){
									$("#regNo").html("&nbsp;");
									if(string_read.length>10){
										if(string_read.substr(8,3)>='100'){
											$("#regNo").html("Invalid Roll No!!");
											validationFailRegNo	=	1;
											}else{
											$("#regNo").html("&nbsp;");
											validationFailRegNo	=	0;
										}}
										}else{
										$("#regNo").html("Invalid Branch Code!!");
										validationFailRegNo	=	1;
								}}
								}else {
								$("#regNo").html("Invalid Year!!");
								validationFailRegNo	=	1;
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
			
				/* for temp address */
					$("[name = 't_addr']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 't_addr']").val();
					if(string_read.length=='0'){
						$("#tempAddr").html("Selected Field Can't be Empty!!");
						validationFailTempAddress= 1;
						}else{
						$("#tempAddr").html("&nbsp;");
						validationFailTempAddress = 0;
						}
					
				});	
				
				
				/* for homestate */
					$("[name = 'homestate']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'homestate']").val();
					if(string_read.length===0){
						$("#homeState").html("HomeState Can't be Empty!!");
						validationFailHomestate = 1;
						}else{
							splitString = string_read.split("");
							for(x in splitString)
							if(splitString[x]==='`'||splitString[x]==='-'||splitString[x]==='!'||splitString[x]==='%'||splitString[x]==='#'||splitString[x]===')'||splitString[x]==='('||splitString[x]==='&'||splitString[x]==='^'||splitString[x]==='/'||splitString[x]==='|'||splitString[x]==='"'||splitString[x]==='.'||splitString[x]===','||splitString[x]===' '||splitString[x]==='\''||splitString[x]==='*'||splitString[x]==='~'||splitString[x]===';'||splitString[x]===':'||splitString[x]===','||splitString[x]==='$'||splitString[x]==='?'){
							$("#homeState").html("only a-z, A-Z, _, 0-9 are allowed!!");
							validationFailHomestate = 1;
							break;
							}else{
								$("#homeState").html("&nbsp;");
								validationFailHomestate = 0;
							}
						}
					
				});	
				
					/* for pincode */
					$("[name = 'pincode']").on("click mouseover change keyup",function(){
					string_read	=	$("[name = 'pincode']").val();
					if(string_read.length===0){
						$("#pinCode").html("Pincode Can't be Empty!!");
						validationFailPincode = 1;
						}else{
							splitString = string_read.split("");
							for(x in splitString)
							if(!(splitString[x]==='1'||splitString[x]==='2'||splitString[x]==='3'||splitString[x]==='4'||splitString[x]==='5'||splitString[x]==='6'||splitString[x]==='7'||splitString[x]==='8'||splitString[x]==='9'||splitString[x]==='0'||splitString[x]==='-'||splitString[x]===' ')){
							$("#pinCode").html("only '0-9', ' ', '_' are allowed!!");
							validationFailPincode = 1;
							break;
							}else{
								$("#pinCode").html("&nbsp;");
								validationFailPincode = 0;
							}
						}
					
				});	
				
				/* for submit */
					$("form").on("click mouseover",function(){
					if(validationFailEmail||validationFailFirstName||validationFailLastName||validationFailPassword||validationFailRegNo||validationFailUserName||validationFailPincode||validationFailTempAddress||validationFailHomestate){
							//$("#button2").attr("disabled","disabled");
						}else{
						$("#button2").removeAttr("disabled");
					}
				});	
				
				/* for verification code */
				
				
				
				});
				