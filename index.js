function calcularSalarioMensual(salarioAnual){
  return salarioAnual/12
}
  
function calcularSalarioAnual(salarioMensual){
  return salarioMensual*12
}

function cambiarTipodeSalario(tipoDeSalario){
  if(tipoDeSalario==="salario-mensual"){
    document.querySelector("#tipo-de-salario-resultado").textContent="Tu Salario Anual"
  }
  else if(tipoDeSalario==="salario-anual"){
    document.querySelector("#tipo-de-salario-resultado").textContent="Tu Salario Mensual"
  }
}
  
const $botonIngresar=document.querySelector("#boton-calcular")
  
$botonIngresar.onclick= function(){
  document.querySelector("#tipo-salario").style.borderColor=""
  let $salarioUsuario=document.querySelector("#salario-usuario").value
  let $salarioResultado=document.querySelector("#salario-resultado")
  let $tipoDeSalario=document.querySelector("#tipo-salario").value
    
    
  if($tipoDeSalario==="salario-mensual"){
    cambiarTipodeSalario($tipoDeSalario)
    $salarioResultado.value=calcularSalarioAnual($salarioUsuario)
  }
  else if($tipoDeSalario==="salario-anual"){
    cambiarTipodeSalario($tipoDeSalario)
    $salarioResultado.value=calcularSalarioMensual($salarioUsuario)
  }
  else{
    document.querySelector("#tipo-salario").style.borderColor="red"
  }
    
  return false
}
  

  
  
  