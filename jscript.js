// ==================== УСЛУГИ ====================
const servicesData = [
  { name: "КТ для животных", price: "от 5000 руб.", desc: "Высокоточная диагностика", icon: "fa-microscope" },
  { name: "МРТ для животных", price: "от 11000 руб.", desc: "Детальное исследование", icon: "fa-brain" },
  { name: "Хирургия", price: "от 3500 руб.", desc: "Операции любой сложности", icon: "fa-kit-medical" },
  { name: "Терапия", price: "от 3500 руб.", desc: "Лечение внутренних болезней", icon: "fa-stethoscope" },
  { name: "Кардиология", price: "от 3000 руб.", desc: "Сердце под контролем", icon: "fa-heartbeat" },
  { name: "Неврология", price: "от 3500 руб.", desc: "Здоровье нервной системы", icon: "fa-brain" },
  { name: "Ортопедия", price: "от 3500 руб.", desc: "Кости и суставы", icon: "fa-bone" },
  { name: "Стоматология", price: "от 3500 руб.", desc: "Здоровые зубы", icon: "fa-tooth" },
  { name: "Эндоскопия", price: "от 19000 руб.", desc: "Малоинвазивная хирургия", icon: "fa-microscope" }
];

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (grid) {
    grid.innerHTML = servicesData.map(s => `
      <div class="service-card" style="cursor: pointer;">
        <div class="service-icon"><i class="fas ${s.icon}"></i></div>
        <div class="service-name">${s.name}</div>
        <div class="service-price">${s.price}</div>
        <div class="service-desc">${s.desc}</div>
      </div>
    `).join('');
  }
}

// ==================== СПЕЦИАЛИСТЫ ====================
const doctors = [
  { name: "Иванова Екатерина Валентиновна", role: "ведущий кардиолог", photo: "images/врач1.jpg" },
  { name: "Кильдеева Дарья Руслановна", role: "ведущий хирург", photo: "images/врач2.jpg" },
  { name: "Левченкова Наталья Алексеевна", role: "ведущий кардиолог", photo: "images/врач3.jpg" },
  { name: "Зацепин Никита Андреевич", role: "анестезиолог", photo: "images/врач4.jpg" },
  { name: "Скрицкая Дарья Владимировна", role: "терапевт", photo: "images/врач5.jpg" },
  { name: "Даценко Ульяна Дмитриевна", role: "врач визуальной диагностики", photo: "images/врач6.jpg" },
  { name: "Судьенков Андрей Юрьевич", role: "врач ОРИТ", photo: "images/врач7.jpg" }
];

function renderDoctorsSwiper() {
  const wrapper = document.getElementById('doctorsWrapper');
  if (!wrapper) return;
  
  wrapper.innerHTML = doctors.map(d => `
    <div class="swiper-slide">
      <div class="specialist-card">
        <img class="specialist-photo-img" src="${d.photo}" alt="${d.name}" onerror="this.src='https://placehold.co/200x200/fed790/5e418f?text=Photo'">
        <div class="specialist-name">${d.name}</div>
        <div class="specialist-role" style="color:var(--orange);">${d.role}</div>
        <button class="btn-more" data-doctor='${JSON.stringify(d)}'>Подробнее →</button>
      </div>
    </div>
  `).join('');
  
  new Swiper('.specialistSwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
  });
  
  document.querySelectorAll('.btn-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const doc = JSON.parse(btn.getAttribute('data-doctor'));
      const win = window.open();
      win.document.write(`<html><head><title>${doc.name}</title><link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"><body style="font-family:Inter;padding:30px;"><h2 style="color:#5e418f">${doc.name}</h2><p>${doc.role}, опыт более 12 лет.</p><img src="${doc.photo}" width="150" style="border-radius:50%"><p>Прием по записи.</p><button onclick="window.close()">Закрыть</button></body></html>`);
      win.document.close();
    });
  });
}

// ==================== ЛИЦЕНЗИИ ====================
const licenses = [
  "images/док1.jpg",
  "images/док2.jpg",
  "images/док3.jpg",
  "images/док4.jpg"
];

