import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPeli'
})
export class FiltroPeliPipe implements PipeTransform {

  transform(array: any[], texto: string): any[] {
    if(texto == ''){
      return array;
    }

    texto = texto.toLowerCase();
    return array.filter(item =>{
      return item.nombre.toLowerCase().includes( texto );
    });
    
  }

}
