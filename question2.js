class Circle {
    constructor(radius) {
        this.radius = radius
        this.color = "Red"
    }
    getArea() {
        const areaOfCircle = Math.round(Math.PI * Math.pow(this.radius, 2))
        return areaOfCircle;
    }
    getCircumference() {
        const circumference = Math.round(2 * Math.PI * this.radius)
        return circumference;
    }
}

const circleCalc = new Circle(5)

console.log(circleCalc.getArea())
//   output - 79
console.log(circleCalc.getCircumference())
//   output - 31