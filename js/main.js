// tạo danh sách điện thoại
var mobileList = [];

// call
async function fetchMobileList() {
  mobileList = [];

  var promise = mobileService.fetchMobile();

  try{
    var data = await promise
    mobileList = data.data
    renderMobile()
  }catch{
    alert("Không có dữ liệu")
  }
}
fetchMobileList()

function renderMobile(data) {
  data = data || mobileList;

  var html = "";
  for (var i = 0; i < data.length; i++) {
    html += `<div>
                    <div>${data[i].img}</div>
                    <div>${data[i].name}</div>
                    <div>${data[i].price}</div>`;
  }
  document.getElementById("show-mobile").innerHTML = html;
}



