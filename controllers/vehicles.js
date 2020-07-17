const vehicles = require('../data/vehicles');

const vehiclesCount = vehicles.length;

const list = (req,res) => {
    return res.json(vehicles)
};


const show = (req, res) => {
    const id = req.params.vehicleId
    const foundVehicle = vehicles.find(vehicle => vehicle._id === Number(id));
    
    res.json(foundVehicle);
};

const create = (req, res) => {
    console.log(req.body);

    const newVehicle = {
        _id: vehiclesCount + 1,
        ...req.body
    };

    vehicles.push(newVehicle);
    res.json(newVehicle)
};


module.exports = {
    list, 
    show, 
    create
}