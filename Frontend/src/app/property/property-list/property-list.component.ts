import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent=1;

  properties: IProperty[];


  constructor(private route: ActivatedRoute, private housingService : HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2; // we are on rent property url else we are on buy url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe (
         data => {
        this.properties =data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );

    // this.http.get('data/properties.json').subscribe (
    //   data => {
    //     this.properties =data;
    //     console.log(data);
    //   }
    // );
  }

}
