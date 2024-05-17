const Train = require('../models/Train');

exports.getTrain = async (req, res) => {
    try {
        const trains = await Train.find();
        res.json(trains);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTrain = async (req, res) => {
    const train = new Train(req.body);
    try {
        const newTrain = await train.save();
        res.status(201).json(newTrain);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
