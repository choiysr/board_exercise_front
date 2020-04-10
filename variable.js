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
        $regiContent
    }
};