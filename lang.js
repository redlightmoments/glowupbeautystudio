const translations = {
  ru: {
    menu_services: "Услуги",
    menu_about: "О нас",
    menu_contact: "Контакты",
    hero_text: "Ваш путь к красоте — с любовью и вниманием",
    book_now: "Записаться",
    services_title: "Услуги",
    service_1: "Маникюр и педикюр",
    service_2: "Наращивание ресниц",
    service_3: "Перманентный макияж",
    service_4: "Уход за лицом",
    service_5: "Удаление старого татуажа",
    about_title: "О нас",
    portfolio_title: "Портфолио",
    about_text: "Наша студия предлагает профессиональный уход в уютной атмосфере. Опытные мастера, качественные материалы и индивидуальный подход к каждой клиентке.",
    contact_title: "Контакты",
    book_now: "Записаться",
  booking_title: "Записаться на услугу",
  master_alena: "Алёна",
  master_alena_services: "Наращивание ресниц, Перманентный макияж, Уход за лицом, Удаление старого татуажа",
  master_alena_phone: "📞 Телефон: +49 155 66108327",
  master_alena_whatsapp: "💬 WhatsApp: ",
  
  master_dana: "Дана",
  master_dana_services: "Маникюр и педикюр",
  master_dana_phone: "📞 Телефон: +49 176 84244074",
  master_dana_whatsapp: "💬 WhatsApp: ",
    portfolio_title: "Портфолио"
  },
  de: {
    menu_services: "Dienstleistungen",
    menu_about: "Über uns",
    menu_contact: "Kontakt",
    hero_text: "Ihr Weg zur Schönheit – mit Liebe und Fürsorge",
    book_now: "Jetzt buchen",
    services_title: "Dienstleistungen",
    service_1: "Maniküre und Pediküre",
    service_2: "Wimpernverlängerung",
    service_3: "Permanent Make-up",
    service_4: "Gesichtspflege",
    service_5: "Entfernung alter Tätowierungen",
    portfolio_title: "Portfolio",
    about_title: "Über uns",
    about_text: "Unser Studio bietet professionelle Pflege in einer gemütlichen Atmosphäre. Erfahrene Meister, hochwertige Materialien und individuelle Betreuung jeder Kundin.",
    contact_title: "Kontakt",
    book_now: "Jetzt buchen",
  booking_title: "Dienstleistung buchen",
  master_alena: "Alena",
  master_alena_services: "Wimpernverlängerung, Permanent Make-up, Gesichtspflege, Entfernung alter Tätowierungen",
  master_alena_phone: "📞 Telefon: +49 155 66108327",
  master_alena_whatsapp: "💬 WhatsApp: ",
  
  master_dana: "Dana",
  master_dana_services: "Maniküre und Pediküre",
  master_dana_phone: "📞 Telefon: +49 176 84244074",
  master_dana_whatsapp: "💬 WhatsApp: ",
    portfolio_title: "Portfolio",
  },
  en: {
    menu_services: "Services",
    menu_about: "About Us",
    menu_contact: "Contact",
    hero_text: "Your path to beauty — with love and care",
    book_now: "Book Now",
    services_title: "Services",
    service_1: "Manicure and Pedicure",
    service_2: "Eyelash Extensions",
    service_3: "Permanent Makeup",
    service_4: "Facial Care",
    service_5: "Old Tattoo Removal",
    portfolio_title: "Portfolio",
    about_title: "About Us",
    about_text: "Our studio offers professional care in a cozy atmosphere. Experienced specialists, quality materials, and an individual approach to every client.",
    contact_title: "Contact",
    book_now: "Book Now",
  booking_title: "Book a Service",
  master_alena: "Alena",
  master_alena_services: "Eyelash Extensions, Permanent Makeup, Facial Care, Old Tattoo Removal",
  master_alena_phone: "📞 Phone: +49 155 66108327",
  master_alena_whatsapp: "💬 WhatsApp: ",
  
  master_dana: "Dana",
  master_dana_services: "Manicure and Pedicure",
  master_dana_phone: "📞 Phone: +49 176 84244074",
  master_dana_whatsapp: "💬 WhatsApp: ",
    portfolio_title: "Portfolio",
  }
};

function setLanguage(lang) {
  // Найти все элементы с атрибутом data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
};

function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
// По умолчанию русский
setLanguage("de");

let currentIndex = 0;
const images = Array.from(document.querySelectorAll(".portfolio-item"));

function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  currentIndex = images.indexOf(img);
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal(event) {
  if (event.target.id === "modal" || event.target.className === "close") {
    document.getElementById("modal").style.display = "none";
  }
}

function showImage(index) {
  const modalImg = document.getElementById("modal-img");
  if (index >= 0 && index < images.length) {
    currentIndex = index;
    modalImg.src = images[currentIndex].src;
  }
}

function prevImage(event) {
  event.stopPropagation();
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
}

function nextImage(event) {
  event.stopPropagation();
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  }
}

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем, есть ли сохранённая тема в localStorage
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = '🌙';
  } else {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = '☀️';
  }
});

  function openBookingModal() {
  document.getElementById('bookingModal').style.display = 'flex';
}

function closeBookingModal(event) {
  const modal = document.getElementById('bookingModal');
  if (event.target === modal || event.target.classList.contains('close-btn')) {
    modal.style.display = 'none';
  }
}

const whatsappAlena = document.getElementById("whatsapp-alena");
const whatsappDana = document.getElementById("whatsapp-dana");

if (whatsappAlena && translations[lang].master_alena_whatsapp) {
  whatsappAlena.textContent = translations[lang].master_alena_whatsapp + "Написать в WhatsApp";
  whatsappAlena.href = "https://wa.me/4915566108327";
}

if (whatsappDana && translations[lang].master_dana_whatsapp) {
  whatsappDana.textContent = translations[lang].master_dana_whatsapp + "Написать в WhatsApp";
  whatsappDana.href = "https://wa.me/4916094479219";
}