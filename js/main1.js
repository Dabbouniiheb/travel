/*let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");

window.onscroll = () =>{
    searchBtn.classlist.remove("fa-times");
    searchBtr.classlist.remove("active");
}
searchBtn.addEventListener("click",(),=>{
    searchBtn.classlist.toggle("fa-times");
    searchBtr.classlist.toggle("active");
});

formBtn.addEventListener("click",(),=>{
    
    searchBtr.classlist.add("active");
});

formClose.addEventListener("click",(),=>{
    
    searchBtr.classlist.remove("active");
});*/


var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
});

function clickReservation() {
    let reponse = confirm("Êtes-vous sûr de vouloir faire la réservation ?");
    
    if (reponse) {
        // Action si l'utilisateur clique sur "OK"
        console.log("Réservation confirmée");
    } else {
        // Action si utilisateur clique "Annuler"
        console.log("Réservation annulée");
    }
}

/*fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("forfaitContainer");

    data.forfaits.forEach(item => {

      let stars = "";
      for(let i = 0; i < item.rating; i++){
        stars += '<i class="fas fa-star"></i>';
      }

      const box = `
        <div class="box">
          <img src="${item.image}" alt="">
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i> ${item.name}</h3>

            <p>${item.desc}</p>

            <div class="stars">
              ${stars}
            </div>

            <div class="price">
              $${item.price} <span>$${item.oldPrice}</span>
            </div>

            <br>
            <a href="#reserver" class="btn">reserver</a>
          </div>
        </div>
      `;

      container.innerHTML += box;

    });

  });*/
  fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("forfaitContainer");

    data.forfaits.forEach(item => {

      let stars = "";
      for(let i = 0; i < item.rating; i++){
        stars += '<i class="fas fa-star"></i>';
      }

      const box = `
        <div class="box">
          <img src="${item.image}" alt="">
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i> ${item.name}</h3>

            <p>${item.desc}</p>

            <div class="stars">
              ${stars}
            </div>

            <div class="price">
              $${item.price} <span>$${item.oldPrice}</span>
            </div>

            <br>
            <a href="#reserver" class="btn">reserver</a>
            <a href="#" class="btn1"> detail</a>
          </div>
        </div>
      `;

      container.innerHTML += box;

    });

  });


  

