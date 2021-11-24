var brand = {label: 'Sondra Orozco', link: 'index.html'};

var menuContent = [
  {
    label: 'About Me',
    link: 'about.html'
  },
  {
    label: 'Projects',
    link: 'projects.html'
  },
  {
    label: 'Contact',
    link: 'about.html#contact'
  }
];

// Build reuseable Bootstrap nav bar
function navbar() {
  let target = document.getElementById('nav');
  target.classList.add('navbar', 'navbar-expand-lg', 'bg-dark', 'navbar-dark', 'py-3');

  let containerDiv = document.createElement('div');
  containerDiv.classList.add('container');
  target.appendChild(containerDiv);

  let logo = document.createElement('a');
  logo.classList.add('navbar-brand');
  logo.href = brand.link;
  logo.innerHTML = brand.label;
  containerDiv.appendChild(logo);

  let menuToggle = document.createElement('button');
  menuToggle.classList.add('navbar-toggler');
  menuToggle.setAttribute('type', 'button');
  menuToggle.setAttribute('data-bs-toggle', 'collapse');
  menuToggle.setAttribute('data-bs-target', '#navmenu');
  containerDiv.appendChild(menuToggle);

  let toggleIcon = document.createElement('span');
  toggleIcon.classList.add('navbar-toggler-icon');
  menuToggle.appendChild(toggleIcon);

  let ulDiv = document.createElement('div');
  ulDiv.classList.add('collapse', 'navbar-collapse');
  ulDiv.id = 'navmenu';
  containerDiv.appendChild(ulDiv);

  // Add nav links to menu list
  let list = '<ul class="navbar-nav ms-auto">';

  for (let i = 0; i < menuContent.length; i++) {
    list += '<li class="nav-item">';
    list += '<a href="' + menuContent[i].link + '" class="nav-link">' + menuContent[i].label + '</a>';
    list += '</li>';
  }
  
  list += '</ul>';

  ulDiv.innerHTML = list;

}

navbar();