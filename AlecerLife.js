//Variables
const name = "Atasha Zacharine Alecer";
const course = "BSIT";
const yearLevel = "2nd year";

console.log("Name:", name);
console.log("Course:", course);
console.log("Year Level:", yearLevel);


//Operators
const hoursSleep = 6;
const hoursStudy = 5;
const totalDailyHours = hoursSleep + hoursStudy;

console.log("Hours of Sleep:", hoursSleep);
console.log("Hours of Study:", hoursStudy);
console.log("Total Daily Routine Hours:", totalDailyHours);

//Conditions

if (hoursStudy >= 5) {
  console.log("Great! You studied enough today.");
} else {
  console.log("You need to study more.");
}

//Loops
const subjects = [
  "Programming 2",
  "Data Structures",
  "Discrete Mathematics",
  "Web Development",
  "Computer Organization",
  "Human-Computer Interaction"
];

console.log("My Subjects This Semester:");
for (let i = 0; i < subjects.length; i++) {
  console.log('- ${subjects[i]}');
}

//Functions
function studentSummary() {
  const studyNote = hoursStudy >= 5 ? 
    "Great! You studied enough today." : 
    "You need to study more.";
  return `Student Summary:
Name: ${name}
Course: ${course}, ${yearLevel}
Sleep: ${hoursSleep} hours
Study: ${hoursStudy} hours
Total Routine: ${totalDailyHours} hours
Note: ${studyNote}`;
}

console.log("\n" + studentSummary());