'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var resListSchema = Schema( {
  userId: ObjectId,
  restaurantId: ObjectId,
} );

module.exports = mongoose.model( 'RestaurantList', resListSchema );
