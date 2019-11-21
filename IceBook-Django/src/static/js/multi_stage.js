function init()
{
	xhr = new XMLHttpRequest();	
	if(!xhr)
	{
		xhr.onreadystatechange = getContent;
		xhr.open("GET", "content.txt", true);
		xhr.send(null);
	}	
}

function getContent()
{
	if(xhr.readyState=="4"&&xhr.status==200)
	{
		var arr=(xhr.responseText).split(";");
		document.getElementById("secondary").innerHTML=arr[0];
		document.getElementById("picture").innerHTML=arr[3];
		setTimeout(getPic, 4000);
	}	
}

function getPic()
{
	xhr.open("GET", "image.txt", true);
	xhr.onreadystatechange = showImg;
	xhr.send(null);
}

function showImg()
{
	if(xhr.readyState == 4 && xhr.status == 200)
	{
		document.getElementById("picture").innerHTML = xhr.responseText;	
	}
	setTimeout(getLinks,2000);
}
