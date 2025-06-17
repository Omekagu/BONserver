import Booking from '../../model/Booking.js'

// @desc Get all bookings
// @route GET /booking/bookings
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.find()
      .populate('userId', 'email firstname surname')
      .sort({ createdAt: -1 })
    res.json(booking)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    res
      .status(500)
      .json({ message: 'Error fetching bookings', error: error.message })
  }
}
