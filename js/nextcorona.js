
    let output = '';
    let cases=0;
    let deaths=0;
    let recover=0;
    let closes=0;
    let active=0;
    let critical=0;
    let countryInfolat='';
    let country='';
    let countryInfolong='';
    let countryInfoflag='';
    let todayCases=0;
    let todayDeaths=0;
    let recovered=0;
    let todayRecovered=0;
    let casesPerOneMillion=0;
    let deathsPerOneMillion=0;
    let tests=0;
    let testsPerOneMillion=0;
    let population=0;
    let continent='';
    let oneCasePerPeople=0;
    let oneDeathPerPeople=0;
    let oneTestPerPeople=0;
    let activePerOneMillion=0;
    let recoveredPerOneMillion=0;
    let criticalPerOneMillion=0;
    let countryInfoiso3='';


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
  















        let countryname="";

        window.onload = function () {
            var url = document.location.href,
                params = url.split('?')[1].split('&'),
                d = {}, tmp;
            for (var i = 0, l = params.length; i < l; i++) {
                 tmp = params[i].split('=');
                 d[tmp[0]] = tmp[1];
            }
            countryname=d.name;
     
            
        getData('GET', 'https://corona.lmao.ninja/v2/countries/'+countryname).then(function(data){
            let todo = JSON.parse(data);

        
        


            
        /*
        countryInfo.iso3
        countryInfo.lat
        countryInfo.long
        countryInfo.flag
        cases
        todayCases
        deaths
        todayDeaths
        recovered
        todayRecovered
        active
        critical
        casesPerOneMillion
        deathsPerOneMillion
        tests
        testsPerOneMillion
        population
        continent
        oneCasePerPeople
        oneDeathPerPeople
        oneTestPerPeople
        activePerOneMillion
        recoveredPerOneMillion
        criticalPerOneMillion
        */
          
               
                cases+=todo.cases;
                deaths+=todo.deaths;
                recover+=todo.recovered;
                closes+=(todo.recovered+todo.deaths);
                active+=todo.active;
                critical+=todo.critical;
                countryInfolat+=todo.countryInfo.lat;
                countryInfolong+=todo.countryInfo.long;
                countryInfoflag+=todo.countryInfo.flag;
                todayCases+=todo.todayCases;
                todayDeaths+=todo.todayDeaths;
                recovered+=todo.recovered;
                todayRecovered+=todo.todayRecovered;
                casesPerOneMillion+=todo.casesPerOneMillion;
                deathsPerOneMillion+=todo.deathsPerOneMillion;
                tests+=todo.tests;
                testsPerOneMillion+=todo.testsPerOneMillion;
                population+=todo.population;
                continent+=todo.continent;
                oneCasePerPeople+=todo.oneCasePerPeople;
                oneDeathPerPeople+=todo.oneDeathPerPeople;
                oneTestPerPeople+=todo.oneTestPerPeople;
                activePerOneMillion+=todo.activePerOneMillion;
                recoveredPerOneMillion+=todo.recoveredPerOneMillion;
                criticalPerOneMillion+=todo.criticalPerOneMillion;
                country+=todo.country;
                countryInfoiso3+=todo.countryInfo.iso3;

 
        
                
             

    document.getElementById('cases').innerHTML=cases;
    document.getElementById('countryInfo.flag').src=countryInfoflag;
    document.getElementById('deaths').innerHTML=deaths;
    document.getElementById('active').innerHTML=active;
    document.getElementById('critical').innerHTML=critical;
    document.getElementById('countryInfolat').innerHTML=countryInfolat;
    document.getElementById('countryInfolong').innerHTML=countryInfolong;
    document.getElementById('todayCases').innerHTML=todayCases;
    document.getElementById('todayDeaths').innerHTML=todayDeaths;
    document.getElementById('recovered').innerHTML=recovered;
    document.getElementById('todayRecovered').innerHTML=todayRecovered;
    document.getElementById('casesPerOneMillion').innerHTML=casesPerOneMillion;
    document.getElementById('deathsPerOneMillion').innerHTML=deathsPerOneMillion;
    document.getElementById('tests').innerHTML=tests;
    document.getElementById('testsPerOneMillion').innerHTML=testsPerOneMillion;
    document.getElementById('population').innerHTML=population;
    document.getElementById('continent').innerHTML=continent;
    document.getElementById('oneCasePerPeople').innerHTML=oneCasePerPeople;
    document.getElementById('oneDeathPerPeople').innerHTML=oneDeathPerPeople;
    document.getElementById('oneTestPerPeople').innerHTML=oneTestPerPeople;
    document.getElementById('activePerOneMillion').innerHTML=activePerOneMillion;
    document.getElementById('recoveredPerOneMillion').innerHTML=recoveredPerOneMillion;
    document.getElementById('criticalPerOneMillion').innerHTML=criticalPerOneMillion;
    document.getElementById('countryInfoiso3').innerHTML=countryInfoiso3;
    document.getElementById('c1').innerHTML=countryname;
    document.getElementById('c2').innerHTML=countryname;
    document.getElementById('c3').innerHTML=countryname;
    document.getElementById('c4').innerHTML=countryname;
    document.getElementById('c5').innerHTML="Welcome to"+" "+countryname+ "  " +"section covid 19 Details here is a summary of all informations needed";

    



  



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
                {y: critical, label: "Critical Cases"},
                {y: recovered, label: "Recovered"}
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
        value: critical,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "critical"
    },
    {
        value: recovered,
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
            text: "COVID-19 GRAPH For Extra Stats of"+country
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


         
        }





   





    