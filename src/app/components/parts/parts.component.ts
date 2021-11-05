import { Component, OnInit } from '@angular/core';
// lets import some data of parts
import { PARTS } from '../../../assets/partlist';
// import also interface
import { PartsInterface } from '../../PartsInterface';


@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
  
export class PartsComponent implements OnInit {
  // exports parts which is the type of PartsInterface. Use the name "parts" in html side.
  parts: PartsInterface[] = PARTS;
  sortingHelper: string = "";

  // Shows only parts of clicked brand name
  showByBrand(clickedBrand: string) {
    let selectedBrand = this.parts.filter(function (el) {
      return el.brand == clickedBrand;
    })
    this.parts = selectedBrand;
  }

  // Sort the table of parts by the column user clicked on
  // Pass the clicked column name as a parameter
  sortBy(clickedHeader: string){
    let sortedArray = [];
    
    if (this.sortingHelper != clickedHeader) {
      // clickedHeader is a column header name as a string. Eval() changes it into variable name, for example a.id or a.brand, etc
      sortedArray = this.parts.sort((a, b) => (eval('a.'+clickedHeader) > eval('b.'+clickedHeader)) ? 1 : -1);
      // set sortinghelper as the column name user clicked 
      this.sortingHelper = clickedHeader;      
    }
    // check if user clicked the same column name again. If true, sort the opposite way.
    else if (this.sortingHelper == clickedHeader) {
      sortedArray = this.parts.sort((a, b) => (eval('a.'+clickedHeader) > eval('b.'+clickedHeader)) ? -1 : 1);
      this.sortingHelper = "";
    }


  }

  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
}
