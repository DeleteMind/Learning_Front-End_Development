let ano = document.getElementById("ano");
let masc = document.getElementById("masc");
let femi = document.getElementById("femi");
let sub = document.getElementById("submit");
let res = document.getElementById("resultado");

sub.addEventListener("click", checkIdade);

function checkIdade() {
  let anoActual = new Date().getFullYear();
  let anoNascimento = Number(ano.value);
  let idade = anoActual - anoNascimento;

  if (!anoNascimento || anoNascimento > anoActual ) {
    res.innerHTML = 'Por favor, digite um ano válido';
    return
  }



  if (idade <= 2) {
    //Bebé
    res.innerHTML = `Detectamos um bebé com ${idade}`;
  } else if (idade <= 12) {
    //criança
    res.innerHTML = `Detectamos uma criança com ${idade}`;
  } else if (idade <= 17) {
    //adolescente
    res.innerHTML = `Detectamos um adolescente com ${idade}`;
  } else if (idade < 60) {
    //adulto
    res.innerHTML = `Detectamos um adulto com ${idade}`;
  } else {
    res.innerHTML = `Detectamos um idoso com ${idade}`;
    //idoso
  }
}
