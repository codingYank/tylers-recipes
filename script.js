const recipeContainer = document.querySelector(".recipe-cards")
const searchInput = document.querySelector("[data-search]")
const mains = document.querySelector(".mains")
const sides = document.querySelector(".sides")
const desserts = document.querySelector(".desserts")
const beef = document.querySelector(".beef")
const chicken = document.querySelector(".chicken")
const pork = document.querySelector(".pork")
const fish = document.querySelector(".fish")
const lamb = document.querySelector(".lamb")
const pizza = document.querySelector(".pizza")
const potatoes = document.querySelector(".potatoes")
const pasta = document.querySelector(".pasta")
const bread = document.querySelector(".bread")
const vegetables = document.querySelector(".vegetables")
const categorySection = document.querySelector(".category-section")
const courseSection = document.querySelector(".course-section")
const filterButton = document.querySelector("#filter-btn-container")

let recipes = []

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  recipes.forEach((recipe) => {
    const isVisible = recipe.name.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

filterButton.addEventListener("click", () => {
  courseSection.classList.toggle("hide")
  categorySection.classList.toggle("hide")
})

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
  }
})

mains.addEventListener("click", (e) => {
  const value = "main"
  recipes.forEach((recipe) => {
    const isVisible = recipe.course.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

sides.addEventListener("click", (e) => {
  const value = "side"
  recipes.forEach((recipe) => {
    const isVisible = recipe.course.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

desserts.addEventListener("click", (e) => {
  const value = "dessert"
  recipes.forEach((recipe) => {
    const isVisible = recipe.course.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

beef.addEventListener("click", (e) => {
  const value = "beef"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

chicken.addEventListener("click", (e) => {
  const value = "poultry"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

pork.addEventListener("click", (e) => {
  const value = "pork"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

fish.addEventListener("click", (e) => {
  const value = "fish"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

lamb.addEventListener("click", (e) => {
  const value = "lamb"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

pizza.addEventListener("click", (e) => {
  const value = "pizza"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

potatoes.addEventListener("click", (e) => {
  const value = "potatoes"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

pasta.addEventListener("click", (e) => {
  const value = "pasta"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

bread.addEventListener("click", (e) => {
  const value = "bread"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

vegetables.addEventListener("click", (e) => {
  const value = "vegetables"
  recipes.forEach((recipe) => {
    const isVisible = recipe.catagory.toLowerCase().includes(value)
    recipe.element.classList.toggle("hide", !isVisible)
  })
})

fetch("recipes.json")
  .then((res) => res.json())
  .then((data) => {
    recipes = data.map((recipe) => {
      const card = document.createElement("div")
      const recipeCard = `
      <a href="${recipe.link}">
      <div class="card-container">
        <div class="card">
          <div class="card-header">${recipe.name}</div>
        </div>
      </div></a>`
      card.innerHTML = recipeCard
      recipeContainer.append(card)
      return {
        name: recipe.name,
        course: recipe.course,
        catagory: recipe.catagory,
        element: card,
      }
    })
  })
