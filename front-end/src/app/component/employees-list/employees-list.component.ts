import { Component } from '@angular/core';
import {Employee} from "../../models/employee.model";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {

  employees : Employee[] = [
    {
      id: '1',
      name: 'Hamza',
      email: 'h@gmail.com',
      phone: 123,
      salary: 1111,
      department:'IT',
    },
    {
      id: '2',
      name: 'Hamza',
      email: 'h@gmail.com',
      phone: 123,
      salary: 1111,
      department:'IT',
    },
    {
      id: '3',
      name: 'Hamza',
      email: 'h@gmail.com',
      phone: 123,
      salary: 1111,
      department:'IT',
    },
    {
      id: '4',
      name: 'Hamza',
      email: 'h@gmail.com',
      phone: 123,
      salary: 1111,
      department:'IT',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.employees.push();
  }

  protected readonly length = length;
  protected readonly length = length;
}
