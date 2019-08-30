<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link rel="stylesheet" href="/webjars/bootstrap/4.3.1/css/bootstrap.min-jsf.css">
<link href="/webjars/jsoneditor/dist/jsoneditor.css" rel="stylesheet" type="text/css">
<script src="/webjars/jquery/3.4.1/jquery.js"></script>
<script  src="/webjars/bootstrap/4.3.1/js/bootstrap.js"></script>
<script src="/webjars/jsoneditor/dist/jsoneditor.js"></script>


<link rel="stylesheet" href="/webjars/bootstrap/4.3.1/css/bootstrap.min-jsf.css"/>

<html>
<link rel="stylesheet" type="text/css" href="resources/css/index.css"/>


<head>
    <title>룰 호출 페이지</title>
</head>
<body>
<div class='name'><h1>${name}</h1></div>
<select id="select"></select>
<div id="editor_holder" >
    <p><div >공단부담금액:<input id="edt_1" type="number" value=""></div></p>
    <p><div >국가코드:<input id="edt_2" type="text" value=""></div></p>
    <p><div>급여본인부담:<input  id="edt_3"type="number" value=""></div></p>
    <p><div >본인부담금액:<input id="edt_4" type="number" value=""></div></p>
   <p><div >사고발생일자:<input id="edt_5"type="text" value=""></div></p>
   <p> <div >입원시작일자:<input id="edt_6"type="text" value=""></div></p>
    <p><div >입원일수:<input id="edt_7"type="number" value=""></div></p>
   <p> <div >입원종료일자:<input id="edt_8" type="text" value=""></div></p>
   <p> <div >청구일자:<input id="edt_9"type="text" value=""></div></p>
   <p> <div >추산보험금<input id="edt_10"type="number" value=""></div></p>
   <p> <div >통원여부<input id="edt_11" type="text" value=""></div></p>
   <p> <div >통원의료비지급누계1년금액:<input id="edt_12" type="number" value=""></div></p>
    <p><div >개인단체구분코드:<input id="edt_13"type="text" value=""></div></p>
    <p><div >계약변경코드:<input id="edt_14" type="text" value=""></div></p>
   <p> <div >보종구분코드:<input id="edt_15" type="text" value=""></div></p>
   <p> <div >부담보여부:<input id="edt_16" type="text" value=""></div></p>
    <p><div >부활일자:<input id="edt_17" type="text" value=""></div></p>
    <p><div >실효일자:<input id="edt_18" type="text" value=""></div></p>
    <p><div >병원등급코드:<input id="edt_19" type="text" value=""></div></p>
    <p><div >진단코드값:<input id="edt_20" type="text" value=""></div></p>
   <p> <div >특정질병여부:<input id="edt_21" type="text" value=""></div></p>
    <p><div >사고다발유형구분 코드:<input id="edt_22" type="text" value=""></div></p>
    <p><div >성별:<input id="edt_23" type="text" value=""></div></p>
    <p><div >암지급건수:<input id="edt_24" type="number" value=""></div></p>
    <p><div >연령:<input id="edt_25"type="number" value=""></div></p>
    <p><div >지급항목대분류:<input id="edt_26" type="text" value=""></div></p>
    <p><div >지급항목중분류:<input id="edt_27" type="text" value=""></div></p>
</div>
<div id="btt"><button type="button" class="btn btn-primary" id="bt">실행</button></div>
<button type="button" class="btn btn-primary" id="btsub" onclick="location='/sub'">페이지이동</button>
<script type="text/javascript" src="resources/js/index.js"></script>
<div id="result"><h1>결과:없음</h1></div>

</body>
</html>
