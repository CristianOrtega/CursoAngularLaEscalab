import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, searchText?: any): any { 
   
    if (!value) {
      return;
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase(); 

    return value.filter(item => { 
      let matchFound = false; 

      if (item.name) {
        const name = item.name; 
        const searchName = JSON.stringify(name).toLowerCase().includes(searchText);
        if (searchName) {
           matchFound = true;
        }
      }
      // Cuando empece el desarrollo de este ejercio la API estaba recuperando ID's
      // actualmente no lo esta haciendo. En caso de volver a retornar la ID el filtro deberia funcionar.
      if (item.id) {
        const index = item.id; 
        const searchId = JSON.stringify(index).toLowerCase().includes(searchText);

        if (searchId) {
           matchFound = true;
        }
      }
      return matchFound; 
    });
  }
}
