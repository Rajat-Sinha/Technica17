 /* all the function here */
		
			 var current_dir='';
			var prev_dir='';
			var next_dir='';
			var return_get_data = '';
			
			function  get_data(fun,data,id)
			{
			var xmlhttp;
			if(window.XMLHttpRequest)
			{
				xmlhttp=new XMLHttpRequest();
			}
			else
			{
				/* code for IE6, IE5 */
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
	
			/* on readyStateChange Method to speed up the whole stuff */
			xmlhttp.onreadystatechange=function()
			{
				if(xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					//if response is ready and not empty
				
					if(fun==='get_dir')
					{
						document.getElementById(id).innerHTML = xmlhttp.responseText;
					}
					else if(fun==='read_dir')
					{
						document.getElementById(id).innerHTML = xmlhttp.responseText;
					}
					else if(fun==='get_current_dir')
					{
						document.getElementById(id).innerHTML = xmlhttp.responseText;
					}
					
					
				}
			}
			
				/* by GET method */
				xmlhttp.open("GET","file.php?fun="+fun+"&data="+data,true); //here true means asynchronous mode of data transfer 
				xmlhttp.send();
			}
		// end of the function
		
		
			function init()
			{ 
				get_data('get_dir','','directory');
				get_data('read_dir','current_dir','file_folder');
			}
			function go_prev()
			{
				get_data('update_dir','prev','');
				get_data('get_current_dir','','directory');
				get_data('read_dir','current_dir','file_folder');
			}
			function go_next()
			{
				get_data('update_dir','next','');
				get_data('get_current_dir','','directory');
				get_data('read_dir','current_dir','file_folder');
			}
		function folder_open(data)
		{
			get_data('update_dir',data,'');
			
			get_data('read_dir','current_dir','file_folder');get_data('get_current_dir','','directory');
		}