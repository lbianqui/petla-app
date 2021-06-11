import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.html',
  styleUrls: ['./card-pet.component.css']
})
export class CardPetComponent implements OnInit {
  @Input() pet:any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
