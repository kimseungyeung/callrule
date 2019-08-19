<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link rel="stylesheet" href="/webjars/bootstrap/4.3.1/css/bootstrap.min-jsf.css">
<link href="\webjars\jsoneditor\dist\jsoneditor.css" rel="stylesheet" type="text/css">
<script src="/webjars/jquery/3.4.1/jquery.js"></script>
<script  src="/webjars/bootstrap/4.3.1/js/bootstrap.js"></script>
<script src="\webjars\jsoneditor\dist\jsoneditor.js"></script>


<link rel="stylesheet" href="/webjars/bootstrap/4.3.1/css/bootstrap.min-jsf.css">

<html>


<head>
    <title>룰 호출 페이지</title>
</head>
<body>
<div class='name'><h1>${name}</h1></div>

<div id="editor_holder" style="width: 1000px;height: 500px;" ></div>
<div id="btt"><button type="button" class="btn btn-primary" id="bt">실행</button></div>
<script type="text/javascript" src="resources/js/index.js"></script>
<div id="result"></div>
</body>
</html>
