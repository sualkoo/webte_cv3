var poleNemocnic;
var poleMiest;
var selectCity = document.getElementById('cityForm');
var selectArea = document.getElementById('otherarea');
selectArea.style.display = 'none';
selectCity.style.visibility = 'hidden';
var selectHospital = document.getElementById('hospitalForm');
selectHospital.style.visibility = 'hidden';
var miestaOckovania = ['Bratislava','Trnava','Nitra','Trencin','Zilina','Banska Bystrica','Presov','Kosice'];

var pfizerMiesta = ['Bratislava','Trnava','Nitra','Trencin','Zilina','Banska Bystrica','Presov','Kosice'];
var modernaMiesta = ['Bratislava','Trencin','Zilina','Kosice'];
var janssenMiesta = ['Bratislava', 'Zilina', 'Banska Bystrica','Presov','Kosice']

var bratislavaNemocnice = ['Poliklinika Mlynská Dolina', 'Onkologický ústav sv. Alžbety', 'UNsP Milosrdní bratia']
var trnavaNemocnice = ['FN Trnava - starý areál']
var trencinNemocnice = ['FN Trenčín','Trenčín JUH', 'Poliklinika Trenčín']
var nitraNemocnice = ['FN Nitra', 'VKOC Nitra','Medicínske centrum Nitra']
var zilinaNemocnice = ['FN Žilina','ŽILPO Žilina']
var bbNemocnice = ['FNsP F.D. Roosevelta Banská Bystrica','VKOC Banská Bystrica']
var presovNemocnice = ['FNsP J.A. Reimana Prešov']
var kosiceNemocnice = ['UN L. Pasteura Košice','VKOC Košice']
    
function vaccineChanged(vaccine){ 
    var selectCity = document.getElementById('cityForm');
    selectCity.style.visibility = 'visible';
    var selectVaccine = document.getElementById('vaccine')
    var selectCity = document.getElementById('city');
    selectCity.innerHTML = '';
    var selectHospital = document.getElementById('hospital');
    selectHospital.innerHTML = '';
    switch(vaccine)
    {
        case 'Pfizer': poleMiest = pfizerMiesta
        break;
        case 'Janssen': poleMiest = janssenMiesta
        break;
        case 'Moderna': poleMiest = modernaMiesta
    }

    console.log(poleMiest)

    for ( let i = 0; i < poleMiest.length; i++) 
    {
        var option = document.createElement('option'); 
        option.text = poleMiest[i];
        option.value = poleMiest[i];
        selectCity.add(option);
    }    
}
    
function cityChanged(city){ 
    var selectHospital = document.getElementById('hospitalForm');
    selectHospital.style.visibility = 'visible';
    var selectCity = document.getElementById('city');
    var selectHospital = document.getElementById('hospital');
    selectHospital.innerHTML = '';
    switch(city) 
    {
        case 'Bratislava': poleNemocnic = bratislavaNemocnice
        break;
        case 'Kosice':  poleNemocnic = kosiceNemocnice
        break;
        case 'Zilina':  poleNemocnic = zilinaNemocnice
        break;
        case 'Trencin':  poleNemocnic = trencinNemocnice
        break;
        case 'Banska Bystrica':  poleNemocnic = bbNemocnice
        break;
        case 'Trnava':  poleNemocnic = trnavaNemocnice
        break;
        case 'Nitra':  poleNemocnic = nitraNemocnice
        break;
        case 'Presov':  poleNemocnic = presovNemocnice
        break;
    }

    console.log(poleNemocnic)

    for ( let i = 0; i < poleNemocnic.length; i++)
    {
      var option = document.createElement('option'); 
      option.text = poleNemocnic[i];
      option.value = poleNemocnic[i];
      selectHospital.add(option);
    }
}

function hide(){

    var ine = document.getElementById("other");
    console.log(ine.checked)
    if (ine.checked){
        document.getElementById("otherarea").style.display='block'
    }
    else{
        document.getElementById("otherarea").style.display='none'
    }
}

function hideVaccine(){
    var yes = document.getElementById("y");
    var no = document.getElementById("n");
    if (yes.checked){
        document.getElementById("hideVaccine").style.display='block'
    }
    if(no.checked){
        document.getElementById("hideVaccine").style.display='none'
    }
}

function validate(){
  var ageDatePicker= document.getElementById("start").value;
  var ageEntered = document.getElementById("age").value;
  var email = document.getElementById("mail").value;  
  var pole = ageDatePicker.split('-');
  var y = new Date();
  var n0 = y.getFullYear();
  var m = new Date();
  var n1 = m.getMonth()+1;
  var d = new Date();
  var n2 = d.getDate();  
  var suc1=(pole[0]*10000)+(pole[1]*100)+pole[2]*1;
  if (ageEntered==ageDatePicker){
      console.log(ageEntered, ageDatePicker);
      var button = document.getElementById("submitButton");
      button.disabled=false;
  }
  else{
    var button = document.getElementById("submitButton");
      button.disabled=true;
  }  
}

document.getElementById("y").addEventListener("change",function(){
    document.getElementById("hideVaccine").style.visibility='visible';
})