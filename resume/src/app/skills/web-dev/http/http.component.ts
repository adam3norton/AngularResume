import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { iDog } from 'src/app/shared/dog.model';
import { dogService } from 'src/app/shared/dog.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent{
  _url = 'https://personalwebsite-bc32c-default-rtdb.firebaseio.com/users.json';
  dogs: iDog[] = [];

  signUpForm: FormGroup = new FormGroup({
    dogName: new FormControl('', [Validators.required]),
    dogBreed: new FormControl('', [Validators.required]),
    dogAge: new FormControl('', [Validators.required]),
  })

  constructor(private http: HttpClient,
              private dogService: dogService) { }

  onSubmit() {
    this.http.post(this._url, this.signUpForm.value)
      .subscribe(response => console.log(response));
  }

  onRetrieve() {
    this.dogService.getDogs()
      .subscribe((res) => {
        console.log(res);

        const data = JSON.parse(JSON.stringify(res))
        console.log("data", data)
        // convert this object to dog array
        // iterate this object key by key
        this.dogs = []; // init empty array
        for(var key of Object.keys(data)) {
          console.log(key, data[key]);
          this.dogs.push(data[key]);
        }

        console.log(this.dogs);

      })
  }
}
