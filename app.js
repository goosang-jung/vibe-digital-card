const sections = [
  { id:'intro', label:'9장 도입', title:'전체 흐름', pages:[1] },
  { id:'s91', label:'9-1', title:'바이브 코딩에서 버전 관리가 필요한 이유', pages:[2,3] },
  { id:'s92', label:'9-2', title:'Git 저장소와 Commit으로 작업 기록하기', pages:[4,5,6] },
  { id:'s93', label:'9-3', title:'GitHub에 프로젝트 저장·관리하기', pages:[7,8,9] },
  { id:'s94', label:'9-4', title:'문제가 생겼을 때 이전 버전으로 되돌리기', pages:[10,11,12] },
  { id:'s95', label:'9-5', title:'GitHub Pages를 이용해 웹 프로그램 배포하기', pages:[13,14,15] },
  { id:'s96', label:'9-6', title:'Netlify 등을 활용한 간편 배포 경험하기', pages:[16,17] },
  { id:'end', label:'정리', title:'제9장 전체 정리', pages:[18] },
];

const pages = [
  {
    page:1, section:'9장 도입', title:'Git과 버전 관리·웹 배포',
    subtitle:'AI와 함께 만든 프로그램을 안전하게 기록하고 인터넷에 공개해 봅니다.',
    objective:'8장에서 만든 디지털 명함 웹페이지를 Git으로 기록하고, GitHub에 저장한 뒤 실제 웹주소로 배포하는 전체 흐름을 이해합니다.',
    paragraphs:[
      '이번 장에서는 하나의 디지털 명함 프로젝트를 끝까지 사용합니다. 정상 상태를 기록하고, 문제가 생기면 이전 상태를 확인하며, 마지막에는 GitHub Pages와 Netlify를 통해 실제 인터넷에 공개합니다.'
    ],
    images:[['assets/pages/p01.png','[그림 9-1] 기록 → 저장 → 문제 확인 → 복구 → 배포 → 공유']],
    summary:'제9장의 목표는 Git 명령어를 많이 외우는 것이 아니라, 프로그램을 안전하게 관리하고 실제 인터넷에 공개하는 흐름을 직접 경험하는 것입니다.'
  },
  {
    page:2, section:'9-1. 바이브 코딩에서 버전 관리가 필요한 이유', title:'프로그램은 수정하면서 계속 달라집니다',
    objective:'AI와 함께 프로그램을 수정하는 과정에서 이전 정상 상태를 기록해야 하는 이유를 이해합니다.',
    paragraphs:['AI에게 사진 추가, 연락처 수정, 디자인 변경 등을 요청하면 프로그램은 매우 빠르게 달라집니다. 수정 결과가 좋아질 수도 있지만, 잘 작동하던 기능이 사라지거나 화면이 예상과 다르게 바뀔 수도 있습니다.'],
    images:[['assets/pages/p02.png','[그림 9-2] 정상 버전과 오류가 생긴 현재 상태']],
    summary:'정상적으로 작동했던 시점을 기록해 두면 문제가 생겨도 처음부터 다시 만들지 않고 마지막 정상 상태를 기준으로 확인할 수 있습니다.'
  },
  {
    page:3, section:'9-1. 바이브 코딩에서 버전 관리가 필요한 이유', title:'버전과 버전 관리를 이해해 봅니다',
    objective:'버전과 버전 관리의 의미를 이해하고, 바이브 코딩에서 안전한 수정 흐름을 익힙니다.',
    paragraphs:['프로그램이 특정 시점에 어떤 모습이었는지를 하나의 버전이라고 생각할 수 있습니다. 버전 관리는 프로그램이 어떻게 변경되었는지 기록하고 관리하는 방법입니다.'],
    images:[['assets/pages/p03.png','[그림 9-3] 바이브 코딩의 안전한 수정 흐름']],
    prompt:'현재 프로그램이 정상적으로 작동합니다. 큰 수정을 하기 전에 어떤 상태를 기록하고 무엇을 확인해야 하는지 초보자 기준으로 설명해 주세요.',
    summary:'수정 전 기준점 → AI 수정 → 실행 확인 → 정상이라면 기록, 문제가 있다면 이전 기록을 확인하는 습관이 중요합니다.'
  },
  {
    page:4, section:'9-2. Git 저장소와 Commit으로 작업 기록하기', title:'Git으로 프로그램의 변경 과정을 관리합니다',
    objective:'Git과 Git 저장소의 역할을 이해하고, 일반 프로젝트 폴더와 무엇이 다른지 설명할 수 있습니다.',
    paragraphs:['Git은 프로그램 파일이 어떻게 변경되었는지 기록하고 관리하는 버전 관리 도구입니다. 현재 프로젝트 폴더를 Git이 관리하도록 설정하면 그 폴더가 Git 저장소가 됩니다.'],
    images:[['assets/pages/p04.png','[그림 9-4] 일반 프로젝트 폴더와 Git 저장소의 차이']],
    summary:'Git 저장소에서는 현재 프로젝트 파일뿐 아니라 그 프로젝트가 어떻게 달라졌는지에 대한 변경 기록도 함께 관리할 수 있습니다.'
  },
  {
    page:5, section:'9-2. Git 저장소와 Commit으로 작업 기록하기', title:'Commit으로 중요한 작업 상태를 남깁니다',
    objective:'Commit의 의미를 이해하고 언제 작업 상태를 기록하면 좋은지 판단할 수 있습니다.',
    paragraphs:['Git에서는 의미 있는 작업이 완료된 시점의 상태를 하나의 기록으로 남길 수 있습니다. 이를 Commit(커밋)이라고 하며, 나중에도 알아볼 수 있는 짧은 설명을 함께 남깁니다.'],
    bullets:[
      '좋은 Commit 설명: “디지털 명함 기본 화면 완성”, “연락처 정보 추가”, “화면 디자인 개선”',
      'Commit하기 좋은 시점: 기능이 정상 작동했을 때, 큰 수정을 시작하기 전, 수정 결과를 확인한 후'
    ],
    images:[['assets/pages/p05.png','[그림 9-5] 프로그램이 발전하면서 Commit이 쌓이는 과정']],
    summary:'Commit은 단순히 파일을 저장하는 것이 아니라, 의미 있는 작업 시점의 상태와 설명을 하나의 기록으로 남기는 것입니다.'
  },
  {
    page:6, section:'9-2. Git 저장소와 Commit으로 작업 기록하기', title:'첫 번째 Git 작업 기록을 만들어 봅니다',
    objective:'vibe-digital-card를 Git 저장소로 만들고 첫 Commit을 생성한 뒤 기록과 현재 상태를 확인합니다.',
    paragraphs:['실습에서는 명령어를 길게 설명하기보다 “현재 상태 확인 → 기록 준비 → Commit → 기록 확인” 순서가 눈에 들어오도록 화면을 크게 봅니다.'],
    commands:[
      'git --version', 'git init', 'git status', 'git add .', 'git commit -m "디지털 명함 기본 화면 완성"', 'git log --oneline'
    ],
    images:[['assets/pages/p06.png','[실습 화면] git add 전·후 비교와 첫 Commit·git log 결과']],
    prompt:'현재 웹페이지가 정상 작동합니다. 기존 파일을 바꾸지 않고 Git 저장소로 만들고 첫 Commit을 생성하는 과정을 한 단계씩 설명해 주세요.',
    summary:'Commit 1 “디지털 명함 기본 화면 완성”이 만들어졌고, 이 상태가 이후 복구 실습의 정상 기준점이 됩니다.'
  },
  {
    page:7, section:'9-3. GitHub에 프로젝트 저장·관리하기', title:'Git과 GitHub의 역할을 구분합니다',
    objective:'로컬 Git 저장소와 GitHub Repository의 차이를 이해하고 Push의 의미를 설명할 수 있습니다.',
    paragraphs:['앞 절에서 만든 Commit은 먼저 내 컴퓨터의 Git 저장소에 있습니다. GitHub를 이용하면 같은 프로젝트와 작업 기록을 인터넷에서도 저장하고 확인할 수 있습니다.'],
    images:[['assets/pages/p07.png','[그림 9-6] 내 컴퓨터의 Git 기록을 GitHub로 보내는 흐름']],
    summary:'Git은 변경 기록을 관리하는 도구이고, GitHub는 그 Git 프로젝트를 인터넷에서 저장하고 관리하는 서비스입니다.'
  },
  {
    page:8, section:'9-3. GitHub에 프로젝트 저장·관리하기', title:'GitHub에 새 프로젝트 저장소를 만듭니다',
    objective:'기존 로컬 Commit을 그대로 올릴 수 있도록 GitHub에 비어 있는 Public Repository를 만듭니다.',
    paragraphs:['우리 컴퓨터에는 이미 Commit 1이 있으므로 GitHub에서는 README, .gitignore, License를 추가하지 않은 빈 Repository를 먼저 만들었습니다.'],
    bullets:['Repository name: vibe-digital-card','Visibility: Public','README / .gitignore / License: 추가하지 않음'],
    images:[['assets/pages/p08.png','[실제 화면 확대] 빈 Public Repository · Repository 이름 · Quick setup']],
    links:[['GitHub Repository','https://github.com/goosang-jung/vibe-digital-card']],
    summary:'이미 로컬에 Git 기록이 있는 프로젝트를 올릴 때는 GitHub 쪽을 비어 있는 Repository로 시작하면 흐름이 단순합니다.'
  },
  {
    page:9, section:'9-3. GitHub에 프로젝트 저장·관리하기', title:'내 프로젝트를 GitHub에 연결하고 올려 봅니다',
    objective:'로컬 Git 저장소를 GitHub Repository와 연결하고 Commit 1을 main Branch로 Push합니다.',
    paragraphs:['Push가 완료되면 GitHub 화면에서 main Branch, 파일 목록, Commit 1이 모두 보이는지 확인합니다.'],
    commands:[
      'git remote add origin https://github.com/goosang-jung/vibe-digital-card.git',
      'git branch -M main',
      'git push -u origin main'
    ],
    images:[['assets/pages/p09.png','[실제 화면 확대] main Branch · 프로젝트 파일 · Commit 1']],
    links:[['실제 Repository 열기','https://github.com/goosang-jung/vibe-digital-card']],
    summary:'Push는 내 컴퓨터에 기록된 Git Commit을 연결된 GitHub Repository로 보내는 과정입니다.'
  },
  {
    page:10, section:'9-4. 문제가 생겼을 때 이전 버전으로 되돌리기', title:'프로그램을 수정했는데 문제가 생겼습니다',
    objective:'오류가 생겼을 때 바로 다시 만들지 않고, 먼저 최근 작업과 변경된 파일을 확인하는 습관을 익힙니다.',
    paragraphs:['교재 실습에서는 index.html과 style.css 두 파일만 의도적으로 수정하여 ERROR-01을 만들었습니다. 연락처가 사라지고 카드 폭이 지나치게 넓어지는 단순한 오류입니다.'],
    commands:['git status'],
    images:[['assets/pages/p10.png','[실제 화면] ERROR-01과 git status의 변경 파일 확인']],
    summary:'문제가 생기면 먼저 “무엇을 수정했고 어느 파일이 달라졌는가?”를 확인합니다.'
  },
  {
    page:11, section:'9-4. 문제가 생겼을 때 이전 버전으로 되돌리기', title:'변경 내용을 확인하고 정상 버전을 찾습니다',
    objective:'git diff로 현재 변경 내용을 보고, git log로 마지막 정상 Commit을 찾습니다.',
    paragraphs:['이번 프로젝트에서는 Commit 1 “디지털 명함 기본 화면 완성”이 마지막으로 확인된 정상 기준점입니다. 복원하기 전에는 현재 수정 내용 중 보관해야 할 것이 없는지도 먼저 판단합니다.'],
    commands:['git diff','git log --oneline'],
    images:[['assets/pages/p11.png','[실제 화면] git diff로 변경 확인 · git log로 정상 기준점 확인']],
    warning:'현재 수정 내용 중 필요한 작업이 있다면 먼저 보관해야 합니다. 복원 명령을 실행하기 전에 “이 변경을 버려도 되는가?”를 확인합니다.',
    summary:'되돌리기 명령보다 먼저 “어느 시점까지 정상적으로 작동했는가?”를 찾는 것이 중요합니다.'
  },
  {
    page:12, section:'9-4. 문제가 생겼을 때 이전 버전으로 되돌리기', title:'정상 상태를 확인한 뒤 안전하게 복원합니다',
    objective:'Commit하지 않은 잘못된 변경을 마지막 정상 Commit 상태로 복원하고, 다시 정상 작동하는지 확인합니다.',
    paragraphs:['이번 실습에서는 현재 잘못된 변경을 모두 버려도 된다는 것을 확인한 뒤 git restore .을 실행합니다. 복원 후에는 git status와 웹페이지를 다시 확인합니다.'],
    commands:['git restore .','git status'],
    images:[['assets/pages/p12.png','[실제 흐름] 변경 있음 → git restore . → working tree clean → NORMAL-01']],
    summary:'버전 관리는 단순히 과거로 돌아가는 기능이 아니라, 변경을 확인하고 정상 기준점을 찾아 필요한 범위만 안전하게 복구하는 작업 방법입니다.'
  },
  {
    page:13, section:'9-5. GitHub Pages를 이용해 웹 프로그램 배포하기', title:'내 컴퓨터의 웹 프로그램을 인터넷에 공개합니다',
    objective:'GitHub에 저장하는 것과 실제 웹사이트로 배포하는 것의 차이를 이해하고 URL의 의미를 설명할 수 있습니다.',
    paragraphs:['GitHub Repository에 프로젝트가 저장되어 있어도 다른 사람이 곧바로 웹사이트처럼 이용하는 것은 아닙니다. 웹 프로그램을 인터넷에서 접속할 수 있도록 공개하는 과정을 배포라고 하며, 공개된 웹페이지의 주소를 URL이라고 합니다.'],
    images:[['assets/pages/p13.png','[그림 9-10] GitHub 저장과 GitHub Pages 배포의 차이']],
    summary:'Repository URL은 프로젝트를 관리하는 주소이고, GitHub Pages URL은 실제 웹페이지를 이용하는 주소입니다.'
  },
  {
    page:14, section:'9-5. GitHub Pages를 이용해 웹 프로그램 배포하기', title:'GitHub Pages로 웹페이지를 공개합니다',
    objective:'Settings → Pages에서 main Branch와 /(root)를 게시 소스로 지정하고 설정 저장 상태를 확인합니다.',
    paragraphs:['전체 GitHub 화면을 외우는 것이 아니라 실제 설정에 필요한 세 부분만 확인합니다.'],
    bullets:['Source: Deploy from a branch','Branch: main','Folder: /(root)','Save 후 “GitHub Pages source saved.” 메시지 확인'],
    images:[['assets/pages/p14.png','[실제 화면 확대] Pages 메뉴와 Build and deployment 설정']],
    summary:'index.html이 main Branch의 Repository 최상위에 있으므로 이번 교재에서는 main + /(root)를 사용합니다.'
  },
  {
    page:15, section:'9-5. GitHub Pages를 이용해 웹 프로그램 배포하기', title:'만들어진 웹주소를 확인하고 공유합니다',
    objective:'실제 GitHub Pages URL에서 디지털 명함을 열고, PC·스마트폰·QR을 이용해 접속 결과를 확인합니다.',
    paragraphs:['배포가 완료되면 Repository 주소와는 다른 github.io 주소가 만들어집니다. 이 주소를 다른 사람에게 보내거나 QR 코드에 담아 사용할 수 있습니다.'],
    images:[['assets/pages/p15.png','[실제 화면 확대] GitHub Pages 웹사이트 · 실제 github.io URL'],['assets/pages/p15_qr.png','실제 GitHub Pages URL QR 코드']],
    links:[['GitHub Pages 열기','https://goosang-jung.github.io/vibe-digital-card/']],
    summary:'실제 GitHub Pages URL: https://goosang-jung.github.io/vibe-digital-card/'
  },
  {
    page:16, section:'9-6. Netlify 등을 활용한 간편 배포 경험하기', title:'같은 프로젝트를 Netlify에도 배포해 봅니다',
    objective:'GitHub에 저장된 동일한 vibe-digital-card Repository를 Netlify에 연결하여 다른 배포 방법을 경험합니다.',
    paragraphs:['Netlify에서도 새 프로그램을 만들지 않습니다. GitHub의 동일한 Repository를 선택하고 프로젝트 이름과 게시 위치를 확인한 뒤 배포합니다.'],
    bullets:['Project name: vibe-digital-card','Build command: 비움','Publish directory: .'],
    images:[['assets/pages/p16a.png','Project name · main Branch 설정'],['assets/pages/p16b.png','Publish directory · Deploy 버튼']],
    summary:'이번 단순 HTML/CSS 프로젝트는 Project name = vibe-digital-card, Build command = 비움, Publish directory = . 를 기준으로 배포했습니다.'
  },
  {
    page:17, section:'9-6. Netlify 등을 활용한 간편 배포 경험하기', title:'Netlify 배포 결과를 확인합니다',
    objective:'Production deploy가 Published 되었는지 확인하고, 실제 netlify.app 주소에서 동일한 디지털 명함이 정상적으로 열리는지 확인합니다.',
    paragraphs:['배포 상태와 공개 웹사이트를 각각 확인합니다. GitHub Pages와 Netlify는 주소가 다르지만 같은 GitHub 프로젝트의 동일한 NORMAL-01 화면을 보여줍니다.'],
    bullets:['Production: main@7abc1a6 → Published','실제 URL: https://vibe-digital-card.netlify.app'],
    images:[['assets/pages/p17a.png','Production Published 상태'],['assets/pages/p17b.png','실제 netlify.app 공개 사이트']],
    links:[['Netlify 사이트 열기','https://vibe-digital-card.netlify.app']],
    summary:'GitHub Pages와 Netlify는 서로 다른 웹주소를 제공하지만 같은 프로젝트를 인터넷에 공개한다는 점은 같습니다.'
  },
  {
    page:18, section:'9장 정리', title:'Git으로 기록하고, GitHub에 저장하고, 웹으로 공개했습니다',
    objective:'제9장에서 경험한 전체 흐름을 정리하고 최종 결과물인 Repository URL과 두 개의 실제 배포 URL을 확인합니다.',
    paragraphs:['8장에서 만든 하나의 디지털 명함이 9장을 거치며 “기록 가능한 프로젝트 → 인터넷에 저장된 프로젝트 → 복구 가능한 프로젝트 → 실제 공개 웹사이트”로 발전했습니다.'],
    images:[['assets/pages/p18.png','[최종 결과] 실제 Repository URL · GitHub Pages URL · Netlify URL']],
    links:[
      ['GitHub Repository','https://github.com/goosang-jung/vibe-digital-card'],
      ['GitHub Pages','https://goosang-jung.github.io/vibe-digital-card/'],
      ['Netlify','https://vibe-digital-card.netlify.app']
    ],
    summary:'안전한 바이브 코딩의 기본 흐름: 정상 확인 → Commit → AI 수정 → 변경 확인 → 정상이라면 기록·Push·배포, 문제가 있다면 이전 정상 기록을 확인해 복원합니다.'
  }
];

