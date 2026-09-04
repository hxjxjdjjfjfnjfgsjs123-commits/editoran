const DEFAULT_SETTINGS={
  siteName:"محمد کوهی",
  headline:"محمد کوهی",
  bio:"خلق آثار بصری خلاق، حرفه‌ای و منحصر‌به‌فرد.",
  email:"example@email.com"
};
const DEFAULT_PROJECTS=[
 {id:"1",title:"نمونه‌کار اول",category:"طراحی گرافیک",image:"https://picsum.photos/900/650?random=21",description:"نمونه‌ای از طراحی گرافیک."},
 {id:"2",title:"نمونه‌کار دوم",category:"طراحی پوستر",image:"https://picsum.photos/900/650?random=22",description:"نمونه‌ای از طراحی پوستر."},
 {id:"3",title:"نمونه‌کار سوم",category:"ادیت عکس",image:"https://picsum.photos/900/650?random=23",description:"نمونه‌ای از ادیت تصویر."}
];

function getSettings(){try{return JSON.parse(localStorage.getItem("mk_settings"))||DEFAULT_SETTINGS}catch(e){return DEFAULT_SETTINGS}}
function getProjects(){try{return JSON.parse(localStorage.getItem("mk_projects"))||DEFAULT_PROJECTS}catch(e){return DEFAULT_PROJECTS}}
function saveSettings(x){localStorage.setItem("mk_settings",JSON.stringify(x))}
function saveProjects(x){localStorage.setItem("mk_projects",JSON.stringify(x))}
function escapeHTML(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

function renderSite(){
 const s=getSettings(), p=getProjects();
 const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v};
 set("siteTitle",s.siteName+" | نمونه‌کارها"); document.title=s.siteName+" | نمونه‌کارها";
 set("brandName",s.siteName);set("heroName",s.headline);set("heroBio",s.bio);set("aboutTitle",s.siteName);set("contactName",s.siteName);set("footerName",s.siteName);set("aboutText",s.bio);set("contactText","طراح گرافیک و ادیتور");
 const email=document.getElementById("contactButton"); if(email)email.href="mailto:"+s.email;
 const grid=document.getElementById("portfolioGrid");
 if(grid) grid.innerHTML=p.length?p.map(x=>`<article class="project"><img src="${escapeHTML(x.image)}" alt="${escapeHTML(x.title)}" loading="lazy"><div class="project-info"><h3>${escapeHTML(x.title)}</h3><p>${escapeHTML(x.category)}</p><p>${escapeHTML(x.description)}</p></div></article>`).join(""):"<div class='card' style='grid-column:1/-1;text-align:center'>هنوز نمونه‌کاری اضافه نشده است.</div>";
 const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
}

function initAdmin(){
 const loginBox=document.getElementById("loginBox");if(!loginBox)return;
 const panel=document.getElementById("panel"), form=document.getElementById("loginForm"), error=document.getElementById("loginError");
 const logged=()=>sessionStorage.getItem("mk_admin")==="1";
 function show(){loginBox.classList.toggle("hidden",logged());panel.classList.toggle("hidden",!logged());if(logged())fill()}
 function fill(){
  const s=getSettings();document.getElementById("siteName").value=s.siteName;document.getElementById("siteHeadline").value=s.headline;document.getElementById("siteBio").value=s.bio;document.getElementById("siteEmail").value=s.email;renderAdminProjects()
 }
 form.addEventListener("submit",e=>{e.preventDefault();if(document.getElementById("password").value==="1234"){sessionStorage.setItem("mk_admin","1");error.textContent="";show()}else error.textContent="رمز عبور اشتباه است."});
 document.getElementById("logout").addEventListener("click",()=>{sessionStorage.removeItem("mk_admin");show()});
 document.getElementById("settingsForm").addEventListener("submit",e=>{e.preventDefault();saveSettings({siteName:siteName.value,headline:siteHeadline.value,bio:siteBio.value,email:siteEmail.value});alert("تنظیمات ذخیره شد.");});
 const pf=document.getElementById("projectForm");
 pf.addEventListener("submit",e=>{e.preventDefault();let arr=getProjects();const id=editId.value||Date.now().toString();const obj={id,title:projectTitle.value,category:projectCategory.value||"نمونه‌کار",image:projectImage.value,description:projectDescription.value};const i=arr.findIndex(x=>x.id===id);if(i>=0)arr[i]=obj;else arr.unshift(obj);saveProjects(arr);resetProject();renderAdminProjects();});
 document.getElementById("cancelEdit").addEventListener("click",resetProject);
 function resetProject(){pf.reset();editId.value="";projectSubmit.textContent="افزودن نمونه‌کار";cancelEdit.classList.add("hidden")}
 function renderAdminProjects(){
  const box=document.getElementById("adminProjects"),arr=getProjects();
  box.innerHTML=arr.length?arr.map(x=>`<div class="admin-project"><img src="${escapeHTML(x.image)}" alt=""><div class="admin-project-info"><b>${escapeHTML(x.title)}</b><div>${escapeHTML(x.category)}</div></div><div class="admin-project-actions"><button class="btn secondary mini" data-edit="${x.id}">ویرایش</button><button class="btn secondary mini danger" data-del="${x.id}">حذف</button></div></div>`).join(""):"<p>هنوز نمونه‌کاری وجود ندارد.</p>";
  box.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{if(confirm("این نمونه‌کار حذف شود؟")){saveProjects(getProjects().filter(x=>x.id!==b.dataset.del));renderAdminProjects();}});
  box.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>{const x=getProjects().find(x=>x.id===b.dataset.edit);editId.value=x.id;projectTitle.value=x.title;projectCategory.value=x.category;projectImage.value=x.image;projectDescription.value=x.description;projectSubmit.textContent="ذخیره تغییرات";cancelEdit.classList.remove("hidden");window.scrollTo({top:document.getElementById("projectForm").offsetTop-100,behavior:"smooth"})});
 }
 show();
}
document.addEventListener("DOMContentLoaded",()=>{renderSite();initAdmin()});
