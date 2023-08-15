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
    // get elements
    var CF1 = document.querySelector('select[value="CF1"]').value;
    var CF2 = document.querySelector('select[value="CF2"]').value;
    var shubert = document.querySelector('select[value="shubert"]').value;
    var vincent = document.querySelector('select[value="vincent"]').value;
    var twoD = document.querySelector('select[value="2D"]').value;
    var threeD = document.querySelector('select[value="3D"]').value;
    var fourD = document.querySelector('select[value="4D"]').value;
    var showLineage = document.querySelector('select[value="showLineage"]').value;
    var mut_rate = document.querySelector('select[id="mut_rate_slider"]').value;
    var tourn_size = document.querySelector('select[id="tourn_size_slider"]').value;
    var rep = document.querySelector('select[id="replicate"]').value;

    if(mut_rate == 1){
        mut_rate == 0.1;
    } else if(mut_rate == 2){
        mut_rate == 0.01;
    } else if(mut_rate == 3){
        mut_rate == 0.001;
    } else {
        mut_rate == 0.0001;
    }

    if(tourn_size == 1){
        tourn_size == 2;
    } else if(tourn_size == 2){
        tourn_size == 4;
    } else if(tourn_size == 3){
        tourn_size == 8;
    } else {
        tourn_size == 16;
    }
    
    var tourny = tourn_size;
    var seed = rep;
    var mutrate = mut_rate;
    var phylo_detail = showLineage;
    var fcn;
    // create an if-statement to choose only one box for fcn
    if(CF1 == checked & CF2 != checked & shubert != checked & vincent != checked){
        fcn = CF1;
    } else if (CF2 == checked & CF1 != checked & shubert != checked & vincent != checked){
        fcn = CF12;
    } else if (shubert == checked & CF2 != checked & CF1 != checked & vincent != checked){
        fcn = shubert;
    } else if (vincent == checked & CF2 != checked & shubert != checked & CF1 != checked){
        fcn = vincent;
    } else {
        // default to CF1
        fcn = CF1;
    }

    var dim
    // create an if-statement to choose only one box for dim
    if(twoD == checked & threeD != checked & fourD != checked{
        dim = twoD;
    } else if (threeD == checked & twoD != checked & fourD != checked){
        dim = threeD;
    } else if (fourD == checked & threeD != checked & twoD != checked ){
        dim = fourD;
    } else {
        // default to 3D
        dim = threeDim;
    }

    // make canvas
    var data_canvas = canvas.append("g")
      .attr("class", "data_canvas");

    // try to dispay what each slider is at from https://stackoverflow.com/questions/29103818/how-can-i-retrieve-and-display-slider-range-value
    function getMutRateValue (){
      var mut_rate = document.querySelector('select[id="mut_rate_slider"]').value;
      document.getElementById('output').innerHTML = mut_rate //displays this value to the html page
    }
    function getTournSizeValue (){
      document.getElementById('output').innerHTML = tourn_size //displays this value to the html page
    }
    function getReplicateValue (){
      document.getElementById('output').innerHTML = rep //displays this value to the html page
    }
  }
);