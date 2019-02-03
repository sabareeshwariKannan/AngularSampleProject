
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // onSelectFile(event) { // called each time file input changes
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       // this.url = event.target.result;
  //       this.url  = (<FileReader>event.target).result;
//       }
//     }
// }

// removeimage ()
// {
// this.url="";
// }

}
