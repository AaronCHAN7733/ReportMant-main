
const maxCharacters = 500;
const inputText = document.getElementById("problema");
const count = document.getElementById("count");

count.innerText = `Characters remaining: ${maxCharacters}`;

inputText.addEventListener("input", function() {
    let charactersUsed = inputText.value.length;
    count.innerText = `Characters remaining: ${maxCharacters - charactersUsed}`;

    if (charactersUsed > maxCharacters) {
        alert("Se ha superado el límite de caracteres.");
    }
});

function Mensaje (){
    alert("Reporte enviado");
}
document.getElementById('reporteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);

    // Aquí puedes enviar los datos al servidor utilizando una solicitud HTTP.
});




/*    formulario        */
//Javacript for the scroll indicator bar
window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";
  });

  //Responsive navigation menu toggle
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });

  var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);

    