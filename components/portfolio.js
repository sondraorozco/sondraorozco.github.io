var projects = [
  {
    name: 'Pacmen Factory',
    githubLink: 'https://github.com/sondraorozco/pacmen',
    previewLink: 'https://github.com/sondraorozco/pacmen',
    imageUrl: 'img/pacmen-thumbnail.png',
    description: 'Lorem ipsum',
    category: 'mit-xpro'
  },
  {
    name: 'Moving Eyes',
    githubLink: 'https://github.com/sondraorozco/eyes',
    previewLink: 'https://github.com/sondraorozco/eyes',
    imageUrl: 'img/eyes-thumbnail.png',
    description: 'Lorem ipsum',
    category: 'mit-xpro'
  },
  {
    name: 'Bus Route Map',
    githubLink: 'https://github.com/sondraorozco/bus',
    previewLink: 'https://github.com/sondraorozco/bus',
    imageUrl: 'img/bus-thumbnail.png',
    description: 'Lorem ipsum',
    category: 'mit-xpro'
  },
  {
    name: 'Snake',
    githubLink: 'https://github.com/sondraorozco/snake',
    previewLink: 'https://github.com/sondraorozco/snake',
    imageUrl: '',
    description: 'Lorem ipsum',
    category: 'fun'
  },
  {
    name: 'CBD Examine',
    previewLink: 'https://www.cbdexamine.com',
    imageUrl: '',
    description: 'Lorem ipsum',
    category: 'fun'
  }
];

function showProjects() {

  for (let i = 0; i < projects.length; i++) {
    let containerId = 'cat-' + projects[i].category;
    let target = document.getElementById(containerId);

    // add card to the correct section of the page
    let newCard = document.createElement('div');
    newCard.classList.add('card', 'shadow');
    target.appendChild(newCard);

    // add img
    let newImg = document.createElement('img');
    newImg.classList.add('card-img-top');
    newImg.src = projects[i].imageUrl;
    newImg.alt = 'Screenshot of ' + projects[i].name + 'project';
    newCard.appendChild(newImg);

    // add 1st div - card-body class
    let newDiv1 = document.createElement('div');
    newDiv1.classList.add('card-body');
    newCard.appendChild(newDiv1);

    // add title and description
    let newTitle = document.createElement('h5');
    newTitle.classList.add('card-title');
    newTitle.innerHTML = projects[i].name;
    newDiv1.appendChild(newTitle);

    let newDesc = document.createElement('p');
    newDesc.classList.add('card-text');
    newDesc.innerHTML = projects[i].description;
    newDiv1.appendChild(newDesc);

    // add 2nd div - card-body class
    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('card-body');
    newCard.appendChild(newDiv2);

    // add links
    if (projects[i].previewLink) {
      let newLink1 = document.createElement('a');
      newLink1.classList.add('card-link');
      newLink1.href = projects[i].previewLink;
      newLink1.innerHTML = 'Live preview'
      newDiv2.appendChild(newLink1);
    }
      
    if (projects[i].githubLink) {
      let newLink2 = document.createElement('a');
      newLink2.classList.add('card-link');
      newLink2.href = projects[i].githubLink;
      newLink2.innerHTML = 'Github repo'
      newDiv2.appendChild(newLink2);
    }
  }
}

showProjects();