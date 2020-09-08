const Booking = require('../../../../models/booking')

module.exports = {
  booking: async (parent, context) => {
    try {
      const fetchBooking = await Booking.find();

      return  fetchBooking.map(item => {
        let date = new Date(item.date).getDay() + '-' + new Date(item.date).getMonth() + '-' + new Date(item.date).getFullYear(),
        time = new Date(item.time).getHours() + ':' + new Date(item.time).getMinutes();
        
        return { ...item._doc, date, time }
      })
    } catch (err) {
      const result = err.toString().replace(/Error:/g, '')
      throw new Error(result)
    }
  },
}
