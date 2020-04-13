const ajaxService = (function () {
    function getAjax(url, data, success, fail) {
        excuteAjax("GET", url, data, success, fail)
    }

    function getAjaxExceptedtData(url, success, fail) {
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
        }).done(function (result) {
            success(result)
        })
    }

    function postAjax(url, data, success, fail) {
        excuteAjax("POST", url, data, success, fail)
    }

    function deleteAjax(url, data, success, fail) {
        excuteAjax("DELETE", url, data, success, fail)
    }

    function putAjax(url, data, success, fail) {
        excuteAjax("PUT", url, data, success, fail)
    }

    function excuteAjax(type, url, data, success, fail) {
        $.ajax({
            type: type,
            url: url,
            data: JSON.stringify(data),
            contentType: 'application/json',
            dataType: 'json',
            success : success,
            error : fail

        })
    }

    return {getAjax, getAjaxExceptedtData, postAjax, deleteAjax, putAjax}

})();

class URL {
    constructor(commonURL) {
        this.commonURL = commonURL
    }

    get(value) {
        return this.commonURL + value
    }
}


