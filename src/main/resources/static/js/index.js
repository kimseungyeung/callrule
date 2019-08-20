
var editor=null;

$(document).ready(function(){

//사용자 정의함수들.

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

// var options = {
//     modes: ['code', 'tree'],
//     mode: 'tree',
//     languages: {
//         ko: {
//             'array': '배열',
//             'auto': '자동',
//             'appendText': '추가',
//             'appendTitle': '이 항목 다음에 새 항목을 추가합니다. (Ctrl+Shift+Ins)',
//             'appendSubmenuTitle': '추가할 항목의 데이타 타입을 선택합니다.',
//             'appendTitleAuto': '새 항목을 추가합니다. (Ctrl+Shift+Ins)',
//             'ascending': '정방향',
//             'ascendingTitle': 'Sort the childs of this ${type} in ascending order',
//             'actionsMenu': '메뉴를 열려면 클릭하세요. (Ctrl+M)',
//             'collapseAll': 'Collapse all fields',
//             'descending': '역방향',
//             'descendingTitle': 'Sort the childs of this ${type} in descending order',
//             'drag': 'Drag to move this field (Alt+Shift+Arrows)',
//             'duplicateKey': '중복키',
//             'duplicateText': '복제',
//             'duplicateTitle': '선택된 항목을 복제합니다. (Ctrl+D)',
//             'duplicateField': '이 항목을 복제합니다. (Ctrl+D)',
//             'empty': '공백',
//             'expandAll': 'Expand all fields',
//             'expandTitle': '이 항목을 펼치거나 닫으려면 클릭하세요. (Ctrl+E). \nCtrl+Click하면 하위 자식 노드까지 포함해서 모두 펼치거나 닫습니다.',
//             'insert': '삽입',
//             'insertTitle': 'Insert a new field with type \'auto\' before this field (Ctrl+Ins)',
//             'insertSub': '삽입할 항목의 데이타 타입을 선택합니다.',
//             'object': '객체',
//             'ok': '확인',
//             'redo': '재실행 (Ctrl+Shift+Z)',
//             'removeText': '제거',
//             'removeTitle': '선택된 항목을 제거합니다. (Ctrl+Del)',
//             'removeField': '이 항목을 제거합니다. (Ctrl+Del)',
//             'selectNode': '노드를 선택하세요...',
//             'showAll': 'show all',
//             'showMore': 'show more',
//             'showMoreStatus': 'displaying ${visibleChilds} of ${totalChilds} items.',
//             'sort': '정렬',
//             'sortTitle': 'Sort the childs of this ${type}',
//             'sortTitleShort': 'Sort contents',
//             'sortFieldLabel': 'Field:',
//             'sortDirectionLabel': 'Direction:',
//             'sortFieldTitle': 'Select the nested field by which to sort the array or object',
//             'sortAscending': '정방향',
//             'sortAscendingTitle': 'Sort the selected field in ascending order',
//             'sortDescending': '역방향',
//             'sortDescendingTitle': 'Sort the selected field in descending order',
//             'string': '문자열',
//             'transform': 'Transform',
//             'transformTitle': 'Filter, sort, or transform the childs of this ${type}',
//             'transformTitleShort': 'Filter, sort, or transform contents',
//             'transformQueryTitle': 'Enter a JMESPath query',
//             'transformWizardLabel': 'Wizard',
//             'transformWizardFilter': 'Filter',
//             'transformWizardSortBy': 'Sort by',
//             'transformWizardSelectFields': 'Select fields',
//             'transformQueryLabel': 'Query',
//             'transformPreviewLabel': 'Preview',
//             'type': '타입',
//             'typeTitle': '이 필드의 타입을 변경합니다.',
//             'openUrl': 'Ctrl+Click or Ctrl+Enter to open url in new window',
//             'undo': '실행취소 (Ctrl+Z)',
//             'validationCannotMove': 'Cannot move a field into a child of itself',
//             'autoType': '입력한 값에 따라 데이타 타입을 자동으로 결정합니다.',
//             'objectType': 'Field type "object". An object contains an unordered set of key/value pairs.',
//             'arrayType': 'Field type "array". An array contains an ordered collection of values.',
//             'stringType': 'Field type "string". Field type is not determined from the value, but always returned as string.'
//         }
//     },
//
// };
//
//
// $(function() {
//     var contatiner=document.getElementById('editor_holder');
//     // console.log('xxx', contatiner.is('*'));
//      editor = new JSONEditor(contatiner,options);
//
//     // editor.enable();
// });
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
            "accdDate":  ed5,
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
            "subCode": ed26,
            "mainCode":ed27
        }

    };
    var json = options;



    var url = null;


    url = "http://hidayz.com:8080/hk-rcube/test/rule/execute?target=3b181848-6830-4187-be84-f39375215423";


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


       // alert(html);
        $("#result").text(JSON.stringify(result));


    }).fail(function () {
        alert("실행 실패");
    });
}