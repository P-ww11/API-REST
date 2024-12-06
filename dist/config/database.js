"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);


_dotenv2.default.config()

exports. default = {
    dialect: 'mysql',
    host: import.meta.env.VITE_DATABASE_HOST,
    port: import.meta.env.VITE_DATABASE_PORT,
    username: import.meta.env.VITE_DATABASE_USERNAME,
    password:import.meta.env.VITE_DATABASE_PASSWORD,
    database: import.meta.env.VITE_DATABASE,
    define:{
      timestamps: true,
      underscored:true,
      underscoredAll: true,
      "createdAt": "created_at",
      "updatedAt": "updated_at"
    },
    dialectOptions:{
      timezone: `America/Sao_Paulo`
    },
    timezone: `America/Sao_Paulo`
}
