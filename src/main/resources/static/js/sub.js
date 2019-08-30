$(document).ready(function() {
    //window.ctx="";
    $('#pagemove').on('click', function (e) {
        alert('서브2로 이동함');
       // window.location.href = window.ctx+ '/sub2';

        $('#maintext').load('/sub2');
    });

});