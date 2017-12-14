const person1 = document.getElementById("oliviahtml");
const person2 = document.getElementById("laurenhtml");

class Person{
  constructor(name, age, birthday, year, major,hometown, color, job, hobbies){
    this.name = name;
    this.age = age;
    this.birthday = birthday;
    this.hometown = hometown;
    this.year = year;
    this.color = color;
    this.major = major;
    this.job = job;
    this.hobbies = hobbies;
  }
  populate(link){
     return link.innerHTML = `Hi! My name is ${this.name}.
        I am ${this.age} years old and my birthday is ${this.birthday}. I am from ${this.hometown} and my favorite color is ${this.color}. Currently, I am a ${this.year} at Loyola
        Marymount University. I major in ${this.major}. I work as a ${this.job} and in my free time I like ${this.hobbies}!
`;
  }
}

let oliviaRound = new Person("Olivia Round", 20, "June 20, 1997",
"Junior", "Political Science", "Missoula, Montana", "green",
"Managing Editor at Los Angeles Loyolan", "reading, hiking, and camping");
oliviaRound.populate(person1);

let laurenLindsey = new Person("Lauren Lindsey", 18, "January 19, 1999",
"Freshman", "Computer Science", "Cupertino, California", "purple",
"Mentor and Tutor with Emily Shane Foundation", "hiking, and going to the beach");
laurenLindsey.populate(person2);
