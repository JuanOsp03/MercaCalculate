const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class product extends Model {

}

provider.init ({
    providerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    providerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    providerAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    providerPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    providerTaxStatus: {
        type: DataTypes.STRING,
        allowNull: false
    }

} , { 

    sequelize: connection,
    modelName: 'provider',
    paranoid: true,
    deletedAt: 'destroyTime'

});

module.exports = product