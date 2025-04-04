import React from 'react'

const Summary = () => {
  return (
    <>
      <div className="flex ml-auto mb-18 mr-65 flex-col items-center justify-evenly gap-10 h-[400px] bg-amber-400 w-full">
        <div className="flex flex-col items-start gap-2">
          <h1
            className="text-3xl font-bold text-[#02295a]"
            style={{ fontFamily: "Ubuntu, Arial, Helvetica, sans-serif" }}
          >
            Finishing up
          </h1>
          <p
            className="text-[#9699ab] text-sm"
            style={{
              fontFamily: "Ubuntu-Regular, Arial, Helvetica, sans-serif",
            }}
          >
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-5 h-[200px] w-[350px]">
          Total (per month/year) Go Back Confirm Thank you! Thanks for
          confirming your subscription! We hope you have fun using our platform.
          If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </div>
      </div>
    </>
  );
}

export default Summary
