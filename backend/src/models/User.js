import { Model, DataTypes } from 'sequelize'

const loadUserModel = (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Vehicle, { foreignKey: 'userId', as: 'vehicles' })
    }
  }

  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 0,
          max: 120
        }
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: true
    }
  )
  return User
}

export default loadUserModel