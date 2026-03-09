import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { id:1, name:'Virat Kohli', email:'virat@college.edu', course:'BCA', phone:'9876543210'},
    { id:2, name:'Rahul Sharma', email:'rahul@college.edu', course:'MCA', phone:'9123456780'},
    { id:3, name:'Anjali Mehta', email:'anjali@college.edu', course:'BSc CS', phone:'9988776655'},
    { id:4, name:'Rohit Verma', email:'rohit@college.edu', course:'BBA', phone:'9876501234'},
    { id:5, name:'Sneha Reddy', email:'sneha@college.edu', course:'BCA', phone:'9876604321'},
    { id:6, name:'Karan Patel', email:'karan@college.edu', course:'MCA', phone:'9123498765'},
    { id:7, name:'Priya Nair', email:'priya@college.edu', course:'BSc IT', phone:'9090909090'},
    { id:8, name:'Arjun Singh', email:'arjun@college.edu', course:'BCA', phone:'9898989898'},
    { id:9, name:'Meera Joshi', email:'meera@college.edu', course:'BBA', phone:'9111111111'},
    { id:10, name:'Aditya Rao', email:'aditya@college.edu', course:'MCA', phone:'9222222222'}
  ];

  getStudents(){
    return this.students;
  }

}