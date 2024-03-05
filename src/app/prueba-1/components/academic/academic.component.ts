import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [
    CommonModule,
    InputNumberModule,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.css',
})
export class AcademicComponent {
  items: any[] | undefined;

  selectedItem: any;

  suggestions!: any[];

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(
      (item) => event.query + '-' + item
    );
  }
  countries: any[] | undefined;

  selectedCountry: any;

  filteredCountries!: any[];

  // constructor(private countryService: CountryService) {}

  // ngOnInit() {
  //     this.countryService.getCountries().then((countries) => {
  //         this.countries = countries;
  //     });
  // }

  filterCountry(event: AutoCompleteCompleteEvent) {
      let filtered: any[] = [];
      let query = event.query;

      for (let i = 0; i < (this.countries as any[]).length; i++) {
          let country = (this.countries as any[])[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
          }
      }

      this.filteredCountries = filtered;
  }
}
