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

    // Obtener una referencia al botón
var boton = document.getElementById("miBoton");

// Agregar un event listener para el evento de clic
boton.addEventListener("click", function() {
    // Obtener el valor del mensaje desde el campo de texto
    var mensaje = document.getElementById("message").value;

    // Mostrar el mensaje en la consola
    console.log("Mensaje enviado: " + mensaje);
});



    