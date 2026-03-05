/* ========================
   오늘의 운세 - 천지신명
======================== */

// ── 운세 데이터 ──────────────────────────────────────────────
const FORTUNE_DATA = {
    overall: [
        { stars: 5, text: "오늘은 사방에서 좋은 기운이 모여드는 날입니다. 오래 기다려왔던 일이 드디어 결실을 맺고, 뜻밖의 기쁜 소식이 찾아올 것입니다. 적극적으로 행동할수록 더 큰 성과를 거둘 수 있으니 자신감을 가지고 나아가세요." },
        { stars: 4, text: "전반적으로 안정된 기운이 감도는 하루입니다. 주변 사람들의 도움으로 막혀 있던 일이 원활하게 풀릴 것입니다. 서두르기보다 차분하게 상황을 살피면 좋은 결과를 얻을 수 있습니다." },
        { stars: 4, text: "새로운 시작을 알리는 기운이 강하게 흐릅니다. 오늘 만나는 인연이 앞으로 중요한 역할을 할 수 있으니 사람을 소중히 여기세요. 직관을 믿고 결정하면 후회 없는 하루가 됩니다." },
        { stars: 3, text: "평온한 하루 속에 작은 방해물이 있을 수 있습니다. 서두르지 말고 기초를 탄탄히 다지는 시간으로 삼으세요. 인내심을 발휘한다면 저녁 무렵 좋은 기운이 찾아옵니다." },
        { stars: 3, text: "오늘은 외부보다는 내면을 돌아보는 날입니다. 무리하게 확장하려 하기보다 현재에 집중하면 새로운 아이디어가 떠오를 것입니다. 가까운 사람과의 대화에서 힌트를 얻을 수 있습니다." },
        { stars: 5, text: "하늘의 기운이 당신을 향해 활짝 열린 날입니다. 용기 있는 행동 하나가 큰 변화를 만들어 낼 것입니다. 소망하던 일에 과감히 도전하세요. 오늘의 선택이 앞으로의 큰 전환점이 됩니다." },
        { stars: 2, text: "오늘은 에너지가 다소 흩어지는 날입니다. 중요한 결정이나 계약은 내일로 미루는 것이 좋습니다. 작은 일에 집중하며 에너지를 비축하면 내일의 좋은 기운을 배가시킬 수 있습니다." },
        { stars: 4, text: "좋은 인연의 기운이 강하게 흐르는 하루입니다. 오늘 만나는 모든 사람이 귀한 인연이 될 수 있으니 따뜻한 마음을 잃지 마세요. 사소한 친절이 큰 복이 되어 돌아올 것입니다." },
    ],
    love: [
        { stars: 5, text: "연인과의 관계가 더욱 깊어지는 날입니다. 솔직한 감정 표현이 관계를 더욱 돈독하게 만들 것입니다. 솔로라면 주변에 특별한 인연이 다가오고 있으니 마음의 문을 열어두세요." },
        { stars: 4, text: "상대방의 마음을 이해하는 하루가 됩니다. 작은 배려와 다정한 말 한마디가 관계를 회복하거나 더욱 발전시킬 것입니다. 먼저 연락하거나 표현하는 것을 두려워하지 마세요." },
        { stars: 3, text: "감정의 기복이 생길 수 있는 날입니다. 오해가 생기지 않도록 말을 신중하게 하세요. 다툼이 있더라도 진심을 전하면 오히려 관계가 깊어지는 계기가 될 수 있습니다." },
        { stars: 2, text: "상대방과 거리감이 느껴질 수 있는 날입니다. 무리하게 좁히려 하기보다는 각자의 공간을 존중하세요. 잠시 기다리면 오히려 더 가까워질 기회가 생깁니다." },
        { stars: 5, text: "사랑이 활짝 피어나는 아름다운 날입니다. 오래 사귄 연인이라면 새로운 약속을, 솔로라면 운명적 만남을 기대해도 좋습니다. 오늘 용기 있는 고백이 기적을 만들 수 있습니다." },
        { stars: 4, text: "감정이 풍요로워지는 날입니다. 연인과 함께라면 소소한 일상에서도 큰 행복을 느낄 것입니다. 혼자라면 마음에 담아두었던 사람에게 먼저 다가가 보세요." },
        { stars: 3, text: "서로의 가치관 차이를 좁혀가는 날입니다. 상대의 말을 끝까지 들어주는 것만으로도 큰 위로가 됩니다. 억지로 맞추려 하지 말고 자연스럽게 흘러가도록 두세요." },
        { stars: 4, text: "따뜻한 감정이 넘치는 하루입니다. 소중한 사람에게 마음을 전할 수 있는 좋은 날이니 미루지 마세요. 작은 선물이나 메시지 하나가 관계에 큰 온기를 더할 것입니다." },
    ],
    money: [
        { stars: 4, text: "재물운이 상승하는 날입니다. 예상치 못한 곳에서 수익이 생기거나 밀려 있던 돈이 들어올 수 있습니다. 충동적인 지출만 삼가면 오늘 번 것을 온전히 지킬 수 있습니다." },
        { stars: 5, text: "큰 재물이 움직이는 날입니다. 투자나 사업에 있어 과감한 결단이 좋은 결과를 가져올 수 있습니다. 단, 신뢰할 수 없는 정보나 지인의 달콤한 제안은 신중히 검토하세요." },
        { stars: 3, text: "현상 유지의 날입니다. 새로운 투자나 큰 지출은 잠시 보류하는 것이 좋습니다. 절약과 계획적인 소비로 재정 기반을 단단히 다지는 날로 활용하세요." },
        { stars: 2, text: "예상치 못한 지출이 생길 수 있는 날입니다. 지갑과 귀중품에 주의를 기울이고, 보증이나 대출 등 금전 관련 서류에 서명하는 일은 미루세요." },
        { stars: 4, text: "작은 수익이 꾸준히 쌓이는 날입니다. 눈에 보이는 큰 것보다 꾸준히 성실하게 임하는 것이 더 큰 재물로 이어집니다. 오늘 한 번의 노력이 나중에 배로 돌아올 것입니다." },
        { stars: 5, text: "재물의 문이 활짝 열리는 날입니다. 오래 기다려 온 수입이나 계약이 성사되고, 오늘 맺는 인연이 큰 경제적 기회로 이어질 수 있습니다. 적극적인 자세가 행운을 부릅니다." },
        { stars: 3, text: "수입과 지출이 균형을 이루는 날입니다. 오늘은 욕심보다 현실을 직시하고 실용적인 선택을 하세요. 내실을 다지는 것이 앞으로의 재물운을 높이는 길입니다." },
        { stars: 4, text: "평소보다 금전 감각이 예민해지는 날입니다. 좋은 거래나 정보를 포착할 가능성이 높으니 주변을 잘 살펴보세요. 인맥을 통한 수익 기회가 생길 수 있습니다." },
    ],
    health: [
        { stars: 5, text: "몸과 마음 모두 최상의 컨디션입니다. 오늘 시작하는 운동이나 건강 습관이 장기적으로 큰 효과를 발휘할 것입니다. 활기찬 에너지를 긍정적으로 활용하세요." },
        { stars: 4, text: "전반적으로 건강한 기운이 돌고 있습니다. 규칙적인 식사와 충분한 수분 섭취가 오늘 건강을 지키는 열쇠입니다. 가벼운 스트레칭으로 몸의 긴장을 풀어주세요." },
        { stars: 3, text: "약간의 피로감이 쌓일 수 있는 날입니다. 무리한 일정보다는 적절한 휴식을 취하는 것이 중요합니다. 특히 눈과 목 건강에 신경 쓰고 화면을 오래 보는 것을 줄여보세요." },
        { stars: 2, text: "면역력이 다소 약해지는 날입니다. 따뜻한 음식과 충분한 수면으로 몸을 보호하세요. 오늘은 무리한 운동보다는 가볍게 몸을 풀어주는 것이 좋습니다." },
        { stars: 4, text: "마음의 건강이 특히 좋아지는 날입니다. 좋아하는 음악을 들거나 잠깐의 명상으로 내면의 평화를 찾아보세요. 정신적 충만함이 신체 건강에도 긍정적 영향을 줄 것입니다." },
        { stars: 5, text: "건강에 있어 최상의 기운이 흐릅니다. 오늘 몸이 보내는 신호에 귀를 기울이면 오랫동안 간직할 수 있는 건강 비결을 발견할 수 있습니다. 자연과 함께하는 시간이 특히 좋습니다." },
        { stars: 3, text: "체력 소모에 주의해야 하는 날입니다. 무리한 약속이나 일정은 줄이고 자신을 돌보는 시간을 마련하세요. 따뜻한 차 한 잔과 휴식이 최고의 보약입니다." },
        { stars: 4, text: "활력이 넘치는 하루가 될 것입니다. 오늘 시작하는 새로운 건강 루틴이 큰 성과를 가져올 것입니다. 소화기관에 좋은 음식을 챙겨 먹으면 더욱 좋습니다." },
    ],
    work: [
        { stars: 5, text: "직업운이 최고조에 달하는 날입니다. 그동안 노력해 온 것들이 인정받고 새로운 기회의 문이 열립니다. 중요한 프레젠테이션이나 미팅이 있다면 오늘이 최적의 날입니다." },
        { stars: 4, text: "업무에서 창의적인 아이디어가 샘솟는 날입니다. 평소 하지 않던 새로운 접근 방식이 뜻밖의 성과를 가져올 것입니다. 동료와의 협력이 특히 빛나는 하루입니다." },
        { stars: 3, text: "꼼꼼하게 일을 처리해야 하는 날입니다. 실수나 누락이 생기지 않도록 다시 한번 확인하는 습관이 중요합니다. 급하게 서두르기보다 천천히 정확하게 하세요." },
        { stars: 2, text: "업무에서 장애물이 생길 수 있는 날입니다. 무리한 계획보다는 오늘 할 수 있는 것에만 집중하세요. 도움을 요청하는 것이 오히려 빠른 해결책이 될 수 있습니다." },
        { stars: 4, text: "대인관계에서 특히 운이 좋은 날입니다. 상사나 동료에게 먼저 다가가면 좋은 인상을 남길 수 있고, 이것이 커리어에 큰 도움이 됩니다. 네트워킹에 적극적으로 임하세요." },
        { stars: 5, text: "직업운이 활짝 피어나는 날입니다. 오랫동안 준비해 온 프로젝트가 빛을 발하고, 원하던 기회나 자리에 한 발 더 가까워집니다. 오늘의 결단이 미래를 바꿀 것입니다." },
        { stars: 3, text: "내실을 다지는 하루로 삼으세요. 겉으로 드러나는 성과보다는 기초를 쌓는 시간이 필요합니다. 오늘의 준비가 내일의 큰 기회로 이어질 것입니다." },
        { stars: 4, text: "리더십이 빛나는 날입니다. 주변 사람들에게 긍정적인 영향을 주고 팀의 분위기를 밝게 이끌 수 있는 기운이 넘칩니다. 적극적으로 의견을 내고 이끌어보세요." },
    ],
};

