import Booking from '../../model/Booking.js'

export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.find()
    res.json(booking)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    res
      .status(500)
      .json({ message: 'Error fetching bookings', error: error.message })
  }
}
