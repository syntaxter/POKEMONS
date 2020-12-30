
var datos = fetch("https://pokeapi.co/api/v2/pokemon/")
   .then(res => res.json())
   .then(data => datos = data)
   function cambiarTodo() {
      document.getElementById("titulo-vr").innerText = datos.results[0].name;
         }

   var dataImg;
   var imagen = fetch("https://pokeapi.co/api/v2/pokemon/2/")
    .then(response => response.json() )
    .then(data => dataImg = data)
    function imagenCha() {
        document.getElementById("miniatura").src = dataImg.sprites.other.dream_world.front_default;
    }

function name1() {
        document.getElementById("namePokemon").innerText = datos.results[0].name;
    }

    
    function ejecutar() {
        imagenCha()
        cambiarTodo()
        name1()
    }


var botonBuscar = document.getElementById("clicMenu");

botonBuscar.addEventListener("click",openMenu)

function openMenu() {
    document.getElementById("keyP").value="";
    gsap.fromTo(".busqueda", {opacity:0,display:"none"}, {duration: 2,opacity:1,display:"flex"});
    document.querySelector(".busqueda").dataset.test="mostrar";
    


}
    setTimeout(ejecutar,1000)

var input = document.getElementById("keyP");
input.addEventListener("keydown",myFunction)

function myFunction(event) {
  var x = event.key;
  console.log(x);

  if(x== "Escape" || x== "Enter") {
       gsap.to(".busqueda", {duration: 2,opacity:0, display:"none"});
   
  }

  if(x == "Enter") {
    var texto = input.value.toLowerCase();
    for (var i=0; i < datos.results.length; i++) {
        arraBusquda = datos.results;
        if(arraBusquda[i].name == texto) {
            document.getElementById("titulo-vr").innerText = datos.results[i].name;
            document.getElementById("namePokemon").innerText = datos.results[i].name;

            //obtencion de miniaturas
            var min = fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
                .then(response => response.json() )
                .then(data => min = data)
                .then(min => document.getElementById("miniatura").src= min.sprites.other.dream_world.front_default)
            //obtener el texto del poder
            var poder = fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
                .then(response => response.json() )
                .then(data => poder = data)
                .then(poder => document.getElementById("move").innerText= poder.moves[0].move.name)

                  
                
            break;
        } else {
            console.log("No es igual")

        }
    } 
  }

}




 