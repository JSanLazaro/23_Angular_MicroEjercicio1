import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {
  constructor(private fb: FormBuilder){}
  employees:Employee[] = [];
  employeeForm = this.fb.group({
    name:['fdff'],
    surnames:[''],
    position:[''],
    salary:['']
  })
  addEmployee(){
    console.log(this.employeeForm.value.name);
    let name: string = this.employeeForm.get("name")?.value!;
    let surnames = this.employeeForm.get("surnames")?.value!;
    let position = this.employeeForm.get("position")?.value!;
    let salary = this.employeeForm.get("salary")?.value!;
    let employee = new Employee(name,surnames,position, salary);
    this.employees.push(employee);
  }
}
