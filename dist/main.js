(()=>{"use strict";function t(){const t=document.querySelector("#content"),e=document.createElement("div"),n=document.createElement("div"),c=document.createElement("h1"),a=document.createElement("p"),o=document.createElement("button"),d=document.createElement("button");return c.textContent="Full Restaurant",c.classList.add("headline"),t.style.height="100vh",t.style.background="linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.9)), url(../assets/restaurant.jpg) no-repeat center bottom",t.style.backgroundSize="cover",a.classList.add("description"),a.textContent="Place to fulfill your palate",e.classList.add("w-75","mx-auto","text-center"),o.classList.add("main-btn"),d.classList.add("main-btn"),o.textContent="Menu",d.textContent="Order",n.classList.add("d-flex","justify-content-center"),n.append(o,d),e.append(a,n),[c,e]}const e=document.createElement("div");e.setAttribute("id","content"),document.body.appendChild(function(){const t=document.createElement("nav"),e=document.createElement("ul"),n=document.createElement("button"),c=document.createElement("button"),a=document.createElement("button");return e.classList.add("d-flex","p-3","pe-5","justify-content-end"),t.classList.add("w-100","float-end"),n.classList.add("home"),c.classList.add("menu"),a.classList.add("contact"),n.textContent="HOME",c.textContent="MENU",a.textContent="ORDER",[n,c,a].forEach((t=>{const n=document.createElement("li");n.classList.add("nav-item"),n.appendChild(t),e.appendChild(n)})),t.appendChild(e),t}()),document.body.appendChild(e);const n=document.querySelector(".home"),c=document.querySelector(".menu"),a=document.querySelector(".contact");function o(){e.innerHTML=""}e.append(...t()),n.addEventListener("click",(()=>{o(),e.append(...t())})),c.addEventListener("click",(()=>{o(),e.append(...function(){const t=document.createElement("h1"),e=document.createElement("img"),n=document.createElement("p");return t.textContent="Menu",e.src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",n.textContent="xdi",[t,e,n]}())})),a.addEventListener("click",(()=>{o(),e.append(...function(){const t=document.createElement("h1"),e=document.createElement("img"),n=document.createElement("p");return t.textContent="Menu",e.src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",n.textContent="xdi",[t,e,n]}())}))})();