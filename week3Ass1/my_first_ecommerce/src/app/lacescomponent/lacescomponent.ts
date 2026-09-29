import { Component } from '@angular/core';
import { Selectcolorcomponent } from '../selectcolorcomponent/selectcolorcomponent';  
import { Footer } from '../footer/footer';

@Component({
  imports: [Selectcolorcomponent, Footer],
  selector: 'app-lacescomponent',
  styleUrl: './lacescomponent.css',
  templateUrl: './lacescomponent.html',
})
export class Lacescomponent {}
