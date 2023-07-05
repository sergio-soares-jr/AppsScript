function doGet(){
  return HtmlService.createHtmlOutputFromFile('index');
}

function getDadosPlanilha() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const ss = sheet.getSheetByName('BD');

  let ultimaLinha = ss.getLastRow();
  //Logger.log(ultimaLinha);

  let dados = ss.getRange(1, 1, ultimaLinha, 7).getValues();
  Logger.log(dados);

 
  for (let i = 1; i < dados.length; i++) { 
    dados[i][1]=formataHora(dados[i][1]);
    dados[i][2]=formataHora(dados[i][2]);
    dados[i][3]=formataHora(dados[i][3]);
  }

  for (let i = 1; i < dados.length; i++) {
    dados[i][0] = formataData(dados[i][0]);
  }

  let dadosObjeto = JSON.stringify(dados);
  
  Logger.log(dadosObjeto)
  return dadosObjeto

}

function formataHora(horas){
  if(horas === ''){
    return '-'
  } else {
    return new Date(horas).toLocaleTimeString("pt-Br",{timeStyle: "short",timeZone: "America/Sao_Paulo"})
  }
}

function formataData(data){
  return new Date(data).toLocaleDateString('pt-br');
}
