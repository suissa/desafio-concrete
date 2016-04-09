const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  ddd: require('./../atoms/telefone-ddd')
, numero: require('./../atoms/telefone-numero')
}
module.exports = new Schema(Molecule);
