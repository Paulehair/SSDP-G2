const router = require('express').Router()
const staffController = require('./../controllers/staffController')

/* 
  Staff route for path /api/staff/
  @params: none
  @get: 
    @returns [{}] all staff members
  @post: 
    create a new staff member
    @returns {} response with confirmation
*/
router
  .route('/')
  .get(staffController.getStaffMembers)

/* 
  Staff route for path /api/staff/:id
  @params: id String
  @get:
    @returns {} staff member with id from param
  @patch: 
    update staff member with id from param
    @returns {} response with confirmation
  @delete:
    delete staff member with id from param
    @returns {} response with confirmation
*/
router
  .route('/:id')
  .get(staffController.getStaffMember)
  .patch(staffController.updateStaffMember)
  .delete(staffController.deleteStaffMember)
