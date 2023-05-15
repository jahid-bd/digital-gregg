import { stepThreeEightItem, stepThreeEightyItem, stepThreeElevenItem, stepThreeFiftyItem, stepThreeFirstItem, stepThreeFiveItem, stepThreeFortyItem, stepThreeFourthItem, stepThreeNineItem, stepThreeSecondItem, stepThreeSevenItem, stepThreeSeventyItem, stepThreeSixItem, stepThreeSixtyItem, stepThreeTenItem, stepThreeThirdItem, stepThreeThirtyItem, stepThreeTwelveItem } from '@state/steps';
import { useAtom } from 'jotai';
import React from 'react';
import Button from '../partials/Button';
import Checkbox from '../partials/Checkbox';
import Error from '../partials/Error';
import TextArea from '../partials/TextArea';

type Props = {
  data: any;
  stepThreeError: boolean;
  setStepThreeError: (stepOneError: boolean) => void;
  setData: (data: any) => void;
  setSteps: (steps: number) => void;
};

const StepThree = ({
  data,
  setData,
  setSteps,
  stepThreeError,
  setStepThreeError,
}: Props) => {
  // atom states
  const [firstItem, setFirstItem] = useAtom(stepThreeFirstItem);
  const [secondItem, setSecondItem] = useAtom(stepThreeSecondItem);
  const [thirdItem, setThirdItem] = useAtom(stepThreeThirdItem);
  const [fourthItem, setFourthItem] = useAtom(stepThreeFourthItem);
  const [fifthItem, setFifthItem] = useAtom(stepThreeFiveItem);
  const [sixItem, setSixItem] = useAtom(stepThreeSixItem);
  const [sevenItem, setSevenItem] = useAtom(stepThreeSevenItem);
  const [eightItem, setEightItem] = useAtom(stepThreeEightItem);
  const [nineItem, setNineItem] = useAtom(stepThreeNineItem);
  const [tenItem, setTenItem] = useAtom(stepThreeTenItem);
  const [elevenItem, setElevenItem] = useAtom(stepThreeElevenItem);
  const [twelveItem, setTwelveItem] = useAtom(stepThreeTwelveItem);
  const [thirtyItem, setThirtyItem] = useAtom(stepThreeThirtyItem);
  const [fortyItem, setFortyItem] = useAtom(stepThreeFortyItem);
  const [fiftyItem, setFiftyItem] = useAtom(stepThreeFiftyItem);
  const [sixtyItem, setSixtyItem] = useAtom(stepThreeSixtyItem);
  const [seventyItem, setSeventyItem] = useAtom(stepThreeSeventyItem);
  const [eightyItem, setEightyItem] = useAtom(stepThreeEightyItem);

  return (
    <>
      <div className="max-w-[630px]">
        <h1 className="font-bold text-black text-[26px] lg:text-[30px] !leading-[40px]">
          Are there any specific technologies or services that you’re looking
          for?
        </h1>

        <div className="flex flex-wrap gap-3 mb-3 mt-11">
          <Checkbox
            label={firstItem.label}
            id={firstItem.id}
            data={data}
            setData={setData}
            itemData={firstItem}
            isChecked={firstItem.isChecked}
            setIsChecked={setFirstItem}
            error={stepThreeError}
          />
          <Checkbox
            label={secondItem.label}
            id={secondItem.id}
            data={data}
            setData={setData}
            itemData={secondItem}
            isChecked={secondItem.isChecked}
            setIsChecked={setSecondItem}
            error={stepThreeError}
          />
          <Checkbox
            label={thirdItem.label}
            id={thirdItem.id}
            data={data}
            setData={setData}
            itemData={thirdItem}
            isChecked={thirdItem.isChecked}
            setIsChecked={setThirdItem}
            error={stepThreeError}
          />
          <Checkbox
            label={fourthItem.label}
            id={fourthItem.id}
            data={data}
            setData={setData}
            itemData={fourthItem}
            isChecked={fourthItem.isChecked}
            setIsChecked={setFourthItem}
            error={stepThreeError}
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-3">
          <Checkbox
            label={fifthItem.label}
            id={fifthItem.id}
            data={data}
            setData={setData}
            itemData={fifthItem}
            isChecked={fifthItem.isChecked}
            setIsChecked={setFifthItem}
            error={stepThreeError}
          />
          <Checkbox
            label={sixItem.label}
            id={sixItem.id}
            data={data}
            setData={setData}
            itemData={sixItem}
            isChecked={sixItem.isChecked}
            setIsChecked={setSixItem}
            error={stepThreeError}
          />
          <Checkbox
            label={sevenItem.label}
            id={sevenItem.id}
            data={data}
            setData={setData}
            itemData={sevenItem}
            isChecked={sevenItem.isChecked}
            setIsChecked={setSevenItem}
            error={stepThreeError}
          />
          <Checkbox
            label={eightItem.label}
            id={eightItem.id}
            data={data}
            setData={setData}
            itemData={eightItem}
            isChecked={eightItem.isChecked}
            setIsChecked={setEightItem}
            error={stepThreeError}
          />
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <Checkbox
            label={nineItem.label}
            id={nineItem.id}
            data={data}
            setData={setData}
            itemData={nineItem}
            isChecked={nineItem.isChecked}
            setIsChecked={setNineItem}
            error={stepThreeError}
          />
          <Checkbox
            label={tenItem.label}
            id={tenItem.id}
            data={data}
            setData={setData}
            itemData={tenItem}
            isChecked={tenItem.isChecked}
            setIsChecked={setTenItem}
            error={stepThreeError}
          />
          <Checkbox
            label={elevenItem.label}
            id={elevenItem.id}
            data={data}
            setData={setData}
            itemData={elevenItem}
            isChecked={elevenItem.isChecked}
            setIsChecked={setElevenItem}
            error={stepThreeError}
          />
          <Checkbox
            label={twelveItem.label}
            id={twelveItem.id}
            data={data}
            setData={setData}
            itemData={twelveItem}
            isChecked={twelveItem.isChecked}
            setIsChecked={setTwelveItem}
            error={stepThreeError}
          />
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <Checkbox
            label={thirtyItem.label}
            id={thirtyItem.id}
            data={data}
            setData={setData}
            itemData={thirtyItem}
            isChecked={thirtyItem.isChecked}
            setIsChecked={setThirtyItem}
            error={stepThreeError}
          />
          <Checkbox
            label={fortyItem.label}
            id={fortyItem.id}
            data={data}
            setData={setData}
            itemData={fortyItem}
            isChecked={fortyItem.isChecked}
            setIsChecked={setFortyItem}
            error={stepThreeError}
          />
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <Checkbox
            label={fiftyItem.label}
            id={fiftyItem.id}
            data={data}
            setData={setData}
            itemData={fiftyItem}
            isChecked={fiftyItem.isChecked}
            setIsChecked={setFiftyItem}
            error={stepThreeError}
          />
          <Checkbox
            label={sixtyItem.label}
            id={sixtyItem.id}
            data={data}
            setData={setData}
            itemData={sixtyItem}
            isChecked={sixtyItem.isChecked}
            setIsChecked={setSixtyItem}
            error={stepThreeError}
          />
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <Checkbox
            label={seventyItem.label}
            id={seventyItem.id}
            data={data}
            setData={setData}
            itemData={seventyItem}
            isChecked={seventyItem.isChecked}
            setIsChecked={setSeventyItem}
            error={stepThreeError}
          />
          <Checkbox
            label={eightyItem.label}
            id={eightyItem.id}
            data={data}
            setData={setData}
            itemData={eightyItem}
            isChecked={eightyItem.isChecked}
            setIsChecked={setEightyItem}
            error={stepThreeError}
          />
        </div>

        {eightyItem.isChecked ? (
          <TextArea
            error={stepThreeError}
            value={eightyItem.others}
            placeholder="Write down your technology / services"
            onChange={(e: any) => {
              setEightyItem({ ...eightyItem, others: e.target.value });
              setData([
                ...data.filter((item: any) => item.id !== eightyItem.id),
                { ...eightyItem, others: e.target.value },
              ]);
            }}
          />
        ) : null}

        {/* show error */}
        <Error error={stepThreeError} />

        {/* continue button */}
        <Button
          text="Continue"
          css="mt-14"
          onClick={() => {
            if (!data.length) {
              setStepThreeError(true);
            } else {
              setSteps(4);
            }
          }}
        />
      </div>
    </>
  );
};

export default StepThree;