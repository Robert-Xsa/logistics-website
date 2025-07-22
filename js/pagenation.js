
// Project Data
const projects = [
  {title:"East Africa Cargo Expansion", img:"images/service-1.jpg", desc:"Managed cross-border cargo logistics with real-time tracking."},
  {title:"Warehouse Automation", img:"images/service-1.jpg", desc:"Automated warehouse systems for faster cargo handling."},
  {title:"Vehicle Leasing Program", img:"images/service-1.jpg", desc:"Leased transport vehicles for businesses during peak seasons."},
  {title:"Corporate Travel Coordination", img:"images/service-1.jpg", desc:"Organized travel logistics for corporate events in East Africa."},
  {title:"Forex & Investment Solutions", img:"images/service-1.jpg", desc:"Supported clients with forex trading and investment."},
  {title:"Customs Clearance Management", img:"images/service-1.jpg", desc:"Streamlined customs processes to reduce clearance times."},
  {title:"Port Operations Support", img:"images/service-1.jpg", desc:"Enhanced cargo handling at port terminals for efficiency."},
  {title:"Financial Advisory Services", img:"images/service-1.jpg", desc:"Provided financial advisory to small and medium enterprises."},
  
  
];

const perPage = 3;
let currentPage = 1;

function renderProjects() {
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const displayProjects = projects.slice(start, end);

  const container = document.getElementById('project-container');
  container.innerHTML = '';

  displayProjects.forEach(p => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="project_card">
          <img src="${p.img}" alt="${p.title}">
          <div class="content">
            <h5>${p.title}</h5>
            <p>${p.desc}</p>
          </div>
        </div>
      </div>
    `;
  });

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(projects.length / perPage);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  // Previous
  pagination.innerHTML += `<li class="page-item ${currentPage==1?'disabled':''}">
    <a class="page-link" href="#" onclick="changePage(${currentPage-1})">Previous</a></li>`;

  // Pages
  for (let i=1; i<=totalPages; i++) {
    pagination.innerHTML += `<li class="page-item ${i===currentPage?'active':''}">
      <a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
  }

  // Next
  pagination.innerHTML += `<li class="page-item ${currentPage==totalPages?'disabled':''}">
    <a class="page-link" href="#" onclick="changePage(${currentPage+1})">Next</a></li>`;
}

function changePage(page) {
  const totalPages = Math.ceil(projects.length / perPage);
  if (page<1 || page>totalPages) return;
  currentPage = page;
  renderProjects();
}

// Initialize
renderProjects();
