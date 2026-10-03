const whatsappNumber = ""; // Add BEE BEE CAKE's confirmed international WhatsApp number before launch, e.g. 2348012345678.
const cakes = [
  {
    name: "Velvet Bloom",
    category: "Birthday",
    flavour: "Red Velvet",
    price: "₦38,000",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    desc: "Three soft red-velvet layers finished with elegant buttercream flowers.",
  },
  {
    name: "Golden Celebration",
    category: "Celebration",
    flavour: "Vanilla",
    price: "₦32,000",
    img: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=85",
    desc: "A bright, joyful centrepiece made for your best moments.",
  },
  {
    name: "Chocolate Indulgence",
    category: "Classic",
    flavour: "Chocolate",
    price: "₦30,000",
    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=85",
    desc: "Deep chocolate sponge, silky frosting and pure celebration.",
  },
  {
    name: "Blush Romance",
    category: "Wedding",
    flavour: "Strawberry",
    price: "₦55,000",
    img: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=85",
    desc: "A refined floral cake for intimate, beautiful occasions.",
  },
  {
    name: "Coconut Dream",
    category: "Classic",
    flavour: "Coconut",
    price: "₦28,000",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85",
    desc: "Light coconut cream and tender vanilla sponge.",
  },
  {
    name: "Little Star",
    category: "Birthday",
    flavour: "Vanilla",
    price: "₦26,000",
    img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=85",
    desc: "A playful, polished birthday cake for little celebrations.",
  },
];
const recipes = [
  {
    name: "Vanilla Butter Cake",
    desc: "A soft, dependable classic with a tender crumb.",
    ingredients: "Flour, butter, sugar, eggs, milk, vanilla",
    steps:
      "Cream butter and sugar. Add eggs. Fold in dry ingredients and milk. Bake until golden.",
    img: cakes[4].img,
  },
  {
    name: "Chocolate Celebration Cake",
    desc: "Rich chocolate sponge for special days.",
    ingredients: "Flour, cocoa, sugar, eggs, milk, butter",
    steps: "Whisk dry ingredients. Add wet ingredients. Bake, cool and frost.",
    img: cakes[2].img,
  },
  {
    name: "Red Velvet Cupcakes",
    desc: "Velvety cupcakes topped with cream cheese frosting.",
    ingredients: "Flour, cocoa, buttermilk, eggs, butter, red colour",
    steps:
      "Combine wet and dry ingredients. Portion into cases, bake and frost.",
    img: cakes[0].img,
  },
];
function createWhatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function cakeCard(c) {
  return `<article class="card"><img src="${c.img}" alt="${c.name} cake" loading="lazy"><div class="card-body"><div class="meta"><span>${c.category} · ${c.flavour}</span><span class="price">${c.price}</span></div><h3>${c.name}</h3><p>${c.desc}</p><a class="button" target="_blank" rel="noopener" href="${createWhatsAppLink(`Hello BEE BEE CAKE,\n\nI would like to place an order.\n\nCake: ${c.name}\nFlavour: ${c.flavour}\nQuantity: 1\nPrice: ${c.price}\n\nPlease let me know the next steps.\n\nThank you.`)}">Order on WhatsApp</a></div></article>`;
}
function renderCakes(list = cakes) {
  const el = document.querySelector("[data-cakes]");
  if (el) el.innerHTML = list.map(cakeCard).join("");
}
function renderRecipes() {
  const el = document.querySelector("[data-recipes]");
  if (el)
    el.innerHTML = recipes
      .map(
        (r) =>
          `<article class="card"><img src="${r.img}" alt="${r.name}" loading="lazy"><div class="card-body"><h3>${r.name}</h3><p>${r.desc}</p><details class="recipe-detail"><summary>See recipe</summary><strong>Ingredients:</strong> ${r.ingredients}<br><strong>Method:</strong> ${r.steps}</details></div></article>`,
      )
      .join("");
}
function header() {
  return `<header class="header"><nav class="nav container"><a class="brand" href="index.html">BEE BEE <span>CAKE</span></a><button class="menu" aria-label="Open navigation" aria-expanded="false">☰</button><div class="links"><a href="index.html">Home</a><a href="cakes.html">Cakes</a><a href="custom-cake.html">Custom Cake</a><a href="recipes.html">Recipes</a><a href="gallery.html">Gallery</a><a href="about.html">About</a><a href="contact.html">Contact</a><a class="button" href="custom-cake.html">Order Now</a></div></nav></header>`;
}
function footer() {
  return `<footer class="footer"><div class="container footer-grid"><div><div class="brand">BEE BEE <span>CAKE</span></div><p>Thoughtfully made cakes for moments that deserve to feel special.</p></div><div><b>Explore</b><a href="cakes.html">Cakes</a><a href="custom-cake.html">Custom Cake</a><a href="recipes.html">Recipes</a><a href="gallery.html">Gallery</a></div><div><b>Contact</b><a href="mailto:beebeecakes92@gmail.com">beebeecakes92@gmail.com</a><p>Lagos • Abuja</p><p>TikTok: <a href="https://www.tiktok.com/@beebee_cakes" target="_blank" rel="noopener noreferrer">@beebee_cakes</a></p><p>Instagram & Facebook — coming soon</p></div></div><div class="container copyright">© <span data-year></span> BEE BEE CAKE. All rights reserved.</div></footer>`;
}
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("[data-header]")
    .forEach((e) => (e.innerHTML = header()));
  document
    .querySelectorAll("[data-footer]")
    .forEach((e) => (e.innerHTML = footer()));
  document.querySelector("[data-year]")?.append(new Date().getFullYear());
  document.querySelector(".menu")?.addEventListener("click", (e) => {
    let n = document.querySelector(".links");
    n.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", n.classList.contains("open"));
  });
  renderCakes();
  renderRecipes();
  document.querySelectorAll("[data-filter]").forEach((b) =>
    b.addEventListener("click", () => {
      document
        .querySelectorAll("[data-filter]")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      renderCakes(
        b.dataset.filter === "All"
          ? cakes
          : cakes.filter((c) => c.category === b.dataset.filter),
      );
    }),
  );
  const f = document.querySelector("#custom-form");
  if (f) {
    const d = f.querySelector("[name=eventDate]");
    d.min = new Date().toISOString().split("T")[0];
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!f.checkValidity()) {
        f.reportValidity();
        return;
      }
      let x = new FormData(f),
        m = `Hello BEE BEE CAKE,\n\nI would like to request a custom cake.\n\n${[...x].map(([k, v]) => `${k.replace(/([A-Z])/g, " $1")}: ${v}`).join("\n")}\n\nPlease let me know the next steps.\n\nThank you.`;
      window.open(createWhatsAppLink(m), "_blank", "noopener");
    });
  }
});
