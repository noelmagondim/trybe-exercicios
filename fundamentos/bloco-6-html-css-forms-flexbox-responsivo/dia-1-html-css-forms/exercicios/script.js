let states = document.querySelector('#state');

function createStateOptions() {
    
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
    for (let index = 0; index < stateOptions.length; index += 1) {
      let option = document.createElement('option');
      option.innerText = stateOptions[index];
      option.value = stateOptions[index];
      states.appendChild(option);
    }
}
createStateOptions();
/*
  Data de início - Texto
  Verificar o formato da data dd/mm/aaaa .
  O dia deve ser > 0 e <= 31.
  O mês deve ser > 0 e <= 12.
  O ano não pode ser negativo.
  Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
  Campo obrigatório
*/