var item = function () {
    let $tbody = $('tbody');
    let $pageUl = $('.pagination');
    let $prevBtn = $("#zero_config_previous");
    let $nextBtn = $("#zero_config_next");
    let $pageNumbers = $(".each-number");
    let $registerBoardBtn = $("#regiModal-registerBtn");
    let $regiTitle = $("#regiModal-title");
    let $regiWriter = $("#regiModal-writer");
    let $regiPassword = $("#regiModal-password");
    let $regiContent = $("#regiModal-content")
    let $readTitle = $("#readModal-title");
    let $readContent = $("#readModal-content");
    let $readWriter = $("#readModal-writer");
    let $readPassword = $("#passwordArea");
    let $readPasswordInput = $("#readModal-password");

    let $eachBoard = $(".eachBoard");

    let $readBoardModal = $("#ReadBoardModal");
    let $modiBtnInReadModal = $("#readModal-modiBtn");
    let $deleteBtnInReadModal = $("#readModal-deleteBtn");
    let $finalUpdateBtnInReadModal = $("#readModal-updateBtn");
    let $passwordInputModal = $("#passwordInputModal");
    let $passwordModalTitle = $("#password-modal-title");
    let $pwForAuthCheck = $("#pwForAuthCheck");



    return {
        $tbody,
        $pageUl,
        $pageNumbers,
        $prevBtn,
        $nextBtn,
        $registerBoardBtn,
        $regiTitle,
        $regiWriter,
        $regiPassword,
        $regiContent,
        $readTitle,
        $readContent,
        $readWriter,
        $readPassword,
        $readPasswordInput,
        $eachBoard,
        $readBoardModal,
        $modiBtnInReadModal,
        $deleteBtnInReadModal,
        $finalUpdateBtnInReadModal,
        $passwordInputModal,
        $passwordModalTitle,
        $pwForAuthCheck

    }
};

var modalForm = function () {
    let regiFormObj = {
        'title' : document.getElementById("regiModal-title").value,
        'writer' : document.getElementById("regiModal-writer").value,
        'password' : document.getElementById("regiModal-password").value,
        'content' : document.getElementById("regiModal-content").value
    }
    let readFormObj = {
        'bno': staticSelectedBoard,
        'title': document.getElementById("readModal-title").value,
        'writer': document.getElementById("readModal-writer").value,
        'password': document.getElementById("readModal-password").value,
        'content': document.getElementById("readModal-content").value
    }


    return {
        'regiFormObj' : regiFormObj,
        'readFormObj' : readFormObj
    }
};