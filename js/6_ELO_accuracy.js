am4core.ready(function() {

am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("ELO_accuracy", am4charts.XYChart);

var title = chart.titles.create();
    title.text = "Expected score vs. actual score";
    title.fontSize = 25;
    title.marginBottom = 10;

var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
xAxis.max = 700;
xAxis.min = -700;
xAxis.strictMinMax = true;
xAxis.title.text = "Gap in Elo ratings between the players"

chart.legend = new am4charts.Legend();

var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.title.text = "Score"

chart.data = ELO_accuracy;

var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueX = "elo_diff";
series1.dataFields.valueY = "exp_score";
series1.strokeWidth = 3;
series1.name="Expected score"

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueX = "elo_diff";
series2.dataFields.valueY = "white_avg";
series2.strokeOpacity = 0;
series2.name="Score for white"

var bullet = series2.bullets.push(new am4charts.Bullet());

var circle = bullet.createChild(am4core.Circle);
circle.horizontalCenter = "middle";
circle.verticalCenter = "middle";
circle.strokeWidth = 0;
circle.fill = am4core.color("white");
circle.direction = "top";
circle.radius = 3;
circle.strokeWidth = 1

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueX = "elo_diff";
series3.dataFields.valueY = "black_avg";
series3.strokeOpacity = 0;
series3.name="Score for black"

var bullet = series3.bullets.push(new am4charts.Bullet());

var arrow = bullet.createChild(am4core.Triangle);
arrow.horizontalCenter = "middle";
arrow.verticalCenter = "middle";
arrow.strokeWidth = 0;
arrow.fill = am4core.color("black");
arrow.direction = "top";
arrow.width = 7;
arrow.height = 7;

var series4 = chart.series.push(new am4charts.LineSeries());
series4.dataFields.valueX = "elo_diff";
series4.dataFields.valueY = "all_avg";
series4.strokeWidth = 3;
series4.strokeDasharray = "3,1";
series4.name="Average actual score"

});