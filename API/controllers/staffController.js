exports.getStaffMembers = (req, res) => {
  try {
    const staffMembers = []

    res.status(200).json({
      status: 'success',
      data: {
        staffMembers
      }
    })
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      error: err.message
    })
  }
}

exports.getStaffMember = (req, res) => {
  try {
    // find staffMembers._id === req.params.id
    const staffMember = {}

    res.status(200).json({
      status: 'success',
      data: {
        staffMember
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      error: err.message
    })
  }
}

exports.updateStaffMember = (req, res) => {
  try {
    // find staffMembers._id === req.params.id and update
    const staffMember = {}

    res.status(200).json({
      status: 'success',
      data: {
        staffMember
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      error: err.message
    })
  }
}

exports.deleteStaffMember = (req, res) => {
  try {
    // find staffMembers._id === req.params.id and delete

    res.status(200).json({
      status: 'success'
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      error: err.message
    })
  }
}
