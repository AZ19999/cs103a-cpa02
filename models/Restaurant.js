'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var restaurantSchema = Schema( {
    address: Object,
    borough: String,
    cuisine: String,
    grades: Array,
    name: String,
    restaurant_id: String,
} );

module.exports = mongoose.model( 'Restaurants', restaurantSchema );
