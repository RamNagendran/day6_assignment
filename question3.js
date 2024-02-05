

class Person {
    constructor() {
        this.name = "John Doe"
        this.email = "john.doe@example.com",
            this.phone = "+1 (555) 123-4567",
            this.address = "123 Main Street, Cityville, State, 12345"
        this.degree = "Bachelor of Science in Computer Science",
            this.school = "University of Technology",
            this.location = "Cityville, State",
            this.graduationYear = 2018
    }

    getPerson() {
        let obj = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            degree: this.degree,
            school: this.school,
            location: this.location,
            graduationYear: this.graduationYear
        }
        return obj;
    }
}

const personObj = new Person()

console.log(personObj.getPerson())
// output
// {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+1 (555) 123-4567',
//     address: '123 Main Street, Cityville, State, 12345',
//     degree: 'Bachelor of Science in Computer Science',
//     school: 'University of Technology',
//     location: 'Cityville, State',
//     graduationYear: 2018
// }

