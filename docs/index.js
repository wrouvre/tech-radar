
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
  config.title = practice.name;
  radar_visualization(config);
}

var config = {
  svg_id: "radar",
  height: 1700,
  colors: {
    background: "#fff",
    grid: '#dddde0',
    inactive: "#ddd"
  },
  title: "Ippon Technologies Radar",
  date: "2023.03",
  rings: [
    { name: "Adopt", color: "#003CDC" },
    { name: "Trial", color: "#ffcd00" },
    { name: "Assess", color: "#6D0718" },
    { name: "Hold", color: "#ff4c41" }
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
