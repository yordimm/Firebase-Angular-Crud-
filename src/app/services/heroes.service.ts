import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Heroe} from '../interfaces/heroe.interface';
import  'rxjs/Rx';

@Injectable()
export class HeroesService {

heroesUrl:string="https://heroesapp-d7a4f.firebaseio.com/heroes.json";
heroeURL:string="https://heroesapp-d7a4f.firebaseio.com/heroes/";

  constructor(private http:Http) { }


nuevoHeroe(heroe:Heroe){
let body=JSON.stringify(heroe);
let headers= new Headers({'Content-Type':'aplication/json'});
return this.http.post(this.heroesUrl,body, {headers})
.map(res=>{
console.log(res.json());
return res.json();

})

}

actualizarHeroe(heroe:Heroe, key$:string){
let body=JSON.stringify(heroe);
let headers= new Headers({'Content-Type':'aplication/json'});

let url=`${this.heroeURL}/${key$}.json`;

return this.http.put(url,body, {headers})
.map(res=>{
console.log(res.json());
return res.json();

})
}

getHeroe(key$:string){
  let url=`${this.heroeURL}/${key$}.json`;
  return this.http.get(url)
  .map(res=>res.json());
}


getHeroes(){

  return this.http.get(this.heroesUrl)
  .map(res=>res.json());
}

borrarHeroe(key$){
  let url=`${ this.heroeURL}/${key$}.json`;
  return this.http.delete(url)
  .map(res => res.json())
}
}
