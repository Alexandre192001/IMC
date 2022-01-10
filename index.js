document.querySelector(".btn_imc").addEventListener("click",
()=>{
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;  
  const imc = (Number(peso)/Number(altura*altura)).toFixed(1);

  if(peso=="" || altura==""){
    window.alert("Preencha todos os campos")
  } else{
  if(imc<18.5){
    document.querySelector(".resultado").innerHTML =`
      IMC - ${imc} \n /
      Situação - Abaixo do peso
    `;
    } else if(imc<25){
      document.querySelector(".resultado").innerHTML =`
      IMC - ${imc} \n /
      Situação - Peso normal
    `;
    } else if(imc<30){
      document.querySelector(".resultado").innerHTML =`
      IMC - ${imc} \n/
      Situação - Sobrepeso
    `;
    } else if(imc<35){
      document.querySelector(".resultado").innerHTML =`
      IMC - ${imc} \n/
      Situação - Obesidade grau I
    `;

    } else if(imc<40){
      document.querySelector(".resultado").innerHTML =`
      IMC - ${imc} \n/
      Situação - Obesidade grau II
    `;
    }
    else{
      document.querySelector(".resultado").innerHTML =`
      IMC - ${imc} \n/
      Situação - Obesidade grau III ou Mórbida
    `;
    }
  }
})