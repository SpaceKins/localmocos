'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('vendor_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      company_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      business_reg_num: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dba: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      business_ph: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sales_ph: {
        allowNull: false,
        type: Sequelize.STRING
      },
      website: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      zip_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'zipcodes',
          key: 'id'
        }
      },
      market_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'markets',
          key: 'id'
        }
      },
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('vendor_infos');
  }
};