import {
  HandlePersonalInfo,
  RootState,
} from "@/statemanagement/slice";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Personalinfo = () => {
  const dispatch = useDispatch()

  const Initial = useSelector((state: RootState) => state.Stat)  

  const Handling = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(HandlePersonalInfo({[e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-evenly gap-10 h-[400px] w-full">
        <div className="flex flex-col items-start gap-2 mr-12">
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
          {[
            { name: "Name", placehold: "e.g. Stephen King" },
            { name: "Email Adress", placehold: "e.g. stephenking@lorem.com" },
            { name: "Phone Number", placehold: "e.g. +1 234 567 890" },
          ].map((item) => (
            <>
              <div className="ml-10 flex flex-col items-start">
                <label>{item.name}</label>
                <input
                  name={item.name.split(" ").join("")}
                  value={
                    Initial.PresonalInf[
                      item.name as keyof typeof Initial.PresonalInf
                    ]
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    Handling(e)
                  }
                  type="text"
                  placeholder={item.placehold}
                  className="font-thin bg-[#fff] border-[1px] border-[#c9c9c9] p-[10px] w-[470px] rounded-[10px] focus:border-[#9500da] focus:outline-none"
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
