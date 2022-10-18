"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// When does the PROG200 course start?
let searchCourseId = "PROG200";
function searchCourses(value) {
  return value.CourseId == searchCourseId;
};
let course = courses.find(searchCourses);
console.log(`${course.CourseId} starts on ${course.StartDate}.`)

// What is the title of the PROJ500 course?
function findCoursesB(courseB) {
    let searchCourseIdB = "PROJ500";
    return courseB.CourseId == searchCourseIdB;
}
const foundCourseB = courses.find(findCoursesB);
console.log(foundCourseB.Title); 

// What are the titles of the courses that cost $50 or less?
function filterCourses(wholeCourse) {
    return wholeCourse.Fee <= 50;
}
let  underFitty = courses.filter(filterCourses).map(wholeCourse => wholeCourse.Title);
console.log(` These courses are $50 0r less: 
${underFitty}`);

// What classes meet in "Classroom 1"
function searchCourses(course) {
    return course.Location === "Classroom 1";
}
let matchingCourses = courses.filter(searchCourses)
console.log(matchingCourses);