const $ = s => document.querySelector(s);
const toc = $('#toc');
const chapterGrid = $('#chapterGrid');
const homeView = $('#homeView');
const readerView = $('#readerView');
const searchInput = $('#searchInput');
const progressText = $('#progressText');
const progressBar = $('#progressBar');
const completeButton = $('#completeButton');
const toast = $('#toast');
const sidebar = $('#sidebar');
let currentPage = 1;
let deferredPrompt = null;

const completed = new Set(JSON.parse(localStorage.getItem('ch09_completed') || '[]'));
let lastPage = Number(localStorage.getItem('ch09_last_page') || 1);
let scale = Number(localStorage.getItem('ch09_text_scale') || 1);
document.documentElement.style.setProperty('--text-scale', scale);

function sectionForPage(n){ return sections.find(s => s.pages.includes(n)); }
function showToast(text){ toast.textContent = text; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1800); }
function saveProgress(){ localStorage.setItem('ch09_completed', JSON.stringify([...completed])); updateProgress(); }
function updateProgress(){
  progressText.textContent = `${completed.size} / 18`;
  progressBar.style.width = `${(completed.size/18)*100}%`;
  renderToc(searchInput.value);
}

function renderToc(filter=''){
  const q = filter.trim().toLowerCase();
  toc.innerHTML='';
  sections.forEach(sec => {
    const matches = sec.pages.map(n=>pages[n-1]).filter(p=> !q || `${p.title} ${p.section} ${p.objective} ${p.paragraphs.join(' ')}`.toLowerCase().includes(q));
    if(!matches.length) return;
    const wrap=document.createElement('div'); wrap.className='toc-section';
    const head=document.createElement('div'); head.className='toc-heading'; head.textContent=`${sec.label} · ${sec.title}`; wrap.appendChild(head);
    matches.forEach(p=>{
      const b=document.createElement('button');
      b.className='toc-item'+(p.page===currentPage&&!readerView.classList.contains('hidden')?' active':'')+(completed.has(p.page)?' done':'');
      b.innerHTML=`<span class="num">${completed.has(p.page)?'✓':'P'+String(p.page).padStart(2,'0')}</span><span>${p.title}</span>`;
      b.onclick=()=>openPage(p.page);
      wrap.appendChild(b);
    });
    toc.appendChild(wrap);
  });
}

