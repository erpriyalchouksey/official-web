import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  courses = [
    {
      id: 1,
      name: 'Learn Angular',
      description: 'Angular is powerful frame work',
      image:
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/public-policy/061415_donor_THUMB_LARGE.jpg?w=1155&h=758',
    },
    {
      id: 2,
      name: 'Learn Angular',
      description: 'Angular is powerful frame work',
      image:
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/public-policy/061415_donor_THUMB_LARGE.jpg?w=1155&h=758',
    },
    {
      id: 3,
      name: 'Learn Typescript',
      description: 'Angular is powerful frame work',
      image:
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/public-policy/061415_donor_THUMB_LARGE.jpg?w=1155&h=758',
    },
    {
      id: 4,
      name: 'Learn Nodejs',
      description: 'Angular is powerful frame work',
      image:
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/public-policy/061415_donor_THUMB_LARGE.jpg?w=1155&h=758',
    }
  ];
}
