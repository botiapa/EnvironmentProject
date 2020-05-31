var paneltypes = { pn1:[300, 250000], pn2:[350, 300000], pn3:[400, 350000], pn4:[450, 400000] };
var inverters = { fivekw:500000, tenkw:1000000, more:1500000 }
var smartsystem = 25000;

var main = document.getElementById('calc-main_js');
addEventListener("load", calculate);

function calculate()
{
    var panel_type = document.getElementById('panel_type').value;
    var panel_count = document.getElementById('panel_db').value;
    var daily_usage = document.getElementById('daily_usage').value;

    var selected_panel = paneltypes[panel_type];
    var system_prod = selected_panel[0] * panel_count;
    var daily_prod = system_prod * 9; // KB 9 óra napfénnyel számolunk

    document.getElementById('panel_production').innerHTML = selected_panel[0];
    document.getElementById('panel_systemproduction').innerHTML = system_prod;
    document.getElementById('panel_systemproductionkw').innerHTML = system_prod/1000;
    document.getElementById('panel_dailyproduction').innerHTML = daily_prod/1000;

    var smart_system = document.getElementById('system_type').value == "smart" ? smartsystem : 0;
    var inverter = system_prod/1000 <= 5 ? inverters.fivekw : system_prod/1000 <= 10 ? inverters.tenkw : inverters.more;
    document.getElementById('system_price').innerHTML = selected_panel[1] * panel_count + inverter + panel_count * smart_system;
}