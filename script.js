const localeStrings = {
  en: {
    header: "News",
    buttons: { dark: "Dark", light: "Light" },
    topics: [
      {
        title: "JavaScript",
        topic:
          "JavaScript is a programming language that allows you to add interactivity to web pages. It can be used for front-end development, back-end development, or even to create desktop and mobile applications.",
      },
      {
        title: "Python",
        topic:
          "Python is a versatile programming language that can be used for web development, scientific computing, data analysis, artificial intelligence, and more. It is known for its simplicity and readability, making it a popular choice for beginners.",
      },
      {
        title: "React",
        topic:
          "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage their state and lifecycle. React is widely used in web development and is known for its performance and scalability.",
      },
      {
        title: "Data Structures",
        topic:
          "Data structures are ways of organizing and storing data in a computer so that it can be accessed and used efficiently. Examples of data structures include arrays, linked lists, stacks, queues, and trees. Understanding data structures is important for efficient programming.",
      },
      {
        title: "Databases",
        topic:
          "Databases are software systems used to store, organize, and retrieve data. They are used in a wide range of applications, from web development to enterprise systems. Understanding how to design and work with databases is an important skill for many programming jobs.",
      },
    ],
    footer: "News website 2023",
  },
  ua: {
    header: "Новини",
    buttons: { dark: "Темна", light: "Світла" },
    topics: [
      {
        title: "Джаваскріпт",
        topic:
          "Джаваскріпт - це мова програмування, яка дозволяє додавати інтерактивність до веб-сторінок. Її можна використовувати для фронтенд-розробки, бекенд-розробки або навіть для створення десктопних і мобільних додатків.",
      },
      {
        title: "Пайтон",
        topic:
          "Пайтон - це універсальна мова програмування, яку можна використовувати для веб-розробки, наукових обчислень, аналізу даних, штучного інтелекту тощо. Вона відома своєю простотою та зрозумілістю, що робить її популярним вибором для початківців.",
      },
      {
        title: "Реакт",
        topic:
          "Реакт - це JavaScript бібліотека для створення користувацьких інтерфейсів. Вона дозволяє створювати багаторазові UI-компоненти та керувати їхнім станом і життєвим циклом. React широко використовується у веб-розробці і відомий своєю продуктивністю та масштабованістю.",
      },
      {
        title: "Структури даних",
        topic:
          "Структури даних - це способи організації та зберігання даних у комп'ютері таким чином, щоб до них можна було отримати доступ і ефективно використовувати. Прикладами структур даних є масиви, зв'язані списки, стеки, черги та дерева. Розуміння структур даних важливе для ефективного програмування.",
      },
    ],
    footer: "Веб-сторінка новин 2023",
  },
};

const body = document.getElementById("body");
const en = document.getElementById("en");
const ua = document.getElementById("ua");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const topics = document.getElementById("topics");

const localStorageService = {
  getLang: () => localStorage.getItem("lang"),
  setLang: (lang) => localStorage.setItem("lang", lang),
  getTheme: () => localStorage.getItem("theme"),
  setTheme: (theme) => localStorage.setItem("theme", theme),
};

window.addEventListener("load", () => {
  const defaultLanguage = localStorageService.getLang() || "ua";
  const defaultTheme = localStorageService.getTheme() || "light";

  setLanguage(defaultLanguage);
  setTheme(defaultTheme);
});

const setTheme = (theme) => {
  localStorageService.setTheme(theme);
  body.classList = theme;
};

const setLanguage = (language) => {
  localStorageService.setLang(language);

  setHeader(language);
  setButtons(language);
  setTopics(language);
  setFooter(language);
};

const setTopics = (language) => {
  const localeTopic = localeStrings[language].topics.map(
    ({ title, topic }) => `
    <article>
      <h3>${title}</h3>
      <p>${topic}</p>
    </article>`
  );

  topics.innerHTML = localeTopic.join("");
};

const setHeader = (language) => {
  header.innerText = localeStrings[language].header;
};

const setFooter = (language) => {
  footer.innerText = localeStrings[language].footer;
};

const setButtons = (language) => {
  dark.innerText = localeStrings[language].buttons.dark;
  light.innerText = localeStrings[language].buttons.light;
};

ua.addEventListener("click", () => setLanguage("ua"));
en.addEventListener("click", () => setLanguage("en"));
dark.addEventListener("click", () => setTheme("dark"));
light.addEventListener("click", () => setTheme("light"));
