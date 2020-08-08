window.addEventListener('load', start);

function start() {
  button();
  imcCalc();
}

function button() {
  var button = document.querySelector('#buttonCalc');
  button.addEventListener('click', imcCalc);
}

function imcCalc() {
  var height = document.querySelector('#inputHeight').value;
  var weight = document.querySelector('#inputWeight').value;

  // console.log(height);
  // console.log(weight);

  // uso do toFixed para mostrar apenas 2 casas decimais
  var calc = (weight / (height * height)).toFixed(2);

  // console.log(calc);

  if (calc <= 16.9) {
    alert(
      'Você está muito abaixo do peso, IMC: ' +
        calc +
        ' kg/m2. O que pode acontecer: queda de cabelo, infertilidade, ausência menstrual.'
    );
  }
  if (calc >= 17 && calc <= 18.4) {
    alert(
      'Você está abaixo do peso, IMC: ' +
        calc +
        ' kg/m2. O que pode acontecer: fadiga, stress, ansiedade.'
    );
  }
  if (calc >= 18.5 && calc <= 24.9) {
    alert(
      'Você está com peso normal, IMC: ' +
        calc +
        ' kg/m2. O que pode acontecer: menor risco de doenças cardíacas e vasculares.'
    );
  }
  if (calc >= 25 && calc <= 29.9) {
    alert(
      'Você está acima do peso, IMC: ' +
        calc +
        ' kg/m2. O que pode acontecer: fadiga, má circulação, varizes.'
    );
  }
  if (calc >= 30 && calc <= 34.9) {
    alert(
      'Você está com Obesidade Grau I, IMC: ' +
        calc +
        ' kg/m2. O que pode acontecer: diabetes, angina, infarto, aterosclerose.'
    );
  }
  if (calc >= 35 && calc <= 40) {
    alert(
      'Você está com Obesidade Grau II, IMC: ' +
        calc +
        ' kg/m2. O que pode acontecer: apneia do sono, falta de ar.'
    );
  }
  if (calc > 40) {
    alert(
      'Você está com Obesidade Grau III, IMC: ' +
        calc +
        ' kg/m2. O que pode acontecer: refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.'
    );
  }
}
