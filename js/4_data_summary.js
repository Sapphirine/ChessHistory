am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("data_summary", am4charts.XYChart);
chart.scrollbarX = new am4core.Scrollbar();

var title = chart.titles.create();
    title.text = "Games played (in dataset) and maximum ELO over time";
    title.fontSize = 25;
    title.marginBottom = 10;

/* Create axes */
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

/* Create value axis */
var gamesAxis = chart.yAxes.push(new am4charts.ValueAxis());
gamesAxis.logarithmic = true;
gamesAxis.title.text = "Number of games played (log scale)";

var ELOAxis = chart.yAxes.push(new am4charts.ValueAxis());
ELOAxis.renderer.opposite = true;
ELOAxis.renderer.grid.template.disabled = true;
ELOAxis.min = 2500;
ELOAxis.max = 2900;
ELOAxis.title.text = "Maximum Elo rating";


/* Create series */
var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.name = "Number of games";
columnSeries.yAxis = gamesAxis;
columnSeries.dataFields.valueY = "num_games";
columnSeries.dataFields.dateX = "year";

columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
columnSeries.columns.template.propertyFields.stroke = "stroke";
columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
columnSeries.tooltip.label.textAlign = "middle";

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.name = "Max ELO";
lineSeries.dataFields.valueY = "max_elo";
lineSeries.dataFields.dateX = "year";
lineSeries.yAxis = ELOAxis;
lineSeries.connect = false;

lineSeries.stroke = am4core.color("#fdd400");
lineSeries.strokeWidth = 3;
lineSeries.tooltip.pointerOrientation = "vertical";
lineSeries.tooltip.getFillFromObject = false;
lineSeries.tooltip.background.fill= am4core.color("#fdd400");
lineSeries.tooltip.background.fillOpacity = 0.5;
lineSeries.tooltipText = "[#ffffff font-size: 15px]Max ELO:\n[/][#ffffff font-size: 20px]{valueY}[/] [#ffffff]{additional}[/]";

chart.cursor = new am4charts.XYCursor();

chart.data = data_summary;

}); // end am4core.ready()