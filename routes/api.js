const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.send('Error' + err);
    }
});

router.get('/users/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.send('Error' + err);
    }
});

router.post('/users', async(req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        hobbies: req.body.hobbies,
        phno: req.body.phno,
        email: req.body.email
    })

    try {
        await user.save();
        res.send('Creation Successful');
    } catch (err) {
        res.send('Error' + err);
    }
});

router.delete('/users', async(req, res) => {
    try {
        await User.remove();
        res.send('Deletion of all users is successful');
    } catch (err) {
        res.send('Error' + err);
    }
});

router.delete('/users/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        await user.remove();
        res.send('Deletion Successful');
    } catch (err) {
        res.send('Error' + err);
    }
});

router.patch('/users/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.name = req.body.name;
        user.age = req.body.age;
        user.hobbies = req.body.hobbies;
        user.phno = req.body.phno;
        user.email = req.body.email;
        await user.save();
        res.send('Updation Successful');
    } catch (err) {
        res.send('Error' + err);
    }
});

module.exports = router;