function renderChapters(){
  chapterGrid.innerHTML='';
  sections.filter(s=>!['intro','end'].includes(s.id)).forEach(sec=>{
    const done=sec.pages.filter(n=>completed.has(n)).length;
    const card=document.createElement('article'); card.className='chapter-card';
    card.innerHTML=`<span>${sec.label}</span><h3>${sec.title}</h3><p>${sec.pages.length}페이지 · ${done}/${sec.pages.length} 완료</p><button>열기</button>`;
    card.querySelector('button').onclick=()=>openPage(sec.pages[0]);
    chapterGrid.appendChild(card);
  });
}

function addMedia(container, images){
  container.innerHTML='';
  container.className='media-grid'+(images?.length===2?' two':'');
  (images||[]).forEach(([src,cap])=>{
    const fig=document.createElement('figure'); fig.className='figure-card';
    const img=document.createElement('img'); img.src=src; img.alt=cap; img.loading='lazy';
    img.onclick=()=>openLightbox(src,cap);
    const fc=document.createElement('figcaption'); fc.textContent=cap;
    fig.append(img,fc); container.appendChild(fig);
  });
}

function openLightbox(src, alt){
  const box=document.createElement('div'); box.className='lightbox'; box.setAttribute('role','dialog'); box.setAttribute('aria-label','이미지 확대');
  const img=document.createElement('img'); img.src=src; img.alt=alt;
  box.appendChild(img); box.onclick=()=>box.remove(); document.body.appendChild(box);
}

