
const calculateDistance = require ("../helpers/calculateDistance")

module.exports = {
  location: async (req, res) => {
    const {x1,y1,x2,y2} = req.body
    const distane = calculateDistance(x1,y1,x2,y2);
    res.send({distance:distane})
  }
}