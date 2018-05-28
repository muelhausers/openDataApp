// Variables for Frame
var svgSpiez = d3.select('#svgSpiez');
var svgGoldau = d3.select('#svgGoldau');
var svgPopup = d3.select('#svgPopup')
var bboxSpiez = svgSpiez.node().getBoundingClientRect();
var bboxGoldau = svgGoldau.node().getBoundingClientRect();
var svgSpiezWidth = bboxSpiez.width;
var svgGoldauWidth = bboxGoldau.width;
var svgSpiezHeight = bboxSpiez.height;
var svgGoldauHeight = bboxGoldau.height;

// Variables for Data
var originInterlaken = 0, originThun = 0, originVisp = 0, originLuzern = 0, originZug = 0, originBellinzona = 0;
var delayInterlaken = 0, delayThun = 0, delayVisp = 0, delayLuzern = 0, delayBellinzona = 0, delayZug = 0;
var trainsDelayInterlaken = [{'train':'IC', 'amount': 0},{'train':'ICE', 'amount': 0},{'train':'IR', 'amount': 0},{'train':'EC', 'amount': 0},{'train':'RE', 'amount': 0},{'train':'R', 'amount': 0},]
var trainsDelayThun = [{'train':'IC', 'amount': 0},{'train':'ICE', 'amount': 0},{'train':'IR', 'amount': 0},{'train':'EC', 'amount': 0},{'train':'RE', 'amount': 0},{'train':'R', 'amount': 0},]
var trainsDelayVisp = [{'train':'IC', 'amount': 0},{'train':'ICE', 'amount': 0},{'train':'IR', 'amount': 0},{'train':'EC', 'amount': 0},{'train':'RE', 'amount': 0},{'train':'R', 'amount': 0},]
var trainsDelayLuzern = [{'train':'IC', 'amount': 0},{'train':'ICE', 'amount': 0},{'train':'IR', 'amount': 0},{'train':'EC', 'amount': 0},{'train':'RE', 'amount': 0},{'train':'R', 'amount': 0},]
var trainsDelayZug = [{'train':'IC', 'amount': 0},{'train':'ICE', 'amount': 0},{'train':'IR', 'amount': 0},{'train':'EC', 'amount': 0},{'train':'RE', 'amount': 0},{'train':'R', 'amount': 0},]
var trainsDelayBellinzona = [{'train':'IC', 'amount': 0},{'train':'ICE', 'amount': 0},{'train':'IR', 'amount': 0},{'train':'EC', 'amount': 0},{'train':'RE', 'amount': 0},{'train':'R', 'amount': 0},]

// Array of the lines between railway stations for Spiez
var stationLinesSpiez = [
    {"x1": 0.2*svgSpiezWidth, "x2": 0.5*svgSpiezWidth, "y1": 0.3*svgSpiezHeight, "y2": 0.3*svgSpiezHeight, "strokeWidth": 3, "color": "green", "amount": 0, "delay": 0, 'station': 'Thun'}, //Thun
    {"x1": 0.5*svgSpiezWidth, "x2": 0.8*svgSpiezWidth, "y1": 0.3*svgSpiezHeight, "y2": 0.3*svgSpiezHeight, "strokeWidth": 3, "color": "green", "amount": 0, "delay": 0, 'station': 'Interlaken'}, //Interlaken
    {"x1": 0.5*svgSpiezWidth, "x2": 0.5*svgSpiezWidth, "y1": 0.3*svgSpiezHeight, "y2": 0.7*svgSpiezHeight, "strokeWidth": 3, "color": "green", "amount": 0, "delay": 0, 'station': 'Visp'}, //Visp
];

