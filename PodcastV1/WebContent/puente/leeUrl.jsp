<%@ page import="java.io.*"  %> 
<%@ page import="java.util.*"  %> 
<%@page import="java.io.InputStreamReader"%>
<%@page import="java.net.URL"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.util.Enumeration" %>

<%@page contentType="application/text" pageEncoding="UTF-8"%> 
<%
String urli = request.getParameter("urls");

URL url = new URL(urli);
String error = "";
final StringBuilder builder = new StringBuilder(2048); 
	
	try
	{
		BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
 	    String line;
 	
 	    while ((line = reader.readLine()) != null) {
 	    	builder.append(line);
 	    }
 	    reader.close();
 	    
 		// convert response to JSON array
 		out.print(builder.toString());
 		 
	}
	catch(Exception e)
	{
		
 		error = e.getClass().getName()+": "+e.getMessage();
 		out.print(error);
	}


%>