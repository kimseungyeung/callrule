<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link rel="stylesheet" href="/webjars/bootstrap/4.3.1/css/bootstrap.min-jsf.css">
<script src="/webjars/jquery/3.4.1/jquery.js"></script>
<script  src="/webjars/bootstrap/4.3.1/js/bootstrap.js"></script>
<script src="/webjars/json-editor/0.7.21/jsoneditor.js"></script>


<link rel="stylesheet" href="/webjars/bootstrap/4.3.1/css/bootstrap.min-jsf.css">

<html>


<head>
    <title>룰 호출 페이지</title>
</head>
<body>
<div class='name'><h1>${name}</h1></div>
룰이름: <input id="edit" type="text" name="submit" size="13">
룰값: <input id="edit2" type="text" name="submit" size="13">
<div id="btt"><button type="button" class="btn btn-primary" id="bt">실행</button></div>
<div id="editor_holder"></div>
<script type="text/javascript" src="resources/js/index.js"></script>
</body>
</html>
