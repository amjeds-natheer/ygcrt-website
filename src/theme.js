// Theme toggle + persistence (key: ygcrt-theme). Initial theme is set by the inline script in index.html.
const $=s=>document.querySelector(s);

function setTheme(t,save){document.documentElement.dataset.theme=t;if(save)try{localStorage.setItem("ygcrt-theme",t)}catch(e){}const b=$("#tg");b.setAttribute("aria-pressed",t=="dark");b.setAttribute("aria-label",t=="dark"?"التبديل إلى الوضع النهاري":"التبديل إلى الوضع الليلي");const m=document.querySelector('meta[name=theme-color]')||document.head.appendChild(Object.assign(document.createElement("meta"),{name:"theme-color"}));m.content=t=="dark"?"#111D2D":"#ffffff"}
$("#tg").onclick=()=>{const r=document.documentElement;r.classList.add("tt");setTheme(r.dataset.theme=="dark"?"light":"dark",1);setTimeout(()=>r.classList.remove("tt"),400)};
setTheme(document.documentElement.dataset.theme||"light");
