const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
const getGoals = asyncHandler( async (req,res)=>{
    res.json({message:'get goals'})
})

module.exports = {
    getGoals,
}