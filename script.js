/**
 * Aliakbar Portfolio — Electric Neo-Brutalist Script
 * UI/UX Pro Max: Theme accents, dynamic particle bursts,
 * tactile screen vibrations, developer oracle, Conversational AI Blackbox (ChatGPT-style), and navigation.
 */

'use strict';

// Global Certificates Registry
const certificates = [
  { src: 'img/1.jpg', title: 'Artificial Intelligence Fundamentals' },
  { src: 'img/2.jpg', title: 'Cyber Security Masterclass (INFOSEC TRAIN)' },
  { src: 'img/3.jpg', title: 'Rahasia Portofolio UI/UX Dilirik Perusahaan' },
  { src: 'img/4.jpg', title: 'Menjadi Seorang BackEnd Engineer (Semo PENS)' },
  { src: 'img/5.jpg', title: 'Samsung Innovation Campus — Python Course' },
  { src: 'img/6.png', title: 'HR Webinar — Siap Jadi HRD' },
  { src: 'img/7.png', title: 'Asia E-Sport Mobile Legends Turnamen' },
  { src: 'img/8.png', title: 'Zero to Hero Career in AI World (Celerates)' },
  { src: 'img/9.jpg', title: 'Juara 3 Turnamen Asia E-Sport Mobile Legends' }
];
let currentCertIndex = 0;

// 1. Accent Theme Switcher
window.changeThemeAccent = function(theme) {
  document.body.className = `theme-${theme}`;
  localStorage.setItem('aliakbar-accent-theme', theme);
  
  document.querySelectorAll('.play-mode-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-theme-${theme}`);
  if (activeBtn) activeBtn.classList.add('active');

  const messages = {
    playful: '🔮 Accent updated to Neo Indigo & Blue!',
    energetic: '⚡ Accent updated to Sun Yellow & Orange!',
    mint: '☘️ Accent updated to Cool Mint & Purples!'
  };
  showToast(messages[theme] || 'Theme accent swapped.');
};

// 2. Playful Custom Brutalist Particle Sparkles (Zero Pink)
window.sparkleBurst = function(event) {
  if (event.target.closest('button') || event.target.closest('a') || event.target.closest('input')) {
    return;
  }
  
  const symbols = ['✦', '🌟', '⚡', '◽', '⚛️', '⚙️', '📈', '🚀', '★'];
  const colors = ['#2563eb', '#f59e0b', '#0d9488', '#ea580c', '#a855f7'];
  const spawnX = event.clientX;
  const spawnY = event.clientY;
  
  const count = 7;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'burst-particle';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = `${spawnX}px`;
    el.style.top = `${spawnY}px`;

    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 100;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 40;

    el.style.setProperty('--dx', `${dx}px`);
    el.style.setProperty('--dy', `${dy}px`);
    
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }
};

window.burstConfettiLaunch = function(event) {
  event.stopPropagation();
  
  const symbols = ['✦', '🌟', '⚡', '◽', '⚛️', '💻', '🚀', '🛠️'];
  const colors = ['#2563eb', '#f59e0b', '#0d9488', '#ea580c', '#38bdf8'];
  const count = 18;
  const clickX = event.clientX;
  const clickY = event.clientY;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'burst-particle';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = `${clickX}px`;
    el.style.top = `${clickY}px`;

    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 140;
    const dx = Math.cos(angle) * distance;
    const dy = -60 - Math.random() * 140;

    el.style.setProperty('--dx', `${dx}px`);
    el.style.setProperty('--dy', `${dy}px`);

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }
};

// 3. Tactile Card Vibration (Shock layout)
window.triggerCardVibe = function(event) {
  event.stopPropagation();
  const card = document.getElementById('showcase-card');
  if (!card) return;
  
  card.style.animation = 'tactileVibe 0.45s ease';
  setTimeout(() => { card.style.animation = ''; }, 500);
  
  burstConfettiLaunch(event);
  
  const icons = ['💥', '🔥', '⚡', '🚀', '👾'];
  const iconField = document.getElementById('showcase-card-icon');
  if (iconField) {
    iconField.textContent = icons[Math.floor(Math.random() * icons.length)];
  }
};

