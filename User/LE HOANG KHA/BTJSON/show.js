function UserAction() {
    var request = new XMLHttpRequest();

    request.open(
      "GET",
      "http://api.dev.imic.edu.vn/api/category/get-all",
      true
    );
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);

      if (request.status >= 200 && request.status < 400) {
        data.forEach((product) => {
          console.log(product.categoryName);
        });
        console.log(data);
      } else {
        console.log("error");
      }

      document.getElementById("name").value = data.name;
      document.getElementById("email").value = data.email;
      document.getElementById("phone").value = data.phone;
      document.getElementById("address").value = data.address;

    };
    request.send();
  }