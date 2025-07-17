const mallaData = [
  {
    semestre: "Primer semestre",
    ramos: [
      { id: "rc-cientifica", nombre: "Razonamiento y comunicación científica" },
      { id: "bio-general", nombre: "Biología General" },
      { id: "mecanica", nombre: "Mecánica" },
      { id: "intro-calculo", nombre: "Introducción al cálculo" },
      { id: "quimica1", nombre: "Química general I" },
      { id: "tecnicas-lab", nombre: "Técnicas de laboratorio" },
      { id: "ingles1", nombre: "Inglés I" }
    ]
  },
  {
    semestre: "Segundo semestre",
    ramos: [
      { id: "electromagnetismo", nombre: "Electromagnetismo", prerequisitos: ["mecanica", "intro-calculo"] },
      { id: "calculo", nombre: "Cálculo diferencial e integral", prerequisitos: ["intro-calculo"] },
      { id: "quimica2", nombre: "Química general II", prerequisitos: ["quimica1"] },
      { id: "lab-quimica", nombre: "Laboratorio de química general", prerequisitos: ["quimica1", "tecnicas-lab"] },
      { id: "ingles2", nombre: "Inglés II", prerequisitos: ["ingles1"] }
    ]
  },
  // Puedes seguir completando los siguientes semestres con los datos extraídos...
];

const container = document.getElementById("malla");
const aprobados = JSON.parse(localStorage.getItem("ramosAprobados")) || [];

function renderMalla() {
  container.innerHTML = "";

  mallaData.forEach(sem => {
    const box = document.createElement("div");
    box.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = sem.semestre;
    box.appendChild(title);

    sem.ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.dataset.id = ramo.id;
      div.dataset.prerequisitos = ramo.prerequisitos ? ramo.prerequisitos.join(",") : "";
      div.textContent = ramo.nombre;
      box.appendChild(div);
    });

    container.appendChild(box);
  });

  actualizarEstados();
}

function actualizarEstados() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const id = ramo.dataset.id;
    const prereqs = ramo.dataset.prerequisitos ? ramo.dataset.prerequisitos.split(",") : [];

    if (aprobados.includes(id)) {
      ramo.classList.add("aprobado");
      ramo.classList.remove("bloqueado");
    } else {
      const allPrereqsApproved = prereqs.every(p => aprobados.includes(p));
      if (prereqs.length > 0 && !allPrereqsApproved) {
        ramo.classList.add("bloqueado");
        ramo.classList.remove("aprobado");
      } else {
        ramo.classList.remove("bloqueado");
        ramo.classList.remove("aprobado");
      }
    }
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ramo") && !e.target.classList.contains("bloqueado")) {
    const id = e.target.dataset.id;

    if (aprobados.includes(id)) {
      aprobados.splice(aprobados.indexOf(id), 1);
    } else {
      aprobados.push(id);
    }

    localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
    actualizarEstados();
  }
});

renderMalla();
