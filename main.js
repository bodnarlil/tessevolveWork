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

// add an accessor here
// accessor (not the right one)
var accessor = function(d){ 
    return {
        x0: d.x0,
        x1: d.x1,
        x2: d.x2,
        fitness: d.fitness,
        file: d.file,
        dimension: d.dimension
    };
}

// function (change the whole line below)
d3.csv("https://github.com/bodnarlil/tessevolveWork/blob/main/combined/combined_allResults_minus_4D_data.csv", accessor).then(function(data) {
    // slider for mutation rate
    var mut_rate = parseInt(document.getElementById("mut_rate_slider").value);
    // slider for tournament size
    var tourn_size = parseInt(document.getElementById("tourn_size_slider").value);
    // slider for replicate
    var rep = parseInt(document.getElementById("replicate").value);
    // make canvas
    var data_canvas = canvas.append("g")
      .attr("class", "data_canvas");

    // try to display data that is checked
    d3.selectAll(".author")[0].filter(function(cb){return this.value == data.author})[0];
    d3.selectAll(".dimension")[0].filter(function(cb){return this.value == data.dimension})[0];
    d3.selectAll(".lineage")[0].filter(function(cb){return this.value == data.lineage})[0];

    // try to dispay what each slider is at from https://stackoverflow.com/questions/29103818/how-can-i-retrieve-and-display-slider-range-value
    function getMutRateValue (){
      var mutRate = document.getElementById("mut_rate").value //gets the oninput value
      document.getElementById('output').innerHTML = mutRate //displays this value to the html page
    }
    function getTournSizeValue (){
      var tournSize = document.getElementById("tourn_size_slider").value //gets the oninput value
      document.getElementById('output').innerHTML = tournSize //displays this value to the html page
    }
    function getReplicateValue (){
      var replicate = document.getElementById("rep").value //gets the oninput value
      document.getElementById('output').innerHTML = replicate //displays this value to the html page
    }

  }
);