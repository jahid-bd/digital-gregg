import {
  stepFiveArray,
  stepFourArray,
  stepOneArray,
  stepThreeArray,
  stepTwoArray,
} from '@state/steps';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import StepsButton from '../partials/StepsButton';
import StepFive from '../steps/StepFive';
import StepFour from '../steps/StepFour';
import StepOne from '../steps/StepOne';
import StepThree from '../steps/StepThree';
import StepTwo from '../steps/StepTwo';
import StepBack from './StepBack';
import StepsRight from './StepsRight';

type props = {
  setGetStarted: (getStarted: boolean) => void;
  setSuccess: (success: boolean) => void;
};

const Steps = ({ setSuccess, setGetStarted }: props) => {
  // states
  const [steps, setSteps] = useState(1);
  const [stepsError, setStepsError] = useState(false);

  // step --------- 1
  const [stepOneValues, setStepOneValues] = useAtom(stepOneArray);
  const [stepOneError, setStepOneError] = useState<boolean>(false);

  // step --------- 2
  const [stepTwoValues, setStepTwoValues] = useAtom(stepTwoArray);
  const [stepTwoError, setStepTwoError] = useState<boolean>(false);

  // Step three
  const [stepThreeValues, setStepThreeValues] = useAtom(stepThreeArray);
  const [stepThreeError, setStepThreeError] = useState<boolean>(false);

  // Step four
  const [stepFourValues, setStepFourValues] = useAtom(stepFourArray);
  const [stepFourError, setStepFourError] = useState<boolean>(false);

  // seterror
  useEffect(() => {
    if (stepOneValues.length) {
      setStepOneError(false);
    }

    if (stepTwoValues.length) {
      setStepTwoError(false);
    }
    if (stepThreeValues.length) {
      setStepThreeError(false);
    }
    if (stepFourValues.length) {
      setStepFourError(false);
    }
  }, [
    stepOneValues.length,
    stepTwoValues.length,
    stepThreeValues.length,
    stepFourValues.length,
  ]);

  // useEffect(() => {
  //   if (stepsError) {
  //     if (stepOneValues.length === 0) {
  //       setStepOneError(true);
  //     }

  //     if (stepTwoValues.length === 0) {
  //       setStepTwoError(true);
  //     }

  //     if (stepThreeValues.length === 0) {
  //       setStepThreeError(true);
  //     }
  //     if (stepFourValues.length === 0) {
  //       setStepFourError(true);
  //     }

  //     if (stepOneValues.length !== 0 && stepTwoValues.length !== 0 && stepThreeValues.length !== 0 && stepFourValues.length !== 0) {
  //       setStepsError(false);
  //     }
  //   }
  // }, [stepOneValues, stepTwoValues, stepThreeValues, stepFourValues, stepsError]);

  return (
    <div className="px-0 md:px-5 lg:px-20">
      <div className="pl-8 md:pl-0 lg:static absolute top-[25px] right-5">
        <StepsButton
          steps={steps}
          setSteps={setSteps}
          stepOneValues={stepOneValues}
          stepTwoValues={stepTwoValues}
          stepThreeValues={stepThreeValues}
          stepFourValues={stepFourValues}
          setStepOneError={setStepOneError}
          setStepTwoError={setStepTwoError}
          setStepThreeError={setStepThreeError}
          setStepFourError={setStepFourError}
        />
      </div>

      <div className="mt-10 grid xl:grid-cols-3 gap-10">
        <div className="col-span-3 xl:col-span-2">
          <div className="px-8 lg:px-0 py-16 rounded-lg bg-[#F8F4F4]  w-full h-full">
            <div className="flex flex-col justify-center items-center">
              {steps === 1 && (
                <StepOne
                  data={stepOneValues}
                  setData={setStepOneValues}
                  setSteps={setSteps}
                  stepOneError={stepOneError}
                  setStepOneError={setStepOneError}
                />
              )}

              {steps === 2 && (
                <StepTwo
                  data={stepTwoValues}
                  setData={setStepTwoValues}
                  setSteps={setSteps}
                  stepError={stepTwoError}
                  setStepError={setStepTwoError}
                />
              )}
              {steps === 3 && (
                <StepThree
                  data={stepThreeValues}
                  setData={setStepThreeValues}
                  setSteps={setSteps}
                  stepThreeError={stepThreeError}
                  setStepThreeError={setStepThreeError}
                />
              )}
              {steps === 4 && (
                <StepFour
                  data={stepFourValues}
                  setData={setStepFourValues}
                  setSteps={setSteps}
                  stepFourError={stepFourError}
                  setStepFourError={setStepFourError}
                />
              )}
              {steps === 5 && (
                <StepFive
                  setSuccess={setSuccess}
                  setGetStarted={setGetStarted}
                  setStepsError={setStepsError}
                />
              )}
              {/* {stepsError ? (
                <div className="text-primary font-medium text-xs cursor-default mt-5">
                  There are some invalid fields on steps{" "}
                  {stepOneError && " 1 "}
                  {stepTwoError && " 2, "}
                  {stepThreeError && " 3, "}
                  {stepFourError && " 4"}
                </div>
              ) : null} */}
            </div>
          </div>
          {/* step back component */}
          {steps > 1 ? (
            <StepBack setStep={setSteps} backStepNum={steps - 1} />
          ) : null}
        </div>

        <div className="col-span-3 xl:col-span-1">
          <StepsRight />
        </div>
      </div>
    </div>
  );
};

export default Steps;
