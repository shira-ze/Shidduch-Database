//i have no clue what jquery is so i hope i dont mess gthis up but i think i need this to fill in the table
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"

console.log("how come only the most recent button so far when you click away from the options they dissappear but with the other buttons it only dissapears by clicking back on the button itself")
console.log("oy vey this website is azoy shreklich")
// for gender button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// for college button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }
  }
}


// for age button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show3");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show3')) {
        openDropdown.classList.remove('show3');
      }
    }
  }
}

// for kohen button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show4");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn4')) {
    var dropdowns = document.getElementsByClassName("dropdown-content4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show4')) {
        openDropdown.classList.remove('show4');
      }
    }
  }
}


// for hashkafa button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show5");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn5')) {
    var dropdowns = document.getElementsByClassName("dropdown-content5");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show5')) {
        openDropdown.classList.remove('show5');
      }
    }
  }
}


// for learner button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction6() {
  document.getElementById("myDropdown6").classList.toggle("show6");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn6')) {
    var dropdowns = document.getElementsByClassName("dropdown-content6");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show6')) {
        openDropdown.classList.remove('show6');
      }
    }
  }
}

// for wants aliyah button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction7() {
  document.getElementById("myDropdown7").classList.toggle("show7");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn7')) {
    var dropdowns = document.getElementsByClassName("dropdown-content7");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show7')) {
        openDropdown.classList.remove('show7');
      }
    }
  }
}


// for out of town button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction8() {
  document.getElementById("myDropdown8").classList.toggle("show8");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn8')) {
    var dropdowns = document.getElementsByClassName("dropdown-content8");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show8')) {
        openDropdown.classList.remove('show8');
      }
    }
  }
}

// for is short button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction9() {
  document.getElementById("myDropdown9").classList.toggle("show9");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn9')) {
    var dropdowns = document.getElementsByClassName("dropdown-content9");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show9')) {
        openDropdown.classList.remove('show9');
      }
    }
  }
}


// for divorced button:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction10() {
  document.getElementById("myDropdown10").classList.toggle("show10");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn10')) {
    var dropdowns = document.getElementsByClassName("dropdown-content10");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show10')) {
        openDropdown.classList.remove('show10');
      }
    }
  }
}

//here is the json file all typed out and in a variable. eventually I want to get this into something where instead of the vaeriable being equal to the json objects typed out in their entirety, there will be some sort of link to set the variable equal to whateveris in the .json file

var resumesArray = [
{
  "name":"farty",
  // "birthdate" json is too stupid for dates so we need to figure this one out
  "age": 32,
  "gender": "male",
  "iskohen": false,
  "isCollege": true,
  "hashkafa": "modox",
  "isLearner": true,
  "wantsAliyah": false,
  "outOfTown": true,
  "short": false,
  // btw, out of town means also the not into cool crowd ppl, more of an idealogy that actually where they live 
},
{
  "name":"pukey",
  // "birthdate" json is too stupid for dates so we need to figure this one out.
  "age": 27,
  "gender": "female",
  "iskohen": false,
  "isCollege": false,
  "hashkafa": "yeshivish",
  "isLearner": true,
  "wantsAliyah": false,
  "outOf Town": true,
  "short": false,
}
] 


//for filling the table:
function buildTable(data){
  var table = document.getElementById("myTable")
  for(var i = 0; i < data.length; i++){
    var row = `<tr>
                  <td>${data[i].name}</td>
                  <td>${data[i].gender}</td>
                  <td>${data[i].isCollege}</td>
              </tr>`

    table.innerHTML += row
  }
}

//call the fill table function:
buildTable(resumesArray)


// this whole thing doesnt work :( replit says TypeError: Cannot read property 'innerHTML' of null
//     at buildTable (/script.js:69:5)
//     at /script.js:74:1
// I blame the video titled JSON array to html table with Javascript by dennis Ivy, THANKS FOR NOTHING DENNIS!!!!!!!