// Array of the lines between railway stations for Arth-Goldau
var stationLinesGoldau = [
    {"x1": 0.2*svgGoldauWidth, "x2": 0.5*svgGoldauWidth, "y1": 0.3*svgGoldauHeight, "y2": 0.3*svgGoldauHeight, "strokeWidth": 3, "color": "green", "amount": 0, "delay": 0, 'station': 'Luzern'}, //Luzern
    {"x1": 0.5*svgGoldauWidth, "x2": 0.8*svgGoldauWidth, "y1": 0.3*svgGoldauHeight, "y2": 0.3*svgGoldauHeight, "strokeWidth": 3, "color": "green", "amount": 0, "delay": 0, 'station': 'Zug'}, //Zug
    {"x1": 0.5*svgGoldauWidth, "x2": 0.5*svgGoldauWidth, "y1": 0.3*svgGoldauHeight, "y2": 0.7*svgGoldauHeight, "strokeWidth": 3, "color": "green", "amount": 0, "delay": 0, 'station': 'Bellinzona'} //Bellinzona
];

// Array of the railway station names with the endpoints
var stationNames = [
    {"Name": "Spiez", "x": 0.5*svgSpiezWidth, "y": 0.25*svgSpiezHeight, "cx": 0.5*svgSpiezWidth, "cy": 0.3*svgSpiezHeight},
    {"Name": "Thun", "x": 0.1*svgSpiezWidth, "y": 0.3*svgSpiezHeight, "cx": 0.2*svgSpiezWidth, "cy": 0.3*svgSpiezHeight},
    {"Name": "Interlaken", "x": 0.9*svgSpiezWidth, "y": 0.3*svgSpiezHeight, "cx": 0.8*svgSpiezWidth, "cy": 0.3*svgSpiezHeight},
    {"Name": "Visp", "x": 0.5*svgSpiezWidth, "y": 0.8*svgSpiezHeight, "cx": 0.5*svgSpiezWidth, "cy": 0.7*svgSpiezHeight},
    {"Name": "Arth-Goldau", "x": 0.5*svgGoldauWidth, "y": 0.25*svgGoldauHeight, "cx": 0.5*svgGoldauWidth, "cy": 0.3*svgGoldauHeight},
    {"Name": "Zug", "x": 0.9*svgGoldauWidth, "y": 0.3*svgGoldauHeight, "cx": 0.2*svgGoldauWidth, "cy": 0.3*svgGoldauHeight},
    {"Name": "Luzern", "x": 0.1*svgGoldauWidth, "y": 0.3*svgGoldauHeight, "cx": 0.8*svgGoldauWidth, "cy": 0.3*svgGoldauHeight},
    {"Name": "Bellinzona", "x": 0.5*svgGoldauWidth, "y": 0.8*svgGoldauHeight, "cx": 0.5*svgGoldauWidth, "cy": 0.7*svgGoldauHeight}
];

// Array of the legend data
var legendData = [
    {"Text": "Unter 3%", "Color": "green", "x": 0.4, "y": 0.95},
    {"Text": "Unter 10%", "Color": "orange", "x": 0.5, "y": 0.95},
    {"Text": "\u00dcber 10%", "Color": "red", "x": 0.6, "y": 0.95} //\u00dc = Ü
]

// Tooltip
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])

svgSpiez.call(tip);
svgGoldau.call(tip);
svgPopup.call(tip);

// Call functions for app functionality
prepareData();
drawViewport();
initListeners();

