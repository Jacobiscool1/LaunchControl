showTime();
var gasLevel = 0, park = 0, traction = 0 , battery = 0;

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
        document.getElementById('bttn_trac').src='/assets/images/bttn_trac_1.PNG';
        document.getElementById('trac').src='./assets/images/trac0.PNG';
    }
    else {
        traction = 0;
        document.getElementById('bttn_trac').src='/assets/images/bttn_trac_0.PNG';
        document.getElementById('trac').src='./assets/images/trac1.PNG';
    }
}
function chargeBattery() {
    if (battery == 0){
        battery = 1;
        document.getElementById('bttn_batt').src='./assets/images/bttn_batt_0.PNG';
        document.getElementById('batt').src='./assets/images/batt0.PNG';
    }
    else {
        battery = 0;
        document.getElementById('bttn_batt').src='./assets/images/bttn_batt_1.PNG';
        document.getElementById('batt').src='./assets/images/batt1.PNG';
    }
}
