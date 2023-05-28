export const state = document.querySelector(".state");
export const shadow = document.querySelector(".shadow");
export const footer = document.querySelector(".footer");
export const header = document.querySelector(".header");
export const headerWrap = document.querySelector(".header_wrap");

state.addEventListener("click", changeMode);

export function changeMode(event) {
  const target = event.target;
  const switchText = document.querySelector(".switch");
  if (target.checked) {
    switchText.innerText = "PLAY";
  } else {
    switchText.innerText = "TRAIN";
  }
}

export const aside = document.querySelector(".aside_menu");
export const btn_aside = document.querySelector(".aside");
export const btn_switch = document.querySelector(".switch");
export const contentWrap = document.querySelector(".content_wrap");
export const menu = document.querySelector(".menu");

btn_aside.addEventListener("click", showSidebar);
shadow.addEventListener("click", closeSidebar);
footer.addEventListener("click", closeSidebar);
header.addEventListener("click", closeSidebar);

export function closeSidebar(event) {
  const target = event.target;
  if (target === (shadow || footer || headerWrap || header || btn_switch)) {
    removeChecked();
    btn_aside.checked = false;
  }
}
export function removeChecked() {
  aside.classList.remove("checked");
  contentWrap.classList.remove("checked_wrap");
  shadow.classList.remove("checked");
  state.removeAttribute("disabled");
}
export function showSidebar(event) {
  const target = event.currentTarget;  
  if (target.checked) {
    aside.classList.add("checked");
    contentWrap.classList.add("checked_wrap");
    shadow.classList.add("checked");
    state.setAttribute("disabled", "disabled");
  } else {
    removeChecked();
  }
}

export function createActiveLink(event) {
  const target = event.currentTarget;
  const classActive = document.querySelector(".active");
  if (classActive !== target) {
    classActive.classList.toggle("active");
    target.classList.toggle("active");
    btn_aside.checked = false;
    removeChecked();
  }
}
