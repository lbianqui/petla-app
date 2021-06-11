import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
faPlusCircle
@Component({
  selector: 'app-refugios',
  templateUrl: './refugios.component.html',
  styleUrls: ['./refugios.component.css']
})
export class RefugiosComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
