const projects = [
  {title:"East Africa Cargo Expansion", img:"images/service-1.jpg", desc:"Managed cross-border cargo logistics with real-time tracking."},
  {title:"Warehouse Automation", img:"images/service-2.jpg", desc:"Automated warehouse systems for faster cargo handling."},
  {title:"Vehicle Leasing Program", img:"images/service-3.jpg", desc:"Leased transport vehicles for businesses during peak seasons."},
  {title:"Corporate Travel Coordination", img:"images/service-4.jpg", desc:"Organized travel logistics for corporate events in East Africa."},
  {title:"Forex & Investment Solutions", img:"images/service-5.jpg", desc:"Supported clients with forex trading and investment."},
  {title:"Customs Clearance Management", img:"images/service-6.jpg", desc:"Streamlined customs processes to reduce clearance times."},
  {title:"Port Operations Support", img:"images/service-7.jpg", desc:"Enhanced cargo handling at port terminals for efficiency."},
  {title:"Financial Advisory Services", img:"images/service-8.jpg", desc:"Provided financial advisory to small and medium enterprises."}
];

let currentPage = 1;
let slideshowInterval;

function renderProjects() {
  const container = document.getElementById('project-container');

  const buttons = container.querySelectorAll('.album-btn');
  container.innerHTML = '';

  const p = projects[currentPage - 1];

  container.innerHTML += `
    <div class="single_project_card">
      <img src="${p.img}" alt="${p.title}" id="album-image">
      <h5>${p.title}</h5>
      <p>${p.desc}</p>
    </div>
  `;

  buttons.forEach(btn => container.appendChild(btn));

  const img = document.getElementById('album-image');
  img.addEventListener('mouseenter', pauseSlideshow);
  img.addEventListener('mouseleave', resumeSlideshow);
}

function changePage(page) {
  const totalPages = projects.length;
  if (page < 1) page = totalPages;
  if (page > totalPages) page = 1;

  currentPage = page;
  renderProjects();
}

function manualChange(page) {
  changePage(page);
  restartSlideshow();
}

function startSlideshow() {
  slideshowInterval = setInterval(() => {
    changePage(currentPage + 1);
  }, 4000);
}

function pauseSlideshow() {
  clearInterval(slideshowInterval);
}

function resumeSlideshow() {
  startSlideshow();
}

function restartSlideshow() {
  clearInterval(slideshowInterval);
  startSlideshow();
}

document.addEventListener('DOMContentLoaded', function() {
  renderProjects();
  startSlideshow();
});
