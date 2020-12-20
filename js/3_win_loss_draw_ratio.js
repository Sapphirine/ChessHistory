am4core.ready(function() {
am4core.useTheme(am4themes_animated);

// Create chart instance
var mainContainer = am4core.create("win_loss_draw_ratio", am4core.Container);
    mainContainer.width = am4core.percent(100);
    mainContainer.height = am4core.percent(100);
    mainContainer.layout = "horizontal";

var chart3 = mainContainer.createChild(am4charts.XYChart);

var title = chart3.titles.create();
    title.text = "Game results over time (All Openings)";
    title.fontSize = 25;
    title.marginBottom = 10;

var buttonContainer = mainContainer.createChild(am4core.Container);
    buttonContainer.layout = "vertical";
    buttonContainer.width = am4core.percent(50);
    buttonContainer.height = am4core.percent(100);
    var label = buttonContainer.createChild(am4core.Label);
    label.text = "Mouseover openings to update chart";
    label.align = "center";
    label.paddingTop = 20;

var button0 = buttonContainer.createChild(am4core.Button);
    button0.label.text = "All openings";
    button0.align = "center";
    button0.marginTop = 15;
    button0.id = "All"
    button0.width = 250
    button0.background.fill = am4core.color("#B2BABB");

    button0.tooltipHTML = "<img src='../img/Other.png' style='vertical-align:bottom; margin-right: 10px; width:100px; height:100px;'>";
    button0.tooltip.getFillFromObject = false;
    button0.tooltip.background.fill = am4core.color("#85C1E9");
    button0.tooltip.getStrokeFromObject = true;
    button0.tooltip.background.strokeWidth = 3;
    button0.tooltip.pointerOrientation = "right";
    button0.tooltip.background.cornerRadius = 5;
    button0.tooltipX = am4core.percent(0);
    button0.tooltipY = am4core.percent(50);

var button1 = buttonContainer.createChild(am4core.Button);
    button1.label.text = "Sicilian Defense";
    button1.align = "center";
    button1.marginTop = 15;
    button1.id = "Sicilian Defense"
    button1.width = 250
    button1.background.fill = am4core.color("#B2BABB");


    button1.tooltipHTML = "<img src='../img/Sicilian Defense.PNG' style='vertical-align:bottom; margin-right: 10px; width:100px; height:100px;'>";
    button1.tooltip.getFillFromObject = false;
    button1.tooltip.background.fill = am4core.color("#B2BABB");
    button1.tooltip.getStrokeFromObject = true;
    button1.tooltip.background.strokeWidth = 3;
    button1.tooltip.pointerOrientation = "vertical";
    button1.tooltip.background.cornerRadius = 5;
    button1.tooltipX = am4core.percent(0);
    button1.tooltipY = am4core.percent(50);


var button2 = buttonContainer.createChild(am4core.Button);
    button2.label.text = "Indian Game";
    button2.align = "center";
    button2.marginTop = 15;
    button2.id = "Indian Game"
    button2.width = 250
    button2.background.fill = am4core.color("#B2BABB");

    button2.tooltipHTML = "<img src='../img/Indian Game.PNG' style='vertical-align:bottom; margin-right: 10px; width:100px; height:100px;'>";
    button2.tooltip.getFillFromObject = false;
    button2.tooltip.background.fill = am4core.color("#FFF");
    button2.tooltip.getStrokeFromObject = true;
    button2.tooltip.background.strokeWidth = 3;
    button2.tooltip.pointerOrientation = "right";
    button2.tooltip.background.cornerRadius = 5;
    button2.tooltipX = am4core.percent(0);
    button2.tooltipY = am4core.percent(50);

var button3 = buttonContainer.createChild(am4core.Button);
    button3.label.text = "Reti Opening";
    button3.align = "center";
    button3.marginTop = 15;
    button3.id = "Reti Opening"
    button3.width = 250
    button3.background.fill = am4core.color("#B2BABB");

    button3.tooltipHTML = "<img src='../img/Reti Opening.PNG' style='vertical-align:bottom; margin-right: 10px; width:100px; height:100px;'>";
    button3.tooltip.getFillFromObject = false;
    button3.tooltip.background.fill = am4core.color("#FFF");
    button3.tooltip.getStrokeFromObject = true;
    button3.tooltip.background.strokeWidth = 3;
    button3.tooltip.pointerOrientation = "right";
    button3.tooltip.background.cornerRadius = 5;
    button3.tooltipX = am4core.percent(0);
    button3.tooltipY = am4core.percent(50);

var button4 = buttonContainer.createChild(am4core.Button);
    button4.label.text = "French Defense";
    button4.align = "center";
    button4.marginTop = 15;
    button4.id = "French Defense"
    button4.width = 250
    button4.background.fill = am4core.color("#B2BABB");

    button4.tooltipHTML = "<img src='../img/French Defense.PNG' style='vertical-align:bottom; margin-right: 10px; width:100px; height:100px;'>";
    button4.tooltip.getFillFromObject = false;
    button4.tooltip.background.fill = am4core.color("#FFF");
    button4.tooltip.getStrokeFromObject = true;
    button4.tooltip.background.strokeWidth = 3;
    button4.tooltip.pointerOrientation = "right";
    button4.tooltip.background.cornerRadius = 5;
    button4.tooltipX = am4core.percent(0);
    button4.tooltipY = am4core.percent(50);

var button5 = buttonContainer.createChild(am4core.Button);
    button5.label.text = "Queen's Gambit Declined";
    button5.align = "center";
    button5.marginTop = 15;
    button5.id = "Queen's Gambit Declined"
    button5.width = 250
    button5.background.fill = am4core.color("#B2BABB");

    button5.tooltipHTML = "<img src='../img/Queens Gambit Declined.PNG' style='vertical-align:bottom; margin-right: 10px; width:100px; height:100px;'>";
    button5.tooltip.getFillFromObject = false;
    button5.tooltip.background.fill = am4core.color("#FFF");
    button5.tooltip.getStrokeFromObject = true;
    button5.tooltip.background.strokeWidth = 3;
    button5.tooltip.pointerOrientation = "right";
    button5.tooltip.background.cornerRadius = 5;
    button5.tooltipX = am4core.percent(0);
    button5.tooltipY = am4core.percent(50);

var button6 = buttonContainer.createChild(am4core.Button);
    button6.label.text = "Queen's Gambit Accepted";
    button6.align = "center";
    button6.marginTop = 15;
    button6.marginLeft = 125;
    button6.marginRight = 125;
    button6.id = "Queen's Gambit Accepted"
    button6.width = 250
    button6.background.fill = am4core.color("#B2BABB");

    button6.tooltipHTML = "<img src='../img/Queens Gambit Accepted.PNG' style='vertical-align:bottom; margin-right: 10px; width:100px; height:100px;'>";
    button6.tooltip.getFillFromObject = false;
    button6.tooltip.background.fill = am4core.color("#FFF");
    button6.tooltip.getStrokeFromObject = true;
    button6.tooltip.background.strokeWidth = 3;
    button6.tooltip.pointerOrientation = "right";
    button6.tooltip.background.cornerRadius = 5;
    button6.tooltipX = am4core.percent(0);
    button6.tooltipY = am4core.percent(50);

button0.events.on("over", function(event) {
    updateData(event.target.id);
});

button1.events.on("over", function(event) {
    updateData(event.target.id);
});

button2.events.on("over", function(event) {
    updateData(event.target.id);
});

button3.events.on("over", function(event) {
    updateData(event.target.id);
});

button4.events.on("over", function(event) {
    updateData(event.target.id);
});

button5.events.on("over", function(event) {
    updateData(event.target.id);
});

button6.events.on("over", function(event) {
    updateData(event.target.id);
});

// Add data
chart3.data = win_loss_draw_ratio_data;

function updateData(id) {

    if (id == "All") { var newData = win_loss_draw_ratio_all; title.text = "Game results over time (All Openings)";}
    else { var newData = win_loss_draw_ratio_by_opening[id]; title.text = "Game results over time ("+id+")";}

    for (var i = 0; i < chart3.data.length; i++) {
        chart3.data[i].white = newData[i].white;
        chart3.data[i].black = newData[i].black;
        chart3.data[i].draw = newData[i].draw;
    }

    chart3.invalidateRawData();
}


// Create axes
var categoryAxis = chart3.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

var valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());
    valueAxis.calculateTotals = true;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.rangeChangeEasing = am4core.ease.linear;
    valueAxis.rangeChangeDuration = 200;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "%";

    });

