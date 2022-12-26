function renderStudent() {
    var html = "";
    for (i = 0; i < ProductList.length; i++) {
      html += `<tr>
          <td>${ProductList[i].id}</td>
          <td>${ProductList[i].name}</td>
          <td>${ProductList[i].price}</td>
          <td> <img src="${ProductList[i].img}" alt=""></td>
          <td>${ProductList[i].type}</td>
          <td>${ProductList[i].info}</td>
          <td>
                  <i class="fa fa-trash-alt"onclick="deleteStudent(${ProductList[i].id})" ></i>
                  <i class="fa fa-edit"></i>
          </td>
        </tr>`;
    }
    document.getElementById("tblDanhSachSP").innerHTML = html;
  }