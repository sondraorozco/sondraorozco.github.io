
var socialIconList = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/sondrasuazo/',
    icon: '<i class="bi bi-linkedin"></i>'
  },
  {
    name: 'github',
    link: 'https://github.com/sondraorozco',
    icon: '<i class="bi bi-github"></i>'
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/mandomymando/',
    icon: '<i class="bi bi-instagram"></i>'
  },
];

// Build reuseable Bootstrap footer
function footer() {
  let target = document.getElementById('footer');
  target.classList.add('d-flex', 'flex-wrap', 'justify-content-between', 'align-items-center', 'py-3', 'my-4', 'border-top');

  let newDiv = document.createElement('div');
  newDiv.classList.add('col-md-4', 'd-flex', 'align-items-center');
  target.appendChild(newDiv);

  let newSpan = document.createElement('span');
  newSpan.classList.add('text-muted');
  newSpan.innerHTML = '&copy; 2021 Sondra Orozco';
  newDiv.appendChild(newSpan);

  // Add social icons to footer
  let newUl = document.createElement('ul');
  newUl.classList.add('nav', 'col-md-4', 'justify-content-end', 'list-unstyled', 'd-flex');
  target.appendChild(newUl);
  
  for (let i = 0; i < socialIconList.length; i++) {
    let newLi = document.createElement('li');
    newLi.classList.add('ms-3');
    newUl.appendChild(newLi);
    
    let newA = document.createElement('a');
    newA.classList.add('text-muted');
    newA.href = socialIconList[i].link;
    newA.innerHTML = socialIconList[i].icon
    newLi.appendChild(newA);
  }

}

footer();