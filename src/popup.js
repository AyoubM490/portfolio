export const projects = [
  {
    name: "Exercise Tracker",
    feature: "MICROVERSE",
    background: "Full Stack Dev",
    year: "2022",
    image: "images/exercise-tracker.png",
    description:
      "This is a full stack JavaScript app that allows users to create and track daily workouts. Users can log multiple exercises in a workout on a given day.",
    tool1: "MongoDB",
    tool2: "Express",
    tool3: "React",
    tool4: "NodeJS",
    tool5: "React Testing Library",
    linkLive: "https://create-exercise.herokuapp.com/",
    linkSource: "https://github.com/AyoubMs/exercise-tracker",
  },
  {
    name: "Power Motorcycles",
    feature: "MICROVERSE",
    background: "Full Stack Dev",
    year: "2022",
    image: "images/power-motorcycle-reserve.png",
    description: "Power Motorcycles is a company that rent power motorcycles.",
    tool1: "React",
    tool2: "css",
    tool3: "RoR",
    tool4: "Jest",
    tool5: "Enzyme",
    linkLive: "https://power-motorcycle.herokuapp.com/",
    linkSource: "https://github.com/AyoubMs/Book-an-appointment-back-end",
  },
  {
    name: "React-TypeScript Quiz App",
    feature: "MICROVERSE",
    background: "Front-End Dev",
    year: "2022",
    image: "images/react-quiz-app.png",
    description: "Quiz app made using TypeScript-React & Open Trivia DB.",
    tool1: "React-Typescript",
    tool2: "css",
    tool3: "TypeScript",
    linkLive: "https://quiz-app-ts.herokuapp.com/",
    linkSource: "https://github.com/AyoubMs/react-quiz-app",
  },
  {
    name: "Dummy Blog",
    feature: "MICROVERSE",
    background: "Front-End Dev",
    year: "2022",
    image: "images/Dummy-Blog.png",
    description:
      "Dummy Blog made with React-Redux,Jest, Enzyme and Husker Git Hook.",
    tool1: "enzyme",
    tool2: "jest",
    tool3: "react-redux",
    linkLive: "https://dummy--blog.herokuapp.com/",
    linkSource: "https://github.com/AyoubMs/Dummy-Blog",
  },
];

const startingPoint = document.querySelector(".hero");

export function createModal() {
  startingPoint.insertAdjacentHTML(
    "afterend",
    `<div class='overlay'>
    <section class='modal'>
    <div class='modal__header flex'>
    <h2 class='project-name fw-700 fz-32 lh-44 clr-n-800'></h2>
    <img  class='closeModal' src='images/desktop/close.svg' alt='close icon'></img>
    </div>
    <div class='modal__feature flex'>
    <p class="project-feature fw-600 fz-13 lh-16 clr-n-600"></p>
    <ul class=" flex">
    <li class=" project-background fw-600 fz-13 lh-16 clr-n-500"></li>
    <li class="project-year fw-600 fz-13 lh-16 clr-n-500"> </li>
    </ul></div>
    <div class='image-project'><img class='modal__image project-image' src='' alt='project image'></img></div>
    <ul class='modal__dsc ul flex'>
    <li class='modal__dsc__first'><p class='project-description fw-400 fz-15 lh-24 clr-n-600'></p></li>
    <li class="modal__dsc__second flex">
    <div class='flex'>
    <p class="project-tool1 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool2 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool3 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool4 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    </div>
    <ul class='modal__btn ul flex'>
    <li>
    <a href='' target="_blank" class="btn link project-linkLive fw-500 fz-17 lh-24 clr-p-500 bg-white">See Live</a>
    </li>
    <li>
    <a href='' target="_blank" class="btn link project-linkSource fw-500 fz-17 lh-24 clr-p-500 bg-white">See Source</a>
    </li>
    </ul>
    </li>
    </ul>
    </section>
    </div>`
  );
}
