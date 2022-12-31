// ######## RENDER SẢN PHẨM ########
function renderCart() {
  if (!checkCart()) return;
  var tableMain = `
  <table class="table">
          <thead>
            <tr>
              <th scope="col" colspan="2">Sản Phẩm</th>
              <th scope="col">Đơn Giá</th>
              <th scope="col">Số Lượng</th>
              <th scope="col">Số Tiền</th>
              <th scope="col">Thao Tác</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="tbGioHang"></tbody>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">tổng thanh toán</th>
              <th scope="col" id="thsp"></th>
              <th scope="col" id="total"></th>
              <th scope="col">
                <button class="btn btn-success" type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
                  Thanh Toán
                </button>
              </th>
            </tr>
          </thead>
        </table>`;
  document.getElementById("TableContainer").innerHTML = tableMain;
  var html = "";
  for (i = 0; i < cartList.length; i++) {
    var money = +cartList[i].Product.price * cartList[i].quantity;
    totalMoney += money;
    html += `<tr>
                <td><img src="${cartList[i].Product.img}" alt=""></td>
                <td><b>${cartList[i].Product.name} ${cartList[i].Product.type}:</b> ${cartList[i].Product.info}</td>
                 <td>${cartList[i].Product.price}đ</td>
                 <td>
                <button class="btn btn-success"  onclick="addCart(${cartList[i].Product.id})">
                <i class="las la-plus"></i></button>
                 ${cartList[i].quantity}
                <button class="btn btn-success" onclick="changeQuantityMinus(${cartList[i].Product.id})">
                <i class="las la-minus" ></i></button>
                 </td>
                <td>${money}đ</td>
                <td> <button class=" btn btn-danger"  onclick="demo(${cartList[i].Product.id})">Xóa <i class="fa fa-trash-alt"></i></button></td>
            </tr> `;
  }
  document.getElementById("sumPay").innerHTML = totalMoney + " Đ";
  document.getElementById("total").innerHTML = totalMoney + " Đ";
  document.getElementById("thsp").innerHTML = cartList.length + " Sản phẩm";
  document.getElementById("tbGioHang").innerHTML = html;
}
// ######### RENDER CART TRỐNG ########
function renderEmptyCart() {
  document.getElementById("backHome").innerHTML = ` 
    <h2>Chưa có Sản phẩm trong giỏ hàng quay lại mua sắm </h2>
    <a href="../index.html"><i class="fa fa-home"> Home</i></a>`;
}



