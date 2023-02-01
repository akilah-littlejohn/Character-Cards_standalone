import { Component } from '@angular/core';
import { CharacterCardComponent } from './character-card/character-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[CharacterCardComponent]
})
export class AppComponent {
  title = 'randm-standalone';
}