(function injectShake() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes tactileVibe {
      0%, 100% { transform: translateY(0); }
      15%, 45%, 75% { transform: translate(-6px, -4px) rotate(-1.5deg); }
      30%, 60%, 90% { transform: translate(6px, 4px) rotate(1.5deg); }
    }
  `;
  document.head.appendChild(style);
})();

// 4. Change Accents of bubbles
window.changeBubbleTheme = function(color) {
  document.documentElement.style.setProperty('--color-brand-blue', color);
  showToast(`🎨 Accent theme tokens updated successfully!`);
};

// 5. Oracle Fortunes Quotes
const quotes = [
  "\"Clean code always looks like it was written by someone who cares.\" — Michael Feathers",
  "\"Design is not just what it looks like and feels like. Design is how it works.\" — Steve Jobs",
  "\"Simplicity is key to responsive web design. Zero bloat leads to pure speed.\"",
  "\"Make it work, make it right, make it fast.\" — Kent Beck",
  "\"Automate everything. Let scripts handle the repetitive cycles while you design interfaces.\"",
  "\"Perfect layout accuracy comes from precise CSS flex and grid ratios.\"",
  "\"Responsive systems adapt fluidly across mobile, laptop, and ultra-wide screens.\""
];
window.tellDeveloperFortune = function() {
  const oracle = document.getElementById('oracle-field');
  if (!oracle) return;
  
  oracle.style.opacity = '0';
  setTimeout(() => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    oracle.textContent = q;
    oracle.style.opacity = '1';
    oracle.style.transition = 'opacity 0.3s ease';
  }, 200);
};

// 6. Interactive Conversational Blackbox AI CLI Simulator (ChatGPT style)
(function initCliTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const body = document.getElementById('terminal-body');
  if (!input || !output || !body) return;

  body.addEventListener('click', () => {
    input.focus();
  });

  // Matrix digital rain canvas logic
  function startMatrixRain() {
    const existing = document.getElementById('matrix-canvas');
    if (existing) existing.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      background: #000;
      cursor: pointer;
    `;
    body.appendChild(canvas);

    canvas.width = body.clientWidth;
    canvas.height = body.clientHeight;

    const ctx = canvas.getContext('2d');
    const katakana = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = katakana.split('');
    const fontSize = 11;
    const columns = Math.floor(canvas.width / fontSize) + 1;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = Math.random() * -100;
    }

    let animId;
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff66';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    const stopMatrix = () => {
      cancelAnimationFrame(animId);
      canvas.remove();
      showToast('🛡️ Matrix mode exited.');
    };

    canvas.addEventListener('click', (e) => {
      e.stopPropagation();
      stopMatrix();
    });

    const stopOnKey = (e) => {
      input.removeEventListener('keydown', stopOnKey);
      stopMatrix();
    };
    input.addEventListener('keydown', stopOnKey);

    // Auto stop after 20s
    setTimeout(() => {
      if (document.getElementById('matrix-canvas') === canvas) {
        stopMatrix();
        input.removeEventListener('keydown', stopOnKey);
      }
    }, 20000);
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawInput = input.value;
      const query = rawInput.trim().toLowerCase();
      input.value = '';
      
      // Print prompt and query
      const line = document.createElement('div');
      line.style.margin = '5px 0';
      line.innerHTML = `<span style="color: var(--color-brand-blue); font-weight: bold;">you@visitor:~$</span> <span style="color: #fff;">${escapeHtml(rawInput)}</span>`;
      output.appendChild(line);

      if (query) {
        // AI Thinking Effect simulator
        const typingEl = document.createElement('div');
        typingEl.style.color = 'rgba(255, 255, 255, 0.4)';
        typingEl.style.margin = '4px 0 10px';
        typingEl.innerHTML = `<span>Processing query...</span>`;
        output.appendChild(typingEl);
        body.scrollTop = body.scrollHeight;

        setTimeout(() => {
          typingEl.remove();
          processAIQuery(query, output);
          body.scrollTop = body.scrollHeight;
        }, 400 + Math.random() * 300);
      }
    }
  });

  function processAIQuery(query, container) {
    const responseLine = document.createElement('div');
    responseLine.style.margin = '4px 0 12px';
    responseLine.style.lineHeight = '1.6';
    responseLine.style.color = '#38bdf8';

    // 1. Help Commands
    if (query === 'help' || query === 'perintah' || query === 'menu') {
      responseLine.innerHTML = `
        <div style="color: var(--color-brand-yellow); font-weight: bold; margin-bottom: 4px;">🤖 AI Assistant Commands:</div>
        <div>Silakan ketik pertanyaan bebas atau gunakan kata kunci berikut:</div>
        <div>• <span style="color: #fff; font-weight: 600;">about</span> - Tentang profil &amp; identitas Aliakbar</div>
        <div>• <span style="color: #fff; font-weight: 600;">skills</span> - Daftar framework &amp; keahlian pemrograman</div>
        <div>• <span style="color: #fff; font-weight: 600;">projects</span> - Daftar live website buatan Aliakbar</div>
        <div>• <span style="color: #fff; font-weight: 600;">certs</span> - Tampilkan sertifikat &amp; prestasi Aliakbar</div>
        <div>• <span style="color: #fff; font-weight: 600;">youtube-bot</span> - Penjelasan bot otomasi Python</div>
        <div>• <span style="color: #fff; font-weight: 600;">odyssey</span> - Tampilkan riwayat semester S1-S6</div>
        <div>• <span style="color: #fff; font-weight: 600;">stats</span> - Tampilkan grafik statistik IPK &amp; SKS</div>
        <div>• <span style="color: #fff; font-weight: 600;">hack</span> - Masuk ke mode Matrix Digital Rain</div>
        <div>• <span style="color: #fff; font-weight: 600;">contact</span> - Informasi kontak email &amp; sosmed</div>
        <div>• <span style="color: #fff; font-weight: 600;">clear</span> - Bersihkan layar konsol</div>
        <div>• <span style="color: #fff; font-weight: 600;">secret</span> - Trigger ledakan partikel visual</div>
      `;
    }
    // 2. Greetings
    else if (containsAny(query, ['hi', 'hello', 'halo', 'hei', 'hey', 'p ', 'p\n', 'p'])) {
      responseLine.innerHTML = `
        <span style="color: #e2e8f0; font-weight: bold;">Halo! 👋 Saya asisten virtual Aliakbar.</span><br>
        <span>Ada yang bisa saya bantu? Tanyakan saja tentang <strong style="color: #fff;">skill</strong>, <strong style="color: #fff;">proyek live</strong>, <strong style="color: #fff;">YouTube Bot</strong>, atau <strong style="color: #fff;">kontak</strong> sosial medianya!</span>
      `;
    }
    // 3. Clear Screen
    else if (query === 'clear' || query === 'bersih' || query === 'cls') {
      container.innerHTML = '';
      return;
    }
    // 4. Secret Confetti
    else if (query === 'secret' || query === 'rahasia' || query === 'sparks' || query === 'confetti') {
      responseLine.innerHTML = `<span style="color: var(--color-brand-teal);">✨ CONFETTI LAUNCHED FROM CONSOLE NODE!</span>`;
      const mockEvent = {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2,
        stopPropagation: () => {}
      };
      burstConfettiLaunch(mockEvent);
    }
    // 5. Who is Aliakbar / Bio
    else if (containsAny(query, ['siapa', 'who', 'nama', 'name', 'aliakbar', 'profile', 'pemilik', 'owner', 'biodata'])) {
      responseLine.innerHTML = `
        <span style="color: #e2e8f0; font-weight: bold;">Owner Profile: Muhammad Ali Akbar Rouf Bachas (Aliakbar)</span><br>
        <span>Dia adalah mahasiswa Informatika angkatan 2023 yang berfokus pada pengembangan produk web full-stack, otomasi scraping Python, dan kecerdasan buatan. Mengedepankan layout UI/UX bersih, responsif, dan kode yang teratur.</span>
      `;
    }
    // 6. Technical Skills
    else if (containsAny(query, ['skill', 'keahlian', 'bisa', 'bahasa', 'tech', 'stack', 'framework', 'database', 'js', 'php', 'python'])) {
      responseLine.innerHTML = `
        <div style="color: #e2e8f0; font-weight: bold; margin-bottom: 4px;">🛠️ Tech Stack &amp; Skills Matrix:</div>
        <div>• <strong style="color: #fff;">Frontend:</strong> React.js, Vite, TypeScript, Tailwind CSS v4, Responsive HTML5/CSS3</div>
        <div>• <strong style="color: #fff;">Backend &amp; DB:</strong> Laravel, Node.js, Express.js, RESTful APIs, MySQL, PostgreSQL, Google Sheets API</div>
        <div>• <strong style="color: #fff;">AI &amp; Automation:</strong> Python Scripting, Web Scraping (Selenium/Bs4), Machine Learning (Scikit-Learn)</div>
      `;
    }
    // 7. Projects
    else if (containsAny(query, ['project', 'proyek', 'karya', 'buat', 'portofolio', 'portfolio', 'web', 'journey'])) {
      responseLine.innerHTML = `
        <div style="color: #e2e8f0; font-weight: bold; margin-bottom: 4px;">📁 Live Creations &amp; Websites:</div>
        <div>1. <strong style="color: #fff;">MY JOURNEY v1:</strong> Timeline akademis &amp; arsip tugas (<a href="https://my-journey-v-1.vercel.app/" target="_blank" style="color:#60a5fa; text-decoration: underline;">my-journey-v-1.vercel.app</a>)</div>
        <div>2. <strong style="color: #fff;">Money Control v3:</strong> Transaksi sync ke Google Sheets (<a href="https://moneycontrol-v-3.vercel.app" target="_blank" style="color:#60a5fa; text-decoration: underline;">moneycontrol-v-3.vercel.app</a>)</div>
        <div>3. <strong style="color: #fff;">VR/AR Campus Tour:</strong> Navigasi spatial 3D web (<a href="https://aliakbar23.github.io/VRAR/" target="_blank" style="color:#60a5fa; text-decoration: underline;">aliakbar23.github.io/VRAR</a>)</div>
        <div>4. <strong style="color: #fff;">Expense Tracker:</strong> React financial state tracker (<a href="https://moneymanagement-pe4skuo4m-aliakbar23s-projects.vercel.app/" target="_blank" style="color:#60a5fa; text-decoration: underline;">moneymanagement</a>)</div>
      `;
    }
    // 8. Contact & Socials
    else if (containsAny(query, ['kontak', 'contact', 'email', 'hubungi', 'ig', 'instagram', 'linkedin', 'github', 'sosmed'])) {
      responseLine.innerHTML = `
        <div style="color: #e2e8f0; font-weight: bold; margin-bottom: 4px;">✉️ Jalur Komunikasi Resmi:</div>
        <div>• <strong style="color: #fff;">Email:</strong> aliakbar14074@gmail.com</div>
        <div>• <strong style="color: #fff;">LinkedIn:</strong> <a href="https://www.linkedin.com/in/muhammad-ali-akbar-rouf-bachas-b261392a1/" target="_blank" style="color:#60a5fa; text-decoration:underline;">Muhammad Ali Akbar Rouf Bachas</a></div>
        <div>• <strong style="color: #fff;">Instagram:</strong> <a href="https://www.instagram.com/_bachas" target="_blank" style="color:#60a5fa; text-decoration:underline;">@_bachas</a></div>
        <div>• <strong style="color: #fff;">GitHub:</strong> <a href="https://github.com/Aliakbar23" target="_blank" style="color:#60a5fa; text-decoration:underline;">github.com/Aliakbar23</a></div>
      `;
    }
    // 8a. Certificates CLI Command
    else if (containsAny(query, ['certs', 'sertifikat', 'certificate', 'credentials', 'prestasi'])) {
      responseLine.innerHTML = `
        <div style="color: var(--color-brand-yellow); font-weight: bold; margin-bottom: 6px;">🎓 Sertifikat &amp; Penghargaan Aliakbar:</div>
        <div style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 8px; border: 1.5px solid rgba(255,255,255,0.06); line-height: 1.5;">
          1. Artificial Intelligence Fundamentals<br>
          2. Cyber Security Masterclass<br>
          3. Rahasia Portofolio UI/UX Dilirik Perusahaan<br>
          4. Menjadi Seorang BackEnd Engineer (PENS)<br>
          5. Samsung Innovation Campus (Python)<br>
          6. HR Webinar - Siap Jadi HRD<br>
          7. Asia E-Sport Mobile Legends Turnamen<br>
          8. Zero to Hero Career in AI World<br>
          9. Juara 3 Turnamen E-Sport ML (Tim Iwak Gerih)<br>
        </div>
        <div style="margin-top: 6px; color: #fff;">Ketik <span style="color: var(--color-brand-blue); font-weight: 700;">view &lt;angka&gt;</span> (contoh: <span style="color: var(--color-brand-blue); font-weight: 700;">view 5</span>) untuk membuka sertifikat di layar penuh!</div>
      `;
    }
    // 8b. View Certificate CLI Command
    else if (query.startsWith('view ') || query.startsWith('buka ')) {
      const numStr = query.replace('view ', '').replace('buka ', '').trim();
      const num = parseInt(numStr, 10);
      if (num >= 1 && num <= 9) {
        responseLine.innerHTML = `<span style="color: var(--color-brand-teal);">✨ Membuka Sertifikat #${num}: <strong>${certificates[num - 1].title}</strong>...</span>`;
        setTimeout(() => {
          window.openLightbox(certificates[num - 1].src, certificates[num - 1].title);
        }, 350);
      } else {
        responseLine.innerHTML = `<span style="color: var(--color-brand-orange);">⚠️ Nomor sertifikat tidak valid. Gunakan angka 1 sampai 9. (contoh: view 3)</span>`;
      }
    }
    // 9. Python YouTube Bot
    else if (containsAny(query, ['youtube', 'bot', 'video', 'otomatis', 'automasi', 'automation', 'crawler', 'scraping'])) {
      responseLine.innerHTML = `
        <span style="color: #e2e8f0; font-weight: bold;">🤖 YouTube Content Automation Bot:</span><br>
        <span>Aliakbar membangun bot pintar menggunakan <strong style="color: #fff;">Python</strong> dan <strong style="color: #fff;">YouTube Data API v3</strong>. Bot ini bekerja mengunduh klip materi, menyatukan audio narasi berbasis AI, merender file visual, dan mempublikasikannya langsung ke channel YouTube secara terjadwal otomatis.</span>
      `;
    }
    // 9a. Academic Odyssey Timeline Command
    else if (query === 'odyssey' || query === 'journey' || query === 'semester' || query === 'riwayat') {
      responseLine.innerHTML = `
        <div style="color: var(--color-brand-yellow); font-weight: bold; margin-bottom: 8px;">🎓 ACADEMIC ODYSSEY (S1 - S6):</div>
        <div style="display: flex; flex-direction: column; gap: 10px; padding-left: 8px; border-left: 2.5px solid var(--color-brand-blue); margin-top: 4px; font-size: 0.82rem;">
          <div>
            <span style="color: #f472b6; font-weight: bold;">[S1] Semester 1 — "The Beginning"</span><br>
            <span style="color: rgba(255,255,255,0.75);">Awal mula pemrograman dasar &amp; logika komputer. (6 proyek)</span>
          </div>
          <div>
            <span style="color: #fb923c; font-weight: bold;">[S2] Semester 2 — "Getting Deeper"</span><br>
            <span style="color: rgba(255,255,255,0.75);">Struktur data lanjut &amp; adopsi paradigma Java OOP. (3 proyek)</span>
          </div>
          <div>
            <span style="color: #4ade80; font-weight: bold;">[S3] Semester 3 — "Level Up"</span><br>
            <span style="color: rgba(255,255,255,0.75);">Pengembangan web statis-dinamis &amp; basis data relasional. (4 proyek)</span>
          </div>
          <div>
            <span style="color: #22d3ee; font-weight: bold;">[S4] Semester 4 — "Building Things"</span><br>
            <span style="color: rgba(255,255,255,0.75);">Web-framework full-stack, RESTful API, &amp; tour VR/AR. (4 proyek)</span>
          </div>
          <div>
            <span style="color: #c084fc; font-weight: bold;">[S5] Semester 5 — "AI Era Begins"</span><br>
            <span style="color: rgba(255,255,255,0.75);">Deep learning, automasi Python, web money control. (4 proyek)</span>
          </div>
          <div>
            <span style="color: #2dd4bf; font-weight: bold;">[S6] Semester 6 — "Vibe Coder Mode"</span><br>
            <span style="color: rgba(255,255,255,0.75);">Karir dev, PKL, dan ship product kilat dengan AI. (1 proyek)</span>
          </div>
        </div>
      `;
    }
    // 9b. Academic Stats Command
    else if (query === 'stats' || query === 'statistik' || query === 'gpa' || query === 'ipk') {
      responseLine.innerHTML = `
        <div style="color: var(--color-brand-yellow); font-weight: bold; margin-bottom: 6px;">📊 ACADEMIC STATS &amp; PROJECT COUNTS:</div>
        <div style="font-family: monospace; font-size: 0.82rem; line-height: 1.5; color: #38bdf8;">
          <div>IPK/GPA : <span style="color: #4ade80; font-weight: bold;">4.00 / 4.00</span></div>
          <div style="color: var(--color-brand-blue); margin-bottom: 8px;">[████████████████████] 100% Sempurna</div>
          
          <div>Total SKS  : <span style="color: #fff;">104 SKS Selesai</span></div>
          <div>Total Proyek: <span style="color: #fff;">22 Proyek Rilis</span></div>
          
          <div style="margin-top: 8px; color: var(--color-brand-yellow); font-weight: bold;">Proyek per Semester:</div>
          <div>S1 (Pink)   : <span style="color: #f472b6;">██████</span> (6)</div>
          <div>S2 (Orange) : <span style="color: #fb923c;">███</span> (3)</div>
          <div>S3 (Green)  : <span style="color: #4ade80;">████</span> (4)</div>
          <div>S4 (Cyan)   : <span style="color: #22d3ee;">████</span> (4)</div>
          <div>S5 (Purple) : <span style="color: #c084fc;">████</span> (4)</div>
          <div>S6 (Mint)   : <span style="color: #2dd4bf;">█</span> (1)</div>
        </div>
      `;
    }
    // 9c. Hack mode (Matrix Digital Rain) Command
    else if (query === 'hack' || query === 'matrix' || query === 'rain') {
      responseLine.innerHTML = `<span style="color: #4ade80; font-weight: bold;">⚡ INITIATING MATRIX HACK PROTOCOL... CLICK SCREEN TO DISMISS.</span>`;
      setTimeout(() => {
        startMatrixRain();
      }, 500);
    }
    // 10. Default / Fallback Chat Response
    else {
      responseLine.innerHTML = `
        <span style="color: var(--color-brand-yellow);">Hmm, saya mendengarmu. 🤖</span><br>
        <span>Sebagai Asisten AI Aliakbar, saya sarankan Anda menanyakan tentang:</span><br>
        <span>• <strong style="color:#fff;">"Siapa Aliakbar?"</strong> (profil &amp; bio)</span><br>
        <span>• <strong style="color:#fff;">"Apa saja skill pemrograman yang dikuasai?"</strong></span><br>
        <span>• <strong style="color:#fff;">"Tunjukkan tautan proyek live-nya"</strong></span><br>
        <span>• <strong style="color:#fff;">"Jelaskan tentang bot YouTube-nya"</strong></span><br>
        <span>• <strong style="color:#fff;">"Bagaimana cara menghubungi Aliakbar?"</strong></span>
      `;
    }

    container.appendChild(responseLine);
  }

  function containsAny(str, keywords) {
    return keywords.some(k => str.includes(k));
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
})();

