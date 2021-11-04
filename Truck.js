

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed, weight) {
        super(carModel, carYear, maxSpeed );
        this.weight = weight;
        this.type = "truck";
    }
    static loading(){                //static method
        console.log("load box");
        
    };
    
};

export default Truck;