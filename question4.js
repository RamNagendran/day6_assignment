class UberPrice {
    constructor(km) {
        this.km = km
    }
    priceCalc() {
        // Rs.18 per km
        return ` Total Cost for ${this.km}Km => Rs.${this.km * 18}.00/-`
    }
}

const uberObj = new UberPrice(2)
console.log(uberObj.priceCalc())
// sample output
// Total Cost for 2Km => Rs.36.00/-