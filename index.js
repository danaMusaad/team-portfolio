const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
  container.classList.add("active");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  container.classList.remove("active");
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    container.classList.remove("active");
    hamburger.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    if (!navLinks.classList.contains("active")) {
      hamburger.style.display = "block";
    }
  }
});

//* team data
const teamInfo = [
  {
    name: "دانة الجهني",
    role: "مطورة واجهات أمامية",
    image: "images/avatargirl.png",
    skills: [
      "images/css-icon.svg",
      "images/html-icon.svg",
      "images/js-icon.png",
      "images/react-icon.png",
      "images/github-icon.png",
      "images/git-icon.png",
    ],
  },
  {
    name: "خلاد عبدالله الجهني",
    role: "مطور واجهات أمامية",
    image: "images/avatarboy.png",
    skills: [
      "images/css-icon.svg",
      "images/html-icon.svg",
      "images/github-icon.png",
      "images/git-icon.png",
      "images/js-icon.png",
    ],
  },
  {
    name: "أروى عبدالعزيز",
    role: "مصممة واجهة وتجربة المستخدم",
    image: "images/avatargirl.png",
    skills: [
      "images/css-icon.svg",
      "images/html-icon.svg",
      "images/js-icon.png",
      "images/figma-icon.png",
    ],
  },
  {
    name: "سرى سرور",
    role: "Full Stack Developer & AI",
    image: "images/avatargirl.png",
    skills: [
      "images/css-icon.svg",
      "images/html-icon.svg",
      "images/js-icon.png",
      "images/php-icon.svg",
      "images/python-icon.png",
      "images/sql-icon.png",
    ],
  },
  {
    name: "أحمد",
    role: "Full Stack Developer",
    image: "images/avatarboy.png",
    skills: [
      "images/css-icon.svg",
      "images/html-icon.svg",
      "images/js-icon.png",
      "images/restapi-icon.png",
      "images/sql-server-icon.png",
      "images/typescript-icon.png",
      "images/sass-icon.png",
      "images/NET1-icon.png",
      "images/net-framework-icon.png",
      "images/c-sharp-icon.svg",
    ],
  },
  {
    name: "مروه الحربي",
    role: "مصممة واجهة وتجربة المستخدم ومطورة تطبيقات ويب",
    image: "images/avatargirl.png",
    skills: [
      "images/css-icon.svg",
      "images/html-icon.svg",
      "images/js-icon.png",
      "images/Flutter-icon.png",
      "images/figma-icon.png",
    ],
  },
  {
    name: "غزل جيار ",
    role: "مصممة واجهة وتجربة المستخدم ومطورة برمجيات",
    image: "images/avatargirl.png",
    skills: [
      "images/css-icon.svg",
      "images/html-icon.svg",
      "images/js-icon.png",
      "images/figma-icon.png"
    ]
  }
];

class Team {
  currentIndex = 0;

  constructor() {
    this.Initializer();
  }

  renderCards() {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    const total = teamInfo.length;
    const indices = [
      (this.currentIndex - 1 + total) % total,
      this.currentIndex,
      (this.currentIndex + 1) % total,
    ];

    indices.forEach((i) => {
      const member = teamInfo[i];
      const card = document.createElement("div");
      card.classList.add("team-card");
      if (i === this.currentIndex) card.classList.add("active");

      card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <div class="skills">
          ${member.skills.map((skill) => `<img src="${skill}">`).join("")}
        </div>
      `;
      container.appendChild(card);
    });
  }

  slideNext = () => {
    document.querySelector(".next").onclick = () => {
      this.currentIndex = (this.currentIndex + 1) % teamInfo.length;
      this.renderCards();
    };
  };

  SlidePrev = () => {
    document.querySelector(".prev").onclick = () => {
      this.currentIndex = (this.currentIndex - 1 + teamInfo.length) % teamInfo.length;
      this.renderCards();
    };
  };

  Initializer = () => {
    this.SlidePrev();
    this.slideNext();
    this.renderCards();
  }
}

const teams = new Team();
