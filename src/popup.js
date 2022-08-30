export const projects = [
  {
    name: "Routing Technologies",
    feature: "MICROVERSE",
    background: "Front End Dev",
    year: "2022",
    image: "images/html-css-js.png",
    description:
      "The Latest Routing Technology is a company whose mission is to change all the old technology routers.",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://ayoubms.github.io/capstone-1/index.html",
    linkSource: "https://github.com/AyoubMs/capstone-1",
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
    linkLive: "https://power-motorcycle.herokuapp.com/",
    linkSource: "https://github.com/AyoubMs/Book-an-appointment-back-end",
  },
  {
    name: "ToDo List App",
    feature: "MICROVERSE",
    background: "Front-End Dev",
    year: "2022",
    image: "images/to-do-list.png",
    description:
      "A 'To-do list' is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. You will build a simple website that allows for doing that, and you will do it using ES6 and Webpack!",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://ayoubms.github.io/To-Do-list/",
    linkSource: "https://github.com/AyoubMs/To-Do-list",
  },
  {
    name: "Uber Navigation",
    feature: "Uber",
    background: "Lead Developer",
    year: "2018",
    image: "images/desktop/uber-navigation-project.svg",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://github.com/ArthurGC/portfolio",
    linkSource: "https://arthurgc.github.io/portfolio/",
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
    </div>
    <ul class='modal__btn ul flex'>
    <li>
    <a href='' class="btn link project-linkLive fw-500 fz-17 lh-24 clr-p-500 bg-white">See Live</a>
    </li>
    <li>
    <a href='' class="btn link project-linkSource fw-500 fz-17 lh-24 clr-p-500 bg-white">See Source</a>
    </li>
    </ul>
    </li>
    </ul>
    </section>
    </div>`
  );
}
