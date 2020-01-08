const model = require('./model');

module.exports = {
    needs: () => upload,
    api : {
        getData : (req, res) => {
            model.api.getData( data => {
                return res.send( data )
            })
        },addData : (req, res) => {
            model.api.addData( data => {
                return res.send( data )
            })
        },deleteData : (req, res) => {
            model.api.deleteData( data => {
                return res.send( data )
            })
        },modifyData : (req, res) => {
            model.api.modifyData( data => {
                return res.send( data )
            })
        },
    }
}