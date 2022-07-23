$(document).ready(function () {
  $.ajax({
    dataType: "json",
    url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    success: function (datas) {
      var result = "";
      datas.categories.forEach((item) => {
        result += `
        <div class="category-item" data-category="${item.strCategory}">
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

      $(".category-item").on("click", function () {
        // console.log($(this).data("category"));
        $.ajax({
          url: "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + $(this).data("category"),
          success: (datas) => {
            console.log(datas.meals);
            const meal = datas.meals;
            let hasil = "";
            meal.forEach((item) => {
              hasil += `
              <div class="meal-item">
              <div class="category-image">
                <img src="${item.strMealThumb}" />
              </div>
              <div class="category-name">
                <h3>${item.strMeal}</h3>
              </div>
            </div>
            </div>`;
            });
            $(`.category`).html(hasil);
          },
        });
      });
    },
  });
});
