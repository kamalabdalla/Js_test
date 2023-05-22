
 
let data = ["syllabus.html", "p1.html", "p2.html", "style.html", "email.html", "system.html", "process.html"];

function displayTable() {
  var startInput = document.getElementById("start");
  var endInput = document.getElementById("end");
  var start = parseInt(startInput.value);
  var end = parseInt(endInput.value);
  var table = document.getElementById("linkTable");
  var rangeMessage = document.getElementById("rangeMsg");
  var numRows = end - start + 1;

  table.innerHTML = "";  

  if (start < 1 || end > data.length || start > end) {
    rangeMsg.textContent = "Invalid range, valid range: 1-" + data.length;
  } else {
    rangeMessage.textContent = "Valid Range: 1-" + data.length;
    for (var i = start - 1; i <= end - 1; i++) {
      var row = table.insertRow();
      var cell = row.insertCell();
      var link = document.createElement("a");
      link.href = data[i];
      link.textContent = data[i];
      cell.appendChild(link);
    }
  }
}
