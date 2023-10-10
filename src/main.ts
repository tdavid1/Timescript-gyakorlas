import { series } from './series.ts';

const sorozatok: series[] =[];
function listakiir(){
  const lista = document.getElementById("list")!;
  lista.innerHTML="";
  for(const s of sorozatok){
    const litem = document.createElement("li");
    litem.textContent = `${s.title} (${s.episode})`;
    lista.appendChild(litem);
  }
}
function newseres(){
  try{
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const episode = parseInt((document.getElementById("episode") as HTMLInputElement).value);
    const director = (document.getElementById("director") as HTMLInputElement).value;
    const Series = new series(title,episode,director);
    sorozatok.push(Series);
    console.table(sorozatok)
    listakiir();
    document.getElementById("errormessage")!.textContent ="";
    (document.getElementById("title") as HTMLInputElement).value = "";
    (document.getElementById("episode") as HTMLInputElement).value = "";
    (document.getElementById("director") as HTMLInputElement).value = "";

  }catch(e){
    if(e instanceof Error){
      document.getElementById("errormessage")!.textContent = e.message;
    }
  }
}
function init(){
  document.getElementById("gomb")!.addEventListener("click",newseres);
}
document.addEventListener("DOMContentLoaded",init);
