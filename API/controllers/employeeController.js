exports.getEmployees = (req, res) => {
	try {
		const employees = [];

		res.status(200).json({
			status: 'success',
			data: {
				employees
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.getEmployee = (req, res) => {
	try {
		// find staffMembers._id === req.params.id
		const employee = {};

		res.status(200).json({
			status: 'success',
			data: {
				employee
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.updateEmployee = (req, res) => {
	try {
		// find staffMembers._id === req.params.id and update
		const employee = {};

		res.status(200).json({
			status: 'success',
			data: {
				employee
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.deleteEmployee = (req, res) => {
	try {
		// find staffMembers._id === req.params.id and delete

		res.status(200).json({
			status: 'success'
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};
