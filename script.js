const searchButton = document.querySelector('.button');
const searchBox = document.querySelector('.searchbox');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h3><i>Fetching Recipes...</i></h3>";
    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json();
        // Clear the container after fetching
        recipeContainer.innerHTML = "";

        // Check if meals are found
        if (!response.meals) {
            recipeContainer.innerHTML = `<h3>No recipe found for "${query}". Please try another dish!</h3>`;
            return; // Exit the function if no recipes are found
        }

        // console.log(response.meals[0]);  we could have also done this if we want to access the  first meal only because that would be located on 0th index. 
        // we can also apply for each loop  on it if we want ,since its an array... 
        response.meals.forEach(meal => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
         <img src="${meal.strMealThumb}"
         <br>
         <h3>${meal.strMeal}</h3>
          <p><span>${meal.strArea}</span> Dish</p>
           <p><i>Category: ${meal.strCategory}</i></p>
          
     `
            const button = document.createElement('button');
            button.textContent = "view Recipe";
            recipeDiv.appendChild(button);

            //  adding event listener to recipe button
            button.addEventListener('click', () => {
                openRecipePopup(meal);
            });

            recipeContainer.appendChild(recipeDiv);
        });

        // function to fetch ingredients and measurements
        const fetchIngredients = (meal) => {

            let ingredientsList = " ";
            for (i = 1; i <= 29; i++) {
                const ingredient = meal[`strIngredient${i}`];
                if (ingredient) {
                    const measure = meal[`strMeasure${i}`];
                    ingredientsList += `<li>${measure} ${ingredient}</li>`
                }
                else {
                    break;
                }
            }
            return ingredientsList;
        }
        const openRecipePopup = (meal) => {

            recipeDetailsContent.innerHTML = `
           <h2 class="recipeName">${meal.strMeal}</h2>
           <br>
           <h3 class="ingredientList">ingredients:</h3>
           <ul>${fetchIngredients(meal)}</ul>
           <div class="recipeInstructions">
           <h3>Instructions</h3>
           
         <p>${meal.strInstructions}</p>
         </div>
           `

            recipeDetailsContent.parentElement.style.display = "block";
        }

        recipeCloseBtn.addEventListener('click',()=>{
           recipeDetailsContent.parentElement.style.display='none'; 
        })
    } catch (error) {
        // Handle errors like network issues
        recipeContainer.innerHTML = `<h3>Error fetching recipes. Please try again later!</h3>`;
        console.error("Error:", error);
    }
};

// Add event listener to the search button
searchButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    const searchInput = searchBox.value.trim(); // Get the search input
    if (searchInput) {
        fetchRecipes(searchInput); // Fetch recipes if input is valid
    } else {
        recipeContainer.innerHTML = "<h3>Please enter a dish name to search!</h3>";
    }


});
//  e.preventDefault();  this prevents the data from getting auto-submitted and also prevents from the page being refreshed all the time even after a single click and that e is the parameter.
