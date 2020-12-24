import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg:any) {
    if(arg ==="" || arg.length < 3) return value
    let result = []
    for  (const res of value) {
          if(res.name.toLowerCase().includes(arg.toLowerCase())){
            result.push(res)
          }
    }
      return result;
  }

}
