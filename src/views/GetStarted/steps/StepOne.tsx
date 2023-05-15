import {
  stepOneFifthItem,
  stepOneFirstItem,
  stepOneFourthItem,
  stepOneSecondItem,
  stepOneSixthItem,
  stepOneThirdItem,
} from '@state/steps';
import { useAtom } from 'jotai';
import Button from '../partials/Button';
import Checkbox from '../partials/Checkbox';
import Error from '../partials/Error';
import TextArea from '../partials/TextArea';

type Props = {
  data: any;
  stepOneError: boolean;
  setStepOneError: (stepOneError: boolean) => void;
  setData: (data: any) => void;
  setSteps: (steps: number) => void;
};

const StepOne = ({
  data,
  setData,
  setSteps,
  stepOneError,
  setStepOneError,
}: Props) => {
  // atom states
  const [firstItem, setFirstItem] = useAtom(stepOneFirstItem);
  const [secondItem, setSecondItem] = useAtom(stepOneSecondItem);
  const [thirdItem, setThirdItem] = useAtom(stepOneThirdItem);
  const [fourthItem, setFourthItem] = useAtom(stepOneFourthItem);
  const [fifthItem, setFifthItem] = useAtom(stepOneFifthItem);
  const [sixthItem, setSixthItem] = useAtom(stepOneSixthItem);

  return (
    <div className="max-w-[550px]">
      <h1 className="font-bold text-black text-[26px] lg:text-[30px]">
        What are the main challenges you’re facing right now?
      </h1>

      <div className="flex flex-wrap gap-5 mb-5 mt-11">
        <Checkbox
          label={firstItem.label}
          id={firstItem.id}
          data={data}
          setData={setData}
          itemData={firstItem}
          isChecked={firstItem.isChecked}
          setIsChecked={setFirstItem}
          error={stepOneError}
        />
        <Checkbox
          label={secondItem.label}
          id={secondItem.id}
          data={data}
          setData={setData}
          itemData={secondItem}
          isChecked={secondItem.isChecked}
          setIsChecked={setSecondItem}
          error={stepOneError}
        />
      </div>

      <div className="flex flex-wrap gap-5 mb-5">
        <Checkbox
          label={thirdItem.label}
          id={thirdItem.id}
          data={data}
          setData={setData}
          itemData={thirdItem}
          isChecked={thirdItem.isChecked}
          setIsChecked={setThirdItem}
          error={stepOneError}
        />
        <Checkbox
          label={fourthItem.label}
          id={fourthItem.id}
          data={data}
          setData={setData}
          itemData={fourthItem}
          isChecked={fourthItem.isChecked}
          setIsChecked={setFourthItem}
          error={stepOneError}
        />
      </div>

      <div className="flex flex-wrap gap-5 mb-2">
        <Checkbox
          label={fifthItem.label}
          id={fifthItem.id}
          data={data}
          setData={setData}
          itemData={fifthItem}
          isChecked={fifthItem.isChecked}
          setIsChecked={setFifthItem}
          error={stepOneError}
        />
        <Checkbox
          label={sixthItem.label}
          id={sixthItem.id}
          data={data}
          setData={setData}
          itemData={sixthItem}
          isChecked={sixthItem.isChecked}
          setIsChecked={setSixthItem}
          error={stepOneError}
        />
      </div>

      {sixthItem.isChecked ? (
        <TextArea
          error={stepOneError}
          value={sixthItem.others}
          placeholder={'Describe challenges that you are facing'}
          onChange={(e: any) => {
            setSixthItem({ ...sixthItem, others: e.target.value });
            setData([
              ...data.filter((item: any) => item.id !== sixthItem.id),
              { ...sixthItem, others: e.target.value },
            ]);
          }}
        />
      ) : null}

      {/* show error */}
      <Error error={stepOneError} />

      {/* continue button */}
      <Button
        text="Continue"
        css="mt-14"
        onClick={() => {
          if (!data.length) {
            setStepOneError(true);
          } else {
            setSteps(2);
          }
        }}
      />
    </div>
  );
};

export default StepOne;
