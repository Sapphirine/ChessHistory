am4core.ready(function() {
am4core.useTheme(am4themes_animated);

var chart1 = am4core.create("first_move", am4charts.XYChart);
chart1.colors.step = 2;
chart1.numberFormatter.numberFormat = "#.";

// Add data
chart1.data = opening_move_ratio_data;

var title = chart1.titles.create();
title.text = "White's first move, over time";
title.fontSize = 25;
title.marginBottom = 10;

var label = chart1.createChild(am4core.Label);
label.text = "e4";
label.fill = am4core.color("white")
label.fontSize = 50;
label.isMeasured = false;
label.x = am4core.percent(25);
label.y = am4core.percent(60);

var label2 = chart1.createChild(am4core.Label);
label2.text = "d4";
label2.fill = am4core.color("white")
label2.fontSize = 40;
label2.isMeasured = false;
label2.x = am4core.percent(60);
label2.y = am4core.percent(35);

var label3 = chart1.createChild(am4core.Label);
label3.text = "Nf3";
label3.fill = am4core.color("white")
label3.fontSize = 20;
label3.isMeasured = false;
label3.x = am4core.percent(68);
label3.y = am4core.percent(22);

var label4 = chart1.createChild(am4core.Label);
label4.text = "c4";
label4.fill = am4core.color("white")
label4.fontSize = 20;
label4.isMeasured = false;
label4.x = am4core.percent(80);
label4.y = am4core.percent(12);

var label5 = chart1.createChild(am4core.Label);
label5.text = "Other";
label5.fill = am4core.color("white")
label5.fontSize = 15;
label5.isMeasured = false;
label5.x = am4core.percent(25);
label5.y = am4core.percent(9);

// Create axes
var categoryAxis = chart1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.startLocation = 0.5;
categoryAxis.endLocation = 0.5;

var  valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());
valueAxis.calculateTotals = true;
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.renderer.labels.template.adapter.add("text", function(text) {
  return text + "%";
});

// Create series
var series = chart1.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "e4";
series.dataFields.valueYShow = "totalPercent";
series.dataFields.categoryX = "year";
series.name = "e4";
series.fillOpacity = 0.85;
series.stacked = true;
series.legendSettings.labelText = "[bold {color}]{name}[/]";
series.legendSettings.valueText = "[bold {color}]{valueY.totalPercent}%[/]";



var series2 = chart1.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "d4";
series2.dataFields.valueYShow = "totalPercent";
series2.dataFields.categoryX = "year";
series2.name = "d4";
series2.fillOpacity = 0.85;
series2.stacked = true;
series2.legendSettings.labelText = "[bold {color}]{name}[/]";
series2.legendSettings.valueText = "[bold {color}]{valueY.totalPercent}%[/]";



var series3 = chart1.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Nf3";
series3.dataFields.valueYShow = "totalPercent";
series3.dataFields.categoryX = "year";
series3.name = "Nf3";
series3.fillOpacity = 0.85;
series3.stacked = true;
series3.legendSettings.labelText = "[bold {color}]{name}[/]";
series3.legendSettings.valueText = "[bold {color}]{valueY.totalPercent}%[/]";


var series4 = chart1.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "c4";
series4.dataFields.valueYShow = "totalPercent";
series4.dataFields.categoryX = "year";
series4.name = "c4";
series4.fillOpacity = 0.85;
series4.stacked = true;
series4.legendSettings.labelText = "[bold {color}]{name}[/]";
series4.legendSettings.valueText = "[bold {color}]{valueY.totalPercent}%[/]";



var series5 = chart1.series.push(new am4charts.LineSeries());
series5.dataFields.valueY = "Other";
series5.dataFields.valueYShow = "totalPercent";
series5.dataFields.categoryX = "year";
series5.name = "Other";
series5.fillOpacity = 0.85;
series5.stacked = true;
series5.hiddenInLegend = true;



// Add cursor
chart1.cursor = new am4charts.XYCursor();
chart1.cursor.lineY.disabled = true;
chart1.cursor.lineX.disabled = true;

// add legend
chart1.legend = new am4charts.Legend();
chart1.legend.reverseOrder = true;
series.dummyData = {
  flag: "img/e4.png"};
  series2.dummyData = {
  flag: "ChessHistory/img/d4.png"};
  series3.dummyData = {
  flag: "ChessHistory/img/Nf3.png"};
  series4.dummyData = {
  flag: "ChessHistory/img/c4.png"};

chart1.legend.useDefaultMarker = true;
chart1.legend.position = "right"
chart1.legend.itemContainers.template.paddingTop = 35;
chart1.legend.itemContainers.template.paddingBottom = 35;
  // Remove square from marker template
var marker = chart1.legend.markers.template;
marker.disposeChildren();
marker.width = 85;

// Add custom image instead
var dollar = marker.createChild(am4core.Image);
dollar.width = 80;
dollar.height = 80;
dollar.verticalCenter = "middle";
dollar.horizontalCenter = "left";


dollar.adapter.add("href", function(href, target) {
console.log(href, target)
  if (target.dataItem && target.dataItem.dataContext && target.dataItem.dataContext.dummyData) {
    return target.dataItem.dataContext.dummyData.flag;
  }
  else {
    return href;
  }
});


});
