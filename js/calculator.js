var paneldata = { cost: 125000, watt:280};
var inverters = { twok:250000, threek:300000, fourk:400000, fivek:500000, more:1000000 };
var smartsystem = 25000;

var electricityCost = 48;

var months = [0.166, 0.416, 0.65, 0.75, 0.83, 1, 0.96, 0.90, 0.78, 0.541, 0.209];

var main = document.getElementById('calc-main_js');
addEventListener("load", calculate);

function calculate()
{
    // GET INPUTS AND REQUIRED ELEMENTS
    var monthly_cost = document.getElementById('monthly_electricity_cost').value;

    var monthly_wattage = document.getElementById('monthly_wattage');
    var panel_count = document.getElementById('panel_count');
    var system_cost = document.getElementById('system_cost');
    var monthly_generated = document.getElementById('monthly_generated');
    var yearly_generated = document.getElementById('yearly_generated');
    var daily_prod = document.getElementById('daily_prod');

    monthly_wattage.innerHTML =  Math.round(monthly_cost / electricityCost);
    
    var panel_monthly_generated = paneldata.watt * 10 * 30 / 1000;
    panel_count.innerHTML = Math.ceil(monthly_wattage.innerHTML/panel_monthly_generated);

    daily_prod.innerHTML = paneldata.watt * panel_count.innerHTML;

    var temp = paneldata.watt * panel_count.innerHTML;
    var inverter = temp <= 2000 ? inverters.twok : temp <= 3000 ? inverters.threek : temp <= 4000 ? inverters.fourk : temp <= 5000 ? inverters.fivek : inverters.more;
    var smart = document.getElementById('system_type').value == 'smart' ? smartsystem : 0;
    system_cost.innerHTML = panel_count.innerHTML * paneldata.cost + inverter + smart * panel_count.innerHTML;

    monthly_generated.innerHTML = panel_monthly_generated * panel_count.innerHTML;

    var yearly_sum = 0;
    months.forEach(element => {
        yearly_sum += monthly_generated.innerHTML * element;
    });

    yearly_generated.innerHTML = yearly_sum / 1000;
}