// Create series
var series = chart3.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "white";
    series.dataFields.valueYShow = "totalPercent";
    series.dataFields.categoryX = "year";
    series.name = "White Win";
    series.fill = am4core.color("white");
    series.interpolationDuration = 200;
    series.interpolationEasing = am4core.ease.linear;
    series.fillOpacity = 0.85;
    series.stacked = true;
    series.legendSettings.labelText = "White wins";

var series2 = chart3.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "draw";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataFields.categoryX = "year";
    series2.name = "Draw";
    series2.fill = am4core.color("grey");
    series2.fillOpacity = 0.85;
    series2.stacked = true;
    series2.interpolationDuration = 200;
    series2.interpolationEasing = am4core.ease.linear;
    series2.legendSettings.labelText = "Draw";

var series3 = chart3.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "black";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataFields.categoryX = "year";
    series3.name = "Black wins";
    series3.fill = am4core.color("black");
    series3.fillOpacity = 0.85;
    series3.stacked = true;
    series3.interpolationDuration = 200;
    series3.interpolationEasing = am4core.ease.linear;
    series3.legendSettings.labelText = "Black wins";

var label = chart3.createChild(am4core.Label);
label.text = "White Win";
label.fill = am4core.color("black")
label.fontSize = 30;
label.isMeasured = false;
label.x = am4core.percent(80);
label.y = am4core.percent(70);

var label2 = chart3.createChild(am4core.Label);
label2.text = "Draw";
label2.fill = am4core.color("black")
label2.fontSize = 30;
label2.isMeasured = false;
label2.x = am4core.percent(85);
label2.y = am4core.percent(40);

var label3 = chart3.createChild(am4core.Label);
label3.text = "Black win";
label3.fill = am4core.color("white")
label3.fontSize = 30;
label3.isMeasured = false;
label3.x = am4core.percent(80);
label3.y = am4core.percent(15);

// Add cursor
chart3.cursor = new am4charts.XYCursor();

// add legend
chart3.legend = new am4charts.Legend();
});
