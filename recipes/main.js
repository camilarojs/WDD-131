
import recipes from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomIndex = random(listLength);
  return list[randomIndex];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<button>${tag}</button>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;


  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <div class="recipe-card">
      <div class="recipe-image">
        <img src="${recipe.image}" alt="${recipe.name}">
      </div>
      <div class="recipe-content">
        <div class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </div>
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="desc">${recipe.description}</p>
      </div>
    </div>
  `;
}

function renderRecipes(recipeList) {
  const outputEl = document.querySelector('.recipe');
  const html = recipeList.map(recipeTemplate).join('');
  outputEl.innerHTML = html;
}

function filterRecipes(query) {
  const q = query.toLowerCase();

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(q) ||
    recipe.description.toLowerCase().includes(q) ||
    recipe.tags.find(tag => tag.toLowerCase().includes(q)) ||
    recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(q))
  );

  const sorted = filtered.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return sorted;
}

function searchHandler(e) {
  e.preventDefault();

  const inputEl = document.querySelector('#search input');
  const value = inputEl.value.trim();

  if (!value) {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);
    return;
  }

  const results = filterRecipes(value);

  renderRecipes(results);
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);

  const searchButton = document.querySelector('#search img');
  if (searchButton) {
    searchButton.addEventListener('click', searchHandler);
  }
}

init();
