const router = require('express').Router();
const employeeController = require('./../controllers/employeeController');

/* 
  Staff route for path /api/employees/
  @params: none
  @get: 
    @returns [{}] all employees
  @post: 
    create a new employee
    @returns {} response with confirmation
*/
router.route('/').get(employeeController.getEmployees);

/* 
  Staff route for path /api/employees/:id
  @params: id String
  @get:
    @returns {} employee with id from param
  @patch: 
    update employee with id from param
    @returns {} response with confirmation
  @delete:
    delete employee with id from param
    @returns {} response with confirmation
*/
router
	.route('/:id')
	.get(employeeController.getEmployee)
	.patch(employeeController.updateEmployee)
	.delete(employeeController.deleteEmployee);

module.exports = router;
