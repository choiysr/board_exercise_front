function makeBoardListTag(data) {
    let tagString = '<tr>';
    // 등록일 월도,시간 한자릿수 계산해서 0 추가해주기
    data.forEach(board => {
        tagString+='<td>'+board.bno+'</td><td>'+board.writer+'</td><td>'+board.title+'</td><td>'
            +board.regdate.year+'.'+board.regdate.monthValue+'.'+board.regdate.dayOfMonth+'  '+board.regdate.hour+':'+board.regdate.minute
            +'</td><td>'+board.views+'</td></tr>';
    })
    return tagString;
}

function makeBoardPageliTag(data) {
    console.log(data);
    let tagString = '<li class="page-item" id="zero_config_previous">';
    tagString += '<a href="#" aria-controls="zero_config" class="page-link" onclick="movePage(\'prev\')"><</a></li>';
    let tmpString = '';
    for(let i=data.startPage;i<=data.endPage;i++){
        tmpString += '<li class="page-item each-number"><a href="#" onclick="movePage('+i+');" aria-controls="zero_config" data-dt-idx="'+i+'" tabindex="0" class="page-link each_page">'+i+'</a></li>';
    }
    tagString += tmpString;
    tagString += '<li class="page-item" id="zero_config_next">';
    tagString += '<a href="#" aria-controls="zero_config" class="page-link" onclick="movePage(\'next\')">></a></li>';
    return tagString;
}




