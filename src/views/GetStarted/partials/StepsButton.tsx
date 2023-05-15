import React from 'react'

type Props = {
  steps: number;
  setSteps: (steps: number) => void;
  stepOneValues: any;
  stepTwoValues: any;
  stepThreeValues: any;
  stepFourValues: any;
  setStepOneError: (stepOneError: boolean) => void;
  setStepTwoError: (stepTwoError: boolean) => void;
  setStepThreeError: (stepThreeError: boolean) => void;
  setStepFourError: (stepFourError: boolean) => void;
}

const StepsButton = ({ setSteps, steps, stepOneValues, setStepOneError, stepTwoValues, setStepTwoError, stepFourValues, stepThreeValues, setStepThreeError, setStepFourError }: Props) => {

  return (
    <div className='w-max'>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => {
            (steps === 1 && !stepOneValues.length) ? setStepOneError(true) : setSteps(1)
          }}
          className={`w-4 h-4 rounded-[2px] ${steps >= 1 ? "bg-primary" : "bg-gray-200"} hover:outline outline-[#1212122f] outline-2 outline-offset-0 focus:outline-none`}
        ></button>

        <button
          onClick={() => {
            (steps === 1 && !stepOneValues.length) ? setStepOneError(true) : setSteps(2)
          }}
          className={`w-4 h-4 rounded-[2px] ${steps >= 2 ? "bg-primary" : "bg-gray-200"} hover:outline outline-[#1212122f] outline-2 outline-offset-0 focus:outline-none`}
        ></button>

        <button
          onClick={() => {
            (steps === 2 && !stepTwoValues.length) ? setStepTwoError(true) : setSteps(3)
          }}
          className={`w-4 h-4 rounded-[2px] ${steps >= 3 ? "bg-primary" : "bg-gray-200"} hover:outline outline-[#1212122f] outline-2 outline-offset-0 focus:outline-none ${(steps === 1 && !stepThreeValues.length) ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={steps === 1 && !stepThreeValues.length}
        ></button>

        <button
          onClick={() => {
            (steps === 3 && !stepThreeValues.length) ? setStepThreeError(true) : setSteps(4)
          }}
          className={`w-4 h-4 rounded-[2px] ${steps >= 4 ? "bg-primary" : "bg-gray-200"} hover:outline outline-[#1212122f] outline-2 outline-offset-0 focus:outline-none ${((steps === 1 || steps === 2) && !stepFourValues.length) ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={(steps === 1 || steps === 2) && !stepFourValues.length}
        ></button>

        <button
          onClick={() => {
            (steps === 4 && stepFourValues.length !== 2) ? setStepFourError(true) : setSteps(5)
          }}
          className={`w-4 h-4 rounded-[2px] ${steps >= 5 ? "bg-primary" : "bg-gray-200"} hover:outline outline-[#1212122f] outline-2 outline-offset-0 focus:outline-none ${(steps === 1 || steps === 2 || steps === 3) ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={steps === 1 || steps === 2 || steps === 3}
        ></button>

        <span className="ml-3 text-[#878787] text-sm font-semibold">
          STEP {steps} OF 5
        </span>
      </div>
    </div>
  );
}

export default StepsButton