const express = require("express");
const router = express.Router();

const itineraryData = {
  title: "Big Cats Week at Maasai Mara - Diwali 2023 Special",
  overview: "Witness the beauty of the Maasai Mara and its incredible wildlife...",
  itinerary: [
    {
      day: "Day 1 - Nov 14th 2023",
      details: "Pickup from JKIA airport at 7AM. Travel to Maasai Mara..."
    },
    {
      day: "Day 2 - Nov 15th 2023",
      details: "Early morning game drive, bush breakfast, leopard spotting..."
    },
    {
      day: "Day 3 - Nov 16th 2023",
      details: "Full-day safari at the Tanzania border, Rhino tracking..."
    },
    {
      day: "Day 4 - Nov 17th 2023",
      details: "Leisurely breakfast before departing for Nairobi..."
    },
  ],
};

router.get("/", (req, res) => {
  res.json(itineraryData);
});

module.exports = router;
