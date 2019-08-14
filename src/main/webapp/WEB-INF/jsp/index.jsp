<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link rel="stylesheet" href="/webjars/bootstrap/3.3.4/dist/css/bootstrap.min.css">




<html>
<script th:src="@{/webjars/jquery/2.1.3/dist/jquery.min.js}"></script>
<script th:src="@{/webjars/bootstrap/3.3.4/dist/js/bootstrap.min.js}"></script>
<script type="text/javascript" src="/resources/js/index.js"/>
<head>
    <title>룰 호출 페이지</title>
</head>
<body>
<div class="name"><h1>${name}</h1></div>
<div><button type="button" class="btn btn-primary" id="bt">버튼</button></div>
<div><table class="table"><tr><td id="rulename"><input type="text" name="submit" size="13"></td></tr></table></div>
</body>
</html>
