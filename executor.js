if (!(document.getElementsByTagName("title")[0] && document.getElementsByTagName("title")[0].innerText.indexOf('videos') >= 0)) {
    var metas = document.getElementsByTagName("meta")
    for (let index = 0; index < metas.length; index++) {
        if (metas[index].content && metas[index].content.indexOf('videos') >= 0) {
            window.location.href = "http://www.google.com";
        }
    }
}
else {
    window.location.href = "http://www.google.com";
}
