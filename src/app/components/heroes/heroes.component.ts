import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
heroes:any[]=[];
loading:boolean=true;
  constructor(private _heroeService: HeroesService) {
this._heroeService.getHeroes().subscribe(data=>{
  console.log(data);
  this.heroes=data;
  this.loading=false;
}
)

   }

  ngOnInit() {
  }
borrarHeroe(key$: string){
  this._heroeService.borrarHeroe(key$)
  .subscribe(respuesta=>{
    if(respuesta){
    console.error(respuesta);
}else{
  delete this.heroes[key$];
}
  })
}
}
