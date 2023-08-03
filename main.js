// Select the chart area by ID
var chart_area = d3.select("#chart_area");
var frame = chart_area.append("svg");

// Create canvas inside frame
var canvas = frame.append("g");

// Set margins, width, and height
var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
var frame_width = 960;
var frame_height = 350;
var canvas_width = frame_width - margin.left - margin.right;
var canvas_height = frame_height - margin.top - margin.bottom;

// Set frame attributes width and height
frame.attr("width", frame_width);
frame.attr("height", frame_height);

// Shift the canvas and make it slightly smaller than the svg canvas
canvas.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// create x axis (change this domain)
var xScale = d3.scaleLinear().domain([0, 100]).range([0, canvas_width]);  
var xAxis = d3.axisBottom(xScale);
canvas.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + canvas_height + ")")
  .call(xAxis);

// create y axis (change this domain)
var yScale = d3.scaleLinear().domain([0, 100]).range([canvas_height, 0]);
var yAxis = d3.axisLeft(yScale);
canvas.append("g")
  .attr("class", "y axis")
  .call(yAxis);

// function (change the whole line below)
d3.csv("http://alackles.github.io/D3-visualising-data/resources/nations.csv", accessor).then(function(nations) {
    // make canvas
    var data_canvas = canvas.append("g")
      .attr("class", "data_canvas");
  }
);