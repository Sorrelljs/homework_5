// Create a School Constructor and a Course Constructor.
//  You may use either a constructor function or a class.


// The course should keep track of the teachers, name and courseNumber of the course.
class Course {
    constructor(name, teachers, courseNumber){
        this.name = name
        this.teachers = teachers
        this.courseNumber = courseNumber
        
    }
}

const math101 = new Course("Math 101", ["Albert Einstein"], 100);
const computerScience301 = new Course("Introduction to Computer Science", ["Dr. Zeus", "Mark Zuckerberg"], 300);
const socialStudies201 = new Course(
    "Intro to Social Studies",
    ["Steve Wozniak", "Brian Stevens"],
    200
    );
    
    console.log(computerScience301)
    
    
    
    
    // Let's go over the School. Like the Course, it is constructed. 
    // Unlike the Course it has several prototype methods. It is constructed without arguments.
    
    // Give it the prototype method addCourse that takes a course object and stores it. When storing books, store them in alphabetical by their name.
    class School {
        constructor(){
            
        }addCourse(course){

        }
    }

const codecore = new School();
codecore.addCourse(math101);

// // make it possible to chain addCourse calls
// codecore.addCourse(computerScience301).addCourse(socialStudies201);
// Give it the prototype method findByName. It'll search for the course whose name contains the passed in string argument.

// // The casing of the string should be ignored
// codecore.findByName("math"); // Course {name: 'Math 101', teachers: ['Albert Einstein'], courseNumber: 100}
// codecore.findByName("social"); // Course {name: "Intro to Social Studies", teachers: Array(2), courseNumber: 200}
// Give it the prototype method list which returns all courses in the school in an Array.

// codecore.list();
// // [
// //   Course {name: 'Math 101', teachers: ['Albert Einstein'], courseNumber: 100},
// //   Course {name: "Intro to Social Studies", teachers: Array(2), courseNumber: 200},
// //   Course {name: "Introduction to Computer Science", authors: Array(2), edition: 300},
// // ]