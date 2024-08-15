/*
let w;
function startWorker() {
  if (typeof Worker !== "undefined") {
    //worker available

    //if 'w' worker is not already defined
    if (typeof w == "undefined") {
      //create a new worker called 'w'
      w = new Worker("worker.js");
    }

    //listening for worker events or / messages
    w.onmessage = function (event) {
      document.getElementById("disp").innerHTML = event.data;
    };
  } else {
    alert("Your brower doesnt no support web  worker");
  }
}

function stopWorker() {
  if (typeof Worker !== "undefined") {
    w.terminate();
    w = undefined;
  } else {
    alert("Your brower doesnt no support web  worker");
  }
}

const display = document.getElementById("display");

function getData() {
  fetch("http://127.0.0.1:5500/data.txt")
    .then((res) => res.text())
    .then((data) => {
      console.log("hellow2");
      display.innerText = data;
    });

  console.log("hellow");
}

async function getData_async() {
  const res = await fetch("http://127.0.0.1:5500/data.txt");

  const data = await res.text();
  display.innerText = data;
}

function getGeolocation() {
  if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(showPosition,showError);
    navigator.geolocation.watchPosition(showPosition,showError);
  }
  else {
    display.innerHTML = "geolocation isnt available"
  }
}


function showPosition(position) {
    display.innerHTML = 'Latitude: ' + position.coords.latitude + "<br>" + 'longitude: ' + position.coords.longitude;

    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
}
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        display.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        display.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        display.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        display.innerHTML = "An unknown error occurred."
        break;
    }
  }


  function loadData(){
    //create a bew request 
    const xhr = new XMLHttpRequest();

    // what do to when response arives   
    // xhr.onload = function(){
    //   console.log('response finished')
    //   callbackF(this);
    // };
    // xhr.onload = function () {
    //   const container = document.getElementById('demo');
    //   container.innerHTML = this.getResponseHeader("Etag");
    // };
    xhr.onload = function () {
      const container = document.getElementById('demo');
      container.innerHTML = this.responseText;
      // console.log(this.getAllResponseHeaders());
      console.log(this.getResponseHeader('etag'));

    };
    
    
    
    
    //prepare request - method: GET ,POST PUT, PATCH ,DELETE, OPTION
    
    xhr.open("GET", "./test-data/data.txt" , false);

    //add a request header
    // xhr.setRequestHeader("MY_GF" , 'Javascript');
    //send request
    
    xhr.send();


    //abrot
    // xhr.abort();
  }


function myCallback1(xhr){
  const container = document.getElementById('demo');
  container.innerHTML = xhr.responseText;
}

function myCallback2(xhr){
  const container = document.getElementById('demo2');
  container.innerHTML = xhr.responseText;
}


const jsonString = '[{"name": "john" , "age": 30 , "birth": "1978-12-14" , "car": null , "skills": ["programming" , "magibazi"] , "fnc": "function(){return 30;}"}]'

document.getElementById("jsonString").innerHTML = jsonString;

const jsonObj = JSON.parse(jsonString , (key,value)=> {
  // console.log(`${key} - ${value}`)
  // console.log(`--------------`)
  if(key === 'birth') {
     return new Date(value);
  }
  else {
    return  value;
  }
});

console.log(jsonObj)

document.getElementById("para").innerHTML = jsonObj[0]["name"];
// console.log(jsonObj.skills[1])


const obj = {name: "John", age: function () {return 30;}, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(myJSON);


//

async function fetchData() {
  const response = await fetch('./test-data/demo.txt');
  console.log(response)
  const data = JSON.parse(await response.text());
  console.log(data.pets[0].animal)
  document.getElementById('jsondemo').innerHTML = data.pets[0].animal;

}

fetchData();
*/

async function change_myselect(sel) {
  const dbParam = JSON.stringify({table:sel,limit:20});
  const response = await fetch("json_demo_html_table.php" , {
    method:"POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    body:"x=" + JSON.stringify(dbParam)

  });
}