const ADVICE_LIST = [
    "오늘 뿌린 씨앗이 훗날 가장 큰 나무가 됩니다.",
    "두려움은 실제 위험보다 항상 더 크게 느껴집니다. 한 걸음만 내딛으세요.",
    "지금 이 순간에 충실하면 과거의 후회와 미래의 걱정이 사라집니다.",
    "진심 어린 감사 한마디가 오늘의 운을 배로 높여줍니다.",
    "완벽한 때를 기다리지 마세요. 오늘이 바로 그 완벽한 때입니다.",
    "주변 사람들에게 베푼 작은 친절이 큰 복이 되어 돌아옵니다.",
    "마음이 맑으면 길이 보이고, 길이 보이면 반드시 이루어집니다.",
    "모든 어려움은 더 강해지기 위한 우주의 선물입니다.",
    "자신을 믿는 순간, 세상도 당신을 믿기 시작합니다.",
    "느리게 가도 괜찮습니다. 방향이 맞다면 반드시 도착합니다.",
    "오늘 하루를 5년 후의 내가 감사할 방식으로 보내세요.",
    "행복은 목적지가 아니라 지금 이 길 위에 있습니다.",
];

const LUCKY_COLORS = [
    { name: "자주색", hex: "#9b59b6" },
    { name: "금빛", hex: "#f4c842" },
    { name: "에메랄드", hex: "#2ecc71" },
    { name: "사파이어", hex: "#2980b9" },
    { name: "로즈", hex: "#e91e8c" },
    { name: "진홍", hex: "#e74c3c" },
    { name: "하늘", hex: "#87ceeb" },
    { name: "오렌지", hex: "#e67e22" },
    { name: "라벤더", hex: "#c39bd3" },
    { name: "민트", hex: "#1abc9c" },
];

