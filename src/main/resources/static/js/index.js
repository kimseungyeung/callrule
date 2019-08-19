
var editor=null;
$(document).ready(function(){

//사용자 정의함수들.

    $("#bt").click(function () {
        test();
    });



 $('.name').text("dddfsdfdsf");

});
var udd = "http://localhost:8080/test";
document.addEventListener("paste", function(e) {
    e.preventDefault();

    var x = $(e.target).is("input");

    if (!x) {
        e.stopPropagation();

        var text = e.clipboardData.getData("text/plain");
        var json = $.parseJSON(text);
        editor.set(json);

    }
});

var options = {
    modes: ['code', 'tree'],
    mode: 'tree',
    languages: {
        ko: {
            'array': '배열',
            'auto': '자동',
            'appendText': '추가',
            'appendTitle': '이 항목 다음에 새 항목을 추가합니다. (Ctrl+Shift+Ins)',
            'appendSubmenuTitle': '추가할 항목의 데이타 타입을 선택합니다.',
            'appendTitleAuto': '새 항목을 추가합니다. (Ctrl+Shift+Ins)',
            'ascending': '정방향',
            'ascendingTitle': 'Sort the childs of this ${type} in ascending order',
            'actionsMenu': '메뉴를 열려면 클릭하세요. (Ctrl+M)',
            'collapseAll': 'Collapse all fields',
            'descending': '역방향',
            'descendingTitle': 'Sort the childs of this ${type} in descending order',
            'drag': 'Drag to move this field (Alt+Shift+Arrows)',
            'duplicateKey': '중복키',
            'duplicateText': '복제',
            'duplicateTitle': '선택된 항목을 복제합니다. (Ctrl+D)',
            'duplicateField': '이 항목을 복제합니다. (Ctrl+D)',
            'empty': '공백',
            'expandAll': 'Expand all fields',
            'expandTitle': '이 항목을 펼치거나 닫으려면 클릭하세요. (Ctrl+E). \nCtrl+Click하면 하위 자식 노드까지 포함해서 모두 펼치거나 닫습니다.',
            'insert': '삽입',
            'insertTitle': 'Insert a new field with type \'auto\' before this field (Ctrl+Ins)',
            'insertSub': '삽입할 항목의 데이타 타입을 선택합니다.',
            'object': '객체',
            'ok': '확인',
            'redo': '재실행 (Ctrl+Shift+Z)',
            'removeText': '제거',
            'removeTitle': '선택된 항목을 제거합니다. (Ctrl+Del)',
            'removeField': '이 항목을 제거합니다. (Ctrl+Del)',
            'selectNode': '노드를 선택하세요...',
            'showAll': 'show all',
            'showMore': 'show more',
            'showMoreStatus': 'displaying ${visibleChilds} of ${totalChilds} items.',
            'sort': '정렬',
            'sortTitle': 'Sort the childs of this ${type}',
            'sortTitleShort': 'Sort contents',
            'sortFieldLabel': 'Field:',
            'sortDirectionLabel': 'Direction:',
            'sortFieldTitle': 'Select the nested field by which to sort the array or object',
            'sortAscending': '정방향',
            'sortAscendingTitle': 'Sort the selected field in ascending order',
            'sortDescending': '역방향',
            'sortDescendingTitle': 'Sort the selected field in descending order',
            'string': '문자열',
            'transform': 'Transform',
            'transformTitle': 'Filter, sort, or transform the childs of this ${type}',
            'transformTitleShort': 'Filter, sort, or transform contents',
            'transformQueryTitle': 'Enter a JMESPath query',
            'transformWizardLabel': 'Wizard',
            'transformWizardFilter': 'Filter',
            'transformWizardSortBy': 'Sort by',
            'transformWizardSelectFields': 'Select fields',
            'transformQueryLabel': 'Query',
            'transformPreviewLabel': 'Preview',
            'type': '타입',
            'typeTitle': '이 필드의 타입을 변경합니다.',
            'openUrl': 'Ctrl+Click or Ctrl+Enter to open url in new window',
            'undo': '실행취소 (Ctrl+Z)',
            'validationCannotMove': 'Cannot move a field into a child of itself',
            'autoType': '입력한 값에 따라 데이타 타입을 자동으로 결정합니다.',
            'objectType': 'Field type "object". An object contains an unordered set of key/value pairs.',
            'arrayType': 'Field type "array". An array contains an ordered collection of values.',
            'stringType': 'Field type "string". Field type is not determined from the value, but always returned as string.'
        }
    },

};


$(function() {
    var contatiner=document.getElementById('editor_holder');
    // console.log('xxx', contatiner.is('*'));
     editor = new JSONEditor(contatiner,options);

    // editor.enable();
});
function test(e) {
    var json = editor.get();



    var url = null;


    url = "http://hidayz.com/rcube/api/rule/generic/execute?target=3b181848-6830-4187-be84-f39375215423";

    console.log(url);


    $.ajax({
        url: url,
        type: "POST",
        contentType: "text/plain",
        processData: false,
        data: JSON.stringify(json),
        dataType: "text",
    }).always(function () {


    }).done(function (html) {


        alert(html);
        var hh =html.replace("룰 흐름도","");
        hh.replace("메인플로우","");
        hh.replace("시작","");
        hh.replace("룰","");
        hh.replace("종료","");
        $("#result").html(hh);
        $('#result').width(1000);
        $('#result').height(500);

    }).fail(function () {
        alert("실행 실패");
    });
}