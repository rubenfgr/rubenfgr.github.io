import "./assets/styles/styles.scss";
import "font-awesome/css/font-awesome.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/img/Perfil_CV.jpg";

const dataJSON = require("./data/data.json");

// ==================================================
//  DOM ELEMENTS
// ==================================================
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const elArrowTop = document.getElementById("arrow-top");
const elMenuExperience = document.getElementById("menu-experience");
const elMenuTraining = document.getElementById("menu-training");
const elMenuKnowledge = document.getElementById("menu-knowledge");
const elMenuCertificates = document.getElementById("menu-certificates");

const elHeaderData = document.getElementById("header-data");
const elSectionMessage = document.getElementById("section-message");
const elSectionExperience = document.getElementById("section-experience");
const elSectionTraining = document.getElementById("section-training");
const elSectionKnowledge = document.getElementById("section-knowledge");
const elSectionCertificates = document.getElementById("section-certificates");

// ==================================================
//  LOAD DATA FROM data/data.json
// ==================================================

// ----------------------------
//  HEADER DATA
// ----------------------------

if (elHeaderData) {
  elHeaderData.innerHTML = `
    <h2>${dataJSON["personal-info"].firstname} ${dataJSON["personal-info"].lastname}</h2>
    <p>${dataJSON["personal-info"].job}</p>
    <br />
    <p>${dataJSON["personal-info"].address}</p>
    <p>${dataJSON["personal-info"].email}</p>
    <p>${dataJSON["personal-info"].phone}</p>
    <div id="social">
      <a class="bi bi-facebook" href="${dataJSON["personal-info"].facebook}" target="_blank"></a>
      <a class="bi bi-linkedin" href="${dataJSON["personal-info"].linkedin}" target="_blank"></a>
      <a class="bi bi-github" href="${dataJSON["personal-info"].github}" target="_blank"></a>
    </div>
  `;
}

// ----------------------------
//  SECTION MESSAGE
// ----------------------------

if (elSectionMessage) {
  elSectionMessage.innerHTML = `<p>${dataJSON["message"]}</p>`;
}

// ----------------------------
//  SECTION EXPERIENCE
// ----------------------------

if (elSectionExperience) {
  elSectionExperience.innerHTML = "<h1>Experiencia profesional</h1>";
  Array.from(dataJSON.experience).forEach((v: any) => {
    const experience = document.createElement("div");
    experience.classList.add("experience");
    experience.innerHTML = `
    <div class="experience">
      <h3 class="experience-date">${v.date}</h3>
      <div>
        <h3>${v.company}</h3>
        <h4>${v.job}</h4>
        <ul></ul>
      </div>
    </div>
    `;

    const ul = experience.getElementsByTagName("ul")[0];
    Array.from(v.jobs).map((j) => {
      ul.innerHTML += `<li>${j}</li>`;
    });
    elSectionExperience.appendChild(experience);
  });
}

// ----------------------------
//  SECTION TRAINING
// ----------------------------

if (elSectionTraining) {
  elSectionTraining.innerHTML = "<h1>Formación académica</h1>";
  Array.from(dataJSON.training).forEach((v: any) => {
    const training = document.createElement("div");
    training.classList.add("training");
    training.innerHTML = `
    <div class="training">
      <h3 class="training-date">${v.date}</h3>
      <div>
        <h3>${v.title}</h3>
        <p>${v.school}</p>
        <h4>Nota media: ${v["average-rate"]}</h4>
        <ul class="training-scores"><a>&rightarrow; Mostrar calificaciones</a></ul>
      </div>
    </div>
    `;
    const ul = training.getElementsByClassName("training-scores")[0];
    Array.from(v.modules).map((j: any) => {
      ul.innerHTML += `<li><div>${j.module}</div><div>${j.score}</div></li>`;
    });
    elSectionTraining.appendChild(training);
  });
}

// ----------------------------
//  SECTION KNOWLEDGE
// ----------------------------

if (elSectionKnowledge) {
  elSectionKnowledge.innerHTML = "<h1>Conocimientos</h1>";
  const knowledges = document.createElement("div");
  knowledges.classList.add("knowledge");
  Array.from(dataJSON.knowledge).forEach((v: any) => {
    knowledges.innerHTML += `
      <div>
        <div>${v.name}</div>
        <div class="bar-level">
          <div class="bar-level-back"></div>
          <div class="bar-level-front" style="width: ${v.level}%;"></div>
        </div>
      </div>
    `;
  });
  elSectionKnowledge.appendChild(knowledges);
}

// ----------------------------
//  SECTION CERTIFICATES
// ----------------------------

if (elSectionCertificates) {
  elSectionCertificates.innerHTML = "<h1>Certificados</h1>";
  const certificates = document.createElement("div");
  certificates.classList.add("certificates");
  Array.from(dataJSON.certificates).forEach((v: any) => {
    certificates.innerHTML += `
      <div class="certificate">
        <div class="certificate-img">
          <img src="assets/img/certificates/${v.image}"/>
        </div>
        <div class="certificate-body">
          <h3>${v.name}</h3>
          <h4>${v.duration}</h4>
          <p>${v.date}</p>
        </div>
      </div>
    `;
  });
  elSectionCertificates.appendChild(certificates);
}

// ==================================================
//  MENU ITEM EVENTS
// ==================================================
elMenuExperience?.addEventListener("click", (e) => {
  if (elSectionExperience && header && nav) {
    let normal = 100;
    if (window.innerWidth < 715) {
      normal = 50;
    }
    window.scrollTo({
      behavior: "smooth",
      top: elSectionExperience.offsetTop - normal,
    });
  }
});

elMenuTraining?.addEventListener("click", (e) => {
  if (elSectionTraining && header && nav) {
    let normal = 100;
    if (window.innerWidth < 715) {
      normal = 50;
    }
    window.scrollTo({
      behavior: "smooth",
      top: elSectionTraining.offsetTop - normal,
    });
  }
});

elMenuKnowledge?.addEventListener("click", (e) => {
  if (elSectionKnowledge && header && nav) {
    let normal = 100;
    if (window.innerWidth < 715) {
      normal = 50;
    }
    window.scrollTo({
      behavior: "smooth",
      top: elSectionKnowledge.offsetTop - normal,
    });
  }
});

elMenuCertificates?.addEventListener("click", (e) => {
  if (elSectionCertificates && header && nav) {
    let normal = 100;
    if (window.innerWidth < 715) {
      normal = 50;
    }
    window.scrollTo({
      behavior: "smooth",
      top: elSectionCertificates.offsetTop - normal,
    });
  }
});

// ==================================================
//  BUTTON TOP
// ==================================================
window.addEventListener("scroll", (e) => {
  if (elArrowTop) {
    if (window.scrollY > 0) {
      elArrowTop.animate([{ opacity: "1" }], {
        easing: "ease-in-out",
        fill: "both",
        duration: 300,
      });
    } else {
      elArrowTop.animate([{ opacity: "0" }], {
        easing: "ease-in-out",
        fill: "both",
        duration: 300,
      });
    }
  }
});

elArrowTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
