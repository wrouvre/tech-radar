
function buildPracticeList() {
  var practiceList = document.getElementById("practiceList");
  practices.map((practice, idx) => {
    var el = document.createElement('li');
    var link = document.createElement('a')
    link.textContent = practice.name;
    link.setAttribute('href', '#' + idx);
    el.append(link);
    el.onclick = function () { buildRadar(practice); };
    practiceList.appendChild(el);
  });
}

function buildRadar(practice) {
  document.getElementById("radar").innerHTML = "";
  if (!practice) {
    if (window.location.hash) {
      practice = practices[window.location.hash.substr(1)];
    }
    else {
      practice = practices[0];
    }
  }
  config.quadrants = practice.radar.quadrants;
  config.entries = practice.radar.entries;
  config.title = "Ippon Nantes Radar - " + practice.name;
  radar_visualization(config);
}

var config = {
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: '#dddde0',
    inactive: "#ddd"
  },
  title: "Ippon Nantes Radar",
  date: "2023.03",
  rings: [
    { name: "ADOPT", color: "#5ba300" },
    { name: "TRIAL", color: "#009eb0" },
    { name: "ASSESS", color: "#c7ba00" },
    { name: "HOLD", color: "#e09b96" }
  ],
  print_layout: true,
  links_in_new_tabs: true,
  // zoomed_quadrant: 0,
}

buildPracticeList();
buildRadar();


var modal = document.getElementById("myModal");
var ModalTitle = document.getElementById("modalTitle");
var ModalContent = document.getElementById("modalContent");
var ModalCloseBtn = document.getElementsByClassName("modal-close")[0];

ModalCloseBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function displayModal(title, description) {
  ModalContent.innerHTML = description;
  ModalTitle.innerHTML = title;
  modal.style.display = "block";
}