// Function to prepare data from JSON for d3 draws
function prepareData(){
    
    // trafficData from data.json, lineData from lineid.json
    for(i = 0; i < trafficData.length; i++){
        
        // map origin from to traffic data
        trafficData[i].HERKUNFT = lineData[lineData.findIndex(x => x.LinieID === trafficData[i].LINIEN_ID)].Herkunft;
        
        // Count the origins
        switch(trafficData[i].HERKUNFT){
            case "Interlaken":
                originInterlaken++;
                // delay if difference between actual departure time and timetable is more than 3 minute/180000 milisec
                if((formatDate(trafficData[i].AN_PROGNOSE) - formatDate(trafficData[i].ANKUNFTSZEIT)) > 180000){
                    setDelay(trainsDelayInterlaken, trafficData[i]);
                    delayInterlaken++;
                }
                break;
            case "Thun":
                originThun++;
                // delay if difference between actual departure time and timetable is more than 3 minute/180000 milisec
                if((formatDate(trafficData[i].AN_PROGNOSE) - formatDate(trafficData[i].ANKUNFTSZEIT)) > 180000){
                    setDelay(trainsDelayThun, trafficData[i]);
                    delayThun++;
                }
                break;
            case "Visp":
                originVisp++;
                // delay if difference between actual departure time and timetable is more than 3 minute/180000 milisec
                if((formatDate(trafficData[i].AN_PROGNOSE) - formatDate(trafficData[i].ANKUNFTSZEIT)) > 180000){
                    setDelay(trainsDelayVisp, trafficData[i]);
                    delayVisp++;
                }
                break;
            case "Luzern":
                originLuzern++;
                // delay if difference between actual departure time and timetable is more than 3 minute/180000 milisec
                if((formatDate(trafficData[i].AN_PROGNOSE) - formatDate(trafficData[i].ANKUNFTSZEIT)) > 180000){
                    setDelay(trainsDelayLuzern, trafficData[i]);
                    delayLuzern++;
                }
                break;
            case "Zug":
                originZug++;
                // delay if difference between actual departure time and timetable is more than 3 minute/180000 milisec
                if((formatDate(trafficData[i].AN_PROGNOSE) - formatDate(trafficData[i].ANKUNFTSZEIT)) > 180000){
                    setDelay(trainsDelayZug, trafficData[i]);
                    delayZug++;
                }
                break;
            case "Bellinzona":
                originBellinzona++;
                // delay if difference between actual departure time and timetable is more than 3 minute/180000 milisec
                if((formatDate(trafficData[i].AN_PROGNOSE) - formatDate(trafficData[i].ANKUNFTSZEIT)) > 180000){
                    setDelay(trainsDelayBellinzona, trafficData[i]);
                    delayBellinzona++;
                }
                break;
        }
    }
    
    // Add the strokeWidth of each line according to the amount of origin
    stationLinesSpiez[0].strokeWidth = originThun/trafficData.length*50;
    stationLinesSpiez[1].strokeWidth = originInterlaken/trafficData.length*50;
    stationLinesSpiez[2].strokeWidth = originVisp/trafficData.length*50;
    stationLinesGoldau[0].strokeWidth = originLuzern/trafficData.length*50;
    stationLinesGoldau[1].strokeWidth = originZug/trafficData.length*50;
    stationLinesGoldau[2].strokeWidth = originBellinzona/trafficData.length*50;
    
    // Add the color of line according to the amount of delays
    stationLinesSpiez[0].color = getColor(delayThun/originThun);
    stationLinesSpiez[1].color = getColor(delayInterlaken/originInterlaken);
    stationLinesSpiez[2].color = getColor(delayVisp/originVisp);
    stationLinesGoldau[0].color = getColor(delayLuzern/originLuzern);
    stationLinesGoldau[1].color = getColor(delayZug/originZug);
    stationLinesGoldau[2].color = getColor(delayBellinzona/originBellinzona);
    
    // Add the amount of trains to line
    stationLinesSpiez[0].amount = originThun;
    stationLinesSpiez[1].amount = originInterlaken;
    stationLinesSpiez[2].amount = originVisp;
    stationLinesGoldau[0].amount = originLuzern;
    stationLinesGoldau[1].amount = originZug;
    stationLinesGoldau[2].amount = originBellinzona;
    
    // Add the delay of trains to line
    stationLinesSpiez[0].delay = precisionRound((delayThun/originThun*100),1);
    stationLinesSpiez[1].delay = precisionRound((delayInterlaken/originInterlaken*100),1);
    stationLinesSpiez[2].delay = precisionRound((delayVisp/originVisp*100),1);
    stationLinesGoldau[0].delay = precisionRound((delayLuzern/originLuzern*100),1);
    stationLinesGoldau[1].delay = precisionRound((delayZug/originZug*100),1);
    stationLinesGoldau[2].delay = precisionRound((delayBellinzona/originBellinzona*100),1);
    
}

