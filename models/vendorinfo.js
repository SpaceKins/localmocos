'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfo = sequelize.define('VendorInfo', {
    user_id: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    company_name: DataTypes.STRING,
    business_reg_num: DataTypes.INTEGER,
    business_description: DataTypes.TEXT,
    dba: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    business_ph: DataTypes.STRING,
    business_ph2: DataTypes.STRING,
    sales_ph: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    tableName: 'vendor_infos',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.VendorInfo.belongsTo(models.User, {
          foreignKey: 'user_id',
          targetKey: 'id'
        });
        models.VendorInfo.hasMany(models.Product, {
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Type, {
          through: models.VendorInfoType,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Market, {
          through: models.VendorInfoMarket,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Certification, {
          through: models.VendorInfoCert,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Service, {
          through: models.VendorInfoService,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsTo(models.Zipcode, {
          foreignKey: 'zip_id',
          targetKey: 'id'
        });
      }
    }
  });
  return VendorInfo;
};