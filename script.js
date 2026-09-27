// ===== بيانات المسارات =====
const tracksData = {
    "1bac": {
        "sc-math": {
            name: "علوم رياضية",
            subjects: [
                { name: "الرياضيات", coeff: 7 },
                { name: "الفيزياء والكيمياء", coeff: 5 },
                { name: "علوم الحياة والأرض", coeff: 5 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "svt": {
            name: "علوم تجريبية",
            subjects: [
                { name: "علوم الحياة والأرض", coeff: 7 },
                { name: "الفيزياء والكيمياء", coeff: 5 },
                { name: "الرياضيات", coeff: 5 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "eco": {
            name: "علوم اقتصادية",
            subjects: [
                { name: "الاقتصاد العام", coeff: 7 },
                { name: "التدبير المحاسباتي", coeff: 5 },
                { name: "الرياضيات", coeff: 5 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "lettres": {
            name: "آداب وعلوم إنسانية",
            subjects: [
                { name: "اللغة العربية", coeff: 6 },
                { name: "التاريخ والجغرافيا", coeff: 5 },
                { name: "الفلسفة", coeff: 5 },
                { name: "اللغة الفرنسية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        }
    },
    "2bac": {
        "sc-math-a": {
            name: "علوم رياضية أ",
            subjects: [
                { name: "الرياضيات", coeff: 9 },
                { name: "الفيزياء والكيمياء", coeff: 7 },
                { name: "علوم الحياة والأرض", coeff: 5 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "svt": {
            name: "علوم الحياة والأرض",
            subjects: [
                { name: "علوم الحياة والأرض", coeff: 7 },
                { name: "الفيزياء والكيمياء", coeff: 6 },
                { name: "الرياضيات", coeff: 5 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "sc-phys": {
            name: "العلوم الفيزيائية",
            subjects: [
                { name: "الفيزياء والكيمياء", coeff: 7 },
                { name: "الرياضيات", coeff: 6 },
                { name: "علوم الحياة والأرض", coeff: 5 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "eco": {
            name: "علوم اقتصادية",
            subjects: [
                { name: "الاقتصاد العام", coeff: 7 },
                { name: "التدبير المحاسباتي", coeff: 5 },
                { name: "الرياضيات", coeff: 5 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "lettres": {
            name: "آداب",
            subjects: [
                { name: "اللغة العربية", coeff: 6 },
                { name: "التاريخ والجغرافيا", coeff: 5 },
                { name: "الفلسفة", coeff: 5 },
                { name: "اللغة الفرنسية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "sh": {
            name: "علوم إنسانية",
            subjects: [
                { name: "التاريخ والجغرافيا", coeff: 7 },
                { name: "الفلسفة", coeff: 6 },
                { name: "اللغة العربية", coeff: 5 },
                { name: "اللغة الفرنسية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "genie-materiaux": {
            name: "هندسة المادة",
            subjects: [
                { name: "هندسة المادة (التخصص)", coeff: 8 },
                { name: "الرياضيات", coeff: 7 },
                { name: "الفيزياء والكيمياء", coeff: 6 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "genie-mecanique": {
            name: "هندسة ميكانيكية",
            subjects: [
                { name: "الهندسة الميكانيكية (التخصص)", coeff: 8 },
                { name: "الرياضيات", coeff: 7 },
                { name: "الفيزياء والكيمياء", coeff: 6 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        },
        "genie-electrique": {
            name: "هندسة كهربائية",
            subjects: [
                { name: "الهندسة الكهربائية (التخصص)", coeff: 8 },
                { name: "الرياضيات", coeff: 7 },
                { name: "الفيزياء والكيمياء", coeff: 6 },
                { name: "اللغة العربية", coeff: 3 },
                { name: "اللغة الإنجليزية", coeff: 2 },
                { name: "التاريخ والجغرافيا", coeff: 2 },
                { name: "التربية الإسلامية", coeff: 2 },
                { name: "الفلسفة", coeff: 2 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التربية البدنية", coeff: 2 }
            ]
        }
    }
};

// ===== متغيرات عامة =====
let currentUser = null;

// ===== عند فتح الصفحة =====
window.addEventListener('DOMContentLoaded', () => {
    // لو الصفحة الرئيسية
    const levelSelect = document.getElementById('level');
    if (levelSelect) {
        levelSelect.addEventListener('change', () => {
            const level = levelSelect.value;
            const trackSelect = document.getElementById('track');
            trackSelect.innerHTML = '<option value="">-- اختر المسار --</option>';
            if (level && tracksData[level]) {
                for (let key in tracksData[level]) {
                    let opt = document.createElement('option');
                    opt.value = key;
                    opt.textContent = tracksData[level][key].name;
                    trackSelect.appendChild(opt);
                }
            }
        });
    }

    // لو لوحة التحكم
    if (document.getElementById('subjectsList')) {
        const saved = localStorage.getItem('bacUser');
        if (saved) {
            currentUser = JSON.parse(saved);
            loadDashboard();
        } else {
            window.location.href = 'index.html';
        }
    }

    // الوضع الليلي
    if (localStorage.getItem('dark') === 'true') {
        document.body.classList.add('dark');
    }
});

// ===== بدء التتبع =====
function startTracking() {
    const level = document.getElementById('level').value;
    const track = document.getElementById('track').value;
    const name = document.getElementById('name').value.trim();
    if (!level || !track || !name) {
        alert('من فضلك أكمل كل البيانات');
        return;
    }
    currentUser = { name, level, track, progress: {}, grades: {} };
    localStorage.setItem('bacUser', JSON.stringify(currentUser));
    window.location.href = 'dashboard.html';
}

// ===== تحميل لوحة التحكم =====
function loadDashboard() {
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userTrack').textContent = tracksData[currentUser.level][currentUser.track].name;
    document.getElementById('userLevel').textContent = currentUser.level === '1bac' ? 'أولى باك' : 'ثانية باك';
    renderSubjects();
    renderGradeCalc();
    updateTotalProgress();
}

// ===== عرض المواد =====
function renderSubjects() {
    const list = document.getElementById('subjectsList');
    const subjects = tracksData[currentUser.level][currentUser.track].subjects;
    list.innerHTML = '';
    subjects.forEach((s, i) => {
        const p = currentUser.progress[i] || 0;
        const div = document.createElement('div');
        div.className = 'subject-item';
        div.innerHTML = `
            <div>
                <div class="subject-name">${s.name}</div>
                <div class="subject-coeff">المعامل: ${s.coeff}</div>
            </div>
            <div style="display:flex;gap:10px;align-items:center;">
                <div class="progress-bar" style="width:120px;height:18px;">
                    <div class="progress-fill" style="width:${p}%">${p}%</div>
                </div>
                <select onchange="setProgress(${i},this.value)" style="width:110px;margin:0;">
                    <option value="0" ${p===0?'selected':''}>لم يبدأ</option>
                    <option value="25" ${p===25?'selected':''}>25%</option>
                    <option value="50" ${p===50?'selected':''}>50%</option>
                    <option value="75" ${p===75?'selected':''}>75%</option>
                    <option value="100" ${p===100?'selected':''}>مكتمل</option>
                </select>
            </div>`;
        list.appendChild(div);
    });
}

function setProgress(i, v) {
    currentUser.progress[i] = parseInt(v);
    save();
    renderSubjects();
    updateTotalProgress();
}

function updateTotalProgress() {
    const subjects = tracksData[currentUser.level][currentUser.track].subjects;
    let tw = 0, tc = 0;
    subjects.forEach((s, i) => {
        tw += (currentUser.progress[i] || 0) * s.coeff;
        tc += s.coeff;
    });
    const total = Math.round(tw / tc);
    document.getElementById('totalProgress').textContent = total + '%';
    document.getElementById('totalProgressBar').style.width = total + '%';
}

// ===== حاسبة المعدل =====
function renderGradeCalc() {
    const calc = document.getElementById('gradeCalculator');
    const subjects = tracksData[currentUser.level][currentUser.track].subjects;
    calc.innerHTML = '';
    subjects.forEach((s, i) => {
        const g = currentUser.grades[i] || '';
        const div = document.createElement('div');
        div.className = 'grade-row';
        div.innerHTML = `
            <label style="flex:1;margin:0;">${s.name} (×${s.coeff})</label>
            <input type="number" min="0" max="20" step="0.5" value="${g}"
                   onchange="setGrade(${i},this.value)" placeholder="0-20">`;
        calc.appendChild(div);
    });
}

function setGrade(i, v) {
    currentUser.grades[i] = parseFloat(v);
    save();
}

function calculateAverage() {
    const subjects = tracksData[currentUser.level][currentUser.track].subjects;
    let tw = 0, tc = 0, ok = true;
    subjects.forEach((s, i) => {
        const g = currentUser.grades[i];
        if (g === undefined || g === null || isNaN(g)) ok = false;
        else { tw += g * s.coeff; tc += s.coeff; }
    });
    const res = document.getElementById('averageResult');
    if (!ok) { res.innerHTML = '<span style="color:var(--warning)">⚠️ أدخل كل الدرجات</span>'; return; }
    const avg = (tw / tc).toFixed(2);
    let msg = '', c = '';
    if (avg >= 16) { msg = 'ممتاز! 🌟'; c = 'var(--success)'; }
    else if (avg >= 14) { msg = 'جيد جداً 👍'; c = 'var(--success)'; }
    else if (avg >= 12) { msg = 'جيد 👌'; c = 'var(--primary)'; }
    else if (avg >= 10) { msg = 'مقبول ⚠️'; c = 'var(--warning)'; }
    else { msg = 'تحتاج مجهود أكتر 💪'; c = 'var(--danger)'; }
    res.innerHTML = `<span style="color:${c}">المعدل: ${avg}/20 — ${msg}</span>`;
}

// ===== الشات بوت =====
const GEMINI_KEY = 'YOUR_API_KEY_HERE';

const botPrompts = {
    arabic: 'أنت مساعد ذكي متخصص في اللغة العربية لطلاب البكالوريا المغربية. ساعد في شرح الدروس (نصوص، نحو، صرف، بلاغة)، حل التمارين، ونصائح الامتحان. أجب بالعربية المبسطة.',
    english: 'You are a smart assistant for Moroccan Baccalaureate English students. Help with lessons, grammar, vocabulary, reading comprehension, writing tips, and exam preparation. Answer in clear simple English.',
    history: 'أنت مساعد ذكي متخصص في التاريخ الوطني والجغرافيا لطلاب البكالوريا المغربية. ساعد في شرح الدروس، تحليل الوثائق، حفظ التواريخ والأحداث، والمفاهيم الجغرافية. أجب بالعربية بشكل منظم.',
    specialty: 'أنت مساعد ذكي متخصص في هندسة المادة لطلاب البكالوريا المغربية (مسار العلوم والتكنولوجيات الميكانيكية). ساعد في شرح دروس هندسة المادة (خواص المواد، المعالجات الحرارية، السبائك، البوليمرات، السيراميك، الاختبارات الميكانيكية)، حل التمارين والمسائل، ونصائح الامتحان. أجب بالعربية مع المصطلحات العلمية.'
};

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    addChatMsg(text, 'user');
    input.value = '';
    showTyping();

    try {
        const subject = document.getElementById('chatSubject').value;
        const prompt = botPrompts[subject];

        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt + '\n\nسؤال الطالب: ' + text }] }]
                })
            }
        );

        const data = await res.json();
        removeTyping();

        if (data.candidates && data.candidates[0]) {
            addChatMsg(data.candidates[0].content.parts[0].text, 'bot');
        } else {
            addChatMsg('عذراً، حصل خطأ. حاول تاني.', 'bot');
        }
    } catch (e) {
        removeTyping();
        addChatMsg('عذراً، مشكلة في الاتصال. تأكد من API Key.', 'bot');
    }
}

function addChatMsg(text, who) {
    const c = document.getElementById('chatContainer');
    const d = document.createElement('div');
    d.className = 'chat-message ' + who;
    const formatted = text.replace(/\n/g, '<br>');
    d.innerHTML = `<div class="message-content">${formatted}</div>`;
    c.appendChild(d);
    c.scrollTop = c.scrollHeight;
}

function showTyping() {
    const c = document.getElementById('chatContainer');
    const d = document.createElement('div');
    d.className = 'chat-message bot';
    d.id = 'typing';
    d.innerHTML = '<div class="message-content"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
    c.appendChild(d);
    c.scrollTop = c.scrollHeight;
}

function removeTyping() {
    const t = document.getElementById('typing');
    if (t) t.remove();
}

// ===== أدوات مساعدة =====
function save() {
    localStorage.setItem('bacUser', JSON.stringify(currentUser));
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('dark', document.body.classList.contains('dark'));
}

function logout() {
    if (confirm('متأكد تخرج؟')) {
        localStorage.removeItem('bacUser');
        window.location.href = 'index.html';
    }
}
