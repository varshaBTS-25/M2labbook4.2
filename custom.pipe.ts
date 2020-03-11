import { Pipe, PipeTransform } from '@angular/core';
import { Ifilter } from './app.component';
@Pipe({
  name: 'pipeFilter',
  pure: false
})
export class CustomPipe implements PipeTransform {
  transform(data: Array<Map<string, string>>, 
    filters: Array<Ifilter>): Array<Map<string, string>> {
      let filteredData = Array<Map<string, string>>();
      for (let row of data) {
        let exclude: boolean = false;
        for (let filter of filters) {
          if (filter.filter != '' && row.get(filter.header).indexOf(filter.filter) == -1) {
            exclude = true;
            break;
          }
        }
        if (!exclude)
          filteredData.push(row);
      }
      return filteredData;
    }
}
