import { stepFourAboutProject, stepFourTwoItem } from '@state/steps';
import { useAtom } from 'jotai';
import React from 'react';
import Button from '../partials/Button';
import TextArea from '../partials/TextArea';

type Props = {
  data: any;
  stepFourError: boolean;
  setStepFourError: (stepFourError: boolean) => void;
  setData: (data: any) => void;
  setSteps: (steps: number) => void;
};

const StepFour = ({
  data,
  setData,
  setSteps,
  stepFourError,
  setStepFourError,
}: Props) => {
  const [aboutProject, setAboutProject] = useAtom(stepFourAboutProject);
  const [projectBudget, setProjectBudget] = useAtom(stepFourTwoItem);

  return (
    <div className="max-w-[600px]">
      <h1 className="font-bold text-black text-[26px] lg:text-[30px]">
        Tell us more about your project
      </h1>

      <div className="mt-8">
        <label className="text-black font-semibold text-[15px]">
          Project budget
        </label>
        <input
          type="number"
          name="phone"
          value={projectBudget.value}
          onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
          onChange={(e) => {
            setProjectBudget({ ...projectBudget, value: e.target.value });
            setData([
              ...data.filter((item: any) => item.id !== projectBudget.id),
              { ...projectBudget, value: e.target.value },
            ]);
          }}
          placeholder="Enter your budget in number"
          autoComplete="none"
          className={`w-full h-12 rounded-lg pl-4 mt-2 focus:outline-none ${
            stepFourError ? "border-primary" : null
          } focus:border-primary border`}
        />
      </div>

      <p className="text-black font-semibold mt-5 text-[15px] !-mb-5">
        Description
      </p>
      <TextArea
        value={aboutProject.value}
        error={stepFourError}
        placeholder={"Describe about the project"}
        onChange={(e: any) => {
          setAboutProject({ ...aboutProject, value: e.target.value });
          setData([
            ...data.filter((item: any) => item.id !== aboutProject.id),
            { ...aboutProject, value: e.target.value },
          ]);
        }}
      />

      {/* show error */}
      {stepFourError ? (
        <p className="text-primary font-medium text-sm cursor-default">
          Please complete this required field.
        </p>
      ) : null}

      <div>
        <p className="my-3 font-medium text-[16px]">
          Our customers most often write to us about:
        </p>
        <ul
          role="list"
          className="marker:text-primary font-medium list-disc pl-5 space-y-3"
        >
          <li className='text-[16px] leading-[20px]'>Details of the project</li>
          <li className='text-[16px] leading-[20px]'>The business goals</li>
          <li className='text-[16px] leading-[20px]'>If the design is ready</li>
          <li className='text-[16px] leading-[20px]'>If the project is new or ongoing</li>
          <li className='text-[16px] leading-[20px]'>The deadline</li>
        </ul>
      </div>

      {/* continue button */}
      <Button
        text="Continue"
        css="mt-14"
        onClick={() => {
          if (data.length === 2) {
            if (data[0]?.value === "" || data[1]?.value === "") {
              setStepFourError(true);
            } else {
              setSteps(5);
            }
          } else {
            setStepFourError(true);
          }
        }}
      />
    </div>
  );
};

export default StepFour;