import React, { useState } from "react";

// import icon
import { BsPeople } from "react-icons/bs";

// import datepicker
import DataPicker from "react-datepicker";

// import datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../assets/styles/_datepicker.css";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);

  return (
    <div className="relative flex h-full items-center justify-end">
      {/* date icons */}
      <div className="absolute z-30 pr-8">
        <div>
          <BsPeople className="text-base text-accent text-2xl" />
        </div>
      </div>

      {/* date calendar */}
      <div className="bg-white h-full w-full flex items-center px-4">
        <p className="text-xl" >+50</p>
      </div>
    </div>
  );
};

export default CheckIn;
