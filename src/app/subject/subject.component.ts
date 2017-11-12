import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: any;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjectList();
  }

  getSubjectList() {
    this.subjectService.getAllSubjects().then((res) => {
      this.subjects = res;
    }, (err) => {
      console.log(err);
    });
  }
}
