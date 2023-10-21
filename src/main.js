'use strict';

// 스크롤시 Header에 스타일링 추가
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight){
    header.classList.add('header--dark');
  } else{
    header.classList.remove('header--dark')
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight
});

// 현재 화면이 Home 섹션일 때 Arrow up 버튼 투명하게 처리
const arrowUp = document.querySelector('.arrow-up');

if (window.scrollY == 0){
  arrowUp.style.opacity = 0;
}

document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2){
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글 버튼 클릭
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫기
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});