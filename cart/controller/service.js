var studentService = {
  
    fetchStudents: function () {
      return axios({
        url: "https://63960758a68e43e418f8d85c.mockapi.io/card",
        method: "GET",
      });
    },
}