//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express');
const router = express.Router();
const Item = require('../../models/Item.js');

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

//  CREATE AN ITEM
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})

//-----------------------------------
//ROUTES (DELETE) -> /items
//-----------------------------------

//  DELETE AN ITEM
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});










module.exports = router;
