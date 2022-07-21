$(document).ready(function () {
  var url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      var result = "";
      datas.categories.forEach((item) => {
        result += `
        <div class="category-item" href="">
        <div class="category-image">
          <img src="${item.strCategoryThumb}" />
        </div>
        <div class="category-name">
          <h3>${item.strCategory}</h3>
        </div>
      </div>
      </div>`;
      });
      $(`.category`).append(result);
    },
  });
});
