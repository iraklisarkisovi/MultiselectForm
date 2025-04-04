import React from 'react'

const AddOnMap = [
  {
    name: "Online service",
    desc: "Online service Access to multiplayer games",
    payment: "+$1/mo",
  },
  {
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    payment: "+$2/mo",
  },
  {
    name: "Customizable Profile",
    desc: "Custom theme on your profile",
    payment: "+$2/mo",
  },
];

const Addons = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-baseline gap-15 mr-6 h-[400px] w-full">
        <div className="flex flex-col items-start gap-2 mr-10 mt-3">
          <h1
            className="text-3xl font-bold text-[#02295a]"
            style={{ fontFamily: "Ubuntu, Arial, Helvetica, sans-serif" }}
          >
            Pick add-ons
          </h1>
          <p
            className="text-[#9699ab] text-sm"
            style={{
              fontFamily: "Ubuntu-Regular, Arial, Helvetica, sans-serif",
            }}
          >
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-5 h-[200px] w-[350px]">
          {AddOnMap.map((item) => (
            <button className="w-[470px] p-3 border-[2px] border-purple-400 focus:bg-[#fbf5ff] focus:border-purple-600 rounded-xl">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-5 text-start items-center justify-center">
                  <input type="checkbox" className="w-10 h-5" />
                  <div>
                    <h1 className="text-[15px] font-bold text-[#02295a]">
                      {item.name}
                    </h1>
                    <p className="text-[#9699ab] text-sm">{item.desc}</p>
                  </div>
                </div>
                <h1 className="text-[15px] font-medium text-[#8521e2]">
                  {item.payment}
                </h1>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Addons
