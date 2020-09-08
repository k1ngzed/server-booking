const { isEmail, isLength, isNumeric} = require('validator')
const Booking = require('../../../../models/booking')

module.exports = {
  createBooking: async (
    parent,
    { name, phone, email, room, date, time, description }
  ) => {
    console.log(' #### => ', name, phone, email, room, date, time, description)

    if (email && !isEmail(email)) {
      throw new Error('Неправильная почта')
    }
    if (!isLength(phone, { min: 9, max: 9 }) || !isNumeric(phone)) {
      throw new Error('Номер телефона должен состоять из 9 символов')
    }

    // if (room != null) {
    //   const fetchBooking = await Booking.findOne({ room })
    //   if (fetchBooking) {
    //     throw new Error('Этот зал занят, выберите другой или свяжитесь с менеджером')
    //   }
    // }

    let roomOptions = [
      {
        value: "Option1",
        label: "Просторная терраса"
      },
      {
        value: "Option2",
        label: "Концертное пространство"
      },
      {
        value: "Option3",
        label: "Территория ресторана"
      },
      {
        value: "Option4",
        label: "Гранд зал – зал для торжеств"
      },
      {
        value: "Option5",
        label: "Каминный зал"
      }
    ]

    let getRoomName = roomOptions.filter( a => a.value == room)

    const booking = new Booking({
      name,
      phone,
      email,
      room: getRoomName[0] ? getRoomName[0].label : '',
      date,
      time,
      description
    })

    const result = await booking.save()
    return result
  },
}
