// var ProductList = [];
// function fetchProductList() {
//   axios({
//     url: "https://63960758a68e43e418f8d85c.mockapi.io/card",
//     method: "GET",
//   })
//     .then(function (res) {
//       ProductList = mapProductList(res.data);
//     })
//     .catch(function (err) {
//       console.log("err", err);
//     });
// }
// function mapProductList(local) {
//   var result = [];
//   for (i = 0; i < local.length; i++) {
//     var oldStaff = local[i];
//     var newStaff = new Products(
//       oldStaff.id,
//       oldStaff.name,
//       oldStaff.price,
//       oldStaff.img,
//       oldStaff.type,
//       oldStaff.info
//     );
//     result.push(newStaff);
//   }
//   return result;
// }

// window.onload = function () {
//     fetchProductList();
// };
