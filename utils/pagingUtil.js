// 하단의 페이지 리스트 클릭시 해당 페이지의 글 목록을 가져오고 페이지 리스트를 재조정하는 function
function movePage(pageNum) {
    let currentPage = pageNum;
    if (currentPage == 'prev') {
        currentPage = staticCurrPage - 1
    } else if (currentPage == 'next') {
        currentPage = staticCurrPage + 1
    }
    ajaxService.getAjax(API_Server.commonURL + "list/" + currentPage, "", success)

    function success(data) {
        staticCurrPage = currentPage;
        items.$tbody.html(makeBoardListTag(data.list));
        $('.pagination').html(makeBoardPageliTag(data, currentPage));
        if (data.prev == false) {
            console.log("false!!")
            items.$prevBtn.addClass('disabled')
            $("#zero_config_previous").addClass('disabled')
            console.log(items.$prevBtn)
        }
        if (data.next == false) {
            items.$nextBtn.addClass('disabled')
        }
    }
}

// 첫 로딩시 실행되는 함수. 페이지를 로드 & 하단 페이징
function firstLoading() {
    console.log("---");
    ajaxService.getAjax(API_Server.commonURL + "list/1", "", success)

    function success(data) {
        console.log("---");
        items = item();
        console.log("firstLoading.....")
        staticCurrPage = 1;
        items.$tbody.html(makeBoardListTag(data.list));
        items.$pageUl.html(makeBoardPageliTag(data, 1));
        items = item();
        items.$prevBtn.addClass('disabled')
        $("#zero_config_previous").addClass('disabled')
        if (data.next == false) {
            items.$nextBtn.addClass('disabled')
        }
    }

}

