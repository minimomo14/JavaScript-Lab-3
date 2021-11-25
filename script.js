const submissions = [

    {
        name: "Jane",
        score: 95,
        date: "2020-01-21",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    },
]

console.log(submissions)

//function expression 
const addSubmission = function (array, newName, newScore, newDate)
{
    let newPassed = false 
    if (newScore >= 60) {
        newPassed=true;
       }
    let newSubmission = {
        name:newName,
        score:newScore,
        date: newDate,
        passed: newPassed
    }   
    array.push(newSubmission);

}
//Before function
//console.log(submissions);  
//iy's work !! comment it out 
addSubmission(submissions,"Tiia",100,"2021-11-24");

//After function
//console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
   //using splice metod 
   array.splice(index,1);
    
}
//console.log(submissions);
deleteSubmissionByIndex(submissions,0);
//console.log(submissions)


const deleteSubmissionByName = (array, name) => {
    //using finsindex and splice methods
    let index = array.findIndex(student => student.name === name);
    array.splice(index,1);
}
//console.log(submissions);
deleteSubmissionByName(submissions,"Joe");
//console.log(submissions);


const editSubmission = (array, index, score) => {
    array[index].score = score;
}
editSubmission(submissions,0,59)
//console.log(submissions);


const findSubmissionByName = (array, name) => {
    // function return the object in the array that has the provided name. (find method)
    const found = array.find(person => person.name === name);
    return found;
    
}
    console.log(findSubmissionByName(submissions,"Tiia"));
    console.log(findSubmissionByName(submissions,"Jack"));

const findLowestScore = (array) => {
    // return the object in the array that has the lowest score (use the forEach method to loop through the whole array) or using for loop

    //let index = array.findLowestScore.forEach(lowScore => console.log(lowScore));
    let lowScore = 100;
    let submissions = {};
    for (let singleScore of array) {
        if (singleScore.score < lowScore) {
            lowScore = singleScore.score
            submissions = singleScore
        }
    }
    return submissions;
}
findLowestScore(submissions);
console.log(submissions)


const findAverageScore = (array) => {
    //return the average quize scorem (use for...of loop)

    let sum = 0
    for (let singleScore of array) {
        sum += singleScore.score
    }
    let averageScore = sum/array.length
    return averageScore
}
findAverageScore(submissions)
console.log(findAverageScore(submissions))

const filterPassing = (array) => {
    //return new array using filter metod, the filter metod should find objects in the array that have passing score
    
    const Passing = array.filter(passed => passed.passed === true);
    return Passing;

}
filterPassing(submissions);
console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
    //return new array using the filter metod, filter metod should find objects in the array that have scores =>90.

    const highScore = array.filter(score => score.score >= 90)
    return highScore;
} 
filter90AndAbove(submissions);
console.log(filter90AndAbove(submissions));
