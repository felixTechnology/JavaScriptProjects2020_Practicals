/*
* 1. Creating a function which will give ramdom meal
* 2. Another function which will give random meal base on search
* 3. Search that will give meal based on ID
*
* */



/*Random Meal Function - https://www.themealdb.com/api.php*/

function getRandomMeal() {
   fetch('https://www.themealdb.com/api/json/v1/1/random.php\n')
}


/*Get Meal by ID*/

function getMealById(id) {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772\n' + id)

}

 function getMealsBySearch(term) {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata\n' + term)
}