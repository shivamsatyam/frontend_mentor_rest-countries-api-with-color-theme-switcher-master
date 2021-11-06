const c=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};c();let a="https://restcountries.com/v3.1/all",u="https://restcountries.com/v3.1/region/",d="https://restcountries.com/v3.1/name/",p=document.querySelector(".photo");function f(n,t,i,o,e){return`<div class="photo_box">
          <img src="${n}" alt="">
          <h1>${t}</h1>
          <div class="data">
            <div class="data_box">
              <h1>Population:</h1><p>${i}</p>
            </div>
            <div class="data_box">
              <h1>Region:</h1><p>${o}</p>
            </div>
            <div class="data_box">
              <h1>Capital:</h1><p>${e}</p>
            </div>
          </div>
        </div>`}function s(n){fetch(n).then(t=>(console.log(t),t.json())).then(t=>{t=t.slice(0,15);let i="";t.forEach(function(o,e){o.capital&&(i+=f(o.flags.png,o.name.official,o.population,o.region,o.capital[0]))}),p.innerHTML=i})}s(a);let g=document.getElementById("select");g.addEventListener("change",n=>{console.log(n.target.value),s(u+String(n.target.value.toLowerCase()))});let h=document.querySelector("input");h.addEventListener("input",n=>{let t=d+n.target.value.toLowerCase();s(t)});let v=document.querySelector(".header_second");v.addEventListener("click",()=>{document.querySelector(".container").classList.toggle("toggle")});
