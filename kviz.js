
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

poleOtazek.forEach(function(generovaniOtazek){

    //bily ramecek
    let kviz = document.createElement('div');
    kviz.className = 'kviz';

    //rozvržení bílého rámečku
    let obsah = document.createElement('div');
    obsah.className = 'obsah';

    //Růžové číslo
    let poradi = document.createElement('h2');
    poradi.id = 'poradi';
    poradi.innerHTML = generovaniOtazek.cislo;

    //Hlavní otázka
    let dotaz = document.createElement('h2');
    dotaz.id = 'otazka';
    dotaz.innerHTML = generovaniOtazek.otazka;

    //obrazek
    let obrazek = document.createElement('img');
    obrazek.id = 'obrazek';
    obrazek.className = 'foto';
    obrazek.src = generovaniOtazek.foto;

    //moznosti
    let moznosti = document.createElement('div');
    moznosti.id = 'moznosti';
    let odpovedi = document.createElement('ul');
    odpovedi.id = 'odpovedi';
    odpovedi.className = 'odpovedi';
    let pocetOdpovedi = generovaniOtazek.moznost.length;

    //vygeneruje to všechny možnosti
    generovaniOtazek.moznost.forEach(function (vec){
    let li = document.createElement('li');
    odpovedi.appendChild(li);
    li.innerHTML += vec;
    });

    //zde mi bohuzel nefunguje odebírání druhého a třetího kvízu (pro začátek jsem chtěla jen ten druhý)
        //let cisloOdebraneho = 1;
        //let odebrani = document.querySelector('.kviz');
        //odebrani.parentNode.removeChild(odebrani[cisloOdebraneho]);
    

    //funkce na kliknutí
    odpovedi.onclick = function (event) {
        let odpovedElement = event.target;
        console.log("Kliknul jsi na " + odpovedElement.innerText);
        poleOdpovedi.push(odpovedElement.innerText);
        console.log(poleOdpovedi);

        let odebraniPredchoziho = document.querySelector('.kviz');
        odebraniPredchoziho.parentNode.removeChild(odebraniPredchoziho);
    
        //ukazat vysledek
        if (poleOdpovedi.length >= 3) {
            ukazVysledek();
        }

        //cisloOdebraneho++;
        
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


});

function ukazVysledek () {
    console.log("odpovedi jsou zadány");

    //bily ramecek
    let kviz = document.createElement('div');
    kviz.className = 'kviz';

    //Růžový nadpis
    let poradi = document.createElement('h2');
    poradi.id = 'poradi';
    poradi.innerHTML = "Tvoje hodnocení";

    kviz.appendChild(poradi);

    let cisloOtazky = 0;
    let pocetSpravnychOdpovedi = 0;

    poleOtazek.forEach(function(porovnavaniOdpovedi){
        let dotaz = document.createElement('h3');
        dotaz.innerHTML = porovnavaniOdpovedi.otazka;

        let vyhodnoceni = document.createElement('div');
        vyhodnoceni.innerHTML = "Tvoje odpověď je: " + poleOdpovedi[cisloOtazky];
        

        let spravneOdpovedi = document.createElement('div');
        spravneOdpovedi.innerHTML = "Správná odpoveď na otázku je: " 
            + poleOtazek[cisloOtazky].spravnaOdpoved;
        


        let dobraOdpoved = document.createElement('div');
        if (poleOdpovedi[cisloOtazky] === poleOtazek[cisloOtazky].spravnaOdpoved) {
            dobraOdpoved.innerHTML = "Jsi nejlepší, toto je SPRÁVNĚ!";
            pocetSpravnychOdpovedi++;
        }

        kviz.appendChild(dotaz);
        kviz.appendChild(vyhodnoceni);
        kviz.appendChild(spravneOdpovedi);
        kviz.appendChild(dobraOdpoved);

        cisloOtazky++;
    });

    let uspesnost = document.createElement('h3');
    uspesnost.id = 'poradi';
    uspesnost.innerHTML = "Počet správných odpovědí je " + pocetSpravnychOdpovedi + " ze " + poleOtazek.length;
    kviz.appendChild(uspesnost);

    //dát tabulku do těla stránky
    let tabulka = document.querySelector("body");
    tabulka.appendChild(kviz);

   



    
}
