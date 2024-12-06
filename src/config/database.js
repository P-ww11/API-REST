import dotenv from 'dotenv'


dotenv.config()

export default {
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
