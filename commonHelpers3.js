import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as m}from"./assets/vendor-f8ab8876.js";const t={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),textaria:document.querySelector("textarea")};t.form.addEventListener("input",m(i,500));t.form.addEventListener("submit",s);const o="feedback-form-state",a={};c();function i(){a[t.email.name]=t.email.value,a[t.textaria.name]=t.textaria.value,localStorage.setItem(o,JSON.stringify(a))}function s(e){e.preventDefault();const r=e.currentTarget.elements,l=r.email.value,n=r.message.value;if(l===""||n===""){alert("Please, fill in all fields the form");return}t.form.reset(),localStorage.removeItem(o)}function c(){const e=JSON.parse(localStorage.getItem(o));e&&(t.textaria.textContent=e.message||"",t.email.textContent=e.email||"",console.log(e),console.log("email >>>",e.email),console.log("message >>>",e.message))}
//# sourceMappingURL=commonHelpers3.js.map