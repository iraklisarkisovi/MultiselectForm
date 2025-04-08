import { HandleStatusChange, RootState } from '@/statemanagement/slice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddOnMap } from './add-ons';

const Summary = () => {
  const dispatch = useDispatch()
  const [FullPrice, setFullPrice] = useState<number>(0)
  const Initial = useSelector((state: RootState) => state.Stat);

  useEffect(() => {
    const prices = Initial.Addon.map((item) => {
      const find = AddOnMap.find((prev) => prev.id === Number(item));
      return find?.price || 0;
    });
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    setFullPrice(total + Initial.Plan.price);
  }, [Initial.Addon, AddOnMap]);


  const HandlePrevSlice = (currentId: number) => {
    const condition = () => {
      while (currentId !== 1) {
        if (currentId === 1) {
          return currentId + 3;
        }
        return (currentId -= 1);
      }
      return currentId;
    };

    const rev = condition();
    console.log(rev);
    dispatch(HandleStatusChange({ id: condition(), Stat: true }));
  };
  

  return (
    <>
      <div className="flex flex-col mr-26 items-center justify-evenly gap-15 h-[400px] w-full">
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
              fontFamily: "Ubuntu-Medium",
            }}
          >
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div
          className="flex flex-col items-start justify-center gap-5 h-[200px] w-[350px]"
          style={{ fontFamily: "Ubuntu-Medium, Arial, Helvetica, sans-serif" }}
        >
          <div className="h-auto w-[450px] flex flex-col p-5 bg-[#f0f6ff] rounded-xl gap-5">
            <div
              className="text-[20px] w-[400px] flex flex-row items-center justify-between"
              style={{
                fontFamily: "Ubuntu, Arial, Helvetica, sans-serif",
              }}
            >
              <div>
                <h1 className="font-extrabold text-[#00316d]">
                  Total {Initial.Plan.name}
                </h1>
                <button onClick={() => HandlePrevSlice(4)} className="text-sm text-blue-600 underline cursor-pointer">
                  change
                </button>
              </div>
              <h1 className="font-extrabold text-[#00316d]">
                {Initial.Plan.plan}
              </h1>
            </div>
            <hr />
            {Initial.Addon.map((item) => {
              const find = AddOnMap.find((prev) => prev.id === Number(item));
              return (
                <>
                  <div className="inline-flex text-[#9699ab] text-sm gap-2">
                    <h1>{find?.name}</h1>
                    <h1>{find?.payment}</h1>
                  </div>
                </>
              );
            })}
            <h1>Total: ${FullPrice}/{Initial.Plan.paymentperiod}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary
