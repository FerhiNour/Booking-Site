const reservationsExcursions = require("../models/reservationsExcursion.models");
const ValidateReservationsExcursions = require("../validation/ReservationsExcursions.validation");
const transporter = require("../nodeMailer/nodeMailer");

// add reservation Excursion
const addReservationsExcursions = async (req, res) => {
  const { errors, isValid } = ValidateReservationsExcursions(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await reservationsExcursions
        .findOne({ email_client: req.body.email_client })
        .then(async (exist) => {
          if (exist) {
            errors.email_client = "Email Used";
            res.status(404).json(errors);
          } else {
            await reservationsExcursions.create(req.body);

            // Send confirmation email
            const mailOptions = {
              from: "nourferhi1@gmail.com",
              to: req.body.email_client,
              subject: "Excursion Reservation Confirmation",
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

// find all reservations Excursions
const findAllReservationsExcursions = async (req, res) => {
  try {
    const data = await reservationsExcursions.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// find Single reservation Excursion
const findSingleReservationsExcursions = async (req, res) => {
  try {
    const data = await reservationsExcursions.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Delete reservation Excursion
const deleteReservationsExcursions = async (req, res) => {
  try {
    await reservationsExcursions.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Excursion deleted with succes" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addReservationsExcursions,
  findAllReservationsExcursions,
  findSingleReservationsExcursions,
  deleteReservationsExcursions,
};
