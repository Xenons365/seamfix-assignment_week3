import { Component } from '@angular/core';
import { Selectcolorcomponent } from '../selectcolorcomponent/selectcolorcomponent';
import { Footer } from '../footer/footer';

@Component({
  imports: [Selectcolorcomponent, Footer],
  selector: 'app-shoesandbags-component',
  styleUrl: './shoesandbags-component.css',
  templateUrl: './shoesandbags-component.html',
})
export class ShoesandbagsComponent {}
