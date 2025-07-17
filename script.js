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
  {
    semestre: "Tercer semestre",
    ramos: [
      { id: "cultura", nombre: "Cultura y divulgación científica", prerequisitos: ["rc-cientifica"] },
      { id: "fisio-celular", nombre: "Fisiología celular", prerequisitos: ["bio-general", "electromagnetismo", "quimica1"] },
      { id: "organica1", nombre: "Química orgánica I", prerequisitos: ["quimica2"] },
      { id: "estadistica", nombre: "Estadística y análisis de datos", prerequisitos: ["calculo"] },
      { id: "lab-organica1", nombre: "Laboratorio I de química orgánica", prerequisitos: ["quimica2", "lab-quimica"] },
      { id: "analitica1", nombre: "Química analítica I", prerequisitos: ["quimica2", "lab-quimica"] },
      { id: "ingles3", nombre: "Inglés III", prerequisitos: ["ingles2"] }
    ]
  },
  {
    semestre: "Cuarto semestre",
    ramos: [
      { id: "taller-cultura", nombre: "Taller de cultura científica", prerequisitos: ["cultura"] },
      { id: "fisio-sistemas", nombre: "Fisiología de sistemas", prerequisitos: ["fisio-celular"] },
      { id: "fisicoquimica1", nombre: "Fisicoquímica I", prerequisitos: ["mecanica", "quimica1", "organica1"] },
      { id: "organica2", nombre: "Química orgánica II", prerequisitos: ["organica1"] },
      { id: "lab-analisis", nombre: "Laboratorio de análisis químico", prerequisitos: ["estadistica", "analitica1"] },
      { id: "analitica2", nombre: "Química analítica II", prerequisitos: ["analitica1"] },
      { id: "ingles4", nombre: "Inglés IV", prerequisitos: ["ingles3"] }
    ]
  },
  {
    semestre: "Quinto semestre",
    ramos: [
      { id: "fisicoquimica-bio", nombre: "Fisicoquímica para ciencias biológicas", prerequisitos: ["fisicoquimica1"] },
      { id: "bioquimica", nombre: "Bioquímica general", prerequisitos: ["fisicoquimica1", "organica2"] },
      { id: "organelos", nombre: "Estructura y función de organelos celulares", prerequisitos: ["fisio-sistemas", "organica2"] },
      { id: "lab-instrumental", nombre: "Laboratorio de análisis instrumental", prerequisitos: ["estadistica", "analitica2"] }
    ]
  },
  {
    semestre: "Sexto semestre",
    ramos: [
      { id: "proteinas", nombre: "Estructura y función de proteínas", prerequisitos: ["fisicoquimica-bio", "bioquimica"] },
      { id: "genetica-molecular", nombre: "Genética molecular", prerequisitos: ["bioquimica"] },
      { id: "inmunologia", nombre: "Inmunología celular y molecular", prerequisitos: ["organelos"] },
      { id: "microbiologia", nombre: "Microbiología general", prerequisitos: ["organelos"] }
    ]
  },
  {
    semestre: "Séptimo semestre",
    ramos: [
      { id: "quimica-patologica", nombre: "Química fisiológica y patológica", prerequisitos: ["inmunologia", "proteinas"] },
      { id: "genetica-eucariontes", nombre: "Genética molecular de eucariontes", prerequisitos: ["genetica-molecular"] },
      { id: "fisio-gen-micro", nombre: "Fisiología y genética microbiana", prerequisitos: ["genetica-molecular", "microbiologia"] },
      { id: "admin-gestion", nombre: "Administración y gestión", prerequisitos: ["taller-cultura"] },
      { id: "unidad-investigacion", nombre: "Unidad de investigación en bioquímica", prerequisitos: ["lab-instrumental", "bioquimica"] }
    ]
  },
  {
    semestre: "Octavo semestre",
    ramos: [
      { id: "bioquimica-clinica", nombre: "Bioquímica clínica y patológica", prerequisitos: ["quimica-patologica"] },
      { id: "fisiologia-vegetal", nombre: "Fisiología y bioquímica vegetal", prerequisitos: ["genetica-eucariontes"] },
      { id: "bioetica", nombre: "Bioética", prerequisitos: ["quimica-patologica"] },
      { id: "proyectos", nombre: "Formulación y evaluación de proyectos científicos", prerequisitos: ["proteinas"] },
      { id: "bioinformatica", nombre: "Bioinformática", prerequisitos: ["genetica-eucariontes", "proteinas"] },
      { id: "practica1", nombre: "Práctica profesional I", prerequisitos: ["proteinas", "genetica-molecular"] }
    ]
  },
  {
    semestre: "Noveno semestre",
    ramos: [
      { id: "lab-bioquimica", nombre: "Laboratorio de bioquímica clínica", prerequisitos: ["bioquimica-clinica", "admin-gestion"] },
      { id: "farmacologia", nombre: "Tópicos de farmacología", prerequisitos: ["bioquimica-clinica"] },
      { id: "biotecnologia", nombre: "Biotecnología", prerequisitos: ["bioquimica-clinica", "bioetica"] },
      { id: "practica2", nombre: "Práctica profesional II", prerequisitos: ["practica1"] }
    ]
  },
  {
    semestre: "Décimo semestre",
    ramos: [
      { id: "unidad-avanzada", nombre: "Unidad de investigación avanzada en bioquímica", prerequisitos: ["unidad-investigacion", "biotecnologia", "lab-bioquimica"] },
      { id: "bioprocesos", nombre: "Bioprocesos industriales", prerequisitos: ["biotecnologia", "admin-gestion"] },
      { id: "anteproyecto", nombre: "Anteproyecto de memoria de título", prerequisitos: ["lab-bioquimica", "farmacologia", "biotecnologia", "proyectos"] }
    ]
  },
  {
    semestre: "Decimoprimer semestre",
    ramos: [
      { id: "memoria", nombre: "Memoria de título", prerequisitos: ["practica1", "practica2", "anteproyecto", "bioprocesos"] }
    ]
  }
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
