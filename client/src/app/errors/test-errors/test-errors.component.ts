import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  baseURL = environment.apiUrl;

  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.baseURL + 'buggy/not-found').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);

      })
  }

  get400Error() {
    this.http.get(this.baseURL + 'buggy/bad-request').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);

      })
  }

  get500Error() {
    this.http.get(this.baseURL + 'buggy/server-error').subscribe(
      (response) => {

        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);

      })
  }

  get401Error() {
    this.http.get(this.baseURL + 'buggy/auth').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);

      })
  }

  get400ValidationError() {
    this.http.post(this.baseURL + 'account/register', {}).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.validationErrors = error;

      })
  }

}
