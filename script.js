const members=[
 {name:"محمد کوهی",role:"مدیر انجمن",level:"مدیر",initial:"MK"},
 {name:"آرین ادیتور",role:"ادیتور حرفه‌ای",level:"Pro",initial:"AE"},
 {name:"نگار دیزاین",role:"طراح گرافیک",level:"Designer",initial:"ND"},
 {name:"رضا کریتیو",role:"فتومونتاژ",level:"Pro",initial:"RC"},
 {name:"سام ادیت",role:"ادیتور",level:"Member",initial:"SE"},
 {name:"کیان آرت",role:"طراح پوستر",level:"Member",initial:"KA"},
 {name:"مهدی فریم",role:"ادیتور ویدئو",level:"Member",initial:"MF"},
 {name:"آوا گرافیک",role:"طراح گرافیک",level:"Member",initial:"AG"}
];
const works=[
 {title:"EDITORIAL",type:"poster",cls:"poster"},{title:"PORTRAIT",type:"portrait",cls:"portrait"},
 {title:"DARK ART",type:"manipulation",cls:"manipulation"},{title:"CREATIVE POSTER",type:"poster",cls:"poster"},
 {title:"FANTASY",type:"manipulation",cls:"manipulation"},{title:"PORTRAIT EDIT",type:"portrait",cls:"portrait"},
 {title:"VISUAL ART",type:"poster",cls:"poster"},{title:"COMPOSITE",type:"manipulation",cls:"manipulation"}
];

const membersGrid=document.querySelector("#membersGrid"), worksGrid=document.querySelector("#worksGrid");
function renderMembers(q=""){
 membersGrid.innerHTML=members.filter(x=>(x.name+x.role).includes(q)).map(x=>`<article class="member"><div class="avatar">${x.initial}</div><h3>${x.name}</h3><p>${x.role}</p><span class="badge">${x.level}</span></article>`).join("") || "<p>عضوی پیدا نشد.</p>";
}
function renderWorks(filter="all"){
 worksGrid.innerHTML=works.filter(x=>filter==="all"||x.type===filter).map(x=>`<article class="work ${x.cls}"><span>${x.title}</span></article>`).join("");
}
renderMembers();renderWorks();

document.querySelector("#memberSearch").addEventListener("input",e=>renderMembers(e.target.value.trim()));
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderWorks(b.dataset.filter)}));

const menu=document.querySelector("#menu"),nav=document.querySelector("#nav");
menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.textContent=nav.classList.contains("open")?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const modal=document.querySelector("#modal"),modalContent=document.querySelector("#modalContent");
function openModal(type){
 const isLogin=type==="login";
 modalContent.innerHTML=`<h2>${isLogin?"ورود به حساب":"عضویت در انجمن"}</h2>
 <p>${isLogin?"اطلاعات حساب خود را وارد کنید.":"حساب آزمایشی خود را در همین مرورگر ایجاد کنید."}</p>
 <form onsubmit="auth(event,'${type}')">
 <input id="authName" ${isLogin?"style='display:none'":"required"} placeholder="نام و نام خانوادگی">
 <input id="authEmail" type="email" required placeholder="ایمیل">
 <input id="authPass" type="password" minlength="4" required placeholder="رمز عبور">
 <button class="primary" type="submit">${isLogin?"ورود":"ساخت حساب"}</button>
 </form>`;
 modal.classList.add("show");modal.setAttribute("aria-hidden","false");
}
function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
function auth(e,type){
 e.preventDefault();
 const email=document.querySelector("#authEmail").value;
 const name=document.querySelector("#authName").value;
 if(type==="register"){localStorage.setItem("editoranUser",JSON.stringify({name,email}));toast("حساب شما با موفقیت ساخته شد.");}
 else{const u=JSON.parse(localStorage.getItem("editoranUser")||"null");toast(u&&u.email===email?"خوش آمدید "+u.name:"برای این ایمیل حسابی پیدا نشد.");}
 closeModal();
}
document.querySelector("#contactForm").addEventListener("submit",e=>{e.preventDefault();e.target.reset();toast("پیام شما با موفقیت ثبت شد.")});
function toast(msg){const t=document.querySelector("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
