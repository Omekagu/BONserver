import express from 'express'
import { getBooking } from '../../controllers/hotelBooking/booking.js'
const router = express.Router()

router.get('/bookings', getBooking)

export default router