// Helper Toast Notification
function showToast(msg) {
  const existing = document.querySelector('.toast-brutal');
  if (existing) existing.remove();

  const t = document.createElement('div');
  t.className = 'toast-brutal';
  t.style.cssText = `
    position: fixed; bottom: 24px; right: 24px;
    background: #0b0f19;
    border: 3px solid #000;
    border-radius: 12px; padding: 14px 20px;
    color: #fff; font-family: 'Space Grotesk', sans-serif;
    font-weight: 700; font-size: 0.88rem; 
    box-shadow: 4px 4px 0 #000;
    z-index: 100000; animation: toast-in .3s ease forwards;
  `;
  t.innerHTML = `⭐ <span>${msg}</span>`;
  document.body.appendChild(t);

  setTimeout(() => {
    t.style.animation = 'toast-out .3s ease forwards';
    setTimeout(() => t.remove(), 300);
  }, 2800);
}

(function injectToastKeyframes() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes toast-in { from { transform: translateY(40px) scale(0.9); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
    @keyframes toast-out { from { transform: translateY(0) scale(1); opacity: 1; } to { transform: translateY(40px) scale(0.9); opacity: 0; } }
  `;
  document.head.appendChild(style);
})();

// 7. Let's Talk Focus & Smooth Scroll Handler
window.focusTerminal = function(event) {
  if (event) event.preventDefault();
  
  const playground = document.getElementById('playground');
  const termInput = document.getElementById('terminal-input');
  
  if (playground) {
    playground.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  if (termInput) {
    setTimeout(() => {
      termInput.focus();
      // Print welcome in terminal
      const output = document.getElementById('terminal-output');
      if (output) {
        const line = document.createElement('div');
        line.style.margin = '8px 0';
        line.innerHTML = `<span style="color: var(--color-brand-yellow); font-weight: bold;">[System]:</span> Halo! Aliakbar di sini. Silakan ketik pertanyaanmu, atau ketik <span style="color: #fff; font-weight: bold; text-decoration: underline;">certs</span> untuk melihat daftar sertifikat saya! 🤖`;
        output.appendChild(line);
        const body = document.getElementById('terminal-body');
        if (body) body.scrollTop = body.scrollHeight;
      }
    }, 600);
  }
};

// 8. Interactive Lightbox Gallery Controls
window.openLightbox = function(src, title) {
  const modal = document.getElementById('cert-lightbox');
  if (!modal) return;
  
  const foundIndex = certificates.findIndex(c => c.src === src);
  if (foundIndex !== -1) {
    currentCertIndex = foundIndex;
  }
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  updateLightboxContent();
};

window.closeLightbox = function() {
  const modal = document.getElementById('cert-lightbox');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

window.prevLightbox = function(event) {
  if (event) event.stopPropagation();
  currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
  updateLightboxContent();
};

window.nextLightbox = function(event) {
  if (event) event.stopPropagation();
  currentCertIndex = (currentCertIndex + 1) % certificates.length;
  updateLightboxContent();
};

function updateLightboxContent() {
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const indexIndicator = document.getElementById('lightbox-index');
  
  if (!img || !title || !indexIndicator) return;
  
  const currentCert = certificates[currentCertIndex];
  
  img.classList.remove('lightbox-fade-active');
  void img.offsetWidth; 
  
  img.src = currentCert.src;
  img.alt = currentCert.title;
  title.textContent = currentCert.title;
  indexIndicator.textContent = `${currentCertIndex + 1} / ${certificates.length}`;
  
  img.classList.add('lightbox-fade-active');
}

// 9. Keyboard Shortcuts for Lightbox
window.addEventListener('keydown', function(event) {
  const modal = document.getElementById('cert-lightbox');
  if (!modal || modal.style.display !== 'flex') return;
  
  if (event.key === 'Escape' || event.key === 'Esc') {
    window.closeLightbox();
  } else if (event.key === 'ArrowLeft') {
    window.prevLightbox();
  } else if (event.key === 'ArrowRight') {
    window.nextLightbox();
  }
});

// 10. Swipe Gestures for Mobile
let touchStartX = 0;
let touchEndX = 0;

// Bind swipe gestures directly
const certLightboxEl = document.getElementById('cert-lightbox');
if (certLightboxEl) {
  certLightboxEl.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  certLightboxEl.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (diff > 50) {
      window.prevLightbox();
    } else if (diff < -50) {
      window.nextLightbox();
    }
  }, { passive: true });
}

// Navigation, scroll reveal, dark mode toggle, and initialization
(function initApp() {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));

      if (!expanded) {
        navLinks.style.cssText = `
          display: flex; flex-direction: column;
          position: absolute; top: 70px; left: 0; right: 0;
          background: rgba(11, 15, 25, 0.98);
          border: 3px solid #000;
          padding: 16px 24px;
          gap: 6px; animation: fade-in-down 0.25s ease; z-index: 99;
          box-shadow: 4px 4px 0 #000;
        `;
      } else {
        navLinks.style.cssText = '';
      }
    });
  }

  // Smooth Scroll Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks && navLinks.style.display === 'flex') {
          toggle.setAttribute('aria-expanded', 'false');
          navLinks.style.cssText = '';
        }
      }
    });
  });

  // Reveal cards on scroll
  const cards = document.querySelectorAll('.playful-brutal-card, .section-header, .bubble-tag');
  cards.forEach((c, i) => {
    c.classList.add('reveal');
    c.style.transitionDelay = `${(i % 4) * 60}ms`;
  });

  const scrollObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        scrollObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });
  cards.forEach(c => scrollObs.observe(c));

  // Magnetic visual effects
  document.querySelectorAll('.playful-brutal-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const dx = (x - r.width/2)  / (r.width/2);
      const dy = (y - r.height/2) / (r.height/2);
      card.style.transform  = `translateY(-6px) rotateX(${-dy*4}deg) rotateY(${dx*4}deg)`;
      card.style.transition = 'transform 0.08s ease';
      card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(37,99,235,.06) 0%, rgba(30,41,59,.7) 60%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.4s cubic-bezier(.34,1.56,.64,1)';
      card.style.background = '';
    });
  });

  // Cursor Trail Follow Glow
  const glow = document.createElement('div');
  Object.assign(glow.style, {
    position:'fixed', width:'350px', height:'350px', pointerEvents:'none',
    zIndex:'0', borderRadius:'50%', transform:'translate(-50%,-50%)',
    background:'radial-gradient(circle, rgba(37,99,235,.06) 0%, transparent 65%)',
  });
  document.body.prepend(glow);
  let mx=0,my=0,gx=0,gy=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; }, { passive:true });
  (function loop() {
    gx += (mx-gx)*0.08; gy += (my-gy)*0.08;
    glow.style.left = gx+'px'; glow.style.top = gy+'px';
    requestAnimationFrame(loop);
  })();

  // Navigation Highlights
  const navLinksList = document.querySelectorAll('.capsule-nav-link');
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinksList.forEach(l => {
          const act = l.getAttribute('href') === '#' + e.target.id;
          l.style.color      = act ? '#fff' : '';
          l.style.background = act ? 'var(--color-brand-blue)' : '';
          l.style.boxShadow  = act ? '2px 2px 0 #000' : '';
          l.style.border     = act ? '2px solid #000' : '';
          l.style.borderRadius = act ? '8px' : '';
        });
      }
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('section[id]').forEach(s => sectionObs.observe(s));

  // Brutalist Button Ripples
  document.querySelectorAll('.bouncy-btn, .work-link, .contact-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const r = this.getBoundingClientRect();
      const sz = Math.max(r.width,r.height)*2;
      const sp = document.createElement('span');
      Object.assign(sp.style, {
        position:'absolute', width:sz+'px', height:sz+'px',
        left:(e.clientX-r.left-sz/2)+'px', top:(e.clientY-r.top-sz/2)+'px',
        background:'rgba(255,255,255,.15)', borderRadius:'50%',
        transform:'scale(0)', animation:'ripple-anim .5s ease-out forwards',
        pointerEvents:'none',
      });
      this.style.position='relative'; this.style.overflow='hidden';
      this.appendChild(sp);
      setTimeout(() => sp.remove(), 500);
    });
  });

  const styleTag = document.createElement('style');
  styleTag.textContent = `@keyframes ripple-anim { to { transform:scale(1); opacity:0; } }`;
  document.head.appendChild(styleTag);

  // Logo marquee track controls
  const innerTrack = document.querySelector('.logos-inner');
  if (innerTrack) {
    innerTrack.parentElement.addEventListener('mouseenter', () => innerTrack.style.animationPlayState = 'paused');
    innerTrack.parentElement.addEventListener('mouseleave', () => innerTrack.style.animationPlayState = 'running');
  }

  // Dark/Light mode switcher
  const LOCAL_KEY = 'aliakbar-theme-matrix-neo';
  const modeBtn = document.getElementById('theme-toggle');
  if (localStorage.getItem(LOCAL_KEY) === 'light') document.body.classList.add('light-mode');
  
  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      const light = document.body.classList.toggle('light-mode');
      localStorage.setItem(LOCAL_KEY, light ? 'light' : 'dark');
      modeBtn.style.transform = 'scale(1.2) rotate(15deg)';
      setTimeout(() => modeBtn.style.transform = '', 200);
    });
  }

  // Load Saved Accent Theme
  const savedAccent = localStorage.getItem('aliakbar-accent-theme');
  if (savedAccent) {
    changeThemeAccent(savedAccent);
  }

  // Body loaded transition
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  window.addEventListener('load', () => { document.body.style.opacity = '1'; });
})();

console.log(
  '%c⚡ Aliakbar Brutalist Studio Matrix Loaded Successfully',
  'background:#2563eb;color:white;padding:6px 14px;border-radius:8px;font-weight:bold;'
);
