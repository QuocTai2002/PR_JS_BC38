
// function createsProducts() {
//   var id;
//   var Name = document.getElementById("inputGroupSelect01").value;
//   var price = document.getElementById("txtPrice").value;
//   var img = document.getElementById("txtImg").value;
//   var type = document.getElementById("inputGroupSelect02").value;
//   var info = document.getElementById("floatingTextarea2").value;
//   var Product = new Products(id, Name, price, img, type, info);
//   axios({
//     url: "https://63960758a68e43e418f8d85c.mockapi.io/card",
//     method: "POST",
//     data: Product,
//   })
//     .then(function (res) {
//       fetchProductList();
//       console.log(res);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// var ProductList = [];
// async function fetProductList() {
//   ProductList = [];
//   document.getElementById("spiner").style.display = "block"
//   // call api backend => studentList
//   var promise = studentService.fetchStudents();
//   try {
    
//     var res = await promise;
//     document.getElementById("spiner").style.display = "none"
//     ProductList = mapProductList(res.data);
//     renderProduct();
//   } catch (err) {
//     console.log(err);
//   }
// }
// window.onload = async function () {
//   await fetProductList();
//   // console.log(ProductList);

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

// function renderProduct() {
//   var html = "";
//   for (i = 0; i < ProductList.length; i++) {
//     html += `<tr>
//         <td>${ProductList[i].id}</td>
//         <td>${ProductList[i].name}</td>
//         <td>${ProductList[i].price}</td>
//         <td> <img src="${ProductList[i].img}" alt=""></td>
//         <td>${ProductList[i].type}</td>
//         <td>${ProductList[i].info}</td>
//         <td> 
//                 <i class="fa fa-trash-alt"onclick="deleteStudent(${ProductList[i].id})" ></i>
//                 <i class="fa fa-edit"></i>
//         </td>
//       </tr>`;
//   }
//   document.getElementById("tblDanhSachSP").innerHTML = html;
// }

// function deleteStudent(id) {
//   fetchProductList();
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed){
//       axios({
//         url: "https://63960758a68e43e418f8d85c.mockapi.io/card/" + id,
//         method: "DELETE",
//       })
//       .then(function(res){
//         fetchStudentList();
//       })
//       .catch(function(){
//       });
//       Swal.fire("Deleted!", "Your file has been deleted.", "success");
//     }
//   });
// }
