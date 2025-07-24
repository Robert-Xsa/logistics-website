const projects = [
  {title:" ", img:"images/album/project-1.jpeg", desc:" "},
  {title:" ", img:"images/album/project-2.jpeg", desc:" "},
  {title:" ", img:"images/album/project-3.jpeg", desc:" "},
  {title:" ", img:"images/album/project-4.jpeg", desc:" "},
  {title:" ", img:"images/album/project-5.jpeg", desc:" "},
  {title:" ", img:"images/album/project-6.jpeg", desc:" "},
  {title:" ", img:"images/album/project-7.jpeg", desc:" "},
  {title:" ", img:"images/album/project-8.jpeg", desc:" "},
  {title:" ", img:"images/album/project-9.jpeg", desc:" "},
  {title:" ", img:"images/album/project-10.jpeg", desc:" "},
  {title:" ", img:"images/album/project-11.jpeg", desc:" "},
  {title:" ", img:"images/album/project-12.jpeg", desc:" "},
  {title:" ", img:"images/album/project-13.jpeg", desc:" "},
  {title:" ", img:"images/album/project-14.jpeg", desc:" "},
  {title:" ", img:"images/album/project-15.jpeg", desc:" "},
  {title:" ", img:"images/album/project-16.jpeg", desc:" "},
  {title:" ", img:"images/album/project-17.jpeg", desc:" "},
  {title:" ", img:"images/album/project-18.jpeg", desc:" "},
  {title:" ", img:"images/album/project-19.jpeg", desc:" "},
  {title:" ", img:"images/album/project-20.jpeg", desc:" "},
  {title:" ", img:"images/album/project-21.jpeg", desc:" "},
  {title:" ", img:"images/album/project-22.jpeg", desc:" "},
  {title:" ", img:"images/album/project-23.jpeg", desc:" "},
  {title:" ", img:"images/album/project-24.jpeg", desc:" "},
  {title:" ", img:"images/album/project-25.jpeg", desc:" "},
  {title:" ", img:"images/album/project-26.jpeg", desc:" "},
  {title:" ", img:"images/album/project-27.jpeg", desc:" "},
  {title:" ", img:"images/album/project-28.jpeg", desc:" "},
  {title:" ", img:"images/album/project-29.jpeg", desc:" "},
  {title:" ", img:"images/album/project-30.jpeg", desc:" "},
  {title:" ", img:"images/album/project-31.jpeg", desc:" "},
  {title:" ", img:"images/album/project-32.jpeg", desc:" "},
  {title:" ", img:"images/album/project-33.jpeg", desc:" "},
  {title:" ", img:"images/album/project-34.jpeg", desc:" "},
  {title:" ", img:"images/album/project-35.jpeg", desc:" "},
  {title:" ", img:"images/album/project-36.jpeg", desc:" "},
  {title:" ", img:"images/album/project-37.jpeg", desc:" "},
  {title:" ", img:"images/album/project-38.jpeg", desc:" "},
  {title:" ", img:"images/album/project-39.jpeg", desc:" "},
  {title:" ", img:"images/album/project-40.jpeg", desc:" "},
  {title:" ", img:"images/album/project-41.jpeg", desc:" "},
  
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
