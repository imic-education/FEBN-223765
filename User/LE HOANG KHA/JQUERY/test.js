// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").css("background-color","yellow")
//     })
// })


// $(document).ready(function(){
//     $("body").off("click",".div-box").on("click", ".div-box", Active)
//     function Active() {
//         $('.div-box').removeClass('active')
//         $(this).addClass('active')
//     }
// })

// $(document).ready(function () {
//     $('body').off('click', '#btn-1').on('click', '#btn-1', CallAPI);   
//     function CallAPI() {
//         var model = new Object();
//         model.PageIndex = 1;
//         model.PageSize = 8
        
//         $.ajax({
//             type: 'get',
//             url: 'http://api.dev.imic.edu.vn/api/category/get-all',
//             dataType: 'json',       

//             success: function (response) {
              
//                 var htmlStr = "";
//                 response.map(function (item) {
//                     htmlStr += 
//                     `
//                     <tr>
//                         <td>${item.categoryId}</td>
//                     </tr>
//                     <tr>
//                         <td>${item.categoryName}</td>
//                     </tr>`
//                 })
//                 $('#table-content').html(htmlStr);
//             }
//         })
//     }
// })

// $(document).ready(function () {
//     $('body').off('click', '#btn-1').on('click', '#btn-1', CallAPI);   
//     function CallAPI() {
//         var model = new Object();
//         model.PageIndex = 1;
//         model.PageSize = 8
        
//         $.ajax({
//             type: 'get',
//             url: 'http://api.dev.imic.edu.vn/api/acticle/pagination',
//             dataType: 'json',       
//             data:JSON.stringify(model),
//             contentType:"application/json; charset=utf-8",

//             success: function (response) {
//                 var htmlStr = "";
//                 response.map(function (item) {
//                     htmlStr += `<div class="col-md-3">
//                     <div class="card">
//                         <img class="card-img-top" src="${item.image}" alt="Card image-cap">
//                         <div class="card-body">
//                             <h5 class="card-title">${item.title}</h5>
//                             <p class="card-text">${item.userName}</p>
//                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                     </div>
//                     `
//                 })
//                 $('#table-content').html(htmlStr);
//             }
//         })
//     }
// })

$(document).ready(function () {
    $('body').off('click', '#btn-1').on('click', '#btn-1', CallAPI);

    function CallAPI() {
        var model = new Object();
        model.PageIndex = 1;
        model.PageSize = 8

        $.ajax({
            type: 'post',
            url: 'http://api.dev.imic.edu.vn/api/article/5d5b0778-ef91-433e-b4f1-cd4ac16b3932',
            dataType: 'json',
            

            success: function (response) {

                var htmlStr = "";
                
                    htmlStr +=
                        `
                        <div class="col-md-3">
                        <div class="card">
                            <img src="${response.image}" alt="Card image Cap" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${response.tittle}</h5>
                                <p class="card-text">${response.userName}</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                            </div>
                        </div>
                        </div>
                        `
                    htmlStr +=
                    `<div class="col-md-9">
                    ${response.content}
                    </div>`
                $('#table-content').html(htmlStr);
            }
        })
    }
})