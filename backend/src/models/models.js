import Sequelize from 'sequelize'
import loadUserModel from './User.js'
import loadVehicleModel from './Vehicle.js'

const sequelize = new Sequelize('sqlite::memory:')

const User = loadUserModel(sequelize, Sequelize.DataTypes)
const Vehicle = loadVehicleModel(sequelize, Sequelize.DataTypes)


const db = {
  User,
  Vehicle,
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db