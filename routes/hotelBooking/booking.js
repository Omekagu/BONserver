import express from 'express'
import { getBooking } from '../../controllers/hotelBooking/booking.js'
const router = express.Router()

// @desc Get all bookings
// @route GET /booking/bookings
router.get('/bookings', getBooking)

export default router
