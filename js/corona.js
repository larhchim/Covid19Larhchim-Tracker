
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
    output = 
		`<tr class="ta"> 
		<th>country</th> 
		<th>cases</th> 
		<th>todayCases</th> 
		<th>deaths</th> 
        <th>todayDeaths</th>
        <th>recovered</th>
        <th>todayRecovered</th>
        <th>active</th>
        <th>critical</th>
        <th>tests</th>
 

		</tr>`; 
	

    for(let todo of todos){
       

      output += `<tr> 
      <td>${todo.country} </td> 
      <td>${todo.cases}</td> 
      <td><span>+</span>${todo.todayCases}</td> 
      <td>${todo.deaths}</td>
      <td><span>+</span>${todo.todayDeaths}</td>
      <td>${todo.recovered}</td>	
      <td><span>+</span>${todo.todayRecovered}</td>		 
      <td>${todo.active}</td>		 
      <td>${todo.critical}</td>		 		 
      <td>${todo.tests}</td>		 
  	 

  </tr>`; 
    }
  
    document.getElementById('covid').innerHTML = output;
  }).catch(function(err){
    console.log(err);
  });

