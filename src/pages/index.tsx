import { Background } from "@/components/Icons&more/svgs";
import Addons from "@/components/add-ons";
import Personalinfo from "@/components/personalinfo";
import Planselection from "@/components/planselection";
import Summary from "@/components/summary";
import { HandleStatusChange, RootState } from "@/statemanagement/slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Steps = [
  { name: "YOUR INFO", id: 1 },
  { name: "SELECT PLAN", id: 2 },
  { name: "ADD-ONS", id: 3 },
  { name: "SUMMARY", id: 4 },
];

export default function Home() {
  const dispatch = useDispatch()
  const stChanger = useSelector((state: RootState) => state.Stat.Status)
  const [currentelememt, setCurrentElement] = useState<Number>()

  const HandlePrevSlice = (currentId: number) => {
    const condition = () => {
     while (currentId !== 1){
      if(currentId === 1){
        return currentId + 3
      }
      return currentId -= 1
     }
     return currentId
    }

    setCurrentElement(condition());
    console.log(currentelememt)

    dispatch(HandleStatusChange({ id: condition(), Stat: true }));
  };

  const HandleNextSlice = (currentId: number) => {
    const condition = () => {
      while(currentId === 4){
        return 1
      }
      return currentId + 1
    }

    setCurrentElement(condition())

    dispatch(
      HandleStatusChange({ id: condition(), Stat: true })
    );
  };
  

  return (
    <>
      <div className="text-black flex flex-col items-center justify-center min-h-screen">
        <div className="w-[1000px] p-5 h-[600px] rounded-2xl bg-[#fff] flex flex-row justify-center">
          <div
            className="flex flex-col"
            style={{
              fontFamily: "Ubuntu-Medium, Arial, Helvetica, sans-serif",
            }}
          >
            <div className="flex fixed z-10 flex-col items-center justify-center">
              <Background />
            </div>
            {Steps.map(({ name, id }) => (
              <div className="flex flex-col ml-5 mt-2 items-start justify-center z-20 gap-5">
                <div className="flex flex-row gap-1">
                  <div
                    className={`rounded-full border-[1px] m-4 ${
                      currentelememt === id
                        ? "bg-[#bfe2fd] text-gray-600"
                        : "text-white"
                    } border-white w-5 h-5 flex items-center justify-center p-5`}
                  >
                    <h1>{id}</h1>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p
                      className="text-[#cecece] text-[12px] font-thin"
                      style={{
                        fontFamily:
                          "Ubuntu-Regular, Arial, Helvetica, sans-serif",
                      }}
                    >
                      STEP {id}
                    </p>
                    <h1 className="text-white">{name}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* content */}
          <div className="flex flex-col mx-auto my-auto items-center justify-center">
            {stChanger.map((item) => {
              return (
                <>
                  {item.id === 1 && item.Stat ? (
                    <>
                      <Personalinfo />
                    </>
                  ) : item.id === 2 && item.Stat ? (
                    <>
                      <Planselection />
                    </>
                  ) : item.id === 3 && item.Stat ? (
                    <>
                      <Addons />
                    </>
                  ) : item.id === 4 && item.Stat ? (
                    <>
                      <Summary />
                    </>
                  ) : (
                    <>No Stats found</>
                  )}
                </>
              );
            })}

            {stChanger.map(({ id }) => (
              <div className="flex flex-row items-center justify-center mt-8">
                <button
                  className="flex text-[15px] cursor-pointer items-center justify-center text-gray-600 hover:text-[#696969] text-center"
                  onClick={() => HandlePrevSlice(id)}
                  style={{
                    fontFamily: "Ubuntu-Medium, Arial, Helvetica, sans-serif",
                  }}
                >
                  Go Back
                </button>
                <button
                  className="flex text-[15px] ml-66 cursor-pointer transition-all hover:bg-[#473dffe0] items-center justify-center text-white text-center bg-[#473dff] w-[110px] h-[50px] rounded-[8px]"
                  onClick={() => HandleNextSlice(id)}
                  style={{
                    fontFamily: "Ubuntu-Medium, Arial, Helvetica, sans-serif",
                  }}
                >
                  Next step
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
