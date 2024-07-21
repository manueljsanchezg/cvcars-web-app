import { Model, DataTypes } from 'sequelize'

const loadVehicleModel = (sequelize) => {
  class Vehicle extends Model {
    static associate(models) {
      Vehicle.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
    }
  }

  Vehicle.init(
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      engine: {
        type: DataTypes.STRING,
        allowNull: false
      },
      power: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      km: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      vehiclePicture: {
        type: DataTypes.STRING,
        allowNull: true
      },
      onSale: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Vehicle',
      timestamps: true
    }
  )
  return Vehicle
}

export default loadVehicleModel