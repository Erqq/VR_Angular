import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortTime'
})
/**
 * Pipe for sorting schedule times so they apear in the right order.
 */
export class SortTime implements PipeTransform {
  transform(value, type, shortCode) {
    let a;
    let b;
    const sorted = value.sort((x, y) => {
      for (let i = 0; i < x.timeTableRows.length; i++) {
        if (
          x.timeTableRows[i].stationShortCode === shortCode &&
          x.timeTableRows[i].type === type
        ) {
          a = new Date(x.timeTableRows[i].scheduledTime);
        }
      }
      for (let i = 0; i < y.timeTableRows.length; i++) {
        if (
          y.timeTableRows[i].stationShortCode === shortCode &&
          y.timeTableRows[i].type === type
        ) {
          b = new Date(y.timeTableRows[i].scheduledTime);
        }
      }
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    });
    return sorted;
  }
}
