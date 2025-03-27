import { Background } from "@/components/Icons&more/svgs";
import Addons from "@/components/add-ons";
import Personalinfo from "@/components/personalinfo";
import Planselection from "@/components/planselection";
import Summary from "@/components/summary";
import { useState } from "react";

const Steps = [
  { name: "YOUR INFO", id: 1 },
  { name: "SELECT PLAN", id: 2 },
  { name: "ADD-ONS", id: 3 },
  { name: "SUMMARY", id: 4 },
];

export default function Home() {
  const [stChanger, setStChanger] = useState<{Stat: boolean, id: number}[]>([
    { Stat: true, id: 1 },
  ]);
  console.log(stChanger)

  const HandleStepChanger = (id: number) => {
    setStChanger((prev: any) => [{id: id, Stat: !prev.Stat}])
    console.log(stChanger)
  }

  return (
    <>
      <div className="text-black flex flex-col items-center justify-center min-h-screen">
        <div className="w-[900px] p-5 h-[600px] rounded-2xl bg-[#fff] flex flex-row justify-center">
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
              <div
                className="flex flex-col ml-5 mt-2 items-start justify-center z-20 gap-5"
                onClick={() => HandleStepChanger(id)}
              >
                <div className="flex flex-row gap-1">
                  <div className="rounded-full border-[1px] m-4 border-white w-5 h-5 flex items-center justify-center p-5">
                    <h1>{id}</h1>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p
                      className="text-[#cecece] font-thin"
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

          {stChanger.map((item) => {
        
            return (
              <>
                {item.id === 1 && item.Stat ? (
                  <>
                    <Personalinfo />
                  </>
                ) : item.id === 2 && item.Stat ? (
                  <><Planselection/></>
                ) : 
                  item.id === 3 && item.Stat ? (
                    <><Addons/></>
                  ) : item.id === 4 && item.Stat ? (
                    <><Summary/></>
                  ) : <>No Stats found</>
                }
              </>
            );
          })}

          {/* <button onCanPlay={() => HandleStepChanger}>Submit</button> */}
        </div>
      </div>
    </>
  );
}
