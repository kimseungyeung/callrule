$(document).ready(function(){

//사용자 정의함수들.

    $("#bt").click(function () {
        var text=$('#edit').val();
        var value=$('#edit2').val();
       // alert(text);
        test(text,value);
    });



 $('.name').text("dddfsdfdsf");

});
var udd = "http://localhost:8080/test";
var udd2 = "http://localhost:8080/test2";
function test(dd,ff) {
    $.ajax({
        type:"POST",
        url:udd,
        data:{
            k:dd
        },

        datatype:"json",
        success:function(t){

                alert(t);

        },error:function(){
         alert("연결실패");
        }
    })}
