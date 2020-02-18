const Sector = require('./../models/sectorModel')

exports.getSector = async (req, res) => {
  const sectors = await Sector.find()

  res.status(200).json({
		status: 'success',
		sectors
	});
}

exports.createSector = async (req, res) => {
  const sector = await Sector.create(req.body);
  
  res.status(200).json({
    status: 'success',
    sector
  })
}
