$(document).ready(function() {
    //window.ctx="";
    $('#pagemove2').on('click', function (e) {
        alert('서브2입니다.');
       // window.location.href = window.ctx+ '/sub2';
      // $('#maintext2').load('/sub3');
        $.ajax({
            url: '/sub3',
            type: "GET",
            dataType: "text",
        }).done(function (result) {
            $('#maintext2').html(result)
        });

});

});
function f() {
    alert('ddd');
}