//########## check All #########
function checkBox(e) {
  checkboxes = document.getElementsByName("foo"); // gôm các ô checkbox bằng name
  for (var i = 0; i < checkboxes.length; i++) {//chạy vòng lập
    checkboxes[i].checked = e.checked; //và gán giá trị  checked của các ô = giá trị ô check tất cả
  }
}

