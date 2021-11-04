
class PickupTruck extends Truck {
    constructor(carModel, carYear, maxSpeed, weight){
       super(carModel, carYear, maxSpeed, weight);
       super.vehicleAssembling();
       super.displayInfo();
       this.type = "pickup track";

   };
   
};

export default PickupTruck;