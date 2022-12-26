var ProductList = [];

function createsProducts() {
  var id;
  var Name = document.getElementById("inputGroupSelect01").value;
  var price = document.getElementById("txtPrice").value;
  var img = document.getElementById("txtImg").value;
  var type = document.getElementById("inputGroupSelect02").value;
  var info = document.getElementById("floatingTextarea2").value;
  var Product = new Products(id, Name, price, img, type, info);
  axios({
    url: "https://63960758a68e43e418f8d85c.mockapi.io/card",
    method: "POST",
    data: Product,
  })
    .then(function (res) {
      fetchStudentList();
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function fetchStudentList() {
  axios({
    url: "https://63960758a68e43e418f8d85c.mockapi.io/card",
    method: "GET",
  })
    .then(function (res) {
      ProductList = mapStaffList(res.data);
      renderStudent();
    })
    .catch(function (err) {
      console.log("erro", err);
    });
}
//
function mapStaffList(local) {
  var result = [];
  for (i = 0; i < local.length; i++) {
    var oldStaff = local[i];
    var newStaff = new Products(
      oldStaff.id,
      oldStaff.name,
      oldStaff.price,
      oldStaff.img,
      oldStaff.type,
      oldStaff.info
    );
    result.push(newStaff);
  }
  return result;
}

window.onload = function () {
  fetchStudentList();
};
function deleteStudent(id) {
  
  fetchStudentList();
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed){
      axios({
        url: "https://63960758a68e43e418f8d85c.mockapi.io/card/" + id,
        method: "DELETE",
      })
      .then(function(res){
        fetchStudentList();
      })
      .catch(function(){
      });
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
}
