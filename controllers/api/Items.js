//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express');
const router = express.Router();
const Item = require('../../models/Item.js');
const auth = require('../../middleware/auth')

//-----------------------------------
//ROUTES (GET) -> /items
//-----------------------------------

//  GET ALL ITEMS
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

//-----------------------------------
//ROUTES (POST) -> /items
//-----------------------------------

//  CREATE AN ITEM Private
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})

//-----------------------------------
//ROUTES (DELETE) -> /items
//-----------------------------------

//  DELETE AN ITEM Private
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});










module.exports = router;
