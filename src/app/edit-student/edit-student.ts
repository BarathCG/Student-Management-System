import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css'
})
export class EditStudent {

  students:any[] = [];
  selectedStudent:any;

  constructor(private studentService:StudentService){
    this.students = this.studentService.getStudents();
  }

  editStudent(student:any){
    this.selectedStudent = {...student};
  }

  updateStudent(){
    alert("Student Updated Successfully");
  }

}