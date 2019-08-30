$(document).ready(function() {
    //window.ctx="";
    $('#pagemove').on('click', function (e) {
        alert('서브2로 이동함');
       // window.location.href = window.ctx+ '/sub2';

       // $('#maintext').load('/sub2 #maintext2');
        var dd=$('input').val().toString();
        //get방식 데이터 전달
      //  location.href='/sub2?k='+dd;
        //post 방식 데이터 전달
        var form=document.createElement('form');
        var obj;
        obj=document.createElement('input');
        obj.setAttribute('type','hidden');
        obj.setAttribute('name','k');
        obj.setAttribute('value',dd);
        form.appendChild(obj);
        obj=document.createElement('input');
        obj.setAttribute('type','hidden');
        obj.setAttribute('name','j');
        obj.setAttribute('value',dd);
        form.appendChild(obj);

        form.setAttribute('method','post');
        form.setAttribute('action','/sub2');
        document.body.appendChild(form);
        form.submit();
        // $.post('/sub2',{k:'dsfs'},function (data) {
        //     alert(data);
        // })
    });

});