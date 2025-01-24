import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    private countryData: any;

    saveCountryData(data: any): void {
      this.countryData = data;
    }
  
    getCountryData(): any {
        console.log(this.countryData);
        
      return this.countryData;
    }
}