const LUCKY_NUMBERS = [3, 7, 8, 11, 13, 17, 21, 24, 33, 38, 42, 47, 52, 63, 77];
const DIRECTIONS = ["동쪽", "서쪽", "남쪽", "북쪽", "동남쪽", "서북쪽"];

const LOADING_MESSAGES = [
    "천지신명이 운세를 살피고 있습니다...",
    "별자리의 기운을 읽는 중입니다...",
    "오늘의 기운을 모으고 있습니다...",
    "신령님께 여쭙고 있습니다...",
    "운명의 실을 풀어내고 있습니다...",
];

// ── 유틸리티 ─────────────────────────────────────────────────
function seededRandom(seed) {
    // Simple seeded PRNG (mulberry32)
    let t = seed + 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function pickByIndex(arr, index) {
    return arr[Math.abs(index) % arr.length];
}

function buildSeed(year, month, day, gender, category) {
    const today = new Date();
    const todayStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
    const base = parseInt(`${year}${month}${day}`) + parseInt(todayStr) + (gender === 'female' ? 999 : 0);
    const catOffset = ['overall','love','money','health','work'].indexOf(category) * 137;
    return base + catOffset;
}

function getFortuneIndex(year, month, day, gender, category) {
    const seed = buildSeed(year, month, day, gender, category);
    return Math.floor(seededRandom(seed) * 8);
}

// ── 별 렌더링 ─────────────────────────────────────────────────
function renderStars(count) {
    const full = Math.floor(count);
    const half = (count % 1) >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '✦' : '') + '☆'.repeat(empty);
}

