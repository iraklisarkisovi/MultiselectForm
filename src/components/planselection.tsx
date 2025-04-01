import React, { useState } from 'react'
import { Advanced, Arcade, Pro } from './Icons&more/svgs';

const Planselection = () => {
  const [payment, setPayment] = useState(false)

  return (
    <>
      <div
        className="flex ml-auto mr-auto flex-col items-start justify-evenly"
        style={{ fontFamily: "Ubuntu-Regular" }}
      >
        <div className="flex flex-col items-start ml-10">
          <h1
            className="text-3xl font-bold text-[#02295a]"
            style={{ fontFamily: "Ubuntu" }}
          >
            Select your plan
          </h1>

          <p className="text-[#9699ab] text-sm">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="flex flex-row items-center ml-10 justify-center gap-6">
          {[
            { name: "Arcade", plan: "$9/mo" },
            { name: "Advanced", plan: "$12/mo" },
            { name: "Pro", plan: "$15/mo" },
          ].map(({ name, plan }, index) => (
            <button
              key={index}
              className="flex flex-col text-start items-start justify-end gap-10 p-5 w-[140px] h-[180px] border transition-all border-zinc-500 focus:bg-[#fbf5ff] focus:border-purple-600 rounded-xl"
            >
              <div>
                {name === "Arcade" ? (
                  <Arcade />
                ) : name === "Advanced" ? (
                  <Advanced />
                ) : name === "Pro" ? (
                  <Pro />
                ) : (
                  ""
                )}
              </div>
              <div>
                <h1>{name}</h1>
                <p>{plan}</p>
              </div>
            </button>
          ))}
        </div>
        <div
          className="w-[480px] h-[50px] flex flex-row items-center justify-center ml-10 gap-4 rounded-xl bg-[#f0f6ff]"
          style={{ fontFamily: "Ubuntu" }}
        >
          <h1>Yearly</h1>
          <div
            className={`rounded-2xl h-6 w-10 px-[3px]  
              bg-[#02295a]
            flex items-center`}
            onClick={() => setPayment((prev) => !prev)}
          >
            <div
              className={`rounded-full w-4 h-4 bg-amber-50 transition-all ease-in-out ${
                payment ? "translate-x-0" : "translate-x-[18px]"
              }`}
            ></div>
          </div>
          <h1>Monthly</h1>
        </div>
      </div>
    </>
  );
}

export default Planselection
