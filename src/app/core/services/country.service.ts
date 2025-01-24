import { Injectable } from '@angular/core';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})

export class CountryService {

  medalsByCountry!: number;
  numberOfEntries!: number;
  totalNumberAthletes!: number;
  chartsData!: any[];

  //getting the total of medals by country
  getTotalMedalByCountry(countryArray: Olympic[], countryName: string): number {
    let medals = 0;
    countryArray.forEach((country: Olympic) => {
        if (country.country === countryName) {
          country.participations.forEach((participation) => {
            medals += participation.medalsCount;
        });
      }
    });
    return medals;
  }

  //getting the total of participations by country
  getTotalOfEntries(countryArray: Olympic[], countryName: string) {
    const entries = new Set<string>();
    countryArray.forEach((country: Olympic) => {
      if (country.country === countryName) {
        country.participations.forEach((participation) => {
          entries.add(participation.city);
        });
      }
    });
    return entries.size;
  }

  // getting the total of athletes by country
  getTotalAthletesbyCountry(countryArray: Olympic[], countryName: string): number {
    let athletes = 0;
    countryArray.forEach((country: Olympic) => {
        if (country.country === countryName) {
          country.participations.forEach((participation) => {
            athletes += participation.athleteCount;
        });
      }
    });
    return athletes;
  }

  // create a array for showing the data in line charts
  getDataForPieCharts(countryArray: Olympic[], countryName: string): any {

    const country = countryArray.find(country => country.country === countryName);

    if (country) {
        // Créer un tableau des médailles avec la date
        this.chartsData = country.participations.map(participation => ({
            name: participation.year,  // Date of participation
            value: participation.medalsCount // Number of medals
        }))
        console.log(this.chartsData);
        
      return this.chartsData;
    }
    
    // If the country is not found, return an empty array
    return [];
  }
}
