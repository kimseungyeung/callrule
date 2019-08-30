
var editor=null;

$(document).ready(function(){

//외부서버와 ajax 통신하기 위해서는 서버에 해당 콘트롤러에 crossorigin 설정을 해줘야함 @CROSSORIGIN
    //그리고 만약 로그인이 필요한 컨텐츠라면 SECURITY 항목에 해당 콘트롤러를 누구나 접근가능하게 보안을 풀어놓아야함
    url = "http://localhost:8181/rcube/test/rule/getslist";


    console.log(url);


    $.ajax({
        url: url,
        type: "GET",
        processData: false,
        dataType: "json",
    }).always(function () {


    }).done(function (result) {
        var count =0;
        $.each(result,function (name,value) {
            $("#select").append("<option value='"+value+"'>"+name+"</option>");


        });


    }).fail(function () {
        alert("실행 실패");
    });

    $("#bt").click(function () {
        test();
    });



 $('.name').text("룰 호출 데이터 입력");

});
var udd = "http://localhost:8080/test";
document.addEventListener("paste", function(e) {
    e.preventDefault();

    var x = $(e.target).is("edit_holder");

    if (!x) {
        e.stopPropagation();
        var index=0;
        var text = e.clipboardData.getData("text/plain");
        var json = $.parseJSON(text);
        var dd=Object.keys(json).length;
        $.each(json,function (key,value) {
            var k= key;
            var ff= json[key];
            $.each(ff,function (key1,value1) {
                index++;
                var k1=key1;
                var v1=value1;
                var name='#edt_'+(index);
                $(name).val(v1);


            })
        }); {

        }
    }
});


function test() {
    var ed1 =parseInt($('#edt_1').val());
    var ed2 =$('#edt_2').val();
    var ed3 =parseInt($('#edt_3').val());
    var ed4 =parseInt($('#edt_4').val());
    var ed5 =$('#edt_5').val();
    var ed6 =$('#edt_6').val();
    var ed7 =parseInt($('#edt_7').val());
    var ed8 =$('#edt_8').val();
    var ed9 =$('#edt_9').val();
    var ed10 =parseInt($('#edt_10').val());
    var ed11 =$('#edt_11').val();
    var ed12 =parseInt($('#edt_12').val());
    var ed13 =$('#edt_13').val();
    var ed14 =$('#edt_14').val();
    var ed15 =$('#edt_15').val();
    var ed16 =$('#edt_16').val();
    var ed17 =$('#edt_17').val();
    var ed18 =$('#edt_18').val();
    var ed19 =$('#edt_19').val();
    var ed20 =$('#edt_20').val();
    var ed21 =$('#edt_21').val();
    var ed22 =$('#edt_22').val();
    var ed23 =$('#edt_23').val();
    var ed24 =parseInt($('#edt_24').val());
    var ed25 =parseInt($('#edt_25').val());
    var ed26 =$('#edt_26').val();
    var ed27 =$('#edt_27').val();

    var options={
        "Claim": {
            "otherMoney2": ed1,
            "country": ed2,
            "otherMoney": ed3,
            "my_Money": ed4,
            "accddate":  ed5,
            "hspStDt": ed6,
            "count":  ed7,
            "hspEndDt":  ed8,
            "clmDt": ed9,
            "money": ed10,
            "ss":  ed11,
            "money1y": ed12
        },"Contract":{
            "pgCode":ed13,
            "code":  ed14,
            "type":  ed15,
            "sss":  ed16,
            "sdff":  ed17,
            "sss1":  ed18
        },"Diagnosis":{
            "hspCode": ed19,
            "code":  ed20,
            "yn":  ed21
        },"Insured":{
            "sss":  ed22,
            "sex":  ed23,
            "cancer":  ed24,
            "age": ed25
        }, "Pay":{
            "subcode": ed26,
            "mainCode":ed27
        }

    };
    var json = options;



    var url = null;
    var selvalue=$('#select').val();

    url = "http://localhost:8181/rcube/test/rule/execute?code="+selvalue;


    console.log(url);


    $.ajax({
        url: url,
        type: "POST",
        contentType: "text/plain",
        processData: false,
        data: JSON.stringify(json),
        dataType: "json",
    }).always(function () {


    }).done(function (result) {
        var text="";
        var index=Object.keys(result).length;

        $.each(result,function (key2,value2) {
            index--;
            var ff = result[index];
            text += key2+":"+JSON.stringify(ff) +"\n";

        });
       // alert(html);
        $("#result").text(text);
        $("#result").css("color","white");
        $("#result").css("font-size",20);

    }).fail(function () {
        alert("실행 실패");
    });
}