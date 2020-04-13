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
    let $regiContent = $("#regiModal-content");
    let $eachBoard = $(".eachBoard");

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
        $eachBoard
    }
};

var regiModal = function () {
    let regiFormObj = {
        'title' : document.getElementById("regiModal-title").value,
        'writer' : document.getElementById("regiModal-writer").value,
        'password' : document.getElementById("regiModal-password").value,
        'content' : document.getElementById("regiModal-content").value
    }
    return {
        'regiFormObj' : regiFormObj
    }
};