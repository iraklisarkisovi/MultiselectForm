import { HandlePersonalInfo } from '@/statemanagement/slice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Personalinfo = () => {
  const dispatch = useDispatch()
  const [personalinfo, setPersonalinfo] = useState({
    Name: "",
    EmailAdress: "",
    PhoneNumber: "",
  });
  
  const Handling = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalinfo({ ...personalinfo, [e.target.name]: e.target.value});
  
  };

  const HandleSliceChanger = () => {
      dispatch(HandlePersonalInfo(personalinfo));
  }

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
          {[
            { name: "Name", placehold: " e.g. Stephen King" },
            { name: "Email Adress", placehold: "e.g. stephenking@lorem.com" },
            { name: "Phone Number", placehold: "e.g. +1 234 567 890" },
          ].map((item) => (
            <>
              <div className="flex flex-col items-start">
                <label>{item.name}</label>
                <input
                  name={item.name.split(" ").join("")}
                  value={personalinfo[item.name as keyof typeof personalinfo]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    Handling(e)
                  }
                  type="text"
                  placeholder={item.placehold}
                  className="font-thin bg-[#fff] border-[1px] border-[#c9c9c9] p-[10px] w-[400px] rounded-[10px] focus:border-[#9500da] focus:outline-none"
                />
              </div>
            </>
          ))}
        </form>
        <button
          className="flex text-[15px] items-center justify-center text-white text-center bg-[#473dff] w-[110px] h-[50px] rounded-[8px]"
          onClick={HandleSliceChanger}
          style={{
            fontFamily: "Ubuntu-Medium, Arial, Helvetica, sans-serif",
          }}
        >
          Next step
        </button>
      </div>
    </>
  );
}

export default Personalinfo
