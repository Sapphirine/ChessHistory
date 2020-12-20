am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("player_ELO", am4charts.XYChart);
chart.scrollbarX = new am4core.Scrollbar();
chart.numberFormatter.numberFormat = "#,###.";

var title = chart.titles.create();
    title.text = "ELO ratings over time for select players";
    title.fontSize = 25;
    title.marginBottom = 10;


// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var data = player_ELO;

for (var key in player_ELO) {

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = key;
    lineSeries.data = player_ELO[key]
    lineSeries.dataFields.valueY = "elo";
    lineSeries.dataFields.dateX = "year";
    lineSeries.strokeWidth = 4;
    lineSeries.tooltip.pointerOrientation = "left";
    lineSeries.tooltipHTML= ""

    lineSeries.adapter.add('tooltipHTML', function(text, target) {
    var elo = target.data;
        target.numberFormatter.numberFormat = "#.";
    console.log(target.data);

        var url = "<body style='background-color:grey'> <center><strong>{name}</strong></center><img src='../img/"+target.name.replace("'","")+ ".png' style='vertical-align:bottom; margin-right: 10px; width:30px; height:20px;'><hr />ELO: {elo}</body>"
        console.log(url)
    return url
});


    var segment = lineSeries.segments.template;
    segment.interactionsEnabled = true;

    var hoverState = segment.states.create("hover");
    hoverState.properties.strokeWidth = 8;

    var dimmed = segment.states.create("dimmed");
    dimmed.properties.stroke = am4core.color("#dadada");

    segment.events.on("over", function(event) {
    processOver(event.target.parent.parent.parent);
  });

  segment.events.on("out", function(event) {
    processOut(event.target.parent.parent.parent);
  });

}


function processOver(hoveredSeries) {
  hoveredSeries.toFront();
    hoveredSeries.tooltip.disabled = false;

  hoveredSeries.segments.each(function(segment) {
    segment.setState("hover");
  })

  chart.series.each(function(series) {
    if (series != hoveredSeries) {
        series.tooltip.disabled = true;

      series.segments.each(function(segment) {
        segment.setState("dimmed");
      })
      series.bulletsContainer.setState("dimmed");
    }
  });
}

function processOut(hoveredSeries) {
  chart.series.each(function(series) {
    series.tooltip.disabled = true;
    series.segments.each(function(segment) {
      segment.setState("default");
    })
    series.bulletsContainer.setState("default");
  });
}

var range = dateAxis.axisRanges.create();
range.date = new Date(1972, 0, 1);
range.endDate = new Date(1975, 0, 1);
range.axisFill.fill = chart.colors.getIndex(7);
range.axisFill.fillOpacity = 0.1;

range.label.text = "Bobby Fischer world champion";
range.label.inside = true;
range.label.rotation = 90;
range.label.horizontalCenter = "right";
range.label.verticalCenter = "bottom";

var range2 = dateAxis.axisRanges.create();
range2.date = new Date(1975, 0, 1);
range2.endDate = new Date(1985, 0, 1);
range2.axisFill.fill = chart.colors.getIndex(1);
range2.axisFill.fillOpacity = 0.1;

range2.label.text = "Anatoly Karpov champion";
range2.label.inside = true;
range2.label.horizontalCenter = "left";
range2.label.verticalCenter = "bottom";

var range3 = dateAxis.axisRanges.create();
range3.date = new Date(1985, 0, 1);
range3.endDate = new Date(2000, 0, 1);
range3.axisFill.fill = am4core.color("red");
range3.axisFill.fillOpacity = 0.1;

range3.label.text = "Garry Kasparov champion";
range3.label.inside = true;
range3.label.horizontalCenter = "left";
range3.label.verticalCenter = "bottom";

var range4 = dateAxis.axisRanges.create();
range4.date = new Date(2000, 0, 1);
range4.endDate = new Date(2006, 0, 1);
range4.axisFill.fill = am4core.color("green");
range4.axisFill.fillOpacity = 0.1;

range4.label.text = "Vlad Kramnik champion";
range4.label.inside = true;
range4.label.horizontalCenter = "left";
range4.label.verticalCenter = "top";

var range5 = dateAxis.axisRanges.create();
range5.date = new Date(2006, 0, 1);
range5.endDate = new Date(2008, 0, 1);
range5.axisFill.fill = chart.colors.getIndex(3);
range5.axisFill.fillOpacity = 0.1;

range5.label.text = "Vishy Anand champion";
range5.label.inside = true;
range5.label.rotation = 90;
range5.label.horizontalCenter = "right";
range5.label.verticalCenter = "bottom";


chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.disabled = true;
chart.cursor.lineX.disabled = true;

});