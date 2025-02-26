import React from "react";
import { Link } from "react-router-dom";
import "./Itinerary.css";

const Itinerary = () => {
  return (
    <div className="itinerary-container">
      <h1>Tour Itinerary</h1>
      <div className="itinerary-card">
        <h2>Day 1: Arrival in Nairobi</h2>
        <p> Nov 14th 2023 - Our drivers would pick up from the JKIA airport at 7AM. You would board our 4*4 Landcruisers to embark on your journey to Maasai Mara. The road journey takes about 5 to 6 hours, but you would be amazed by the landscape enroute. You would first see the Nairobi national park on your left side. On a lucky day, you would also see a White Rhino grazing near the fence. Nairobi city has a national park right in its heart!! And it is home for Lions, Leopards, White rhinos, gazzelles, Giraffes, crowned cranes, and other mammals and birds. This is the only city in the World which boasts a National park within the city limits. After one hour you would climb up to The Great Rift Valley. This is one priced attraction of Kenya. Formed a millions years back, this valley boasts beautiful lakes and escarpments, which provide havens for plentiful wildlife. The Great Rift Valley runs for 4,000 miles (6,400 kilometers), from Jordan in southwestern Asia to the coast of the Indian Ocean in central Mozambique. We suggest you request your driver to stop when you are on top and enjoy the views of this Nature’s marvel. 
          You would reach Maasai Mara by noon. Complete your check in formalities and proceed to lunch. 
          After lunch, you would go on your first game drive on the great plains of Maasai Mara!! 
          This afternoon, our experienced Maasai guides/drivers would take you around the Talek and Topi plains area. 
          There you would find a lot of ungulates, antelopes, zebras and also a huge pride of Lions. 
          This pride is called the  ‘Topi Pride’. Relax, sit back and enjoy God’s creations. 
          You would be so excited to see the endless plains of Maasai Mara with its dwellers. 
          Return to your camp after 6PM. Refresh yourself and head towards the camp fire. 
          Meet up with your group and listen to their first day experience at Mara. 
          Share your magical experiences with them. Have dinner and retire for the day ( LD ) 
        </p>
      </div>

      <div className="itinerary-card">
        <h2>Day 2: Journey to Maasai Mara</h2>
        <p> Nov 15th - Wake up early. Freshen yourself and head to the restaurant for a hot cup of coffee or tea. The mornings are cold at Mara, so do wear your fleece jacket for the morning game drive. Breakfast would be packed for you. Explore the mornings at Mara. 
          The Sunrise you witness at Mara is something which you would never get to witness anywhere in the World. Just pray that it does not rain!! 
          Our guides would park the vehicle under a tree for you to have a bush breakfast. This is an out of the World experience. At a distance you can see the animals peacefully grazing while you are enjoying your food. Post your breakfast, proceed again on the game drive. Mid mornings while the Lions sleep is a good time to look around for the cheetahs. November is also the season when the Topis give birth to young ones. On a lucky day, you might witness a Topi giving birth to a little one. Keep a watch on the hyenas as they would always be around a pregnant Topi!
          Return to your camp around 11.30AM. Take a nice shower and some much needed rest. Lunch would be served from 12.30 Noon. Have a hot lunch and a short nap. The afternoon game drive would start at 3PM. Today our drivers would try and locate a leopard for you. 
          Do ask your driver to stop where ever you want to click pictures. Return to the camp post sunset and enjoy your evening at the camp fire with your group. Have dinner and retire early as you have a full day game drive tomorrow.
        </p>
      </div>

      <div className="itinerary-card">
        <h2>Day 3: Safari Adventure</h2>
        <p>Nov 16th - Today is a very busy day for you at Mara. Wake up early, freshen yourself, have a hot beverage and jump into your designated vehicles. Today you would be going towards the border of Maasai Mara. You would be going for a full day game drive with packed breakfast and lunch. 
          Sand river is the border for Maasai Mara and Tanzania. This has been the entry point of the migratory animals for millions of years. You would be amazed to see such a small river separates two different countries!! Enjoy every bit your time as this is your last day of game drive for this trip. Have lunch and take a small nap like our Maasai guides. Then proceed towards your camp. On the way back encounter a pride of lion. During your stay at Mara, you would have seen the Big 4 our of the Big 5. The Rhino being very elusive is going to be a difficult find. But this area is know for the Rhinos. If you are lucky you would get to see one. 
          Return to the camp with great memories. Spend you evening at the camp fire before having dinner. Retire for the day. 
          Sadly the holiday has come to an end. But at the end you would release that it was the journey which was so beautiful. Have a blissful night.
        </p>
      </div>

      <div className="itinerary-card">
        <h2>Day 4: Departure</h2>
        <p> Nov 17th - Wake up at leisure, have a nice and heavy breakfast while you discuss about your experience with your group. 
          Board the designated Landcruisers to embark on the journey to Nairobi. You would be dropped at the JKIA airport. End of services.
        </p>
      </div>

      <div className="itinerary-card">
        <h2>Tour Cost</h2>
        <p>Per Person: $1,500 (Based on double occupancy)</p>
        <p>Single Supplement: $300</p>
        <p>Children (Below 12 years): $1,200</p>
      </div>

      <div className="itinerary-card">
        <h2>Payment Policy</h2>
        <p>50% deposit required at the time of booking.</p>
        <p>Remaining balance to be paid 30 days before departure.</p>
        <p>Payments can be made via bank transfer, credit card, or PayPal.</p>
      </div>

      <div className="itinerary-card">
        <h2>Inclusions</h2>
        <ul>
          <li>Accommodation in luxury tented camps</li>
          <li>All meals (Breakfast, Lunch, Dinner)</li>
          <li>All game drives and park entry fees</li>
          <li>Professional Maasai guide/driver</li>
          <li>Transport in a 4x4 Landcruiser</li>
          <li>Airport transfers</li>
        </ul>
      </div>

      <div className="itinerary-card">
        <h2>Exclusions</h2>
        <ul>
          <li>International airfare</li>
          <li>Visa fees</li>
          <li>Personal expenses</li>
          <li>Tips and gratuities</li>
          <li>Beverages and alcoholic drinks</li>
        </ul>
      </div>

      <div className="itinerary-card">
        <h2>Terms & Conditions</h2>
        <p>Cancellations made 60 days before departure: Full refund.</p>
        <p>Cancellations made 30-60 days before departure: 50% refund.</p>
        <p>Cancellations made less than 30 days before departure: No refund.</p>
        <p>Travel insurance is strongly recommended.</p>
      </div>


      <Link to="/" className="back-btn">Back to Home</Link>
    </div>
  );
};

export default Itinerary;
