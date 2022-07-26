const organizeInstructors = function(instructors) {
  let organized = {
  };

  for (let curr of instructors) {
    organized[curr.course] ? organized[curr.course].push(curr.name) : organized[curr.course] = [curr.name];
  }

  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
