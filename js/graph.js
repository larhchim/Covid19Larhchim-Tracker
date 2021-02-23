    var cases=0;
    var deaths=0;
    var recover=0;
    var closes=0;
    var active=0;
    var critical=0;
    var population=0;
    var deathsPerOneMillion=0;
    var casesPerOneMillion=0;
    var tests=0;
    var testsPerOneMillion=0;
    var oneCasePerPeople=0;
    var oneDeathPerPeople=0;




function getData(method, url){
    return new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function(){
        if(this.status >= 200 && this.status < 300){
          resolve(xhr.response);
        }else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function(){
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }
  
  getData('GET', 'https://corona.lmao.ninja/v2/countries').then(function(data){
    let todos = JSON.parse(data);
    let output = '';
    
    let value="choose the country";

      output += `<option value=""> 
      ${value} 
     
  	 

  </option>`; 

    for(let todo of todos){
       
        cases+=todo.cases;
        deaths+=todo.deaths;
        recover+=todo.recovered;
        closes+=(todo.recovered+todo.deaths);
        active+=todo.active;
        critical+=todo.critical;
        population+=todo.population;
        deathsPerOneMillion+=todo.deathsPerOneMillion;
        casesPerOneMillion+=todo.casesPerOneMillion;
        tests+=todo.tests;
        testsPerOneMillion+=todo.testsPerOneMillion;
        oneCasePerPeople+=todo.oneCasePerPeople;
        oneDeathPerPeople+=todo.oneDeathPerPeople;
    

      output += `<option> 
      ${todo.country} 
     
  	 

  </option>`; 
    }
  
    /*document.getElementById('covidOptions').innerHTML = output;
    document.getElementById('cases').innerHTML = cases;
    document.getElementById('deaths').innerHTML = deaths;
    document.getElementById('recover').innerHTML = recover;
    document.getElementById('closes').innerHTML = closes;
    document.getElementById('recovered').innerHTML = recover;
    document.getElementById('recoverdp').innerHTML = (((recover*100))/closes).toFixed(2);
    document.getElementById('diep').innerHTML = (100-(((recover*100))/closes)).toFixed(2);
    document.getElementById('die').innerHTML = deaths;
    document.getElementById('activ').innerHTML = active;
    document.getElementById('activm').innerHTML = active-critical;
    document.getElementById('activmp').innerHTML =   (((active-critical)*100)/active).toFixed(2) ;
    document.getElementById('serious').innerHTML = critical;
    document.getElementById('seriousp').innerHTML =   ((critical*100)/active).toFixed(2) ;*/



        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
           
            data: [{
                type: "pie",
                startAngle: 240,
                yValueFormatString: "##0.00\"persons\"",
                indexLabel: "{label} {y}",
                dataPoints: [
                    {y: cases, label: "Cases"},
                    {y: deaths, label: "Deaths"},
                    {y: active, label: "Active Cases"},
                    {y: closes, label: "Closed Cases"},
                    {y: recover, label: "Recovered"}
                ]
            }]
        });
        chart.render();

        
        
        
        
    
          // Get the context of the canvas element we want to select
        var data = [// w  w w  . j  a  v  a  2s . c  om
        {
            value: cases,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Cases"
        },
        {
            value: deaths,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Deaths"
        },
        {
            value: active,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "actives"
        },
        {
            value: closes,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "closes"
        },
        {
            value: recover,
            color: "#4D5360",
            highlight: "#616774",
            label: "recover"
        }
        ];
        
        var ctx = document.getElementById("myChart").getContext("2d");
        var myNewChart = new Chart(ctx).PolarArea(data);


    
        var ctx2 = document.getElementById("myChart2").getContext("2d");

        var data = {
            labels: ["population", "deathsPerOneMillion", "casesPerOneMillion", "tests", "testsPerOneMillion", "oneCasePerPeople", "oneDeathPerPeople"],
            title: {
                text: "COVID-19 GRAPH For Extra Stats"
            },
            datasets: [
                {
                    label: "World Global Statics",
                    fillColor: "rgba(240, 52, 52, 1)",
                    strokeColor: "rgba(240, 52, 52, 1)",
                    pointColor: "rgba(240, 52, 52, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(240, 52, 52, 1)",
                    data: [population, deathsPerOneMillion, casesPerOneMillion, tests, testsPerOneMillion, oneCasePerPeople, oneDeathPerPeople]
                }
            ]
        };
        
        var myLineChart = new Chart(ctx2).Line(data, {});
        
}).catch(function(err){
    console.log(err);
  });

  

