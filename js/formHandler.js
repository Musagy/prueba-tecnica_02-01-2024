let form = document.querySelector("form")

form.addEventListener("submit", event => {
  event.preventDefault()

  // Se selecciona los valores del los input necesarios para validar
  let dni = document.querySelector("#dni").value
  let phone = document.querySelector("#phone").value

  // Validando DNI
  if (dni.length !== 8) {
    alert("El DNI debe tener 8 dígitos")
    return
  }

  // Validando teléfono
  if (phone.length !== 9) {
    alert("El número de teléfono debe tener 9 dígitos")
    return
  }

  // Enviando a la pagina de resultado
  let resultRute = window.location.href + "/result.html"
  window.location.href = resultRute
})
