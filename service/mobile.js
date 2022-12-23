var mobileService = {
    fetchMobile: function () {
        return axios({
          url: "https://6395f15c90ac47c6807877f9.mockapi.io/products",
          method: "GET",
        });
    },
    
}
