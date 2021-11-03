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
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
