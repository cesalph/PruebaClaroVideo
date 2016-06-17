/**
 * 
 */
var doc;



function buscaUrl(){
		
	document.getElementById("newArt").innerHTML = ""; 
	var urls = document.getElementById("url").value; 
	

	var x = new XMLHttpRequest();
	x.open("GET", "./puente/leeUrl.jsp?urls="+urls, true);
	x.onreadystatechange = function () {
	  if (x.readyState == 4 && x.status == 200)
	  {
	    var res = (x.responseText).trim();
	    	
	    if (typeof DOMParser != "undefined")
	    {
	      var parser = new DOMParser();
	      doc = parser.parseFromString(res, "text/xml");
	      buscaPod();
	    }
	    else if (typeof ActiveXObject != "undefined")
	    {
	      var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	      doc = parser.parseFromString(res, "text/xml");
	      buscaPod();
	    }
	    
	  }
	};
	x.send(null);
	
}



function buscaPod(){
	
	var mp3 = "";
	var pick = "";
	var desc = "";
	var title = "";
	var itemsL = doc.getElementsByTagName("channel")[0].getElementsByTagName("item").length;
	
	for(var i=0; i < itemsL; i++){
		mp3 = doc.getElementsByTagName("channel")[0].getElementsByTagName("guid")[i].firstChild.nodeValue;
		//pick = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		desc = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("description")[0].firstChild.nodeValue;
		title = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		creaPod(i, mp3, desc, title);
	}
	
}

//function creaPod(numero, mp3, desc, title){
//	
//	var x = document.createElement("AUDIO");
//    x.setAttribute("id", "pod"+ numero);
//    x.setAttribute("controls", "controls");
//    
//    var z = document.createElement("SOURCE");
//    z.setAttribute("src", mp3);
//    z.setAttribute("type", "audio/mpeg");
//    x.appendChild(z);
//	
//    
//    document.body.appendChild(x);
//	
//}

function creaPod(numero, mp3, desc, title){
	var htm = '<article class="feature left"> '+ 
		'<span class="image"><img src="images/podcast.jpg" alt="" /><audio controls style="width: 494px;"> '+ 
		 ' <source src='+mp3+'> '+ 
		'</audio></span> '+ 
		
		'<div class="content"> '+ 
			'<h2>'+title+'</h2> '+ 
			'<p>'+desc+'</p> '+ 
		'</div> '+ 
	'</article>' 

		document.getElementById("newArt").innerHTML += htm; 
}


