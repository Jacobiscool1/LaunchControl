showTime();
var gasLevel = 0, park = 1, traction = 1 , battery = 0,  intMode = 0 ;

function getGas() {
    if (gasLevel == 0){
        gasLevel = 1;
        document.getElementById('bttn_gas').src='./assets/images/bttn_gas_1.PNG';
        document.getElementById('gas').src='./assets/images/gas1.png';
    }
    else {
        gasLevel = 0;
        document.getElementById('bttn_gas').src='./assets/images/bttn_gas_0.PNG';
        document.getElementById('gas').src='./assets/images/gas0.png';
    }
}
function parkBrake(){
    if (park == 0){
        park= 1;
        document.getElementById('bttn_park').src='./assets/images/bttn_park_1.PNG';
        document.getElementById('brake').src='./assets/images/p1.PNG';
    }
    else {
        park= 0;
        document.getElementById('bttn_park').src='./assets/images/bttn_park_0.PNG';
        document.getElementById('brake').src='./assets/images/p0.PNG';
    }
}
function tractionControl() {
    if (traction == 0){
        traction = 1;        
        document.getElementById('bttn_trac').src='./assets/images/bttn_trac_1.PNG';
        document.getElementById('trac').src='./assets/images/trac1.PNG';
    }
    else {
        traction = 0;
        document.getElementById('bttn_trac').src='./assets/images/bttn_trac_0.PNG';
        document.getElementById('trac').src='./assets/images/trac0.PNG';
    }
}
function chargeBattery() {
    if (battery == 0){
        battery = 1;
        document.getElementById('bttn_batt').src='./assets/images/bttn_batt_1.PNG';
        document.getElementById('batt').src='./assets/images/batt1.PNG';
    }
    else {
        battery = 0;
        document.getElementById('bttn_batt').src='./assets/images/bttn_batt_0.PNG';
        document.getElementById('batt').src='./assets/images/batt0.PNG';
    }
}
function setMode(){
    var status = document.getElementById('mode');
    var shifter = document.getElementById('bttn_shifter');
    switch(intMode){
        case 0:
            intMode = 1;
            shifter.style.top = '725px';
            status.innerText = 'ECO PRO';
            break;
        case 1:
            intMode = 2;
            shifter.style.top = '750px';
            status.innerText = 'COMFORT';
            break;
        case 2:
            intMode = 3;
            shifter.style.top = '775px';
            status.innerText = 'SPORT';
            break;
        default:
            intMode = 4;
            shifter.style.top = '700px';
            status.innerText = 'PARK'
            break;
    
            
    }
}
