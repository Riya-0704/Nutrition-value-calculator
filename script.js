/*document.getElementById('get-nutrition-btn').addEventListener('click', function() {
    const food = document.getElementById('food-select').value;

    if (food) {
        fetchNutrition(food);
    } else {
        alert('Please select a food item');
    }
});

function fetchNutrition(food) {
    const apiKey = 'fc1f9c3ddf1d4116a938489e85a419b2';
    const url = `https://api.spoonacular.com/food/ingredients/search?query=${food}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const foodId = data.results[0].id;
            getNutritionDetails(foodId);
        })
        .catch(error => {
            console.error('Error fetching food:', error);
        });
}

function getNutritionDetails(foodId) {
    const apiKey = 'fc1f9c3ddf1d4116a938489e85a419b2';
    const url = `https://api.spoonacular.com/food/ingredients/${foodId}/information?amount=1&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('calories').textContent = data.nutrition.nutrients.find(n => n.name === 'Calories').amount;
            document.getElementById('fat').textContent = data.nutrition.nutrients.find(n => n.name === 'Fat').amount;
            document.getElementById('carbs').textContent = data.nutrition.nutrients.find(n => n.name === 'Carbohydrates').amount;
            document.getElementById('protein').textContent = data.nutrition.nutrients.find(n => n.name === 'Protein').amount;
        })
        .catch(error => {
            console.error('Error fetching nutrition details:', error);
        });
}*/



document.addEventListener('DOMContentLoaded', function() {
    populateFoodDropdown();
});

function populateFoodDropdown() {
    const apiKey = 'fc1f9c3ddf1d4116a938489e85a419b2';
    const url = `https://api.spoonacular.com/food/ingredients/search?query=fruit&number=20&apiKey=${apiKey}`; // Modify the query and number as needed

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const foodSelect = document.getElementById('food-select');
            data.results.forEach(food => {
                const option = document.createElement('option');
                option.value = food.name;
                option.textContent = food.name;
                foodSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching food list:', error);
        });
}

document.getElementById('get-nutrition-btn').addEventListener('click', function() {
    const food = document.getElementById('food-select').value;

    if (food) {
        fetchNutrition(food);
    } else {
        alert('Please select a food item');
    }
});

function fetchNutrition(food) {
    const apiKey = 'fc1f9c3ddf1d4116a938489e85a419b2';
    const url = `https://api.spoonacular.com/food/ingredients/search?query=${food}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const foodId = data.results[0].id;
            getNutritionDetails(foodId);
        })
        .catch(error => {
            console.error('Error fetching food:', error);
        });
}

function getNutritionDetails(foodId) {
    const apiKey = 'fc1f9c3ddf1d4116a938489e85a419b2';
    const url = `https://api.spoonacular.com/food/ingredients/${foodId}/information?amount=1&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('calories').textContent = data.nutrition.nutrients.find(n => n.name === 'Calories').amount;
            document.getElementById('fat').textContent = data.nutrition.nutrients.find(n => n.name === 'Fat').amount;
            document.getElementById('carbs').textContent = data.nutrition.nutrients.find(n => n.name === 'Carbohydrates').amount;
            document.getElementById('protein').textContent = data.nutrition.nutrients.find(n => n.name === 'Protein').amount;
        })
        .catch(error => {
            console.error('Error fetching nutrition details:', error);
        });
}
