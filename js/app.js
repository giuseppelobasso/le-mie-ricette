// === DOM Elements ===
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const timeFilters = document.getElementById('timeFilters');
const difficultyFilters = document.getElementById('difficultyFilters');
const recipesGrid = document.getElementById('recipesGrid');
const recipesCount = document.getElementById('recipesCount');
const recipesTitle = document.getElementById('recipesTitle');
const noResults = document.getElementById('noResults');
const resetFilters = document.getElementById('resetFilters');
const themeToggle = document.getElementById('themeToggle');

// === State ===
let currentCategory = 'tutte';
let currentTime = 'tutte';
let currentDifficulty = 'tutte';
let searchQuery = '';

// === Theme Toggle ===
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// === Filtering ===
function filterRecipes() {
    return recipes.filter(recipe => {
        // Category filter
        if (currentCategory !== 'tutte' && recipe.category !== currentCategory) {
            return false;
        }
        
        // Time filter
        if (currentTime !== 'tutte') {
            const time = parseInt(currentTime);
            if (time === 30 && recipe.time > 30) return false;
            if (time === 60 && (recipe.time < 30 || recipe.time > 60)) return false;
            if (time === 61 && recipe.time <= 60) return false;
        }
        
        // Difficulty filter
        if (currentDifficulty !== 'tutte' && recipe.difficulty !== currentDifficulty) {
            return false;
        }
        
        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const titleMatch = recipe.title.toLowerCase().includes(query);
            const descMatch = recipe.description.toLowerCase().includes(query);
            const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(query));
            const ingredientMatch = recipe.ingredients.some(ing => ing.toLowerCase().includes(query));
            
            if (!titleMatch && !descMatch && !tagMatch && !ingredientMatch) {
                return false;
            }
        }
        
        return true;
    });
}

// === Render Recipes ===
function renderRecipes() {
    const filteredRecipes = filterRecipes();
    
    // Update count
    recipesCount.textContent = `${filteredRecipes.length} ricett${filteredRecipes.length === 1 ? 'a' : 'e'}`;
    
    // Update title based on filters
    if (currentCategory !== 'tutte') {
        const categoryNames = {
            'antipasto': 'Antipasti',
            'primo': 'Primi',
            'dolce': 'Dolci',
            'contorno': 'Basi'
        };
        recipesTitle.textContent = categoryNames[currentCategory] || 'Tutte le ricette';
    } else {
        recipesTitle.textContent = 'Tutte le ricette';
    }
    
    // Show/hide no results
    if (filteredRecipes.length === 0) {
        recipesGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        recipesGrid.style.display = 'grid';
        noResults.style.display = 'none';
    }
    
    // Render cards
    recipesGrid.innerHTML = filteredRecipes.map(recipe => {
        const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(recipe.image);
        const imageContent = isImage
            ? `<img src="${recipe.image}" alt="${recipe.title}" loading="lazy">`
            : recipe.image;
        return `
        <article class="recipe-card" data-id="${recipe.id}">
            <div class="recipe-card-image">${imageContent}</div>
            <div class="recipe-card-content">
                <span class="recipe-card-category">${recipe.category}</span>
                <h4 class="recipe-card-title">${recipe.title}</h4>
                <p class="recipe-card-description">${recipe.description}</p>
                <div class="recipe-card-meta">
                    <span class="recipe-meta-item">
                        <span>⏱️</span> ${recipe.time} min
                    </span>
                    <span class="recipe-meta-item">
                        <span>👨‍👩‍👧‍👦</span> ${recipe.servings} porzioni
                    </span>
                    <span class="recipe-meta-item">
                        <span>📊</span> ${recipe.difficulty}
                    </span>
                </div>
            </div>
        </article>
        `;
    }).join('');
    
    // Add click handlers
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeId = parseInt(card.dataset.id);
            openRecipe(recipeId);
        });
    });
}

// === Open Recipe ===
function openRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    // Store current filters state
    localStorage.setItem('filtersState', JSON.stringify({
        category: currentCategory,
        time: currentTime,
        difficulty: currentDifficulty,
        search: searchQuery
    }));
    
    // Navigate to recipe page
    window.location.href = `recipes/recipe.html?id=${recipe.id}`;
}

// === Event Listeners ===
// Search
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value.trim();
        renderRecipes();
    }, 300);
});

// Category filters
categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        // Update active state
        categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        currentCategory = e.target.dataset.category;
        renderRecipes();
    }
});

// Time filters
timeFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        timeFilters.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        currentTime = e.target.dataset.time;
        renderRecipes();
    }
});

// Difficulty filters
difficultyFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        difficultyFilters.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        currentDifficulty = e.target.dataset.difficulty;
        renderRecipes();
    }
});

// Reset filters
resetFilters.addEventListener('click', () => {
    currentCategory = 'tutte';
    currentTime = 'tutte';
    currentDifficulty = 'tutte';
    searchQuery = '';
    searchInput.value = '';
    
    // Reset active states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.filter-btn[data-category="tutte"], .filter-btn[data-time="tutte"], .filter-btn[data-difficulty="tutte"]').forEach(btn => {
        btn.classList.add('active');
    });
    
    renderRecipes();
});

// Theme toggle
themeToggle.addEventListener('click', toggleTheme);

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderRecipes();
});
