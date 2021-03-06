import { Injectable } from '@angular/core';

import * as jsonData from '../../../grades.json';

@Injectable()
export class GradeService {
  courseGrades: any = null;

  constructor() {
    this.getGrades();
  }

  getGrades() {
    if (this.courseGrades === null) {
      const courseGrades = <any>jsonData;
      this.courseGrades = courseGrades;
    }
    return this.courseGrades;
  }

  getCourseGrades(courseId) {
    return this.courseGrades[courseId];
  }
}
