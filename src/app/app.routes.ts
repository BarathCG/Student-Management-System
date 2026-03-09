import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { StudentList } from './student-list/student-list';
import { StudentDetails } from './student-details/student-details';
import { AddStudent } from './add-student/add-student';
import { EditStudent } from './edit-student/edit-student';

export const routes: Routes = [

{ path: '', component: Home },

{ path: 'dashboard', component: Dashboard },

{ path: 'students', component: StudentList },

{ path: 'student-details', component: StudentDetails },

{ path: 'add-student', component: AddStudent },

{ path: 'edit-student', component: EditStudent }

];