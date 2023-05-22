import { Model  , Sequelize ,DataTypes} from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.USER);

const sequelize : Sequelize = new Sequelize("rushi.gandhi",  "rushi.gandhi"  , "Radixerb8" , {
    dialect : 'postgres'
} );

const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  });

  const Todos = sequelize.define('todos' , {
    id :{
type : DataTypes.INTEGER,
primaryKey :true,
autoIncrement : true,

    } ,
    title : DataTypes.STRING,
    description : DataTypes.STRING,
    isFinished :  DataTypes.BOOLEAN,
    
    
  } ,{
    timestamps : false
  });

  export {Todos , sequelize}