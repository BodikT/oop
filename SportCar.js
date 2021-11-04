

class SportCar extends Car {
    constructor(carModel, carYear, maxSpeed, mileage, horsePowers) {
        super(carModel, carYear, maxSpeed, mileage);
        this.horsePowers = horsePowers;
        this.type = "sport car";
    };
     
    displayInfo() {
        console.log(`It is car model: ${this.model};
        made in year: ${this.year};
        car max speed: ${this.maxSpeed};
        car type: ${this.type};
        mileage: ${this.mileage};
        horsePowers: ${this.horsePowers};
        `);  
};
};

export default SportCar;