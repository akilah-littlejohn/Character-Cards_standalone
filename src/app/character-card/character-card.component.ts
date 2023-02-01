import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../data.service';
import { DataResponse } from '../interfaces/data-response';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatButtonModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  constructor(private api: DataService) { }
  characterId: number = 1;
  characterInfo: any[];
  
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api.getCharacterData().subscribe(
      (data: DataResponse) => {
        this.characterInfo = data.results
        console.log(this.characterInfo)
      })
  }
}
