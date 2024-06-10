let upbtn = document.getElementById('up');
let ugobj = document.getElementById('ug');
let interobj = document.getElementById('inter');
let sscobj = document.getElementById('ssc');
let clockobj = document.getElementById('clock');
let calcobj = document.getElementById('calc');
let open = document.getElementById('open-btn');
let menu = document.getElementById('menu');

window.location.href = '#home';

window.onscroll = function() {
  scrollfunc();
}

function opentab() {
  open.style.display = 'none';
  menu.style.display = 'block';
}

function closetab() {
  menu.style.display = 'none';
  open.style.display = 'block';
}

function scrollfunc() {

  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    upbtn.style.display = "block";
    console.log('scrolled');
  }
  else {
    upbtn.style.display = "none";
  }
}

function takeup() {
  window.location.href = '#home';
}

function overug() {
  ugobj.innerHTML = 'B.Tech in Computer Science<br>@KITS Warangal<br>CGPA: 8.80<br>Year: 2021-25';
  ugobj.style.color = "black";
}

function outug() {
  ugobj.innerHTML = 'Under<br>Graduation';
  ugobj.style.color = "white";
}

function overinter() {
  interobj.innerHTML = 'MPC Stream <br>@Resonance Warangal<br>Percentage: 98.2%<br>Year: 2019-21';
  interobj.style.color = "black";
}

function outinter() {
  interobj.innerHTML = 'Intermediate<br>Education';
  interobj.style.color = "white";
}

function overssc() {
  sscobj.innerHTML = 'TS Board Education<br>@SPR High School<br>GPA: 9.7<br>Passout: 2019';
  sscobj.style.color = "black";
}

function outssc() {
  sscobj.innerHTML = 'Secondary<br>Education';
  sscobj.style.color = "white";
}


function overclock() {
  clockobj.innerHTML = 'Visit Site <i class="fa-solid fa-square-up-right"></i>';
  clockobj.style.color = "black";
}

function outclock() {
  clockobj.innerHTML = 'Multi Theme<br>Digital Clock';
  clockobj.style.color = "white";
}

clockobj.addEventListener("click", function() { window.open("https://clock.mohammedtajudd1.repl.co/", "_blank") });

function overcalc() {
  calcobj.innerHTML = 'Visit Site <i class="fa-solid fa-square-up-right"></i>';
  calcobj.style.color = "black";
}

function outcalc() {
  calcobj.innerHTML = 'Calculator';
  calcobj.style.color = "white";
}

calcobj.addEventListener("click", function() { window.open("https://calculator.mohammedtajudd1.repl.co/", "_blank") });

