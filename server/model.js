const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser')

const {
    Teacher,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');
module.exports = {
    api : {
        
        getData : callback => {
            Teacher.findAll()
            .then( result => { callback(result) })
            .catch( err => { throw err })
        },addData : callback => {
            Teacher.create({
                name :  Request.body.data
            })
            .then( result => {
                callback(result)
            })
            .catch( err => {
                console.log(err)
                throw err;
            })
        },deleteData : callback => {
            Teacher.destroy({
                where : { id : req.body.delete.id }
            })
            .then( callback(200) )
            .catch( err => { throw err })
        },modifyData : callback => {
            Teacher.update({ name : req.body.modify.name }, {
                where : { id : req.body.modify.id }
            })
            .then( result => { callback(result) })
            .catch( err => { throw err })
        },
    }
    
}