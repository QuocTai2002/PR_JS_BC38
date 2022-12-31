// tạo danh sách điện thoại
var productList = [];

// call
async function fetchProductList() {
  productList = [];

  var promise = productsService.fetchProduct();

  try {
    var data = await promise;
    productList = data.data;
  } catch {
    alert("Không có dữ liệu");
  }
}
window.onclick = function (){
  fetchProductList();
  console.log(productList);
}


function renderProductsList(data) {
  data = data || productList;

  var html = "";

  for (var i = 0; i < data.length; i++) {
    html += `
                    <div class="col-3 row justify-content-center item-products">
                          <div>${`<img src ="${data[i].img}" class="img">`}</div>
                          <div class="fs-3 text-danger  text-center mt-3">${
                            data[i].name
                          }</div>
                          <div class="fs-4  text-center mt-3">${
                            data[i].price + "đ"
                          }</div>
                          <div class="spacing-btn mt-3">
                          <button class="buy btn btn-light text-center"> Mua ngay </button>
                          <button class="shopping-cart btn btn-light text-center" onclick="addCart(${data[i].id})">Thêm vào giỏ</button>
                          </div>
                          <div class="mt-3">${data[i].info}</div>
                          <div></div>
                    </div>
              `;
  }
  document.getElementById("show-products").innerHTML = html;
}

function renderMobileList(data) {
  data = data || productList;

  var html = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === "Điện Thoại") {
      html += `
                    <div class="col-3 row justify-content-center item-products">
                          <div>${`<img src ="${data[i].img}" class="img">`}</div>
                          <div class="fs-3 text-danger  text-center mt-3">${
                            data[i].name
                          }</div>
                          <div class="fs-4  text-center mt-3">${
                            data[i].price + "đ"
                          }</div>
                          <div class="spacing-btn mt-3">
                          <button class="buy btn btn-light text-center"> Mua ngay </button>
                          <button class="shopping-cart btn btn-light text-center ">Thêm vào giỏ</button>
                          </div>
                          <div class="mt-3">${data[i].info}</div>
                          <div></div>
                    </div>
              `;
    }
  }
  document.getElementById("show-products-mobile").innerHTML = html;
}

function renderClockList(data) {
  data = data || productList;

  var html = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === "Đồng hồ") {
      html += `
                    <div class="col-3 row justify-content-center item-products">
                          <div>${`<img src ="${data[i].img}" class="img">`}</div>
                          <div class="fs-3 text-danger  text-center mt-3">${
                            data[i].name
                          }</div>
                          <div class="fs-4  text-center mt-3">${
                            data[i].price + "đ"
                          }</div>
                          <div class="spacing-btn mt-3">
                          <button class="buy btn btn-light text-center"> Mua ngay </button>
                          <button class="shopping-cart btn btn-light text-center ">Thêm vào giỏ</button>
                          </div>
                          <div class="mt-3">${data[i].info}</div>
                          <div></div>
                    </div>
              `;
    }
  }
  document.getElementById("show-products-clock").innerHTML = html;
}
function renderAccessoryList(data) {
  data = data || productList;

  var html = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === "Phụ Kiện") {
      html += `
                    <div class="col-3 row justify-content-center item-products">
                          <div>${`<img src ="${data[i].img}" class="img">`}</div>
                          <div class="fs-3 text-danger  text-center mt-3">${
                            data[i].name
                          }</div>
                          <div class="fs-4  text-center mt-3">${
                            data[i].price + "đ"
                          }</div>
                          <div class="spacing-btn mt-3">
                          <button class="buy btn btn-light text-center"> Mua ngay </button>
                          <button class="shopping-cart btn btn-light text-center ">Thêm vào giỏ</button>
                          </div>
                          <div class="mt-3">${data[i].info}</div>
                          <div></div>
                    </div>
              `;
    }
  }
  document.getElementById("show-products-accessory").innerHTML = html;
}
function renderTabletList(data) {
  data = data || productList;

  var html = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === "Tablet") {
      html += `
                    <div class="col-3 row justify-content-center item-products">
                          <div>${`<img src ="${data[i].img}" class="img">`}</div>
                          <div class="fs-3 text-danger  text-center mt-3">${
                            data[i].name
                          }</div>
                          <div class="fs-4  text-center mt-3">${
                            data[i].price + "đ"
                          }</div>
                          <div class="spacing-btn mt-3">
                          <button class="buy btn btn-light text-center"> Mua ngay </button>
                          <button class="shopping-cart btn btn-light text-center ">Thêm vào giỏ</button>
                          </div>
                          <div class="mt-3">${data[i].info}</div>
                          <div></div>
                    </div>
              `;
    }
  }
  document.getElementById("show-products-tablet").innerHTML = html;
}
function renderLaptopList(data) {
  data = data || productList;
  var html = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === "laptop") {
      html += `
                    <div class="col-3 row justify-content-center item-products">
                          <div>${`<img src ="${data[i].img}" class="img">`}</div>
                          <div class="fs-3 text-danger  text-center mt-3">${
                            data[i].name
                          }</div>
                          <div class="fs-4  text-center mt-3">${
                            data[i].price + "đ"
                          }</div>
                          <div class="spacing-btn mt-3">
                          <button class="buy btn btn-light text-center"> Mua ngay </button>
                          <button class="shopping-cart btn btn-light text-center  onclick="addCart(${data[i].id})" ">Thêm vào giỏ</button>
                          </div>
                          <div class="mt-3">${data[i].info}</div>
                          <div></div>
                    </div>
              `;
    }
  }
  document.getElementById("show-products-laptop").innerHTML = html;
}
function renderPcList(data) {
  data = data || productList;

  var html = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === "Máy Tính PC") {
      html += `
                    <div class="col-3 row justify-content-center item-products">
                          <div>${`<img src ="${data[i].img}" class="img">`}</div>
                          <div class="fs-3 text-danger  text-center mt-3">${
                            data[i].name
                          }</div>
                          <div class="fs-4  text-center mt-3">${
                            data[i].price + "đ"
                          }</div>
                          <div class="spacing-btn mt-3">
                          <button class="buy btn btn-light text-center"> Mua ngay </button>
                          <button class="shopping-cart btn btn-light text-center ">Thêm vào giỏ</button>
                          </div>
                          <div class="mt-3">${data[i].info}</div>
                          <div></div>
                    </div>
              `;
    }
  }
  document.getElementById("show-products-pc").innerHTML = html;
}

