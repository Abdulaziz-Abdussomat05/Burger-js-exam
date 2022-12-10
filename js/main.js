"use strict";
window.addEventListener("DOMContentLoaded", () => {
  
  let btns = document.querySelectorAll(".main__lists button");
  let promoPrice = document.querySelector(".prices")
  let textMoney = document.querySelector(".Math__section h1");
  let burgerProducts = document.querySelectorAll(".burger__in")
  let cheaseImg = document.querySelector(".chease__img");
  let meatImg = document.querySelector(".meat__img");
  let onionImg = document.querySelector(".onionImg");
  let saladImg = document.querySelector(".saladImg");
  let tomatoImg = document.querySelector(".tomatoImg");
  let pickleImg = document.querySelector(".pickleImg");
  let restart = document.querySelector(".res__btn");

  burgerProducts.forEach((item) => {
    item.style.display = "none"
  })

  restart.addEventListener("click", (event) => {
    event.target.reset()
  })
  
  const Chease = +"2";
  const Meet = +"5";
  const Onion = +"1";
  const Salad = +"1";
  const Tomato = +"2";
  const Pickle = +"3";
  const Bread = +"2";
  
  const PricesDb = {
    Prices : [
      `Chease ${Chease}$`,
      `Meet ${Meet}$`,
      `Onion ${Onion} $`,
      `Salad ${Salad} $`,
      `Tomato ${Tomato} $`,
      `Pickle ${Pickle} $`,
      `Bread ${Bread} $`,
    ],
  };
  
  
  //  function MathList() {
  
  //  }
  
let money = 2;
  
btns[0].addEventListener("click", () => {
  cheaseImg.style.display = "block"
  money += Chease;
  textMoney.textContent = `${money} $`
  cheaseImg.addEventListener("click", () => {
    cheaseImg.style.display = "none"
    money -= Chease;
    textMoney.textContent = `${money} $`
  })
  })
  btns[1].addEventListener("click", () => {
    meatImg.style.display = "block";
    money += Meet;
    textMoney.textContent = `${money} $`;
    meatImg.addEventListener("click", () => {
      meatImg.style.display = "none";
      money -= Meet;
      textMoney.textContent = `${money} $`
    });
    
  });
  btns[2].addEventListener("click", () => {
    onionImg.style.display = "block";
    money += Onion;
    textMoney.textContent = `${money} $`;
    onionImg.addEventListener("click", () => {
      onionImg.style.display = "none";
      money -= Onion;
      textMoney.textContent = `${money} $`
    });
  
  });
  btns[3].addEventListener("click", () => {
    saladImg.style.display = "block";
    money += Salad;
    textMoney.textContent = `${money} $`;
    saladImg.addEventListener("click", () => {
      saladImg.style.display = "none";
      money -= Salad;
      textMoney.textContent = `${money} $`
    });
  
  });
  btns[4].addEventListener("click", () => {
    tomatoImg.style.display = "block";
    money += Tomato;
    textMoney.textContent = `${money} $`;
    tomatoImg.addEventListener("click", () => {
      tomatoImg.style.display = "none";
      money -= Tomato;
      textMoney.textContent = `${money} $`
    });
  
  });
  btns[5].addEventListener("click", () => {
    pickleImg.style.display = "block";
    money += Pickle;
    textMoney.textContent = `${money} $`;
    pickleImg.addEventListener("click", () => {
      pickleImg.style.display = "none";
      money -= Pickle;
      textMoney.textContent = `${money} $`
    });
  
  });
  
  burgerProducts.forEach((item) => {
    item.addEventListener("click", () => {
      item.style.display = "none";
       
    })
    item.style.display = "none"
  })
  promoPrice.innerHTML = ``;
  
  PricesDb.Prices.forEach((item,ind) => {
    promoPrice.innerHTML += `
    <li>${ind + 1}:${item}</li>
    ` 
  })
})

 

  
  


