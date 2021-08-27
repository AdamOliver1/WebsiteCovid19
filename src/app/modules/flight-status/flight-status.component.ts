import { Component, OnInit } from '@angular/core';
import { color } from 'highcharts';
import { destinationConfirmation as DestinationConfirmation } from 'src/models/destinationConfirmation';
import { DestinationsService } from 'src/services/destinations.service';
const countriesDataHolder = {
  data: []
};
@Component({
  selector: 'app-flight-status',
  templateUrl: './flight-status.component.html',

  styleUrls: ['./flight-status.component.scss']
})
export class FlightStatusComponent implements OnInit {


  countries: DestinationConfirmation[] = [];
  statuses: string[] = [];
  isGreen: boolean;
  destinationConfirmation: DestinationConfirmation;

  constructor(private destinationsService: DestinationsService) { }
  async ngOnInit(): Promise<void> {
    await this.InitData();
  }

  inputChangeDestinations(txt: string) {
    this.destinationsService.getDestinationsByName(txt).then((data) => {
      this.countries = data;
    })
  }

  listStatusChanged(txt: string) {
    this.destinationsService.getDestinationsByStatus(txt).then((data) => {
      this.countries = data;
    })
  }

  getBackgroundColor(destinationConfirmation: DestinationConfirmation) {
    let redDestinations = ['יעד ברמת סיכון מרבית', 'אזהרה חמורה']
    this.isGreen = !redDestinations.includes(destinationConfirmation.country_status);
    return this.isGreen ? '#77ff33' : ' #ff1a1a';
  }


  // async selectChanged(selectedCountry) {

  //   console.log(selectedCountry, "selectedCountry")
  //   this.destinationsService.getDestinationByName(selectedCountry).then((country) => {

  //     this.destinationConfirmation = country[0];
  //     this.countries = [...countriesDataHolder.data];
  //     this.countries.forEach((item, i) => {
  //       if (item.destination === selectedCountry) {
  //         this.countries.splice(i, 1);
  //         this.countries.unshift(item);
  //       }
  //     });
  //   });
  //   this.ngOnInit();
  // }

  InitData = async (): Promise<any> => {
    console.log("in init");
   

    return new Promise(async () => {
      if (this.countries.length == 0) {
        await this.destinationsService.GetAllCountries().then((array) => {
          this.countries = array;
          console.log("init countries");

          countriesDataHolder.data = [...array];
        })
      }
      await this.destinationsService.getStatuses().then((data) => {
        this.statuses = data;
       
      })
     
     //set options for status select
      let statusesSelect = document.getElementById("statuses");
     
      for (let value of this.statuses) {
        let option = document.createElement('option');
        option.innerText = value;
        option.value = value;
        statusesSelect.appendChild(option);
       
      }

      //set options for countries datalist
      let select = document.getElementById("countries");
      let str: string = "";
      for (let value of this.countries) {
        str += '<option innerText="' + value.destination + '" value="' + value.destination + '" />';
      }
      select.innerHTML = str;
    });

  }


}