function starsColor(stars) {
    if (stars >= 5) return '#f4c842';
    if (stars >= 4) return '#a78bfa';
    if (stars >= 3) return '#60a5fa';
    return '#94a3b8';
}

// ── 타이핑 애니메이션 ─────────────────────────────────────────
function typeText(el, text, speed = 28) {
    return new Promise(resolve => {
        el.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            el.textContent += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(timer);
                resolve();
            }
        }, speed);
    });
}

// ── 별 캔버스 ─────────────────────────────────────────────────
function initStars() {
    const canvas = document.getElementById('stars-canvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        const count = Math.floor((w * h) / 6000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.2 + 0.2,
                alpha: Math.random(),
                speed: Math.random() * 0.005 + 0.002,
                phase: Math.random() * Math.PI * 2,
            });
        }
    }

    function draw(t) {
        ctx.clearRect(0, 0, w, h);
        stars.forEach(s => {
            const a = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase));
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 180, 255, ${a})`;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    resize();
    createStars();
    window.addEventListener('resize', () => { resize(); createStars(); });
    requestAnimationFrame(draw);
}

// ── 다크/라이트 모드 ──────────────────────────────────────────
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const saved = localStorage.getItem('fortune-theme') || 'dark';
    html.setAttribute('data-theme', saved);

    toggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('fortune-theme', next);
    });
}

// ── 오늘 날짜 표시 ────────────────────────────────────────────
function initDate() {
    const now = new Date();
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const el = document.getElementById('today-date');
    el.textContent = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 (${days[now.getDay()]}요일)`;
}

// ── 운세 결과 렌더링 ──────────────────────────────────────────
function renderLuckyInfo(year, month, day, gender) {
    const seed = buildSeed(year, month, day, gender, 'lucky');
    const colorIdx = Math.floor(seededRandom(seed) * LUCKY_COLORS.length);
    const numIdx1 = Math.floor(seededRandom(seed + 1) * LUCKY_NUMBERS.length);
    const numIdx2 = Math.floor(seededRandom(seed + 2) * LUCKY_NUMBERS.length);
    const dirIdx = Math.floor(seededRandom(seed + 3) * DIRECTIONS.length);

    const color = LUCKY_COLORS[colorIdx];
    const num1 = LUCKY_NUMBERS[numIdx1];
    const num2 = LUCKY_NUMBERS[numIdx2 === numIdx1 ? (numIdx2 + 1) % LUCKY_NUMBERS.length : numIdx2];

    const container = document.getElementById('lucky-info');
    container.innerHTML = `
        <div class="lucky-item">
            <span class="lucky-label">행운의 색</span>
            <div class="lucky-color-dot" style="background:${color.hex};" title="${color.name}"></div>
            <span class="lucky-value">${color.name}</span>
        </div>
        <div class="lucky-item">
            <span class="lucky-label">행운의 숫자</span>
            <span class="lucky-value">${num1}, ${num2}</span>
        </div>
        <div class="lucky-item">
            <span class="lucky-label">행운의 방향</span>
            <span class="lucky-value">${DIRECTIONS[dirIdx]}</span>
        </div>
    `;
}

