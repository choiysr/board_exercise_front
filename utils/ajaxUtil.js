const ajaxService = (function () {
    function getAjax(url, data, success, fail) {
        excuteAjax("GET", url, data, success, fail)
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
            contentType: "application/json",
            data, data,
            success: success,
            fail: fail
        })
    }

    return {getAjax, postAjax, deleteAjax, putAjax}

})();

class URL {
    constructor(commonURL) {
        this.commonURL = commonURL
    }

    get(value) {
        return this.commonURL + value
    }
}