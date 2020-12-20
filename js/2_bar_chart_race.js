am4core.useTheme(am4themes_animated);

am4core.globalAdapter.addAll(2)
var chart = am4core.create("bar_chart_race", am4charts.XYChart);
chart.padding(40, 40, 40, 40);
chart.numberFormatter.numberFormat = "#,###.";

var title = chart.titles.create();
title.text = "Bar chart race - Openings over time";
title.fontSize = 25;
title.marginBottom = 10;

var label = chart.plotContainer.createChild(am4core.Label);
label.x = am4core.percent(97);
label.y = am4core.percent(95);
label.horizontalCenter = "right";
label.verticalCenter = "middle";
label.dx = -15;
label.fontSize = 50;

var playButton = chart.plotContainer.createChild(am4core.PlayButton);
playButton.x = am4core.percent(97);
playButton.y = am4core.percent(95);
playButton.dy = -2;
playButton.verticalCenter = "middle";
playButton.events.on("toggled", function(event) {

if (event.target.isActive) {
    play();
  }
  else {
    stop();
  }
})

var stepDuration = 2000;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "network";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.disabled = false;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.rangeChangeEasing = am4core.ease.linear;
valueAxis.rangeChangeDuration = stepDuration;
valueAxis.extraMax = 0.1;
valueAxis.title.text = "Number of games played";

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "network";
series.dataFields.valueX = "MAU";
series.columns.template.tooltipHTML = ""
series.tooltip.getFillFromObject = false;
series.tooltip.background.fill = am4core.color("#F5F5F5");
series.columns.template.strokeOpacity = 0;
series.columns.template.column.cornerRadiusBottomRight = 5;
series.columns.maxColumns = 1
series.columns.template.column.cornerRadiusTopRight = 5;

series.columns.template.adapter.add('tooltipHTML', function(text, target) {
    var url = "<body style='background-color:grey'> <img src='../img/"+target.dataItem.categoryY.replace("'","")+ ".png' style='vertical-align:bottom; margin-right: 10px; width:200px; height:200px;'></body>"
    return url
});


series.interpolationDuration = stepDuration;
series.interpolationEasing = am4core.ease.linear;
var labelBullet = series.bullets.push(new am4charts.LabelBullet())
labelBullet.label.horizontalCenter = "right";
labelBullet.label.text = "{values.valueX.workingValue}";
labelBullet.label.textAlign = "end";
labelBullet.label.fill = "white"
labelBullet.label.dx = -10;
labelBullet.label.maxColumns = 1;

chart.zoomOutButton.disabled = true;

var axisTooltip = categoryAxis.tooltip;
axisTooltip.href = "<img src='img/qg.png'>";


// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target){
  return chart.colors.getIndex(target.dataItem.index);
});

var year = 1860;
label.text = year.toString();

var interval;

function play() {
  interval = setInterval(function(){
    nextYear();
  }, stepDuration)
  nextYear();
}

function stop() {
  if (interval) {
    clearInterval(interval);
  }
}

function nextYear() {
  year= year + 10
    console.log(chart.data)
  if (year > 2000) {
    year = 1850
  }

  var newData = opening_bar_chart_data[year];
  var itemsWithNonZero = 0;
  for (var i = 0; i < chart.data.length; i++) {
        if(year == 1850){chart.data[i].MAU=0;}
        else {chart.data[i].MAU = newData[i].MAU;}

    if (chart.data[i].MAU > 0) {
      itemsWithNonZero++;
    }

    if(itemsWithNonZero > 10){
    itemsWithNonZero = 10
    }
  }

  if (year <= 1860) {
    chart.invalidateData();
  }
  else {
    series.interpolationDuration = stepDuration;
    valueAxis.rangeChangeDuration = stepDuration;
    chart.invalidateRawData();
  }

  if(year>=1870)  {
  label.text = year.toString();
}
  categoryAxis.zoom({ start: 0, end: itemsWithNonZero / categoryAxis.dataItems.length });
}


categoryAxis.sortBySeries = series;
chart.data = opening_bar_chart_data[year]
categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });

series.events.on("inited", function() {
  setTimeout(function() {
    playButton.isActive = true; // this starts interval
  }, 2000)
})

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.disabled = true;
chart.cursor.lineX.disabled = true;