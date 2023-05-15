
import Link from 'next/link';
import { useState } from 'react';
import Button from '../partials/Button';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
import { useAtom } from 'jotai';
import { stepFiveCheck, stepFiveCompanyName, stepFiveEmail, stepFiveFirstName, stepFiveJobRole, stepFiveLastName, stepFiveNDA, stepFivePhone, stepFourAboutProject, stepFourArray, stepFourTwoItem, stepOneArray, stepOneFifthItem, stepOneFirstItem, stepOneFourthItem, stepOneSecondItem, stepOneSixthItem, stepOneThirdItem, stepThreeArray, stepThreeEightItem, stepThreeEightyItem, stepThreeElevenItem, stepThreeFiftyItem, stepThreeFirstItem, stepThreeFiveItem, stepThreeFortyItem, stepThreeFourthItem, stepThreeNineItem, stepThreeSecondItem, stepThreeSevenItem, stepThreeSeventyItem, stepThreeSixItem, stepThreeSixtyItem, stepThreeTenItem, stepThreeThirdItem, stepThreeThirtyItem, stepThreeTwelveItem, stepTwoArray, stepTwoFifthItem, stepTwoFirstItem, stepTwoFourthItem, stepTwoSecondItem, stepTwoSixthItem, stepTwoThirdItem } from '@state/steps';
import InfoIcon from 'src/icons/InfoIcon';
import InfoIconActive from 'src/icons/InfoIconActive';
import BsBoxArrowUpIcon from 'src/icons/BsBoxArrowUpIcon';

type Props = {
  setSuccess: (success: boolean) => void;
  setGetStarted: (getStarted: boolean) => void;
  setStepsError: any;
}

const FromSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Enter valid email').required('Required')
});


