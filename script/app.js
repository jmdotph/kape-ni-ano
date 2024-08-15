let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

const icedCoffee = [
    {
      "div tooltip": 'PHP 59',
      "image thumbnail": 'img/americano/iced-americano.jpg',
      "item name": "Iced Americano",
      info: "Your regular cold coffee to make your day more fulfilling and satisfying specially in hot weather."
    },
    {
      "div tooltip": 'PHP 59',
      "image thumbnail": 'img/spanish-latte/iced-spanish-latte.jpg',
      "item name": "Iced Spanish Latte",
      info: "A combination of cold coffee and milk sweetened enough to energize your day."
    },
    {
        "div tooltip": 'PHP 65',
        "image thumbnail": 'img/mocha-almond/iced-mocha-almond-2..jpg',
        "item name": "Iced Mocha Almond",
        info: "Try our Iced Mocha Almond for only PHP 65! Masarap sabi ni owner✌️."
      },
      {
        "div tooltip": 'PHP 59',
        "image thumbnail": 'img/latte/ided-latte.jpg',
        "item name": "Iced Latte",
        info: "A classic coffee mixed with cold milk makes, perfect for everyone&apos;s taste."
      },
      {
        "div tooltip": 'PHP 59',
        "image thumbnail": 'img/coffee-beer/coffee-beer.jpg',
        "item name": "Coffee Beer",
        info: "Note: This is a combination of iced coffee and coke. But it taste like beer 😊."
      },
      {
        "div tooltip": 'PHP 109',
        "image thumbnail": 'img/irish-cream-iced-latt/irish-cream-iced-latte.jpg',
        "item name": "Irish Cream Iced Latte",
        info: "A combination of coffee, milk and whiskey. Drink moderately ✌️."
      },
      {
        "div tooltip": 'PHP 59',
        "image thumbnail": 'img/macchiatto/iced-caramel-2.webp',
        "item name": "Iced Caramel Macchiato",
        info: "A combination of coffee, milk and caramel sauce."
      },
      {
        "div tooltip": 'PHP 65',
        "image thumbnail": 'img/macchiatto/hot-vanilla.webp',
        "item name": "Iced Vanilla Macchiato",
        info: "A combination of coffee, milk and vanilla syrup."
      },
      {
        "div tooltip": 'PHP 59',
        "image thumbnail": 'img/coffee-coke-float/coffee-float.jpg',
        "item name": "Coffee Coke Float",
        info: "Cold coffee + coke topped with whipped cream."
      }
  ];

  const hotCoffee = [
    {
      "div tooltip": 'PHP 59',
      "image thumbnail": 'img/americano/hot-americano.jpg',
      "item name": "Hot Americano",
      info: "Your regular hot coffee to make your day more fulfilling and satisfying specially in cold weather."
    },
    {
      "div tooltip": 'PHP 59',
      "image thumbnail": 'img/spanish-latte/spanish-late.jpg',
      "item name": "Hot Spanish Latte",
      info: "A combination of hot coffee and milk sweetened enough to energize your day."
    },
    {
        "div tooltip": 'PHP 65',
        "image thumbnail": 'img/mocha-almond/hot-almond-coffee.jpg',
        "item name": "Hot Mocha Almond",
        info: "Stressed out? Here&apos;s a mixture of hot coffee, milk and chocolate drink to warm and brighten your day."
      },
      {
        "div tooltip": 'PHP 59',
        "image thumbnail": 'img/latte/hot-latte.jpg',
        "item name": "Hot Latte",
        info: "A classic coffee mixed with hot milk, perfect for everyone&apos;s taste."
      },
      {
        "div tooltip": 'PHP 59',
        "image thumbnail": 'img/macchiatto/hot-caramel.jpg',
        "item name": "Hot Caramel Macchiato",
        info: "A combination of coffee, milk and caramel sauce."
      },
      {
        "div tooltip": 'PHP 59',
        "image thumbnail": 'img/macchiatto/hot-vanilla.webp',
        "item name": "Hot Vanilla Macchiato",
        info: "A combination of coffee, milk and vanilla syrup."
      }
  ];

  const whiskey = [
    {
      "div tooltip": 'PHP 99',
      "image thumbnail": 'img/irish-whiskey/irish-whiskey.jpeg',
      "item name": "Irish Coffee Whiskey",
      info: "a caffeinated alcoholic drink consisting of Irish whiskey, hot coffee and sugar, which has been stirred and topped with cream."
    },
    {
      "div tooltip": 'PHP 89',
      "image thumbnail": 'img/whiskey-sour/whiskey-sour.jpg',
      "item name": "Whiskey Sour",
      info: "A classic mixture of whiskey and lemon for only PHP 89."
    },
    {
        "div tooltip": 'PHP 99',
        "image thumbnail": 'img/gin-fizz/gin-fizz.jpg',
        "item name": "Gin Fizz",
        info: "A strong drink mixed with gin, lemon juice and sparkling soda water for only PHP 99"
      },
      {
        "div tooltip": 'PHP 109',
        "image thumbnail": 'img/irish-cream-iced-latt/irish-cream-iced-latte.jpg',
        "item name": "Irish Cream Iced Latte",
        info: "A combination of coffee, milk and whiskey. Drink moderately ✌️."
      }
  ];

  const milkDrink = [
    {
      "div tooltip": 'PHP 59',
      "image thumbnail": 'img/milk-strawberry/milk-strawberry.JPG',
      "item name": "Milk Strawberry",
      info: "This milk strawberry is perfectly balanced with sweet strawberry syrup and creamy milk! A refreshing treat on a warm day!"
    }
  ];

  const sodaLemonade = [
    {
      "div tooltip": 'PHP 59',
      "image thumbnail": 'img/strawberry-soda/strawberry-soda.jpg',
      "item name": "Strawberry Soda",
      info: "A refreshing drink to quench your thirst."
    },
    {
      "div tooltip": 'PHP 89',
      "image thumbnail": 'img/lemon-yakult-soda/lemonade-yakult.jpeg',
      "item name": "Lemonade Yakult",
      info: "A refreshing lemonade perfect for warm weather."
    },
    {
      "div tooltip": 'PHP 89',
      "image thumbnail": 'img/lemon-yakult-soda/lemon-yakult-soda.jpeg',
      "item name": "Lemon Yakult Soda",
      info: "A refreshing sparkling lemonade perfect for warm weather."
    }
  ];
