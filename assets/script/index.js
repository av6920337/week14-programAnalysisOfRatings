const grades = Array.from(
    { length: 12 }, // Объект с длиной 12
    () => Math.floor(Math.random() * 100) + 1 // Функция, которая генерирует случайную оценку от 1 до 100
);
console.log(grades); 

//Cредний балл
const averageGrade = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/ grades.length;

console.log(`Students' GPA: ${averageGrade}`);

//Максимальный балл
const maxGrade = grades.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
console.log(`Maximum student grade: ${maxGrade}`);

//Минимальный балл
const minGrade = grades.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue));
console.log(`Minimum student grade: ${minGrade}`);

const positiveGradesCount = grades.filter(grade => grade >= 60).length;
console.log(`Number of students who received a positive assessment: ${positiveGradesCount}`);

const negativeGradesCount = grades.filter(grade => grade < 60).length;
console.log(`Number of students who received a negative assessment: ${negativeGradesCount}`);

const letterGrades = grades.map(grade => {
    switch(true){
        case grade >= 80 && grade <= 100:
            return 'A';
        case grade >= 60 && grade <= 79:
            return 'B';
        case grade >= 40 && grade <= 59:
            return 'C';
        case grade >= 20 && grade <= 39:
            return 'D';
        case grade < 20:
            return 'E';
        default:
            return 'Oops, something went wrong';
    }
});

console.log(letterGrades);
