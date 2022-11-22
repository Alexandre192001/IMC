// DARK/LIGTH
const dark = document.querySelector(".dark-ligth-wrapper")

dark.addEventListener("click", () => {
  document.querySelector(".bi-sun-fill").classList.toggle("dark-ligth")
  document.querySelector(".container-main").classList.toggle("dark-container")
  document.querySelector(".titulo-section").classList.toggle("title-dark")
})


/*Botão de calculo IMC*/
document.querySelector(".btn_imc").addEventListener("click",
  () => {
    /*Valores de peso e altura*/
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