am4core.ready(function() {

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chord_diagram", am4charts.ChordDiagram);
chart.colors.saturation = 0.45;
chart.colors.step = 3;
chart.data = chord_diagram
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.dataFields.P1_score = "P1 score";
chart.dataFields.P2_score = "P2 score";

chart.nodePadding = 0.5;
chart.minNodeSize = 0.01;
chart.startAngle = 80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "value";
chart.fontSize = 15;

var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name}'s games: {total}";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    })

    node.label.isHover = true;
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = false;
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;
label.maxWidth = 100;
label.fontSize = 15
label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{fromName} : {toName} {value.value} games total\n Lifetime score of {P1_score} : {P2_score}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

});