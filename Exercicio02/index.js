
function DataExtenso() {
    var data_informada = '14/06/2000';
    meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
    semana = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");
 var dia_informado = data_informada.split('/')[0];
 var mes_informado = data_informada.split('/')[1];
 var ano_informado = data_informada.split('/')[2];
 var data = ano_informado + '-' + mes_informado + '-' + dia_informado + " 00:00:00";
 var dataInfo = new Date(data);
 var dia = dataInfo.getDate();
 var dias = dataInfo.getDay();
 var mes = dataInfo.getMonth();
 var ano = dataInfo.getFullYear();
 var diaext = semana[dias] + ", " + dia + " de " + meses[mes] + " de " + ano;
 return diaext;
 console.log(data_informada); 
 }
