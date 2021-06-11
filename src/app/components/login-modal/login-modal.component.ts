import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  faPaw = faPaw;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content:any) {
    this.modalService.open(content, { size: 'md', centered:true });
  }

}
