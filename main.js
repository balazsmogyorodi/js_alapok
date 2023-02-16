window.addEventListener("load", init);

function init() {
  console.log(typeof "Hahó");
  let valtozo1 = 2.6;
  var valtozo2 = "2";
  const VALTOZO3 = 5;
  // valtozo3 = 5;
  console.log("valtozo1", parseFloat(valtozo1), typeof valtozo1);
  console.log(parseInt(valtozo2), typeof parseInt(valtozo2));
  console.log(String(VALTOZO3), typeof String(VALTOZO3));

  let logikai = 3 < 5;
  console.log(logikai);

  let eredmeny = parseFloat(valtozo1) * parseInt(valtozo2);
  console.log(parseFloat(eredmeny), typeof parseFloat(eredmeny));
  elagazasok();
  ciklusok();
}

function elagazasok() {
  console.log("****************elágazások**********************");
  var szam = parseInt(Math.random() * (100 - 0 + 1) + 0);
  console.log(szam);
  if (szam % 3 == 0 && szam % 2 == 0) {
    console.log("Szám osztható hárommal és kettővel.");
  } else if (szam % 2 == 0) {
    console.log("Szám osztható kettővel.");
  } else if (szam % 3 == 0) {
    console.log("Szám osztható hárommal.");
  } else {
    console.log("Különben nem.");
  }

  var nap = 5;
  switch (nap) {
    case 1:
      console.log("Hétfő");
      break;
    case 2:
      console.log("Kedd");
      break;
    case 3:
      console.log("Szerda");
      break;
    case 4:
      console.log("Csütörtök");
      break;
    case 5:
      console.log("Péntek");
      break;
    case 6:
      console.log("Szombat");
      break;
    case 7:
      console.log("Vasárnap");
      break;
    default:
      console.log("Ez nem egy hétnek a napja.");
  }
  var min = 1;
  var max = 7;
  var veletlen = parseInt(Math.random() * (max - min + 1) + min);
  console.log(veletlen);
}

function ciklusok() {
  console.log("**********************ciklus************************");
  for (let index = 0; index < 10; index++) {
    var vszam = parseInt(Math.random() * 401) + 100;
    console.log(vszam);
  }
  
  do {
    var vszam = parseInt(Math.random() * 31) - 20;
    console.log(vszam);
  } while (vszam <= 0);
 
  while (vszam <= 0);
  {
    var vszam = parseInt(Math.random() * 31) - 20;
    console.log(vszam);
  }
}
