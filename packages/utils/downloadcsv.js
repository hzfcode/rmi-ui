function downloadFile(data, name) {
  if (!data) {
    this.$message.error('下载失败，解析数据为空！')
    return
  }
  // 创建一个新的url，此url指向新建的Blob对象
  let url = window.URL.createObjectURL(data)
  // let url = window.URL.createObjectURL(new Blob(['\uFEFF' +data]))
  // 创建a标签，并隐藏改a标签
  let link = document.createElement('a')
  link.style.display = 'none'
  // a标签的href属性指定下载链接
  link.href = url
  //setAttribute() 方法添加指定的属性，并为其赋指定的值。
  link.setAttribute('download', name)
  document.body.appendChild(link)
  link.click()
}
function downloadLink (link,filename){
	let DownloadLink = document.createElement('a'); 
    DownloadLink.style = 'display: none'; // 创建一个隐藏的a标签
    DownloadLink.download = filename;
    DownloadLink.href = link;
    document.body.appendChild(DownloadLink);
    DownloadLink.click(); // 触发a标签的click事件
    document.body.removeChild(DownloadLink);
}
function download(href, name) {
  let eleLink = document.createElement('a')
  eleLink.download = name
  eleLink.href = href
  eleLink.click()
  eleLink.remove()
}
function downloadImage(url, name) {
  let image = new Image()
  image.setAttribute('crossOrigin', 'anonymous')
  image.src = url
  image.onload = () => {
    let canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    let ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, image.width, image.height)
    canvas.toBlob((blob) => {
      let url = URL.createObjectURL(blob)
      download(url, name)
      // 用完释放URL对象
      URL.revokeObjectURL(url)
    })
  }
}
function downloadImage2(imgsrc, name) {//下载图片地址和图片名
  var image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

    var a = document.createElement("a"); // 生成一个a元素
    var event = new MouseEvent("click"); // 创建一个单击事件
    a.download = name || "photo"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = imgsrc;
}
export default {
  downloadLink:downloadLink,
  downloadurl:download,
  download: downloadFile,
  downloadImage,
  downloadImage2,
}