
// // #### onload #####
// window.onload = function () {
//   var cartListFormLocal = getLocal();
//   cartList = mapCartList(cartListFormLocal);
//   renderCart();
// };
// //map lại giỏ hàng 
// function mapCartList(local) {
//   var result = [];
//   for (i = 0; i < local.length; i++) {
//     result.push(local[i]);
//   }
//   return result;
// }
// var cartList = []; // mãng giỏ hàng
// // ######### THÊM SẢN PHẨM VÀO GIỎ HÀNG ###########
// function addCart(id) {
//   if (changeQuantity(id) === true) return;
//   for (i = 0; i < ProductList.length; i++) {
//     //chạy vòng lập lọc ra sản phẩm add vào
//     if (id === +ProductList[i].id) {
//       var Product = ProductList[i];
//       var cartItem = {
//         //gán giá trị sản phẩm với số lượng mặc định là 1
//         Product,
//         quantity: 1,
//       };
//     }
//   }
//   cartList.push(cartItem); //add sản phẩm vào danh sách giỏ hàng
//   saveLocal();
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: "Thêm vào giỏ hàng thành công",
//     showConfirmButton: false,
//     timer: 1500,
//   });
//   renderCart();
// }
// //######## KIỂM GIA VÀ TĂNG SỐ LƯỢNG SẢN PHẨM #########
// function changeQuantity(id) {
//   for (i = 0; i < cartList.length; i++) {
//     if (id === +cartList[i].Product.id) {
//       var number = cartList[i].quantity;
//       delete cartList[i].quantity;
//       cartList[i].quantity = number + 1;
//       saveLocal();
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Đã Thêm số lượng sản phẩm",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       renderCart();
//       return true;
//     }
//   }
// }
// //######## THAY ĐỔI SỐ LƯỢNG SẢN PHẦM #########
// function changeQuantityMinus(id) {
//   for (i = 0; i < cartList.length; i++) {
//     if ((id = cartList[i].Product.id)) {
//       var number = cartList[i].quantity;
//       if (number == 1) return alert("không thể giảm đơn hàng xuống 0");
//       delete cartList[i].quantity;
//       cartList[i].quantity = number - 1;
//       saveLocal();
//       renderCart();
//       return true;
//     }
//   }
// }
// // ####### TÌM VỊ TRÍ SẢN PHẨM TRONG GIỎ HÀNG ###########
// function findById(id) {
//   for (i = 0; i < cartList.length; i++) {
//     if (cartList[i].Product.id == id) console.log(cartList);
//     return i;
//   }
//   return -1;
// }
// //######## THANH TOÁN SẢN PHẨM #########

// function payment() {
//   saveLocal();
//   cartList = [];
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: "Thanh Toán Thành Công",
//     showConfirmButton: false,
//     timer: 1500,
//   }); // trả về thông tin điền vào mặt định
//   document.getElementById("TxtName").value = "";
//   document.getElementById("TxtAddr").value = "";
//   document.getElementById("TxtNu").value = ""
//   renderCart();
// }
// // ####### LƯU DỮ LIỆU VÀO LOCAL ###########
// function saveLocal() {
//   var cartListJason = JSON.stringify(cartList);
//   localStorage.setItem("SL", cartListJason);
// }
// // ######### MAP DỮ LIỆU DƯỚI LOCAL LÊN #########
// function getLocal() {
//   var cartListJason = localStorage.getItem("SL");
//   if (!cartListJason) return;
//   // chuyển từ json sang object
//   var staffListLocal = JSON.parse(cartListJason);
//   return staffListLocal;
// } 
// // ###### KIỂM TRA MÃNG TRONG GIỎ HÀNG ###########
// function checkCart (){
//   if(!cartList);
//   document.getElementById("backHome").classList.add("backHome");
//   renderEmptyCart();
// }
