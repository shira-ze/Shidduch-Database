//i have no clue what jquery is so i hope i dont mess gthis up but i think i need this to fill in the table
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"

console.log("hello world")
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