function renderCommands(commands){
  const wrap=$('#commandBox'); wrap.innerHTML='';
  if(!commands?.length){ wrap.classList.add('hidden'); return; }
  wrap.classList.remove('hidden');
  commands.forEach(cmd=>{
    const card=document.createElement('div'); card.className='command-card';
    const code=document.createElement('code'); code.textContent=cmd;
    const btn=document.createElement('button'); btn.className='copy-btn'; btn.textContent='복사';
    btn.onclick=async()=>{ try{await navigator.clipboard.writeText(cmd); showToast('명령어를 복사했습니다.');}catch{showToast('복사할 수 없습니다.');} };
    card.append(code,btn); wrap.appendChild(card);
  });
}

function renderLinks(links){
  const box=$('#pageLinks'); box.innerHTML='';
  (links||[]).forEach(([label,url])=>{
    const a=document.createElement('a'); a.href=url; a.target='_blank'; a.rel='noreferrer'; a.textContent=label+' ↗'; box.appendChild(a);
  });
}

function openPage(n){
  n=Math.min(18,Math.max(1,n)); currentPage=n; lastPage=n; localStorage.setItem('ch09_last_page', String(n));
  const p=pages[n-1];
  homeView.classList.add('hidden'); chapterGrid.classList.add('hidden'); readerView.classList.remove('hidden');
  $('#pageKicker').textContent=`PAGE ${String(n).padStart(2,'0')} · ${p.section}`;
  $('#pageTitle').textContent=p.title;
  $('#pageObjective').textContent=p.objective;
  const body=$('#pageBody'); body.innerHTML='';
  p.paragraphs.forEach(txt=>{ const el=document.createElement('p'); el.textContent=txt; body.appendChild(el); });
  if(p.bullets?.length){ const ul=document.createElement('ul'); p.bullets.forEach(x=>{const li=document.createElement('li'); li.textContent=x; ul.appendChild(li);}); body.appendChild(ul); }
  renderCommands(p.commands);
  addMedia($('#pageMedia'),p.images);
  renderLinks(p.links);
  const callout=$('#pageCallout'); callout.className='callout hidden'; callout.textContent='';
  if(p.prompt){ callout.className='callout prompt'; callout.innerHTML=`<strong>AI에게 이렇게 물어보세요</strong><br>${p.prompt}`; }
  if(p.warning){ callout.className='callout'; callout.innerHTML=`<strong>주의</strong><br>${p.warning}`; }
  $('#pageSummary').textContent=p.summary;
  completeButton.classList.toggle('done',completed.has(n)); completeButton.textContent=completed.has(n)?'✓ 완료됨':'✓ 학습 완료';
  $('#prevButton').disabled=n===1; $('#nextButton').textContent=n===18?'학습 마침':'다음 →';
  renderToc(searchInput.value); updateProgress();
  history.replaceState(null,'',`#page=${n}`);
  window.scrollTo({top:0,behavior:'smooth'});
  sidebar.classList.remove('open');
}