// Draw function to draw the visualization
function drawViewport() {
    
    // Draw the lines for Spiez
    svgSpiez.selectAll('line')
        .data(stationLinesSpiez)
        .enter()
        .append('line')
            .attr('x1', function(d) { return d.x1; })
            .attr('y1', function(d) { return d.y1; })
            .attr('x2', function(d) { return d.x2; })
            .attr('y2', function(d) { return d.y2; })
            .attr('stroke', function(d) { return d.color; })
            .attr('stroke-width', function(d) { return d.strokeWidth; });
    
    // Draw the lines for Arth Goldau
    svgGoldau.selectAll('line')
        .data(stationLinesGoldau)
        .enter()
        .append('line')
            .attr('x1', function(d) { return d.x1; })
            .attr('y1', function(d) { return d.y1; })
            .attr('x2', function(d) { return d.x2; })
            .attr('y2', function(d) { return d.y2; })
            .attr('stroke', function(d) { return d.color; })
            .attr('stroke-width', function(d) { return d.strokeWidth; });
    
    // Draw the texts for the station names of Spiez
    for(i = 0; i < stationNames.length-4; i++){
        svgSpiez.append('text')
            .attr('x', stationNames[i].x)
            .attr('y', stationNames[i].y)
            .style('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .text(stationNames[i].Name);
        // endpoints of the lines
        svgSpiez.append('circle')
            .attr('cx', stationNames[i].cx)
            .attr('cy', stationNames[i].cy)
            .attr('r', 6)
            .style('fill', 'black');
    }
    
    // Draw the texts for the station names of Arth Goldau
    for(i = 4; i < stationNames.length; i++){
        svgGoldau.append('text')
            .attr('x', stationNames[i].x)
            .attr('y', stationNames[i].y)
            .style('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .text(stationNames[i].Name);
        // endpoints of the lines
        svgGoldau.append('circle')
            .attr('cx', stationNames[i].cx)
            .attr('cy', stationNames[i].cy)
            .attr('r', 6)
            .style('fill', 'black');
    }
    
    // Draw the legend
    for(i = 0; i < legendData.length; i++){
        svgSpiez.append('text')
            .attr('x', legendData[i].x*svgSpiezWidth)
            .attr('y', legendData[i].y*svgSpiezHeight)
            .style('text-anchor', 'middle')
            .style('font-weight', 'none')
            .style('fill', legendData[i].Color)
            .text(legendData[i].Text);
        svgGoldau.append('text')
            .attr('x', legendData[i].x*svgGoldauWidth)
            .attr('y', legendData[i].y*svgGoldauHeight)
            .style('text-anchor', 'middle')
            .style('font-weight', 'none')
            .style('fill', legendData[i].Color)
            .text(legendData[i].Text);
    }
}

// Draw function for the pie chart in the popup
function drawPopUp(data, totalDelayTrains){
    
    //remove trains with no delay for better pie chart overview
    var i = 0;
    while(i < data.length){
        data[i].totalDelayTrains = totalDelayTrains; // Add total to record
        if(data[i].amount === 0){
            data.splice(i,1);
        }else{
            i++;
        }
    }
    var r = 200;
    var color = d3.scale.ordinal()
        .range([d3.rgb('#f7e600'), d3.rgb("#f73d00"), d3.rgb("#f76200"), d3.rgb("#f77f00"), d3.rgb("#f7ac00"), d3.rgb("#f7da00")])
    
    var group = svgPopup.append('g')
        .attr('transform', 'translate(300,200)');
    
    var arc = d3.svg.arc()
        .innerRadius(100)
        .outerRadius(r);
    
    var pie = d3.layout.pie()
        .value(function(d){ return d.amount;});
    
    var arcs = group.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc')
    
    arcs.append('path')
        .attr('d', arc)
        .attr('fill', function(d){ return color(d.data.amount);})
    
    arcs.append('text')
        .attr('transform', function(d){ return "translate("+ arc.centroid(d) + ")";})
        .attr('text-anchor', 'middle')
        .attr('font-size', '1.5em')
        .text(function(d){ return d.data.train;});
}

// Listener functions for the click on lines to open bootstrap modal popup and tooltips
function initListeners(){
    svgSpiez.selectAll('line')
        .on('mouseover', function(d){
            this.style.cursor = 'pointer';
            tip.html("<strong>Anzahl Z&uuml;ge:</strong> <span>" + d.amount + "</span><br /><strong>Versp&auml;tet:</strong> <span style='color:"+d.color+"'>" + d.delay + "%</span>");
            tip.show();
        })
        .on('mouseout', function(){
            tip.hide();
        })
        .on('click', function(d){
            switch(d.station){
                case 'Thun':
                    $('#dataModal .modal-title').text('Versp\u00e4tung Thun - Spiez'); //\u00e4 = ä
                    drawPopUp(trainsDelayThun, delayThun);
                    break;
                case 'Interlaken':
                    $('#dataModal .modal-title').text('Versp\u00e4tung Interlaken - Spiez'); //\u00e4 = ä
                    drawPopUp(trainsDelayInterlaken, delayInterlaken);
                    break;
                case 'Visp':
                    $('#dataModal .modal-title').text('Versp\u00e4tung Visp - Spiez'); //\u00e4 = ä
                    drawPopUp(trainsDelayVisp, delayVisp);
                    break;
            }
            $("#dataModal").modal('show');
        })
    svgGoldau.selectAll('line')
        .on('mouseover', function(d){
            this.style.cursor = 'pointer';
            tip.html("<strong>Anzahl Z&uuml;ge:</strong> <span>" + d.amount + "</span><br /><strong>Versp&auml;tet:</strong> <span style='color:"+d.color+"'>" + d.delay + "%</span>");
            tip.show();
        })
        .on('mouseout', function(){
            tip.hide();
        })
        .on('click', function(d){
            switch(d.station){
                case 'Luzern':
                    $('#dataModal .modal-title').text('Versp\u00e4tung Luzern - Arth-Goldau'); //\u00e4 = ä
                    drawPopUp(trainsDelayLuzern, delayLuzern);
                    break;
                case 'Zug':
                    $('#dataModal .modal-title').text('Versp\u00e4tung Zug - Arth-Goldau'); //\u00e4 = ä
                    drawPopUp(trainsDelayZug, delayZug);
                    break;
                case 'Bellinzona':
                    $('#dataModal .modal-title').text('Versp\u00e4tung Bellinzona - Arth-Goldau'); //\u00e4 = ä
                    drawPopUp(trainsDelayBellinzona, delayBellinzona);
                    break;
            }
            $("#dataModal").modal('show');
        })
    $("#dataModal").on('shown.bs.modal', function () {
        svgPopup.selectAll('path')
            .on('mouseover', function(d){
                tip.html("<strong>Z&uuml;ge gesamt:</strong> <span>" + d.data.totalDelayTrains + "</span><br />"+
                         "<strong>Davon " + d.data.train + ":</strong> <span>" + d.data.amount + " (" + precisionRound((d.data.amount/d.data.totalDelayTrains*100),1) + "%)</span>");
                tip.show();
            })
        .on('mouseout', function(){
            tip.hide();
        })
    });
    
}

// Function to set the delay of each train type
function setDelay(delay, data){
    switch(data.VERKEHRSMITTEL_TEXT){
        case 'IC':
            delay[0].amount++; 
            break;
        case 'ICE':
            delay[1].amount++; 
            break;
        case 'IR':
            delay[2].amount++; 
            break;
        case 'EC':
            delay[3].amount++; 
            break;
        case 'RE':
            delay[4].amount++; 
            break;
        case 'R':
            delay[5].amount++; 
            break;
    }
}

// Function to format the to calculate the delay
function formatDate(date){
    var result = date.split('.').join(',').split(' ').join(',').split(':').join(',').split(','); // dirty but effective
    return new Date(result[2],result[1],result[0],result[3],result[4]); // return date
}

// Function to return the color according to the amount of delay
function getColor(input){
    var color = 'green';
    if(input >= 0.1){
        color = 'red';   
    }
    else if(input > 0.03 && input < 0.1){
        color = 'orange';
    }
    return color;
}

// Function to round the delay to display in tooltip
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

// Functions for the image modal
var modal = document.getElementById('imageModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('manualImg');
var modalImg = document.getElementById("image");
var captionText = document.getElementById("caption");
for(i = 0; i < images.length; i++){
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
var span = document.getElementById("closeBtn"); // Close button
span.onclick = function() { 
  modal.style.display = "none"; // close modal
}