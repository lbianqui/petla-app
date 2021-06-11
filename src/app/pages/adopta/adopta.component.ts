import { Component, OnInit } from '@angular/core';
const PETS = [
  {
    nombre: 'Cacho',
    image: "assets/images/cacho.jpeg",
    edad: '4 años',
    descripcion: "Amable con niños y perros. Muy compañero",
    vacunado: "Si",
    castrado: "No",
    refugio: {
        nombre: 'Puppis Refugio',
        telefono: '1568903412',
        direccion: 'Rio de janeiro 122',
        email: 'refugio@gmail.com'
    }
  },
  {
    nombre: 'Azul',
    edad: '4 meses',
    image: "assets/images/azul.jpeg",
    descripcion: "Amable con niños y perros. Muy compañero",
    vacunado: "Si",
    castrado: "No",
    refugio: {
        nombre: 'Puppis Refugio',
        telefono: '1568903412',
        direccion: 'Rio de janeiro 122',
        email: 'refugio@gmail.com'
    }
  },
  {
    nombre: 'Tito',
    edad: '7 años',
    image: "assets/images/tito.jpeg",
    descripcion: "Amable con niños y perros. Muy compañero",
    vacunado: "Si",
    castrado: "No",
    refugio: {
        nombre: 'Puppis Refugio',
        telefono: '1568903412',
        direccion: 'Rio de janeiro 122',
        email: 'refugio@gmail.com'
    }
  },
  {
    nombre: 'Cacho',
    image: "assets/images/cacho.jpeg",
    edad: '4 años',
    descripcion: "Amable con niños y perros. Muy compañero",
    vacunado: "Si",
    castrado: "No",
    refugio: {
        nombre: 'Puppis Refugio',
        telefono: '1568903412',
        direccion: 'Rio de janeiro 122',
        email: 'refugio@gmail.com'
    }
  },
  {
    nombre: 'Azul',
    edad: '4 meses',
    image: "assets/images/azul.jpeg",
    descripcion: "Amable con niños y perros. Muy compañero",
    vacunado: "Si",
    castrado: "No",
    refugio: {
        nombre: 'Puppis Refugio',
        telefono: '1568903412',
        direccion: 'Rio de janeiro 122',
        email: 'refugio@gmail.com'
    }
  },
  {
    nombre: 'Tito',
    edad: '7 años',
    image: "assets/images/tito.jpeg",
    descripcion: "Amable con niños y perros. Muy compañero",
    vacunado: "Si",
    castrado: "No",
    refugio: {
        nombre: 'Puppis Refugio',
        telefono: '1568903412',
        direccion: 'Rio de janeiro 122',
        email: 'refugio@gmail.com'
    }
  }
]
@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.component.html',
  styleUrls: ['./adopta.component.css']
})
export class AdoptaComponent implements OnInit {
  pets = PETS;
  constructor() { }

  ngOnInit(): void {
  }

}
