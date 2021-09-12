const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employeeController');



router.get('datatest', EmployeeController.testdata)

router.get('/test',EmployeeController.test );
router.get('/list',EmployeeController.list );

router.get('/save',(req,res)=>{
    res.json({status:"Employee Saved"});
})

module.exports = router;