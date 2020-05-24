import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    //private hero:any[]=
    private hero:Hero[]=
        [
            {
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/aquaman.png",
              aparicion: "1941-11-01",
              casa:"DC",
              indice:0,
              tipo: true
            },
            {
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/batman.png",
              aparicion: "1939-05-01",
              casa:"DC",
              indice:1,
              tipo: true
            },
            {
              nombre: "Daredevil",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/daredevil.png",
              aparicion: "1964-01-01",
              casa: "Marvel",
              indice:2,
              tipo: true
            },
            {
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/hulk.png",
              aparicion: "1962-05-01",
              casa:"Marvel",
              indice:3,
              tipo: true
            },
            {
              nombre: "Linterna Verde",
              bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/linterna-verde.png",
              aparicion: "1940-06-01",
              casa: "DC",
              indice:4,
              tipo: true
            },
            {
              nombre: "Spider-Man",
              bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
              img: "assets/img/spiderman.png",
              aparicion: "1962-08-01",
              casa: "Marvel",
              indice:5,
              tipo: true
            },
            {
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/wolverine.png",
              aparicion: "1974-11-01",
              casa: "Marvel",
              indice:6,
              tipo: true
            },
            {
              nombre: "Black Manta",
              bio: "Aquaman enemy.",
              img: "assets/img/Black_Manta.png",
              aparicion: "1941-11-01",
              casa:"DC",
              indice:7,
              tipo: false
            },
            {
              nombre: "Joker",
              bio: "Payaso loco enemigo de Batman.",
              img: "assets/img/joker.png",
              aparicion: "1939-05-01",
              casa:"DC",
              indice:8,
              tipo: false
            },
            {
              nombre: "Kingpin",
              bio: "Archienemigo adinerado de Daredevil.",
              img: "assets/img/kingpin.png",
              aparicion: "1964-01-01",
              casa: "Marvel",
              indice:9,
              tipo: false
            },
            {
              nombre: "Abomination",
              bio: "Contraparte malvada de Hulk",
              img: "assets/img/abomination.png",
              aparicion: "1962-05-01",
              casa:"Marvel",
              indice:10,
              tipo: false
            },
            {
              nombre: "Sinestro",
              bio: "Genio malvado enemigo de linterna verde",
              img: "assets/img/sinestro.png",
              aparicion: "1940-06-01",
              casa: "DC",
              indice:11,
              tipo: false
            },
            {
              nombre: "Green goblin",
              bio: "Enemigo con identidad sospechada que atormenta a Spider man",
              img: "assets/img/green-goblin.png",
              aparicion: "1962-08-01",
              casa: "Marvel",
              indice:12,
              tipo: false
            },
            {
              nombre: "Magneto",
              bio: "Uno de los villanos más dificiles que ha enfrentado Wolverine dada su desventaja clara por el poder de atraer metales que el primero de ellos posee.",
              img: "assets/img/Magneto.png",
              aparicion: "1974-11-01",
              casa: "Marvel",
              indice:13,
              tipo: false
            }
    ];



    constructor(){
        
    }

    //getHeros(){
    getHeros():Hero[]{
        return this.hero;
    }

    getHero(id:number){
        return this.hero[id];   
    }


    buscarHeroe(palabra:string):Hero[]{
      let heroArr:Hero[] = [];
      palabra = palabra.toLowerCase();
      for( let hero of this.hero){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }

      return heroArr;
    }

}

export interface Hero{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string,
    indice: Number,
    tipo: Boolean
}