$(document).ready(function () {
  $('body').off('click', '#btn-1').on('click', '#btn-1', CallAPI);   
  function CallAPI() {
      var model = new Object();
      model.PageIndex = 1;
      model.PageSize = 8
      
      $.ajax({
          type: 'get',
          url: 'http://api.dev.imic.edu.vn/api/category/get-all',
          dataType: 'json',       

          success: function (response) {
            
              var htmlStr = "";
              response.map(function (item) {
                  htmlStr += 
                  `
                  <tr>
                      <td>${item.categoryId}</td>
                  </tr>
                  <tr>
                      <td>${item.categoryName}</td>
                  </tr>`
              })
              $('#table-content').html(htmlStr);
          }
      })
  }
})