function renderOverall(year, month, day, gender) {
    const idx = getFortuneIndex(year, month, day, gender, 'overall');
    const data = FORTUNE_DATA.overall[idx];
    const color = starsColor(data.stars);

    document.getElementById('overall-stars').innerHTML =
        `<span style="color:${color}">${renderStars(data.stars)}</span>`;
    return { el: document.getElementById('overall-text'), text: data.text };
}

const CATEGORIES = [
    { key: 'love', label: '애정운', icon: '&#10084;' },
    { key: 'money', label: '재물운', icon: '&#128176;' },
    { key: 'health', label: '건강운', icon: '&#127807;' },
    { key: 'work', label: '직업운', icon: '&#128081;' },
];

function renderCards(year, month, day, gender) {
    const grid = document.getElementById('fortune-grid');
    grid.innerHTML = '';

    CATEGORIES.forEach(cat => {
        const idx = getFortuneIndex(year, month, day, gender, cat.key);
        const data = FORTUNE_DATA[cat.key][idx];
        const color = starsColor(data.stars);
        const pct = (data.stars / 5) * 100;

        const card = document.createElement('div');
        card.className = 'fortune-card';
        card.innerHTML = `
            <div class="card-header">
                <span class="card-icon">${cat.icon}</span>
                <span class="card-title">${cat.label}</span>
            </div>
            <div class="card-stars" style="color:${color}">${renderStars(data.stars)}</div>
            <div class="card-bar-wrap">
                <div class="card-bar" data-pct="${pct}"></div>
            </div>
            <p class="card-text">${data.text}</p>
        `;
        grid.appendChild(card);
    });

    // Animate progress bars after a tick
    setTimeout(() => {
        document.querySelectorAll('.card-bar').forEach(bar => {
            bar.style.width = bar.dataset.pct + '%';
        });
    }, 100);
}

function renderAdvice(year, month, day, gender) {
    const seed = buildSeed(year, month, day, gender, 'advice');
    const idx = Math.floor(seededRandom(seed) * ADVICE_LIST.length);
    return { el: document.getElementById('advice-text'), text: ADVICE_LIST[idx] };
}

// ── 운세 보기 플로우 ──────────────────────────────────────────
async function showFortune() {
    const year = parseInt(document.getElementById('birth-year').value);
    const month = parseInt(document.getElementById('birth-month').value);
    const day = parseInt(document.getElementById('birth-day').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validate
    if (!year || !month || !day || year < 1900 || year > 2024 || month < 1 || month > 12 || day < 1 || day > 31) {
        const inputs = document.querySelectorAll('.birth-input-group input');
        inputs.forEach(inp => {
            inp.style.borderColor = '#ef4444';
            setTimeout(() => inp.style.borderColor = '', 1500);
        });
        return;
    }

    const inputSection = document.getElementById('input-section');
    const loadingSection = document.getElementById('loading-section');
    const resultSection = document.getElementById('result-section');
    const loadingText = document.getElementById('loading-text');

    // Show loading
    inputSection.classList.add('hidden');
    resultSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');

    // Cycle loading messages
    let msgIdx = 0;
    const msgTimer = setInterval(() => {
        msgIdx = (msgIdx + 1) % LOADING_MESSAGES.length;
        loadingText.textContent = LOADING_MESSAGES[msgIdx];
    }, 800);

    await new Promise(r => setTimeout(r, 3200));
    clearInterval(msgTimer);

    // Show result
    loadingSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    // Person label
    const genderLabel = gender === 'male' ? '남성' : '여성';
    document.getElementById('result-person').textContent =
        `${year}년 ${month}월 ${day}일생 ${genderLabel}`;

    renderLuckyInfo(year, month, day, gender);
    renderCards(year, month, day, gender);

    const { el: overallEl, text: overallText } = renderOverall(year, month, day, gender);
    const { el: adviceEl, text: adviceText } = renderAdvice(year, month, day, gender);

    // Type animations
    await typeText(overallEl, overallText, 22);
    await new Promise(r => setTimeout(r, 300));
    await typeText(adviceEl, adviceText, 30);
}

// ── 다시 보기 ─────────────────────────────────────────────────
function resetToInput() {
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('input-section').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── 초기화 ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initTheme();
    initDate();

    document.getElementById('fortune-btn').addEventListener('click', showFortune);
    document.getElementById('retry-btn').addEventListener('click', resetToInput);

    // Enter key support
    document.querySelectorAll('.birth-input-group input').forEach(inp => {
        inp.addEventListener('keydown', e => {
            if (e.key === 'Enter') showFortune();
        });
    });
});
