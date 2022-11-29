
const toggleModal = () => {
  document.querySelector('.modal-article').classList.toggle('df');
};

const seeMoreProgram = document.querySelectorAll('.btn-modal');
seeMoreProgram.forEach((btn) => {
  btn.addEventListener('click', toggleModal);
});

document.querySelector('.cross-modal').addEventListener('click', toggleModal);

const tutorsData = [
  {
    id: 'tutor1',
    profileImage: './images/pexels-andy-coffie-13521724.jpg',
    name: 'Zora Dubah',
    position: 'Explorer',
    description: 'Being brave is not the absence of fear. Being brave is having that fear but finding a way through it.',
  },
  {
    id: 'tutor1',
    profileImage: './images/pexels-andy-coffie-13521724.jpg',
    name: 'Zora Dubah',
    position: 'Explorer',
    description: 'Being brave is not the absence of fear. Being brave is having that fear but finding a way through it.',
  },
  {
    id: 'tutor1',
    profileImage: './images/rama.me.jpg',
    name: 'Rama Unspoken',
    position: 'Explorer',
    description: 'Being brave is not the absence of fear. Being brave is having that fear but finding a way through it.',
  },
  {
    id: 'tutor1',
    profileImage: './images/pexels-andy-coffie-13521724.jpg',
    name: 'Zora Dubah',
    position: 'Explorer',
    description: 'Being brave is not the absence of fear. Being brave is having that fear but finding a way through it.',
  },
  {
    id: 'tutor1',
    profileImage: './images/pexels-andy-coffie-13521724.jpg',
    name: 'Zora Dubah',
    position: 'Explorer',
    description: 'Being brave is not the absence of fear. Being brave is having that fear but finding a way through it.',
  },
  {
    id: 'tutor1',
    profileImage: './images/rama.me.jpg',
    name: 'Rama Unspoken',
    position: 'Explorer',
    description: 'Being brave is not the absence of fear. Being brave is having that fear but finding a way through it.',
  },

];

let currentPage = 1;
const perpage = 3;

const seeMoreTutors = document.querySelector('.see-more-tutors');

const updateTutorDom = (data, hasPage, d = false) => {
  let mobileTutor = document.querySelector('#m-tutor-group');

  if (d) {
    mobileTutor = document.querySelector('#d-tutor-group');
  }

  if (!hasPage && !d) {
    seeMoreTutors.classList.remove('df');
  } else {
    seeMoreTutors.classList.add('df');
  }

  data.forEach((item) => {
    const mobileTutorList = document.createElement('li');
    mobileTutorList.id = item.id;
    mobileTutorList.className = 'tutor-list';
    mobileTutorList.innerHTML = `
    <div class="tutor-img">
      <img class="tiles" src="./images/tiles.png" alt="tiles"/>
      <img class="profile" src="${item.profileImage}" alt="${item.name}"/>
    </div>
    <div class="tutor-info">
      <h3 class="tutor-name">${item.name}</h3>
      <h6 class="tutor-position">
        ${item.position}
      </h6>
      <P class="tutor-details">${item.description}</P>
    </div>`;
    mobileTutor.append(mobileTutorList);
  });
};

const fecthTutorDataForMobile = (page = 1) => {
  currentPage = page;
  const hasPage = currentPage * perpage < tutorsData.length;
  const mobileTutorArr = [];
  if (perpage < tutorsData.length) {
    for (
      let i = Math.abs(currentPage * perpage - perpage);
      i < currentPage * perpage && i <= tutorsData.length && i >= 0; i += 1) {
      mobileTutorArr.push(tutorsData[i]);
    }
  }

  updateTutorDom(mobileTutorArr, hasPage);
};

seeMoreTutors.addEventListener('click', () => {
  if (currentPage * perpage < tutorsData.length) {
    fecthTutorDataForMobile(currentPage + 1);
  } else {
    seeMoreTutors.classList.remove('df');
  }
});

const fecthTutorDataForDesktop = () => updateTutorDom(tutorsData, false, true);

window.onload = () => {
  fecthTutorDataForMobile();
  fecthTutorDataForDesktop();
};
