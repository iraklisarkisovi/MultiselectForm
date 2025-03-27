import React from 'react'

const Personalinfo = () => {
  return (
    <>
      <div className="flex ml-auto mr-auto flex-col items-center justify-evenly">
        <div className="flex flex-col items-start gap-2">
          <h1
            className="text-3xl font-bold text-[#02295a]"
            style={{ fontFamily: "Ubuntu, Arial, Helvetica, sans-serif" }}
          >
            Personal info
          </h1>
          <p
            className="text-[#9699ab] text-sm"
            style={{
              fontFamily: "Ubuntu-Regular, Arial, Helvetica, sans-serif",
            }}
          >
            Please provide your name, email adress, and phone number.
          </p>
        </div>
        <form
          action="submit"
          className="flex flex-col text-black gap-10"
          style={{
            fontFamily: "Ubuntu-Regular, Arial, Helvetica, sans-serif",
          }}
        >
          {["Name", "Email Adress", "Phone Number"].map((item) => (
            <>
              <div className="flex flex-col items-start">
                <label>{item}</label>
                <input
                  type="text"
                  placeholder={"Write your " + item}
                  className="font-thin bg-[#fff] border-[1px] border-[#c9c9c9] p-[10px] w-[400px] rounded-[10px] focus:border-[#9500da] focus:outline-none"
                />
              </div>
            </>
          ))}
        </form>
      </div>
    </>
  );
}

export default Personalinfo