renderIcedCoffee();
renderHotCoffee();
renderWhiskey();
renderMilkDrink();
renderSodaLemonade();



next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
     
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

function redirectUser() {
    location.href = 'jm.html';
}

function renderHotCoffee() {
    const cardContainer = document.querySelector('.grid-container');

  const postMethod = () =>{
    hotCoffee.map((postData) => {
      const postElement = document.createElement('div');
      postElement.classList.add('div-item-container');
      postElement.innerHTML = `
      <div class="div-item-preview">
          <div class="div-tooltip">${postData["div tooltip"]}</div>
          <img class="img-item" src="${postData["image thumbnail"]}">
        </div>
        <div class="div-info-flex">
          <p class="text-item-name">
          ${postData["item name"]}
          </p>
          <p class="text-info">
            ${postData.info}
          </p>
        </div>
      `;
        cardContainer.appendChild(postElement);

    });
  }

  postMethod();
}

function renderIcedCoffee() {
    const cardContainer = document.querySelector('.grid-container-iced-coffee');

    const postMethod = () =>{
    icedCoffee.map((postData) => {
      const postElement = document.createElement('div');
      postElement.classList.add('div-item-container');
      postElement.innerHTML = `
      <div class="div-item-preview">
          <div class="div-tooltip">${postData["div tooltip"]}</div>
          <img class="img-item" src="${postData["image thumbnail"]}">
        </div>
        <div class="div-info-flex">
          <p class="text-item-name">
          ${postData["item name"]}
          </p>
          <p class="text-info">
            ${postData.info}
          </p>
        </div>
      `;
        cardContainer.appendChild(postElement);
    });
  }

  postMethod();
}

function renderWhiskey() {
  const cardContainer = document.querySelector('.grid-container-whiskey');

  const postMethod = () =>{
  whiskey.map((postData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('div-item-container');
    postElement.innerHTML = `
    <div class="div-item-preview">
        <div class="div-tooltip">${postData["div tooltip"]}</div>
        <img class="img-item" src="${postData["image thumbnail"]}">
      </div>
      <div class="div-info-flex">
        <p class="text-item-name">
        ${postData["item name"]}
        </p>
        <p class="text-info">
          ${postData.info}
        </p>
      </div>
    `;
      cardContainer.appendChild(postElement);
  });
}

postMethod();
}

function renderMilkDrink() {
  const cardContainer = document.querySelector('.grid-container-milk-drink');

  const postMethod = () =>{
  milkDrink.map((postData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('div-item-container');
    postElement.innerHTML = `
    <div class="div-item-preview">
        <div class="div-tooltip">${postData["div tooltip"]}</div>
        <img class="img-item" src="${postData["image thumbnail"]}">
      </div>
      <div class="div-info-flex">
        <p class="text-item-name">
        ${postData["item name"]}
        </p>
        <p class="text-info">
          ${postData.info}
        </p>
      </div>
    `;
      cardContainer.appendChild(postElement);
  });
}

postMethod();
}

function renderSodaLemonade() {
  const cardContainer = document.querySelector('.grid-container-soda-lemonade');

  const postMethod = () =>{
  sodaLemonade.map((postData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('div-item-container');
    postElement.innerHTML = `
    <div class="div-item-preview">
        <div class="div-tooltip">${postData["div tooltip"]}</div>
        <img class="img-item" src="${postData["image thumbnail"]}">
      </div>
      <div class="div-info-flex">
        <p class="text-item-name">
        ${postData["item name"]}
        </p>
        <p class="text-info">
          ${postData.info}
        </p>
      </div>
    `;
      cardContainer.appendChild(postElement);
  });
}

postMethod();
}

