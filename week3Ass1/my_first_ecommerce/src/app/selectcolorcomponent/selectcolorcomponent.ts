import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-selectcolorcomponent',
  styleUrl: './selectcolorcomponent.css',
  templateUrl: './selectcolorcomponent.html',
})
export class Selectcolorcomponent {
  
  colours = [
    'aqua', 'green', 'pink', 'khaki', 'black', 'lightgray', 'salmon',
    'orange', 'darkred', 'red', 'beige', 'gray', 'purple', 'gold',
    'lime', 'violet', 'yellow', 'blue', 'lightgreen', 'turquoise',
    'indigo', 'skyblue', 'lightblue', 'teal', 'cyan', 'white',
    'maroon', 'olive',
  ];

  selected = '';

  select(colour: string) {
    this.selected= colour;
  }
}