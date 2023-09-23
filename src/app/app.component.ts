import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    // this.store.dispatch(PostActions.fetchPost())

    // setTimeout(() => {
    //   this.store.select(getPostStore).subscribe((data) => {
    //     console.log(data)
    //   }
    //   )
    // }, 5000);
  }

  submitForm() {
    // console.log(this.form);
  }
}