const StepFive = ({ setSuccess, setGetStarted, setStepsError }: Props) => {
  const [detailsActive, setDetailsActive] = useState<boolean>(false)
  const [stepOneData, setStepOneData] = useAtom(stepOneArray);
  const [stepTwoData, setStepTwoData] = useAtom(stepTwoArray);
  const [stepThreeData, setStepThreeData] = useAtom(stepThreeArray);
  const [stepFourData, setStepFourData] = useAtom(stepFourArray);

  const [firstName, setFirstName] = useAtom(stepFiveFirstName);
  const [lastName, setLastName] = useAtom(stepFiveLastName);
  const [email, setEmail] = useAtom(stepFiveEmail);
  const [phone, setPhone] = useAtom(stepFivePhone);
  const [companyName, setCompanyName] = useAtom(stepFiveCompanyName);
  const [jobRole, setJobRole] = useAtom(stepFiveJobRole);
  const [nda, setNDA] = useAtom(stepFiveNDA);
  const [check, setCheck] = useAtom(stepFiveCheck);

  // states need to null for step one
  const [firstStepFirstItem, setFirstStepFirstItem] = useAtom(stepOneFirstItem);
  const [firstStepSecondItem, setFirstStepSecondItem] = useAtom(stepOneSecondItem);
  const [firstStepThirdItem, setFirstStepThirdItem] = useAtom(stepOneThirdItem);
  const [firstStepFourthItem, setFirstStepFourthItem] = useAtom(stepOneFourthItem);
  const [firstStepFifthItem, setFirstStepFifthItem] = useAtom(stepOneFifthItem);
  const [firstStepSixthItem, setFirstStepSixthItem] = useAtom(stepOneSixthItem);

  // states need to null for step two
  const [secondStepFirstItem, setSecondStepFirstItem] = useAtom(stepTwoFirstItem);
  const [secondStepSecondItem, setSecondStepSecondItem] = useAtom(stepTwoSecondItem);
  const [secondStepThirdItem, setSecondStepThirdItem] = useAtom(stepTwoThirdItem);
  const [secondStepFourthItem, seSecondtStepFourthItem] = useAtom(stepTwoFourthItem);
  const [secondStepFifthItem, setSecondStepFifthItem] = useAtom(stepTwoFifthItem);
  const [secondStepSixthItem, setSecondStepSixthItem] = useAtom(stepTwoSixthItem);

  // states need to null for step three
  const [threeFirstItem, setThreeFirstItem] = useAtom(stepThreeFirstItem);
  const [threeTwoItem, setThreeTwoItem] = useAtom(stepThreeSecondItem);
  const [threeThreeItem, setThreeThreeItem] = useAtom(stepThreeThirdItem);
  const [threeFourItem, setThreeFourItem] = useAtom(stepThreeFourthItem);
  const [threeFifthItem, setThreeFifthItem] = useAtom(stepThreeFiveItem);
  const [threeSixthItem, setThreeSixthItem] = useAtom(stepThreeSixItem);
  const [threeSevenItem, setThreeSevenItem] = useAtom(stepThreeSevenItem);
  const [threeEightItem, setThreeEightItem] = useAtom(stepThreeEightItem);
  const [threeNineItem, setThreeNineItem] = useAtom(stepThreeNineItem);
  const [threeTenItem, setThreeTenItem] = useAtom(stepThreeTenItem);
  const [threeElevenItem, setThreeElevenItem] = useAtom(stepThreeElevenItem);
  const [threeTwelveItem, setThreeTwelveItem] = useAtom(stepThreeTwelveItem);
  const [threeThirteenItem, setThreeThirteenItem] = useAtom(stepThreeThirtyItem);
  const [threeFourthteenItem, setThreeFourtheenItem] = useAtom(stepThreeFortyItem);
  const [threeFifthteenItem, setThreeFifthteenItem] = useAtom(stepThreeFiftyItem);
  const [threeSixtheenItem, setThreeSixthteenItem] = useAtom(stepThreeSixtyItem);
  const [threeSeventeenItem, setThreeSeventeenItem] = useAtom(stepThreeSeventyItem);
  const [threeEightteenItem, setThreeEightteenItem] = useAtom(stepThreeEightyItem);

  // states need to null for step four
  const [fourFirstItem, setFourFirstItem] = useAtom(stepFourAboutProject);
  const [fourTwoItem, setFourTwoItem] = useAtom(stepFourTwoItem);

  // states need to null for step four
  const [fiveFirstname, setFiveFirstname] = useAtom(stepFiveFirstName);
  const [fiveLastname, setFiveLastname] = useAtom(stepFiveLastName);
  const [fiveEmail, setFiveEmail] = useAtom(stepFiveEmail);
  const [fivePhone, setFivePhone] = useAtom(stepFivePhone);
  const [fiveCompanyName, setFiveCompanyName] = useAtom(stepFiveCompanyName);
  const [fiveJobRole, setFiveJobROle] = useAtom(stepFiveJobRole);
  const [fiveDNA, setFiveDNA] = useAtom(stepFiveNDA);
  const [fiveCheck, setFiveCheck] = useAtom(stepFiveCheck);



  const handleSubmit = (values: any, { resetForm }: any) => {
    if (stepOneData.length === 0 || stepTwoData.length === 0 || stepThreeData.length === 0 || stepFourData.length === 0) {
      setStepsError(true);
      return;
    }

    let mainChallenge: any = [];
    let helpWith: any = [];
    let technologies: any = [];

    if (stepOneData.length) {
      stepOneData.map((item: any) => item.id === 'other' ? mainChallenge.push(item.others) : mainChallenge.push(item.label));
    }
    if (stepTwoData.length) {
      stepTwoData.map((item: any) => helpWith.push(item.label));
    }
    if (stepThreeData.length) {
      stepThreeData.map((item: any) =>
        item.id === "other"
          ? technologies.push(item.others)
          : technologies.push(item.label)
      );
    }

    const formData = {
      ...values,
      mainChallenge,
      helpWith,
      technologies
    };

    const content = `
    <p>Request person details: </p>
    <p>Name: ${formData.firstName + " " + formData.lastName}</p>
    <p>Email: ${formData.email}</p>
    <p>Phone Number: ${formData.phone}</p>
    <p>Company Name: ${formData.companyName}</p>
    <p>Job describe the best: ${formData.jobRole}</p>
    <p>Is ${formData.firstName + " " + formData.lastName} need and NDA first: ${formData.nda
      }</p>

    <br />

    <h5>What are the main challenges ${formData.firstName + " " + formData.lastName
      } facing right now?</h5>
    ${formData.mainChallenge.map(
        (item: any, index: number) => `<p>${index + 1}: ${item}</p>`
      )}

    <br />

    <h5>What can Digital Gregg help ${formData.firstName + " " + formData.lastName
      } with?</h5>
    ${formData.helpWith.map(
        (item: any, index: number) => `<p>${index + 1}: ${item}</p>`
      )}

    <br />

    <h5>Are there any specific technologies or services that ${formData.firstName + " " + formData.lastName
      } is looking for?</h5>
    ${formData.technologies.map(
        (item: any, index: number) => `<p>${index + 1}: ${item}</p>`
      )}

    <br />

    <h5>About ${formData.firstName + " " + formData.lastName} project</h5>
    ${stepFourData.map(
        (item: any) => `<p>${item.label}: ${item.value}</p>`
      )}`;

    const emailJsOptions = {
      from_name: `Digital Gregg`,
      to_name: `${values.email}`,
      content: content,
      // from_email: 'yourname@example.com',
      name: `${values.firstName + ' ' + values.lastName}`,
    }

    emailjs
      .send(
        `${process.env.service_id}`,
        `${process.env.template_id}`,
        emailJsOptions,
        `${process.env.public_id}`
      )
      .then(
        (result) => {
          if (result.status === 200) {
            resetForm();
            setSuccess(true);
            setGetStarted(false);
            setStepOneData([]);
            setStepTwoData([]);
            setStepThreeData([]);
            setStepFourData([]);

            // step one
            setFirstStepFirstItem({ ...firstStepFirstItem, isChecked: false });
            setFirstStepSecondItem({ ...firstStepSecondItem, isChecked: false });
            setFirstStepThirdItem({ ...firstStepThirdItem, isChecked: false });
            setFirstStepFourthItem({ ...firstStepFourthItem, isChecked: false });
            setFirstStepFifthItem({ ...firstStepFifthItem, isChecked: false });
            setFirstStepSixthItem({ ...firstStepSixthItem, isChecked: false, others: '' });

            // step two
            setSecondStepFirstItem({ ...secondStepFirstItem, isChecked: false });
            setSecondStepSecondItem({ ...secondStepSecondItem, isChecked: false });
            setSecondStepThirdItem({ ...secondStepThirdItem, isChecked: false });
            seSecondtStepFourthItem({ ...secondStepFourthItem, isChecked: false });
            setSecondStepFifthItem({ ...secondStepFifthItem, isChecked: false });
            setSecondStepSixthItem({ ...secondStepSixthItem, isChecked: false });

            // step three 
            setThreeFirstItem({ ...threeFirstItem, isChecked: false });
            setThreeTwoItem({ ...threeTwoItem, isChecked: false });
            setThreeThreeItem({ ...threeThreeItem, isChecked: false });
            setThreeFourItem({ ...threeFourItem, isChecked: false });
            setThreeFifthItem({ ...threeFifthItem, isChecked: false });
            setThreeSixthItem({ ...threeSixthItem, isChecked: false });
            setThreeSevenItem({ ...threeSevenItem, isChecked: false });
            setThreeEightItem({ ...threeEightItem, isChecked: false });
            setThreeNineItem({ ...threeNineItem, isChecked: false });
            setThreeTenItem({ ...threeTenItem, isChecked: false });
            setThreeElevenItem({ ...threeElevenItem, isChecked: false });
            setThreeTwelveItem({ ...threeTwelveItem, isChecked: false });
            setThreeThirteenItem({ ...threeThirteenItem, isChecked: false });
            setThreeFourtheenItem({ ...threeFourthteenItem, isChecked: false });
            setThreeFifthteenItem({ ...threeFifthteenItem, isChecked: false });
            setThreeSixthteenItem({ ...threeSixtheenItem, isChecked: false });
            setThreeSeventeenItem({ ...threeSeventeenItem, isChecked: false });
            setThreeEightteenItem({ ...threeEightteenItem, isChecked: false, others: '' });

            // step four
            setFourFirstItem({ ...fourFirstItem, value: '' });
            setFourTwoItem({ ...fourTwoItem, value: '' });

            // step five
            setFiveFirstname({ ...fiveFirstname, firstName: '' });
            setFiveLastname({ ...fiveLastname, lastName: '' });
            setFiveEmail({ ...fiveEmail, email: '' });
            setFivePhone({ ...fivePhone, phone: '' });
            setFiveCompanyName({ ...fiveCompanyName, companyName: '' });
            setFiveJobROle({ ...fiveJobRole, jobRole: '' });
            setFiveDNA({ ...fiveDNA, isChecked: false, newNda: '' });
            setFiveCheck({ ...fiveCheck, isChecked: false });
          }
        },
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      );
  };

  return (
    <div>
      <div className="info">
        <h2 className="font-bold text-black text-[26px] lg:text-[30px]">{`Great! You're almost there`}</h2>
        <p className="font-medium text-[16px] my-8">
          Leave your details so we can contact you about your estimation.
        </p>
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: firstName.firstName,
          lastName: lastName.lastName,
          email: email.email,
          phone: phone.phone,
          companyName: companyName.companyName,
          jobRole: jobRole.jobRole,
          nda: nda.newNda,
        }}
        validationSchema={FromSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="text-black font-bold text-[14px]">
                  First Name *
                </label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  required
                  value={firstName.firstName}
                  onChange={(e: any) =>
                    setFirstName({ ...firstName, firstName: e.target.value })
                  }
                  autoComplete="none"
                  className={`w-full ${
                    errors.firstName && touched.firstName && "border-primary"
                  } h-12 rounded-lg pl-4 mt-2 focus:outline-none focus:border-primary border`}
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-xs text-primary pt-1 font-medium">
                    Please complete this required field.
                  </div>
                ) : null}
              </div>
              <div>
                <label className="text-black font-bold text-[14px]">
                  Last Name *
                </label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  required
                  value={lastName.lastName}
                  onChange={(e: any) =>
                    setLastName({ ...lastName, lastName: e.target.value })
                  }
                  autoComplete="none"
                  className={`w-full ${
                    errors.lastName && touched.lastName && "border-primary"
                  } h-12 rounded-lg pl-4 mt-2 focus:outline-none focus:border-primary border`}
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-xs text-primary pt-1 font-medium">
                    Please complete this required field.
                  </div>
                ) : null}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="text-black font-bold text-[14px]">
                  Email *
                </label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter Email Address"
                  required
                  value={email.email}
                  onChange={(e: any) =>
                    setEmail({ ...email, email: e.target.value })
                  }
                  autoComplete="none"
                  className={`w-full ${
                    errors.email && touched.email && "border-primary"
                  } h-12 rounded-lg pl-4 mt-2 focus:outline-none focus:border-primary border`}
                />
                {errors.email && touched.email ? (
                  <div className="text-xs text-primary pt-1 font-medium">
                    Please complete this required field.
                  </div>
                ) : null}
              </div>
              <div>
                <label className="text-black font-bold text-[14px]">
                  Phone Number
                </label>
                <Field
                  type="number"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                  value={phone.phone}
                  onChange={(e: any) =>
                    setPhone({ ...phone, phone: e.target.value })
                  }
                  autoComplete="none"
                  className={`w-full h-12 rounded-lg pl-4 mt-2 focus:outline-none focus:border-primary border`}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-6 items-center">
              <div>
                <label className="text-black font-bold text-[14px]">
                  Company Name
                </label>
                <Field
                  type="text"
                  name="companyName"
                  placeholder="Enter Company Name"
                  required
                  value={companyName.companyName}
                  onChange={(e: any) =>
                    setCompanyName({
                      ...companyName,
                      companyName: e.target.value,
                    })
                  }
                  autoComplete="none"
                  className={`w-full h-12 rounded-lg pl-4 mt-2 focus:outline-none focus:border-primary border`}
                />
              </div>
              <div>
                <label className="text-black font-bold text-[14px]">
                  What job role describes you the best?
                </label>
                <div>
                  <Field
                    as="select"
                    name="jobRole"
                    required
                    value={jobRole.jobRole}
                    onChange={(e: any) =>
                      setJobRole({ ...jobRole, jobRole: e.target.value })
                    }
                    className="h-12 w-full overflow-hidden rounded-lg pl-4 pr-4 mt-2 focus:outline-none focus:ring-1 ring-primary font-medium appearance-none custom-select"
                  >
                    <option value="">Select Option</option>
                    <option value="Founder/C-level Executive">
                      Founder / C-level Executive
                    </option>
                    <option value="Department Director/Product Director">
                      Department Director/Product Director
                    </option>
                    <option value="Manager/Team Leader">
                      Manager/Team Leader
                    </option>
                    <option value="Other">Other</option>
                  </Field>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label className="text-black font-bold text-[14px] mb-3 block">
                  Do you need an NDA first?
                </label>
                <div className="flex items-center">
                  <div className="bg-white rounded mr-3 group">
                    <label className="group-hover:text-primary flex items-center px-3 py-2 cursor-pointer">
                      <Field
                        type="radio"
                        name="nda"
                        required
                        value="Yes"
                        checked={"Yes" === nda.newNda}
                        onChange={(e: any) =>
                          setNDA({ ...nda, newNda: e.target.value })
                        }
                        className="w-5 h-5 transition-all ease-linear duration-200"
                      />
                      <span className="pl-2 font-medium group-hover:text-primary transition-all ease-linear duration-200">
                        Yes
                      </span>
                    </label>
                  </div>
                  <div className="bg-white rounded mr-3 group">
                    <label className="group-hover:text-primary flex items-center px-3 py-2 cursor-pointer">
                      <Field
                        type="radio"
                        name="nda"
                        required
                        value="No"
                        checked={"No" === nda.newNda}
                        onChange={(e: any) =>
                          setNDA({ ...nda, newNda: e.target.value })
                        }
                        className="w-5 h-5 transition-all ease-linear duration-200"
                      />
                      <span className="pl-2 font-medium group-hover:text-primary transition-all ease-linear duration-200">
                        No
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 relative">
              <div className="flex">
                {/* <label className="flex items-center gap-3 font-medium cursor-pointer select-none text-[12px] text-black">
                  <Field
                    type="checkbox"
                    name="check"
                    checked={check.isChecked}
                    onChange={(e: any) => setCheck({ ...check, isChecked: !check.isChecked })}
                    autoComplete="none"
                    className="w-5 h-5 cursor-pointer accent-primary"
                  />
                  I agree to receive marketing communication from Digital
                  Gregg.{" "}
                </label> */}
                <label className="custom-checkbox rounded-[0.6rem] group checkbox block relative top-0 pl-[35px] mt-[2px] cursor-pointer text-[12px] font-medium transition-all ease-linear duration-300">
                  <Field
                    type="checkbox"
                    name="check"
                    checked={check.isChecked}
                    onChange={(e: any) =>
                      setCheck({ ...check, isChecked: !check.isChecked })
                    }
                    autoComplete="none"
                    className="absolute opacity-[0] cursor-pointer h-0 w-0"
                  />
                  I agree to receive marketing communication from Digital Gregg.{" "}
                  <span
                    className={`checkmark absolute top-1/2 translate-y-[-50%] left-0 h-[20px] w-[20px] ${
                      check.isChecked
                        ? "!bg-primary !border-primary"
                        : "bg-white"
                    } border after:content-[''] group-hover:border-primary after:absolute after:hidden after:left-[6px] after:top-[1.4px] after:w-[7px] after:h-[12px] after:border-[#FFF] after:border-[0_2.5px_2.5px_0] transition-all ease-linear duration-300`}
                  ></span>
                </label>
                <div
                  onClick={() => setDetailsActive(!detailsActive)}
                  className={`inline-block text-xl cursor-pointer transition-all ease-linear duration-200 ml-2`}
                >
                  {!detailsActive ? <InfoIcon /> : <InfoIconActive />}
                </div>
              </div>
              {detailsActive && (
                <div className="absolute bottom-[50px] md:bottom-[40px] w-full sm:w-[458px] md:w-[550px] privacy-check-arrow mobilePrivacyArrow left-0 lg:left-auto md:-right-[40px] lg:-right-[50px] border bg-white px-5 py-8 rounded-md">
                  <p className="text-privacy text-[12px] font-semibold leading-6">
                    {`Digital Gregg is committed to processing the above information in order to contact you and talk about your project. Other information is used for statistical purposes and, from time to time, we would like to contact you about our other products and services, as well as other content that may be of interest to you. If you consent to contact you for these purposes, please tick the checkbox below.`}{" "}
                  </p>
                  <p className="text-[12px] text-privacy mt-4 font-semibold leading-6">
                    You can unsubscribe from these communications at any time.
                    For more information on how to unsubscribe, our privacy
                    practices please view our{" "}
                    <Link href="/privacy-policy" passHref>
                      <a href="#" target="_blank" rel="noreferrer" aria-label='privacy policy page'>
                        <span className="cursor-pointer underline hover:text-primary">
                          Privacy Policy
                          <span className="inline-block ml-2 font-bold">
                            <BsBoxArrowUpIcon />
                          </span>
                        </span>
                      </a>
                    </Link>
                  </p>
                  <button
                    onClick={() => setDetailsActive(false)}
                    className="text-primary hover:opacity-80 transition-all duration-300 font-bold text-lg mt-5"
                  >
                    Ok, got it
                  </button>
                </div>
              )}
            </div>
            <div className=" mb-6">
              {/* continue button */}
              <Button text="Request Free Estimate" css="mt-14" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepFive;