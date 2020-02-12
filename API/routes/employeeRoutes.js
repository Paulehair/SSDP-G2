const router = require('express').Router();
const employeeController = require('./../controllers/employeeController');

/**
 * @apiDefine admin User access only
 * This operation belongs to to the admin group.
 */

 /**
 * @api {get} /employees Request list of all employees
 * @apiName getEmployees
 * @apiGroup Employees
 * @apiVersion 0.1.0
 * @apiPermission none
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "jdoe@example.com",
 *       "password": "password",
 *       "role": "employee",
 *       "sector": "78/92",
 *       "address": "123 Main St",
 *       "phone": "+33178674503"
 *     },
 *     {
 *       ...
 *     }]
*/

 /**
 * @api {post} /employees Create one employee
 * @apiName createEmployee
 * @apiGroup Employees
 * @apiVersion 0.1.0
 * @apiPermission admin
 * 
 * @apiSuccess {String} firstName First name of employee
 * @apiSuccess {String} lastName Last name of employee
 * @apiSuccess {String} email Email of employee
 * @apiSuccess {String} password Hashed password of employee
 * @apiSuccess {String} role Role of employee
 * @apiSuccess {String} sector Sector of employee
 * @apiSuccess {String} address Address of employee
 * @apiSuccess {String} phone Phone of employee
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "jdoe@example.com",
 *       "password": "password",
 *       "role": "employee",
 *       "sector": "78/92",
 *       "address": "123 Main St",
 *       "phone": "+33178674503"
 *     }
*/

router
  .route('/')
  .get(employeeController.getEmployees)
  .post(employeeController.createEmployee);
  
 /**
 * @api {get} /employees/:id Request employee information
 * @apiName getOneEmployee
 * @apiGroup Employees
 * @apiVersion 0.1.0
 * @apiPermission none
 * 
 * @apiSuccess {String} firstName First name of employee
 * @apiSuccess {String} lastName Last name of employee
 * @apiSuccess {String} email Email of employee
 * @apiSuccess {String} password Hashed password of employee
 * @apiSuccess {String} role Role of employee
 * @apiSuccess {String} sector Sector of employee
 * @apiSuccess {String} address Address of employee
 * @apiSuccess {String} phone Phone of employee
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "jdoe@example.com",
 *       "password": "password",
 *       "role": "employee",
 *       "sector": "78/92",
 *       "address": "123 Main St",
 *       "phone": "+33178674503"
 *     }
 */

 /**
 * @api {patch} /employees/:id Update employee information
 * @apiName updateOneEmployee
 * @apiGroup Employees
 * @apiVersion 0.1.0
 * @apiPermission admin
 * 
 * @apiParam {Number} id Id of employee
 * 
 * @apiSuccess {String} firstName First name of employee
 * @apiSuccess {String} lastName Last name of employee
 * @apiSuccess {String} email Email of employee
 * @apiSuccess {String} password Hashed password of employee
 * @apiSuccess {String} role Role of employee
 * @apiSuccess {String} sector Sector of employee
 * @apiSuccess {String} address Address of employee
 * @apiSuccess {String} phone Phone of employee
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "jdoe@example.com",
 *       "password": "password",
 *       "role": "employee",
 *       "sector": "78/92",
 *       "address": "123 Main St",
 *       "phone": "+33178674503"
 *     }
 */

 /**
 * @api {delete} /employees/:id Delete one employee
 * @apiName deleteOneEmployee
 * @apiGroup Employees
 * @apiVersion 0.1.0
 * @apiPermission admin
 * 
 * @apiParam {Number} id Id of employee
 * 
 * @apiSuccess {String} firstName First name of employee
 * @apiSuccess {String} lastName Last name of employee
 * @apiSuccess {String} email Email of employee
 * @apiSuccess {String} password Hashed password of employee
 * @apiSuccess {String} role Role of employee
 * @apiSuccess {String} sector Sector of employee
 * @apiSuccess {String} address Address of employee
 * @apiSuccess {String} phone Phone of employee
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "jdoe@example.com",
 *       "password": "password",
 *       "role": "employee",
 *       "sector": "78/92",
 *       "address": "123 Main St",
 *       "phone": "+33178674503"
 *     }
 */

router
	.route('/:id')
	.get(employeeController.getEmployee)
	.patch(employeeController.updateEmployee)
	.delete(employeeController.deleteEmployee);

module.exports = router;
