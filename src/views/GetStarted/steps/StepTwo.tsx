import { stepTwoFifthItem, stepTwoFirstItem, stepTwoFourthItem, stepTwoSecondItem, stepTwoSixthItem, stepTwoThirdItem } from '@state/steps';
import { useAtom } from 'jotai';
import React from 'react'
import Button from '../partials/Button';
import Checkbox from '../partials/Checkbox';
import Error from '../partials/Error';

type Props = {
  data: any;
  stepError: boolean;
  setStepError: (stepError: boolean) => void;
  setData: (data: any) => void;
  setSteps: (steps: number) => void;
}

const StepTwo = ({ data, setData, setSteps, stepError, setStepError }: Props) => {

  // atom states
  const [firstItem, setFirstItem] = useAtom(stepTwoFirstItem)
  const [secondItem, setSecondItem] = useAtom(stepTwoSecondItem)
  const [thirdItem, setThirdItem] = useAtom(stepTwoThirdItem)
  const [fourthItem, setFourthItem] = useAtom(stepTwoFourthItem)
  const [fifthItem, setFifthItem] = useAtom(stepTwoFifthItem)
  const [sixthItem, setSixthItem] = useAtom(stepTwoSixthItem)

  return (
    <div className="">
      <h1 className='font-bold text-black text-[26px] lg:text-[30px]'>What can we help you with?</h1>

      <div className='flex flex-wrap gap-5 mb-5 mt-11'>
        <Checkbox
          label={firstItem.label}
          id={firstItem.id}
          data={data}
          setData={setData}
          itemData={firstItem}
          isChecked={firstItem.isChecked}
          setIsChecked={setFirstItem}
          error={stepError}
        />
        <Checkbox
          label={secondItem.label}
          id={secondItem.id}
          data={data}
          setData={setData}
          itemData={secondItem}
          isChecked={secondItem.isChecked}
          setIsChecked={setSecondItem}
          error={stepError}
        />
      </div>

      <div className='flex flex-wrap gap-5 mb-5'>
        <Checkbox
          label={thirdItem.label}
          id={thirdItem.id}
          data={data}
          setData={setData}
          itemData={thirdItem}
          isChecked={thirdItem.isChecked}
          setIsChecked={setThirdItem}
          error={stepError}
        />
        <Checkbox
          label={fourthItem.label}
          id={fourthItem.id}
          data={data}
          setData={setData}
          itemData={fourthItem}
          isChecked={fourthItem.isChecked}
          setIsChecked={setFourthItem}
          error={stepError}
        />
      </div>

      <div className='mb-5'>
        <Checkbox
          label={fifthItem.label}
          id={fifthItem.id}
          data={data}
          setData={setData}
          itemData={fifthItem}
          isChecked={fifthItem.isChecked}
          setIsChecked={setFifthItem}
          error={stepError}
        />
      </div>

      <div className='mb-2'>
        <Checkbox
          label={sixthItem.label}
          id={sixthItem.id}
          data={data}
          setData={setData}
          itemData={sixthItem}
          isChecked={sixthItem.isChecked}
          setIsChecked={setSixthItem}
          error={stepError}
        />
      </div>


      {/* show error */}
      <Error error={stepError} />

      {/* continue button */}
      <Button text='Continue' css='mt-14' onClick={() => {
        if (!data.length) {
          setStepError(true)
        } else {
          setSteps(3)
        }
      }} />

    </div>
  )
}

export default StepTwo