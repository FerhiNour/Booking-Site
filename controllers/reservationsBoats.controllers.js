const reservationsBoats = require("../models/reservationsBoats.models");
const ValidateReservationsBoats = require("../validation/reservationBoats.validation");
const transporter = require("../nodeMailer/nodeMailer");

// add reservation Boat
const addReservationsBoats = async (req, res) => {
  const { errors, isValid } = ValidateReservationsBoats(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await reservationsBoats
        .findOne({ email_client: req.body.email_client })
        .then(async (exist) => {
          if (exist) {
            errors.email_client = "Email Used";
            res.status(404).json(errors);
          } else {
            await reservationsBoats.create(req.body);

            // Send confirmation email
            const mailOptions = {
              from: "nourferhi1@gmail.com",
              to: req.body.email_client,
              subject: "Boat Reservation Confirmation",
              text: "Hello, Thank you for your reservation. To confirm your reservation, please contact us at: +39 340 472 5317 and +39 329 313 7519",
            };

            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log("Error sending email:", error);
              } else {
                console.log("Email sent:", info.response);
              }
            });

            res
              .status(200)
              .json({ message: "See your email to confirm this reservation" });
          }
        });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// find all reservations Boats
const findAllReservationsBoats = async (req, res) => {
  try {
    const data = await reservationsBoats.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// find Single reservation Boat
const findSingleReservationsBoats = async (req, res) => {
  try {
    const data = await reservationsBoats.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Delete reservation Boat
const deleteReservationsBoats = async (req, res) => {
  try {
    await reservationsBoats.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "reservation deleted with succes" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addReservationsBoats,
  findAllReservationsBoats,
  findSingleReservationsBoats,
  deleteReservationsBoats,
};
