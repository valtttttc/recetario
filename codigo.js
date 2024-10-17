// Lista de recetas con sus ingredientes
const recipes = [
    { name: 'Pizza italiana', ingredients: ['harina', 'salsa de tomate', 'jamon serrano', 'mozzarella', 'parmesano', 'queso'] },
    { name: 'Tacos', ingredients: ['Harina', 'Carne', 'chile','pollo'] },
    { name: 'Paella', ingredients: ['arroz', 'pescado', 'camarones', 'mejillones', 'almejas','tomate'] },
    { name: 'Tortilla de Patatas', ingredients: ['papas', 'huevos', 'cebolla'] },
    { name: 'Gazpacho', ingredients: ['pan', 'tomates', 'pepino', 'pimenton'] },
    { name: 'Enchiladas', ingredients: ['Harina', 'Pollo', 'Carne', 'queso costeño', 'aguacate', 'tomate', 'Ají'] },
    {name: 'Moles', ingredients: ['chiles', 'cebolla', 'almendras', 'cacahuates', 'semillas', 'chocolate'] },
    {name: 'Pozole', ingredients: ['carne', 'cebolla', 'chiles', 'maiz', 'repollo']},
    {name: 'Chiles', ingredients: ['Chiles', 'carnes', 'Almendras', 'Acitrón', 'Manzana', 'Pera', 'Durazno', 'Piñones', 'Nueces', 'Leche', 'queso crema', 'quesos'] },
    {name: 'Sushi', ingredients: ['arroz', 'nori', 'pescado', 'aguacate'] },
    {name: 'Ramen', ingredients: ['pasta', 'carne de cerdo', 'pollo', 'nori'] },
    {name: 'Tempura', ingredients: ['harina', 'huevo', 'camarón'] },
    {name: 'Takoyaki', ingredients: ['harina', 'huevo', 'pulpo', 'cebolla'] },
    {name: 'Onigiri', ingredients: ['arroz', 'salmón', 'nori', 'atún'] },
    {name: 'Okonomiyaki', ingredients: ['harina', 'huevo', 'repollo', 'carne de cerdo'] },
    {name: 'Yakitori', ingredients: ['pollo', 'cebolla'] },
    {name: 'Soba', ingredients: ['pasta', 'cebolla'] },
    {name: 'Udon', ingredients: ['pasta', 'tofu', 'cebolla'] },
    {name: 'Bento', ingredients: ['huevo', 'salchicha', 'pollo', 'arroz'] },

];

// Función para buscar recetas
function searchRecipes() {
    const input = document.getElementById('ingredientSearch').value.toLowerCase();
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = ''; // Limpiar los resultados previos

    if (input) {
        const filteredRecipes = recipes.filter(recipe => 
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(input))
        );

        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(recipe => {
                const li = document.createElement('li');
                li.textContent = recipe.name;
                recipeContainer.appendChild(li);
            });
        } else {
            recipeContainer.innerHTML = '<li>No se encontraron recetas</li>';
        }
    } 
}