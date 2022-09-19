export default class Student{
    private _registration: string;
    private _name: string;
    private _examGrades: number[];
    private _workGrades: number[];
   

    constructor(
        registration: string,
        name: string,
    
       
    ) {
        this._registration = registration;
        this._name = name;
        this._examGrades = [];
        this._workGrades = [];

}

    set examGrades(value: number[]){
        if (value.length !== 4){
            throw new Error('The student must have 4 grades ')
        }
        this._examGrades = value;
    }

    set workGrades(value: number[]){
        if (value.length !== 2){
            throw new Error('The student must have 2 work grades')
        }
        this._workGrades = value;
    }
}


const personOne = new Student('202001011', 'Ronaldinho Gaucho');
const studentOneGrades = [10,9,6,4];
const studentOneWorkGrades = [5,9];

personOne.examGrades = studentOneGrades;
personOne.workGrades = studentOneWorkGrades;

console.log(personOne);
