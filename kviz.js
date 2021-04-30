
let poleOtazek = [
    {cislo: 'Otázka 1/3', otazka: 'Co je ikonická hračka z 80. let?', foto: 'obrazky/moncicak.jpg', 
    moznost: ['Kočičák','Mončičák', 'Opičák'],
    spravnaOdpoved: 'Mončičák'},
    {cislo: 'Otázka 2/3', otazka: 'Jaké je Matějovo nejoblíbenější ovoce?', foto: 'obrazky/ovoce.jpg',
    moznost: ['Kokos', 'Melounek', 'Jahoda', 'Ani jedno'],
    spravnaOdpoved: 'Jahoda'}, 
    {cislo: 'Otázka 3/3', otazka: 'Pro úspěšné absolvování kurzu je potřeba...', foto: 'obrazky/pivo.jpg',
    moznost: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
    spravnaOdpoved: 'Umět JavaScript'}, 
];

let poleOdpovedi = [];

//pole jen pro jednu stránku
let hadanka = {
    cislo: 'Otázka 1/3',
    otazka: 'Co je ikonická hračka z 80. let?', 
    foto: 'obrazky/moncicak.jpg', 
    moznost: ['Kočičák', 'Mončičák', 'Opičák'],
    spravnaOdpoved: 'Mončičák'
};



//bily ramecek
let kviz = document.createElement('div');
kviz.className = 'kviz';

//rozvržení bílého rámečku
let obsah = document.createElement('div');
obsah.className = 'obsah';

//Růžové číslo
let poradi = document.createElement('h2');
poradi.id = 'poradi';
poradi.innerHTML = hadanka.cislo;

//Hlavní otázka
let dotaz = document.createElement('h2');
dotaz.id = 'otazka';
dotaz.innerHTML = hadanka.otazka;

//obrazek
let obrazek = document.createElement('img');
obrazek.id = 'obrazek';
obrazek.className = 'foto';
obrazek.src = hadanka.foto;

//moznosti
let moznosti = document.createElement('div');
moznosti.id = 'moznosti';
let odpovedi = document.createElement('ul');
odpovedi.id = 'odpovedi';
odpovedi.className = 'odpovedi';
let pocetOdpovedi = hadanka.moznost.length;

//vygeneruje to všechny možnosti
hadanka.moznost.forEach(function (vec){
    let li = document.createElement('li');
    odpovedi.appendChild(li);
    li.innerHTML += vec;
});

//funkce na kliknutí
odpovedi.onclick = function (event) {
    let odpovedElement = event.target;
    console.log("Kliknul jsi na " + odpovedElement.innerText);
    poleOdpovedi.push(odpovedElement.innerText);
    console.log(poleOdpovedi);

}


//const tlacitka = document.querySelectorAll('.odpovedi');
//tlacitka.forEach((tlacitko) => {
//    tlacitko.addEventListener('click', (udalost) => {
//        console.log('ahoj' + udalost.target.innerText);
//    });
//});

//nebo takto
//document.querySelector('#odpovedi').addEventListener('click', ulozOdpoved);



let zmacknuti = document.querySelectorAll('.odpovedi'); //všechny obrázky mi to vytáhne
zmacknuti.forEach((zmacknuti) => { //zavolám nad všema obrázkama funkci
    zmacknuti.addEventListener('click', ulozOdpoved);
});
function ulozOdpoved (event) {
    let odpovedElement = event.target;
    console.log("Kliknul jsi" + odpovedElement);
}



//implementace do stránky
kviz.appendChild(poradi);
kviz.appendChild(dotaz);
kviz.appendChild(obsah);

obsah.appendChild(obrazek);
obsah.appendChild(moznosti);

moznosti.appendChild(odpovedi);

//dát tabulku do těla stránky
let tabulka = document.querySelector("body");
tabulka.appendChild(kviz);
