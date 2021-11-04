
class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed, mileage, type) {
        super(carModel, carYear, maxSpeed, type);
        super.vehicleAssembling();
        this.type = type;
        this.mileage = mileage;
    };
    displayInfo() {
        console.log(`It is car model: ${this.model};
        made in year: ${this.year};
        car max speed: ${this.maxSpeed};
        car type: ${this.type};
        mileage: ${this.mileage};
        `);
    };
};

export default Car;