function getts() {
    const date = new Date()
    const str = date.getTime()
    return str.toString()
}

function correct(n) {
    return n > 9 ? n : "0" + n
}

function formatTime_yyyyMMdd(time) {
    let date = new Date(time * 1000)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let d = date.getDate()
    let result = year + "-" + correct(month) + "-" + correct(d)
    return result
}

function base64ToBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
        type: mimeString
    });
}

function base64ToFile(data) {

    // 将base64 的图片转换成file对象上传 atob将ascii码解析成binary数据
    let binary = atob(data.split(',')[1]);
    let mime = data.split(',')[0].match(/:(.*?);/)[1];
    // console.log(mime,'mime')
    let array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    let fileData = new Blob([new Uint8Array(array)], {
        type: mime,
    });
    // console.log(fileData,'fileData')
    let file = new File([fileData], `${new Date().getTime()}.jpg`, {
        type: mime
    });

    return file;

}
export default {
    getts,
    correct,
    formatTime_yyyyMMdd,
    base64ToBlob,
    base64ToFile
}