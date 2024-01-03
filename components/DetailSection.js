import React from 'react';

const DetailSection = ({ description }) => {
  return (
    <div>
      <div className=" bg-gray-50 shadow-md lg:flex items-start p-6">
        <div className="avatar">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-6">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="">
          <h2 className="card-title">Dougs Take</h2>
          <p>{description}</p>
        </div>
      </div>
      <hr />
      <div className="m-6">
        <h2 className="text-xl font-bold">Highlights</h2>
        <p>
          THIS... is a 2015 Bentley Flying Spur, finished in black with a black
          interior.
        </p>
        <li>
          The attached Carfax report indicates no accidents or mileage
          discrepancies in this Bentley past. It also confirms that this is a
          1-owner Equipment thats been registered in California from new.
        </li>
        <li>
          Factory equipment includes the Mulliner Driving Specification, which
          adds 21-inch 5-spoke 2-piece painted alloy wheels, diamond quilting on
          the seats and doors, an indented hide headliner, and a knurled gear
          lever, among other upgrades. Other equipment includes self-leveling
          air suspension with continuous damping control, bi-xenon headlamps,
          full LED rear lamps, premium grade hide upholstery, wood veneers, and
          multi-zone automatic climate control. The selling dealer reports no
          modifications.
        </li>
        <li>
          Power comes from a 6.0-liter turbocharged W12, rated at 616 horsepower
          and 590 lb-ft of torque. Output is sent to all four wheels via an
          8-speed automatic transmission.
        </li>
      </div>
      <hr />
      <div className="m-6">
        <h2 className="text-xl font-bold">Equipment</h2>
        <p>
          A build sheet is pictured in the gallery, and a partial list of
          notable equipment includes:
        </p>
        <li>
          Premium Package Plus (Light Comfort Package, Servotronic steering
          system, bi-xenon headlights, Porsche Dynamic Light System, panoramic
          roof panel, heated, ventilated, and power-adjustable front seats,
          memory function for the front passengers, heated rear seats, heated
          steering wheel, auto-dimming mirrors, power-operated rear sunshades,
          Porsche Communication Management infotainment system, navigation
          system, lane-change assist, plus front and rear parking sensors)
        </li>
        <li>Self-leveling and height-adjustable air suspension system</li>
        <li>Extended-range fuel tank</li>
        <li>Digital display in the instrument cluster</li>
      </div>
    </div>
  );
};

export default DetailSection;
