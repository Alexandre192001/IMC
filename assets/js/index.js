const darkLigth = document.querySelector(".bi-moon-stars-fill")

darkLigth.addEventListener("click", function()  {
  if(this.classList.toggle("bi-sun-fill")){
    this.classList.remove("bi-moon-stars-fill")
    this.style.color="#fff"
    document.querySelector(".container-main").classList.add("dark-container")
    document.querySelector(".titulo-section").classList.add("title-dark")
  } else if(this.classList.toggle("bi-moon-stars-fill")){
    this.classList.remove("bi-sun-fill")
    this.style.color="#000"
    document.querySelector(".container-main").classList.remove("dark-container")
    document.querySelector(".titulo-section").classList.remove("title-dark")
  }
  
})


document.querySelector(".btn_imc").addEventListener("click",
  () => {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;

    const imc = (peso / altura ** 2).toFixed(1);

    if (peso == "" || altura == "") {
      window.alert("Preencha todos os campos")

    } else {
      if (imc < 18.5) {
        document.querySelector(".resultado-peso").innerHTML = `
      IMC : ${imc}
    `;
        document.querySelector(".resultado-situacao").innerHTML = `
    Situação - Abaixo do peso
    `
      } else if (imc < 25) {
        document.querySelector(".resultado-peso").innerHTML = `
      IMC : ${imc}
    `;
        document.querySelector(".resultado-situacao").innerHTML = `
    Situação - Peso normal
    `
      } else if (imc < 30) {
        document.querySelector(".resultado-peso").innerHTML = `
      IMC : ${imc}
      
    `;
        document.querySelector(".resultado-situacao").innerHTML = `
    Situação - Sobrepeso
    `
      } else if (imc < 35) {
        document.querySelector(".resultado-peso").innerHTML = `
      IMC : ${imc}
    `;
        document.querySelector(".resultado-situacao").innerHTML = `
    Situação - Obesidade grau I
    `

      } else if (imc < 40) {
        document.querySelector(".resultado-peso").innerHTML = `
      IMC : ${imc}
    `;
        document.querySelector(".resultado-situacao").innerHTML = `
    Situação - Obesidade grau II
    `
      } else {
        document.querySelector(".resultado-peso").innerHTML = `
      IMC : ${imc} 
      
    `;
        document.querySelector(".resultado-situacao").innerHTML = `
    Situação - Obesidade grau III ou Mórbida
    `
      }

      document.querySelector("#peso").value = ""
      document.querySelector("#altura").value = ""
    }
  })