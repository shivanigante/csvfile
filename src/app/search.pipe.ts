import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value: any , filterString: string) {
  //   if(value.length==0 || filterString===''){
  //   return value;
  //   }
  //   const data = [];
  //   for(const row of value){
  //     if(row['Issue count'] ==filterString){
  //       data.push(row);
  //     }
  //   }
  //   return data;
  // }

  transform(value: any, filterString: string, filterOption: string) {
    if(!(value && filterString && filterOption)) {
      return value;
    }

    const filteredData: any[] = [];
    for(const data of value) {
      if(data[filterOption] == filterString) {
        filteredData.push(data);
      }
    }
    return filteredData;



    // return value.filter((data:any) => data[filterOption].toLowerCase().indexOf(filterString) != -1);
    
  }

}
