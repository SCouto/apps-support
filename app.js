const T = {
  en: {
    navSupport: "Support", navPrivacy: "Privacy",
    langLabel: "Language", themeLabel: "Switch between light and dark theme",
    footer: "© Sergio Couto", soon: "Coming soon",
    dGal: "Learn Galician vocabulary with flashcards, home-screen widgets, daily reminders and pronunciation.",
    dRus: "Russian vocabulary flashcards with real pronunciation, conjugation tables and home-screen widgets.",
    dRed: "A political geography quiz: flags, people and historical events, with online challenges against other players.",
    dMul: "Practise multiplication tables. Built for kids, with progress tracking and short timed drills.",
    dFor: "A step-by-step character creator for classic fantasy roleplaying games — races, classes, stats and equipment.",
    sEyebrow: "Support", sTitle: "How can we help?",
    sLead: "Android apps made with care. Questions, bugs or ideas are always welcome.",
    sContactTitle: "Contact",
    sContactText: "For questions, bugs or suggestions, send an email. If it is a technical issue, please include the app, its version and your device model.",
    sContactBtn: "Email me",
    sFaqTitle: "FAQ",
    q1: "Do I need an internet connection?", a1: "No. The apps work offline.",
    q2: "How do I recover my progress on a new device?", a2: "Progress is stored only on the device and there are no accounts, so it is not transferred automatically.",
    q3: "How do I add the widget?", a3: "Touch and hold the Home Screen background, tap \"+\" and search for the app.",
    pEyebrow: "Privacy", pTitle: "Privacy Policy",
    pUpdated: "Last updated: October 6, 2026.",
    pP1: "These apps do not collect, store or share any personal data. They require no sign-up and work without an internet connection, with the single exception of Red Quiz's optional Reto mode on Android (see below).",
    pP2: "Progress, favorites and settings are stored only on your device and are deleted when you uninstall the app. Notifications are local and generated on the device itself.",
    pP3: "The apps contain no advertising and no third-party analytics or tracking tools.",
    pRqTitle: "Red Quiz (Android): Reto multiplayer mode",
    pRq1: "The general statements above apply to Red Quiz in solo mode. The only exception is the optional Reto (challenge) mode, which lets two players compete on the same quiz in real time and therefore needs an internet connection.",
    pRq2: "To make this work, the following data is temporarily stored on Firebase Realtime Database (Google):",
    pRqL1: "The display name you enter before the match",
    pRqL2: "Your quiz answers (which questions you got right or wrong)",
    pRqL3: "Your score and time",
    pRq3: "This data is tied to a randomly generated 6-character challenge code and is not linked to any account, device identifier or personal profile.",
    pRq4: "All challenge data is automatically deleted from the database when the player who created the challenge disconnects. No data is retained after the match ends.",
    pRq5: "Reto is entirely optional. Players who do not use it are not affected by any of the above.",
    pContactTitle: "Contact"
  },
  gl: {
    navSupport: "Soporte", navPrivacy: "Privacidade",
    langLabel: "Idioma", themeLabel: "Cambiar entre tema claro e escuro",
    footer: "© Sergio Couto", soon: "Próximamente",
    dGal: "Aprende vocabulario galego con tarxetas, widgets na pantalla de inicio, recordatorios diarios e pronuncia.",
    dRus: "Tarxetas de vocabulario ruso con pronuncia real, táboas de conxugación e widgets na pantalla de inicio.",
    dRed: "Un test de xeografía política: bandeiras, persoas e feitos históricos, con desafíos en liña contra outros xogadores.",
    dMul: "Practica as táboas de multiplicar. Pensada para a rapazada, con seguimento do progreso e retos cronometrados.",
    dFor: "Un creador de personaxes paso a paso para xogos de rol de fantasía clásicos — razas, clases, atributos e equipo.",
    sEyebrow: "Soporte", sTitle: "Como podemos axudarte?",
    sLead: "Apps Android feitas con coidado. Dúbidas, erros ou ideas son sempre benvidas.",
    sContactTitle: "Contacto",
    sContactText: "Para dúbidas, erros ou suxestións, escribe un correo. Se é un problema técnico, indica a app, a versión e o modelo de dispositivo.",
    sContactBtn: "Escríbeme",
    sFaqTitle: "Preguntas frecuentes",
    q1: "Preciso de conexión a internet?", a1: "Non. As apps funcionan sen conexión.",
    q2: "Como recupero o meu progreso nun dispositivo novo?", a2: "O progreso gárdase só no dispositivo e non hai contas, así que non se transfire automaticamente.",
    q3: "Como engado o widget?", a3: "Mantén premido o fondo da pantalla de inicio, toca «+» e busca a app.",
    pEyebrow: "Privacidade", pTitle: "Política de privacidade",
    pUpdated: "Última actualización: 6 de outubro de 2026.",
    pP1: "Estas aplicacións non recollen, almacenan nin comparten ningún dato persoal. Non requiren rexistro e funcionan sen conexión a internet, coa única excepción do modo opcional Reto de Red Quiz en Android (ver máis abaixo).",
    pP2: "O progreso, os favoritos e os axustes gárdanse unicamente no dispositivo e bórranse ao desinstalar a aplicación. As notificacións son locais e xéranse no propio dispositivo.",
    pP3: "As aplicacións non conteñen publicidade nin ferramentas de análise ou seguimento de terceiros.",
    pRqTitle: "Red Quiz (Android): modo multixogador Reto",
    pRq1: "As afirmacións xerais anteriores aplícanse a Red Quiz en modo individual. A única excepción é o modo opcional Reto (desafío), que permite que dúas persoas compitan no mesmo test en tempo real e, por iso, precisa conexión a internet.",
    pRq2: "Para que isto funcione, gárdanse temporalmente os seguintes datos en Firebase Realtime Database (Google):",
    pRqL1: "O nome que introduces antes da partida",
    pRqL2: "As túas respostas ao test (que preguntas acertaches ou fallaches)",
    pRqL3: "A túa puntuación e o teu tempo",
    pRq3: "Estes datos van asociados a un código de desafío de 6 caracteres xerado ao chou e non se vinculan a ningunha conta, identificador de dispositivo nin perfil persoal.",
    pRq4: "Todos os datos do desafío bórranse automaticamente da base de datos cando se desconecta a persoa que o creou. Non se conserva ningún dato despois da partida.",
    pRq5: "Reto é totalmente opcional. Quen non o use non se ve afectado por nada do anterior.",
    pContactTitle: "Contacto"
  }
};

function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

function setLang(lang) {
  const d = T[lang] || T.en;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    if (d[el.dataset.i18n] !== undefined) el.textContent = d[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    el.setAttribute("aria-label", d[el.dataset.i18nAria]);
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  store("lang", lang);
}

document.addEventListener("DOMContentLoaded", function () {
  const nav = (navigator.language || "en").slice(0, 2);
  setLang(load("lang") || (nav === "gl" ? "gl" : "en"));
  document.querySelector(".lang").addEventListener("click", function (e) {
    const b = e.target.closest("button[data-lang]");
    if (b) setLang(b.dataset.lang);
  });
  document.querySelector(".theme").addEventListener("click", function () {
    const cur = document.documentElement.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store("theme", next);
  });
});
