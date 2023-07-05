function sendEmail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const ss = sheet.getSheetByName('E-mail 📧');
  let dados = ss.getRange('A9:M9').getValues();
  //Logger.log(dados);

  //-----------------------------------------------------------------------------------------------
  let dataSaida = dados[0][0];
  //Logger.log(dataSaida);
  let horaSaida = dados[0][1];
  //Logger.log(horaSaida);
  let horaChegada = dados[0][2];
  //Logger.log(horaChegada);
  let previsaoRetorno = dados[0][3];
  //Logger.log(previsaoRetorno);
  //-----------------------------------------------------------------------------------------------

  let = numeroSolicitacao = ss.getRange('C3').getValue();
  //Logger.log(numeroSolicitacao)

  let destinatario = 'pref.cac@ifrj.edu.br';

  let assunto = 'Veículo oficial: Autorização da solicitação número '+numeroSolicitacao;
  //Logger.log(assunto)

  let corpo = "Prezados,<br><br>"+
              "Autorizo a solicitação número "+numeroSolicitacao+", conforme segue abaixo.<br><br>"+
              "<table border = '1'>"+
              "<tr><th>Data da Saída</th><th>Hora da saída da origem</th><th>Hora de chegada ao destino</th><th>Previsão de retorno</th><th>Setor solicitante</th><th>Solicitante (Nome completo)</th><th>Logradouro</th><th>Número</th><th>Complemento</th><th>Bairro</th><th>Cidade</th><th>UF</th><th>Motivo da solicitação</th>";

  
  for (let i=0; i<dados.length;i++){
    corpo += "<tr><td>"+formataData(dataSaida)+"</td><td>"+formataHora(horaSaida)+"</td><td>"+formataHora(horaChegada)+"</td><td>"+formataHora(previsaoRetorno)+"</td><td>"+dados[i][4]+"</td><td>"+dados[i][5]+"</td><td>"+dados[i][6]+"</td><td>"+dados[i][7]+"</td><td>"+dados[i][8]+"</td><td>"+dados[i][9]+"</td><td>"+dados[i][10]+"</td><td>"+dados[i][11]+"</td><td>"+dados[i][12]+"</td></tr>";
  }

  corpo+="</table><br>Atenciosamente,"

  MailApp.sendEmail(destinatario,assunto,"",{htmlBody: corpo});

  const ui = SpreadsheetApp.getUi();
  ui.alert('Autorização veicular','E-mail enviado com sucesso. Verifique seus e-mails enviados.',ui.ButtonSet.OK);

}

function sendEmailPref(){

  const sheet2 = SpreadsheetApp.getActiveSpreadsheet();
  const ss2 = sheet2.getSheetByName('Confirmação Prefeitura');

  let dados2 = ss2.getRange('A9:M9').getValues();
  //Logger.log(dados2);

  let dataSaida = dados2[0][0];
  //Logger.log(dataSaida);
  let horaSaida = dados2[0][1];
  //Logger.log(horaSaida);
  let horaChegada = dados2[0][2];
  //Logger.log(horaChegada);
  let previsaoRetorno = dados2[0][3];
  //Logger.log(previsaoRetorno);


  let nomeDestinatario = ss2.getRange('F9').getValue();
  //Logger.log(nomeDestinatario);

  let assunto = 'Solicitação veicular autorizada.';

  let destinatario = ss2.getRange('H3').getValue();

  let corpo = "Prezado "+nomeDestinatario+",<br><br>"+
              "A sua solicitação veicular foi deferida. Seguem abaixo as informações da sua solicitação.<br><br>"+
              "<table border = '1'>"+
              "<tr><th>Data da Saída</th><th>Hora da saída da origem</th><th>Hora de chegada ao destino</th><th>Previsão de retorno</th><th>Setor solicitante</th><th>Solicitante (Nome completo)</th><th>Logradouro</th><th>Número</th><th>Complemento</th><th>Bairro</th><th>Cidade</th><th>UF</th><th>Motivo da solicitação</th>";
  for (let i=0; i<dados2.length;i++){
    corpo+="<tr><td>"+formataData(dataSaida)+"</td><td>"+formataHora(horaSaida)+"</td><td>"+formataHora(horaChegada)+"</td><td>"+formataHora(previsaoRetorno)+"</td><td>"+dados2[i][4]+"</td><td>"+dados2[i][5]+"</td><td>"+dados2[i][6]+"</td><td>"+dados2[i][7]+"</td><td>"+dados2[i][8]+"</td><td>"+dados2[i][9]+"</td><td>"+dados2[i][10]+"</td><td>"+dados2[i][11]+"</td><td>"+dados2[i][12]+"</td></tr>"
  }

  corpo +="</table><br><br>Boa viagem!"

  MailApp.sendEmail(destinatario,assunto,"",{htmlBody: corpo});

  const ui = SpreadsheetApp.getUi();
  ui.alert('Autorização veicular','E-mail enviado com sucesso. Verifique seus e-mails enviados.',ui.ButtonSet.OK);

}

function formataData(data){
  let dataFormatada = new Date(data);
  return dataFormatada.toLocaleDateString('pt-BR');
}

function formataHora(hora){
  if(hora === ''){
    return 'Não há previsão de retorno'
  }else{
    let horaFormatada = new Date(hora);
    return horaFormatada.toLocaleTimeString('pt-BR');
  }
  
}