function showHome(){
  readerView.classList.add('hidden'); homeView.classList.remove('hidden'); chapterGrid.classList.remove('hidden');
  history.replaceState(null,'',location.pathname); renderToc(searchInput.value); renderChapters(); window.scrollTo({top:0,behavior:'smooth'});
}

completeButton.onclick=()=>{ if(completed.has(currentPage)) completed.delete(currentPage); else completed.add(currentPage); saveProgress(); completeButton.classList.toggle('done',completed.has(currentPage)); completeButton.textContent=completed.has(currentPage)?'✓ 완료됨':'✓ 학습 완료'; renderChapters(); };
$('#prevButton').onclick=()=>openPage(currentPage-1);
$('#nextButton').onclick=()=> currentPage===18 ? showHome() : openPage(currentPage+1);
$('#homeButton').onclick=showHome;
$('#startButton').onclick=()=>openPage(1);
$('#continueButton').onclick=()=>openPage(lastPage);
$('#menuButton').onclick=()=>sidebar.classList.toggle('open');
searchInput.oninput=e=>renderToc(e.target.value);

$('#fontUp').onclick=()=>{ scale=Math.min(1.28, +(scale+.06).toFixed(2)); document.documentElement.style.setProperty('--text-scale',scale); localStorage.setItem('ch09_text_scale',scale); showToast('글자를 키웠습니다.'); };
$('#fontDown').onclick=()=>{ scale=Math.max(.88, +(scale-.06).toFixed(2)); document.documentElement.style.setProperty('--text-scale',scale); localStorage.setItem('ch09_text_scale',scale); showToast('글자를 줄였습니다.'); };

window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault(); deferredPrompt=e; $('#installButton').hidden=false; });
$('#installButton').onclick=async()=>{ if(!deferredPrompt){showToast('브라우저 메뉴에서 홈 화면에 추가할 수 있습니다.'); return;} deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; $('#installButton').hidden=true; };
window.addEventListener('appinstalled',()=>showToast('교재 앱이 설치되었습니다.'));

if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{})); }

renderToc(); renderChapters(); updateProgress();
const hashPage=Number(new URLSearchParams(location.hash.replace('#','')).get('page'));
if(hashPage>=1&&hashPage<=18) openPage(hashPage);
