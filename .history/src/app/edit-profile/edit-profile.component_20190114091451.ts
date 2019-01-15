import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import { HttpService } from '../_services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  employee: Employee;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    const userId = window.localStorage.getItem('currentUser');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['user-profile']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.httpService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.httpService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['list-user']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }


}