function renderLicenses() {
  const grid = document.getElementById('licensesGrid');
  if (grid) {
    grid.innerHTML = licenses.map(src => `
      <div class="license-item">
        <img class="license-img" src="${src}" alt="Лицензия">
      </div>
    `).join('');
  }
}

// ==================== СТАТЬИ ====================
const articles = [
  { title: "Как понять, что у кошки болят зубы?", img: "images/article1.jpg", url: "https://vetexample.com/article1" },
  { title: "Первая помощь собаке при отравлении", img: "images/article2.jpg", url: "https://vetexample.com/article2" },
  { title: "Чем опасен клещевой энцефалит для собак", img: "images/article3.jpg", url: "https://vetexample.com/article3" },
  { title: "Мифы о вакцинации кошек", img: "images/article4.png", url: "https://vetexample.com/article4" }
];

function renderArticles() {
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;
  grid.innerHTML = articles.map(a => `
    <div style="background: white; border-radius: 28px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.05); transition: transform 0.2s; cursor: pointer;" onclick="window.open('${a.url}', '_blank')">
      <img src="${a.img}" alt="${a.title}" style="width: 100%; height: 180px; object-fit: cover;">
      <div style="padding: 20px;">
        <h3 style="font-size: 1.2rem; color: var(--purple); margin-bottom: 10px;">${a.title}</h3>
        <span style="color: var(--orange); font-weight: 600;">Читать →</span>
      </div>
    </div>
  `).join('');
}

// ==================== FAQ ====================
const faqData = [
  { q: "Как записаться на приём?", a: "Вы можете воспользоваться кнопкой «Записаться онлайн» на главной странице или позвонить по номеру +7 (812) 777-88-99." },
  { q: "Работаете ли вы круглосуточно?", a: "Да, клиника работает 24/7 без выходных, экстренная помощь в любое время." },
  { q: "Как добраться от метро Петроградская?", a: "Выход на Вяземский переулок, пройти 15 минут. Ориентир бизнес-центр 'Вяземский', вывеска клиники." },
  { q: "Принимаете экзотических животных?", a: "Да, у нас есть герпетолог и орнитолог. Звоните для уточнения." }
];

function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container) return;
  container.innerHTML = '';
  faqData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'faq-item';
    div.innerHTML = `<div class="faq-question">${item.q} <i class="fas fa-chevron-down"></i></div><div class="faq-answer">${item.a}</div>`;
    div.querySelector('.faq-question').onclick = () => {
      div.classList.toggle('active');
      const icon = div.querySelector('.faq-question i');
      icon.classList.toggle('fa-chevron-up');
      icon.classList.toggle('fa-chevron-down');
    };
    container.appendChild(div);
  });
}

// ==================== ЛИЧНЫЙ КАБИНЕТ ====================
let isLoginMode = true;
const modalCab = document.getElementById('cabinetModal');
const openModal = document.getElementById('openCabinetModal');
const closeSpan = document.querySelector('.close-modal');

if (openModal) {
  openModal.onclick = () => { if (modalCab) modalCab.style.display = 'flex'; };
}
if (closeSpan) {
  closeSpan.onclick = () => { if (modalCab) modalCab.style.display = 'none'; };
}
window.onclick = e => { if (modalCab && e.target === modalCab) modalCab.style.display = 'none'; };

const authForm = document.getElementById('authForm');
const switchBtn = document.getElementById('switchAuthBtn');
const authMsg = document.getElementById('authMessage');
const modalTitle = document.getElementById('modalTitle');
const authActionBtn = document.getElementById('authActionBtn');

if (switchBtn) {
  switchBtn.onclick = () => {
    isLoginMode = !isLoginMode;
    if (modalTitle) modalTitle.innerText = isLoginMode ? "Вход" : "Регистрация";
    if (authActionBtn) authActionBtn.innerText = isLoginMode ? "Войти" : "Создать";
    if (authMsg) authMsg.innerText = '';
  };
}

