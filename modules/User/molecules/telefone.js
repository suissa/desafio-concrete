const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  ddd: require('./../atoms/telefoneDDD')
, numero: require('./../atoms/telefoneNumero')
}
module.exports = new Schema(Molecule);
