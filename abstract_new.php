<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700|Droid+Serif' rel='stylesheet' type='text/css'>
	<link href="asse/css/bootstrap.css" type="text/css" rel="stylesheet">
	<script type="text/javascript" src="asse/js/jquery.js"></script>
	<script type="text/javascript" src="asse/js/bootstrap.js"></script>
	<script type="text/javascript" src="assets/js/bootbox.min.js"></script>
	<link rel="shortcut icon" href="images/tech.jpg" type="image/x-icon">
	<title>Abstract Submission</title>
	<style>
	 .container{
		 background-color:darkslategray;
		 color:white;
	 }
	 .container a:hover{
		 color:white;
		 text-decoration:none;
	 }
	 .thumbnail{
		 background-color:LightSlateGray ;
	 }
	</style>
</head>
<body  style="background-color:Lavender ;margin-top:10px" >
	<div class="container well">
		<div class = "row">
			<h3 style="text-align:center;;font:bold 55px Sans-serif " ><text>Technica'17 </text><text style="font-size:30px"> Abstract Submission</text></h3>
		</div>
        <div class = "row" style="margin-top:10px">
			<div class="col-lg-1 col-md-1 col-sm-1">
				<a href="index.html" style="text-align:Left;;font:bold 25px Sans-serif;color:white; " >Home</a>
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10"></div>
			<div class="col-lg-1 col-md-1 col-sm-1">
				<a style="text-align:Left;color:#000;font:bold 25px Sans-serif " ></a>
			</div>
		</div>
		<form style="text-align: center;padding-top:40px;font:20px bold sans-sherif;" class="row thumbnail" action="#" method="post" enctype="multipart/form-data">
			<p class="col-md-12"style="padding-top:20px;">Select Event Name:
				 <select name="event" required style="color:black;">
					<option value="Rhetorix (Paper Presentation)">Rhetorix (Paper Presentation)</option>
					<option value="Chitrankit (Poster Presentation)">Chitrankit (Poster Presentation)</option>
					<option value="IPS (Industrial Problem Solving)">IPS (Industrial Problem Solving)</option>
					<option value="Magnum Opus (Model Making)">Magnum Opus (Model Making)</option>
				</select>
			</p>
			<p class="col-md-12" style="padding-top:20px;">
				Full Name:
				<input type="text" name="uname" required style="color:black;">
			</p>
			<p class="col-md-12" style="padding-top:20px;">
				Email Address:
				<input type="text" name="email" required style="color:black;">
			</p>
			<ul class="col-md-12 list-inline" style="padding-top:40px;">
				<li>Select file to upload:</li>
				<li><input type="file" name="uploaded" id="fileToUpload" required style="color:black;"></li>
			</ul>
			<p class="col-md-12" style="padding-top:40px;font:20pxx bold tahoma;"> 
			<input type="submit" value="Upload abstract" name="submit" class="btn btn-primary">
			</p>
		</form>
</body>
</html>
<?php

$folder = "abstract_new/";
echo $_FILES["uploaded"]["name"];
$temp = explode(".", $_FILES["uploaded"]["name"]);
$newfilename = basename($_POST['event']).'_'.basename($_POST['uname']).'_'.basename($_POST['email']).'_'.rand(100,999).'.'. end($temp);
$db_path ="$folder".$newfilename  ;
$listtype = array(
'.doc'=>'application/msword',
'.docx'=>'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'.rtf'=>'application/rtf',
'.pdf'=>'application/pdf'); 
if ( is_uploaded_file( $_FILES['uploaded']['tmp_name'] ) ){
	if($key = array_search($_FILES['uploaded']['type'],$listtype)){
		if (move_uploaded_file($_FILES['uploaded']  ['tmp_name'],"$folder".$newfilename)){
			echo '<script type="text/javascript">bootbox.alert("<p style=\"color:orange;font:18px bold tahoma;\">File has been Uploaded</p> ");	</script>';
		}
}
else{
echo '<script type="text/javascript">bootbox.alert("<p style=\"color:orange;font:18px bold tahoma;\">File Type Should Be .Docx or .Pdf or .Rtf Or .Doc</p> ");	</script>';
}
}else{
	echo '<script type="text/javascript">bootbox.alert("<p style=\"color:red;font:18px bold tahoma;\">File  Cannot be Uploaed Try Again.</p> ");	</script>';
}