if (authForm) {
  authForm.onsubmit = (e) => {
    e.preventDefault();
    const loginVal = document.getElementById('authPhoneEmail').value.trim();
    const pass = document.getElementById('authPassword').value.trim();
    let users = JSON.parse(localStorage.getItem('vet_users') || '[]');
    
    if (isLoginMode) {
      const user = users.find(u => (u.phone === loginVal || u.email === loginVal) && u.pass === pass);
      if (user) {
        if (authMsg) {
          authMsg.style.color = 'green';
          authMsg.innerText = `Добро пожаловать!`;
        }
        setTimeout(() => { if (modalCab) modalCab.style.display = 'none'; }, 1200);
      } else {
        if (authMsg) {
          authMsg.style.color = 'red';
          authMsg.innerText = "Неверные данные";
        }
      }
    } else {
      if (users.some(u => u.phone === loginVal || u.email === loginVal)) {
        if (authMsg) authMsg.innerText = "Уже существует";
        return;
      }
      users.push({ phone: loginVal.includes('@') ? '' : loginVal, email: loginVal.includes('@') ? loginVal : '', pass: pass });
      localStorage.setItem('vet_users', JSON.stringify(users));
      if (authMsg) {
        authMsg.style.color = 'green';
        authMsg.innerText = "Регистрация OK! Теперь войдите.";
      }
      isLoginMode = true;
      if (modalTitle) modalTitle.innerText = "Вход";
      if (authActionBtn) authActionBtn.innerText = "Войти";
      authForm.reset();
    }
  };
}

// ==================== ОНЛАЙН ЗАПИСЬ С МЕТРИКОЙ ====================
const showAppBtn = document.getElementById('showAppointmentBtn');
const formBlock = document.getElementById('appointmentFormBlock');

if (showAppBtn && formBlock) {
  showAppBtn.onclick = () => {
    formBlock.style.display = formBlock.style.display === 'block' ? 'none' : 'block';
    
    // ========== ОТПРАВКА СОБЫТИЯ В ЯНДЕКС МЕТРИКУ (КЛИК ПО КНОПКЕ) ==========
    if (typeof ym !== 'undefined') {
      ym(109306913, 'reachGoal', 'click_zapis');
      console.log('✅ Цель "click_zapis" отправлена в Яндекс Метрику');
    } else {
      console.log('❌ Яндекс Метрика не загружена');
    }
  };
}

const appointmentForm = document.getElementById('onlineAppointmentForm');
if (appointmentForm) {
  appointmentForm.onsubmit = (e) => {
    e.preventDefault();
    
    const fio = document.getElementById('app_fio')?.value || '';
    const phone = document.getElementById('app_phone')?.value || '';
    const social = document.getElementById('app_social')?.value || '';
    const pet = document.getElementById('app_pet')?.value || '';
    const reason = document.getElementById('app_reason')?.value || '';
    const date = document.getElementById('app_date')?.value || '';
    
    if (!fio || !phone || !pet) {
      alert('⚠️ Пожалуйста, заполните все поля!');
      return;
    }
    
    // ========== ОТПРАВКА СОБЫТИЯ В ЯНДЕКС МЕТРИКУ (ОТПРАВКА ФОРМЫ) ==========
    if (typeof ym !== 'undefined') {
      ym(109306913, 'reachGoal', 'send_form_zapis');
      console.log('✅ Цель "send_form_zapis" отправлена в Яндекс Метрику');
    } else {
      console.log('❌ Яндекс Метрика не загружена');
    }
    
    let apps = JSON.parse(localStorage.getItem('vet_appointments') || '[]');
    apps.push({ fio, phone, social, pet, reason, date, time: new Date() });
    localStorage.setItem('vet_appointments', JSON.stringify(apps));
    
    alert('✅ Заявка принята! Администратор свяжется с вами в течение 8 часов.');
    
    formBlock.style.display = 'none';
    appointmentForm.reset();
  };
}

// ==================== ЗАПУСК ====================
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderDoctorsSwiper();
  renderFAQ();
  renderLicenses();
  renderArticles();
});
