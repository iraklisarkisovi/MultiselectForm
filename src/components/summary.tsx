import { RootState } from '@/statemanagement/slice';
import React from 'react'
import { useSelector } from 'react-redux';
import { AddOnMap } from './add-ons';

const Summary = () => {
  const Initial = useSelector((state: RootState) => state.Stat)
  console.log(Initial.Plan.name);
  return (
    <>
      <div className="flex ml-auto mb-18 mr-65 flex-col items-center justify-evenly gap-10 h-[400px] w-full">
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
          Total {Initial.Plan.name} {Initial.Plan.plan}
          {Initial.Plan.paymentperiod}{" "}
          {Initial.Addon.map((item) => {
            const find = AddOnMap.find((prev) => prev.id === Number(item));

            return (
              <>
                <h1>
                  {find?.name}
                  {find?.payment}
                </h1>
              </>
            );
          })}
          Go Back Confirm Thank you! Thanks for confirming your subscription! We
          hope you have fun using our platform. If you ever need support, please
          feel free to email us at support@loremgaming.com.
        </div>
      </div>
    </>
  );
}

export default Summary
