const team = [
    {
      name: "دانة الجهني",
      role: "مطورة واجهات أمامية",
      image: "images/avatargirl.png",
      skills: [
        "images/css-icon.SVG",
        "images/html-icon.SVG",
        "images/js-icon.png",
        "images/react-icon.png",
        "images/github-icon.png",
        "images/git-icon.png"
      ]
    },
    {
      name: "خالد عبدالله الجهني",
      role: "مطور واجهات أمامية",
      image: "images/avatarboy.png",
      skills: [
        "images/css-icon.SVG",
        "images/html-icon.SVG",
        "images/github-icon.png",
        "images/git-icon.png",
        "images/js-icon.png"
         
      ]
    },
    {
      name: "أروى عبدالعزيز",
      role: "مصممة واجهة وتجربة المستخدم",
      image: "images/avatargirl.png",
      skills: [
        "images/css-icon.SVG",
        "images/html-icon.SVG",
        "images/js-icon.png",
        "images/figma-icon.png"
         
      ]
    },
    {
      name: "سرى سرور",
      role: "Full Stack Developer & AI",
      image: "images/avatargirl.png",
      skills: [
        "images/css-icon.SVG",
        "images/html-icon.SVG",
        "images/js-icon.png",
        "images/php-icon.SVG",
        "images/python-icon.png",
        "images/sql-icon.png"
      ]
    },
    {
      name: "أحمد",
      role: "Full Stack Developer",
      image: "images/avatarboy.png",
      skills: [
        "images/css-icon.SVG",
        "images/html-icon.SVG",
        "images/js-icon.png",
        "images/restapi-icon.png",
        "images/sql-server-icon.png",
        "images/typescript-icon.png",
        "images/sass-icon.png",
        "images/NET1-icon.png",
        "images/net-framework-icon.png",
        "images/c-sharp-icon.SVG"
      ]
    },
    {
      name: "مروه الحربي",
      role: "مصممة واجهة وتجربة المستخدم ومطورة تطبيقات ويب",
      image: "images/avatargirl.png",
      skills: [
        "images/css-icon.SVG",
        "images/html-icon.SVG",
        "images/js-icon.png",
        "images/Flutter-icon.png",
        "images/figma-icon.png"
      ]
    }
  ];
  
  let index = 0;
  
  function renderCards() {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
  
  
    const total = team.length;
    const indices = [
      (index - 1 + total) % total, // البطاقة السابقة
      index,                       // البطاقة الحالية
      (index + 1) % total          // البطاقة التالية
    ];
  
    indices.forEach((i) => {
      const member = team[i];
      const card = document.createElement("div");
      card.classList.add("team-card");
      if (i === index) card.classList.add("active");
  
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <div class="skills">
          ${member.skills.map(skill => `<img src="${skill}">`).join('')}
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  document.querySelector(".next").onclick = () => {
    index = (index + 1) % team.length;
    renderCards();
  };
  
  document.querySelector(".prev").onclick = () => {
    index = (index - 1 + team.length) % team.length;
    renderCards();
  };
  
  renderCards();
  