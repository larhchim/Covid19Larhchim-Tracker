
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
    let cases=0;
    let deaths=0;
    let recover=0;
    let closes=0;
    let active=0;
    let critical=0;
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

      output += `<option> 
      ${todo.country} 
     
  	 

  </option>`; 
    }
  
    document.getElementById('covidOptions').innerHTML = output;
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
    document.getElementById('seriousp').innerHTML =   ((critical*100)/active).toFixed(2) ;





    


  }).catch(function(err){
    console.log(err);
  });

