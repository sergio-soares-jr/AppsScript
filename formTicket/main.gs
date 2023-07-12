function barraLateral(){

  const html = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('CADASTRAR TICKET');

  SpreadsheetApp.getUi().showSidebar(html);
}

function adicionarDados(dados){
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BD');
  sheet.appendRow([dados.data, dados.placa, dados.modelo, dados.litros, dados.valor]);

}
