import Button from '@components/Button/Button';
import emailjs from '@emailjs/browser';
import { formatNumberInput } from '@hooks/helpers';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { encPhone } from 'src/constant';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

type Props = {};

const FromSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Enter valid email').required('Required'),
  surname: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const RightHero = ({ isAccept, setOpen, setIsAccept }: any) => {
  // global
  const router = useRouter();

  // states
  const [agreeError, setAgreeError] = useState(false);

  useEffect(() => {
    if (isAccept) {
      setAgreeError(false);
    }
  }, [isAccept]);

  const phoneCall = () => {
    router.push('tel:'.concat(atob(encPhone)));
  };

  const handleSubmit = (values: any, { resetForm }: any) => {
    if (isAccept === false) {
      setAgreeError(true);
      return;
    }

    setAgreeError(false);

    const content = `
    <p>Dear Digital Gregg, I'm ${values.name} and my telephone ${values.telephone}. ${values.message}</p>
    <br />
    <pRegards, ${values.surname}</p>
    `;

    const emailJsOptions = {
      from_name: `${values.email}`,
      to_name: `Digital Gregg`,
      content: content,
      name: `${values.name}`,
    };

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
            Swal.fire({
              // position: "top-end",
              icon: 'success',
              title: 'Your message has been sent successfully',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          resetForm();
          isAccept(false);
        },
        (error) => {
          if (error) {
            Swal.fire({
              icon: 'error',
              title: 'Failed to sent message. Try again later.',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      );
  };

  return (
    <div className="h-full w-full p-[1.8rem] pb-[5rem] lg:p-[2rem_1.5rem_3.5rem_4.5rem] xl:p-[5rem_4rem_5.5rem_7rem] 3xl:px-[100px] lg:flex items-center relative z-10">
      <div className="w-full">
        <h4 className="text-[1.85714rem] leading-[32px] text-white 2xl:pt-0 pt-5">
          <span className="font-light">Contact</span>{' '}
          <strong>Digital Gregg</strong>
        </h4>

        <Formik
          initialValues={{
            name: '',
            email: '',
            surname: '',
            message: '',
            telephone: '',
          }}
          validationSchema={FromSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="mt-[30px]">
              {/* grid md:grid-cols-2 grid-cols-1 gap-10 gap-y-6 */}
              <div className="lg:grid lg:grid-cols-2 gap-10 gap-y-6">
                <div className="relative z-0 w-full lg:mb-5 md:mb-14 mb-10">
                  <Field
                    type="text"
                    name="name"
                    placeholder=" "
                    required
                    autoComplete="none"
                    className="pt-[28px] pb-1 block w-full px-2 mt-0 bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-1 ring-blue-500 border-gray-200 caret-white text-white"
                  />
                  <label
                    htmlFor="name"
                    className="absolute duration-300 top-5 -z-1 origin-0 text-gray-400 focus:text-gray-400 px-2 text-[16px]"
                  >
                    Name <span className="text-primary">*</span>
                  </label>

                  {errors.name && touched.name ? (
                    <div className="alert-message">Field is required</div>
                  ) : null}
                </div>

                <div className="relative z-0 w-full lg:mb-5 md:mb-14 mb-10">
                  <Field
                    type="email"
                    name="email"
                    placeholder=" "
                    required
                    autoComplete="none"
                    className="pt-[28px] pb-1 block w-full px-2 mt-0 bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-1 ring-blue-500 border-gray-200 caret-white text-white"
                  />
                  <label
                    htmlFor="email"
                    className="absolute duration-300 top-5 -z-1 origin-0 text-gray-400 focus:text-gray-400 px-2 text-[16px]"
                  >
                    E-mail <span className="text-primary">*</span>
                  </label>

                  {errors.email && touched.email ? (
                    <div className="alert-message">Field is required</div>
                  ) : null}
                </div>

                <div className="relative z-0 w-full lg:mb-5 md:mb-14 mb-10">
                  <Field
                    type="text"
                    name="surname"
                    placeholder=" "
                    required
                    className="pt-[28px] pb-1 block w-full px-2 mt-0 bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-1 ring-blue-500 border-gray-200 caret-white text-white"
                  />
                  <label
                    htmlFor="surname"
                    className="absolute duration-300 top-5 -z-1 origin-0 text-gray-400 focus:text-gray-400 px-2 text-[16px]"
                  >
                    Surname <span className="text-primary">*</span>
                  </label>

                  {errors.surname && touched.surname ? (
                    <div className="alert-message">Field is required</div>
                  ) : null}
                </div>

                <div className="relative z-0 w-full lg:mb-5 md:mb-14 mb-10 row-span-2 lg:block hidden">
                  <Field
                    as="textarea"
                    type="text"
                    name="message"
                    placeholder=" "
                    required
                    rows={4}
                    className="pt-[25px] pb-[40px] block w-full px-2 mt-0 bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-1 ring-blue-500 border-gray-200 caret-white text-white resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute duration-300 top-5 -z-1 origin-0 text-gray-400 focus:text-gray-400 px-2 text-[16px]"
                  >
                    Message <span className="text-primary">*</span>
                  </label>

                  {errors.message && touched.message ? (
                    <div className="alert-message">Field is required</div>
                  ) : null}
                </div>

                <div className="relative z-0 w-full lg:mb-5 md:mb-14 mb-10">
                  <Field
                    type="number"
                    name="telephone"
                    placeholder=" "
                    required
                    autoComplete="none"
                    onKeyDown={(e: any) => formatNumberInput(e)}
                    className="pt-[28px] pb-1 block w-full px-2 mt-0 bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-1 ring-blue-500 border-gray-200 caret-white text-white"
                  />
                  <label
                    htmlFor="telephone"
                    className="absolute duration-300 top-5 -z-1 origin-0 text-gray-400 focus:text-gray-400 px-2 text-[16px]"
                  >
                    Telephone <span className="text-primary">*</span>
                  </label>
                </div>

                <div className="relative z-0 w-full lg:mb-5 md:mb-14 mb-10 row-span-2 lg:hidden block">
                  <Field
                    as="textarea"
                    type="text"
                    name="message"
                    placeholder=" "
                    required
                    rows={4}
                    className="pt-[20px] pb-4 block w-full px-2 mt-0 bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-1 ring-blue-500 border-gray-200 caret-white text-white resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute duration-300 top-5 -z-1 origin-0 text-gray-400 focus:text-gray-400 px-2 text-[16px]"
                  >
                    Message <span className="text-primary">*</span>
                  </label>

                  {errors.message && touched.message ? (
                    <div className="alert-message">Field is required</div>
                  ) : null}
                </div>

                <div className="md:col-span-2 mt-[50px] md:mt-0 relative">
                  <div className="custom-checkbox w-max" role="button">
                    <label
                      // htmlFor="terms"
                      className="checkbox block relative top-0 pl-10 cursor-pointer text-[16px] text-white"
                    >
                      {/* <span className="relative top-[2px] hover:opacity-70 transition ease-in-out duration-300">
                        I accept the Terms of Use{' '}
                        <span className="text-primary ml-2">*</span>
                      </span> */}

                      <input
                        type="checkbox"
                        // id="terms"
                        className="absolute opacity-[0] cursor-pointer h-0 w-0"
                        checked={isAccept}
                        onClick={() => setIsAccept(!isAccept)}
                      />
                      <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-redblack hover:opacity-70 transition ease-in-out duration-300 border-2 border-[#ccc] after:content-[''] after:absolute after:hidden after:left-[8px] after:top-[3px] after:w-[7px] after:h-[12px] after:border-[#FFF] after:border-[0_2.5px_2.5px_0]"></span>
                    </label>
                    <span
                      onClick={() => setOpen(true)}
                      className="ml-10 hover:opacity-70 transition ease-in-out duration-300 text-[16px] text-white"
                    >
                      I accept the Terms of Use{' '}
                      <span className="text-primary ml-2">*</span>
                    </span>
                  </div>

                  {agreeError ? (
                    <div className="alert-message">Field is required</div>
                  ) : null}
                </div>

                <div className="flex items-center justify-end gap-5 pr-4 text-white col-span-2 xl:pt-14 lg:pt-12 lg:pb-12 pt-20 pb-24">
                  <div className="w-[102px]">
                    <Button text="Send"></Button>
                  </div>
                </div>

                <hr className="col-span-2" />

                <div className="text-white flex items-center lg:gap-5 xl:gap-2 gap-2 font-semibold mt-10 lg:mt-3 cursor-default">
                  <p>Want to start a project?.</p>
                </div>

                <div className="flex items-center gap-2 lg:gap-0 cursor-pointer text-white mt-10 lg:mt-3">
                  <Link href={'/request-estimate'}>
                    <a  href='#' className="text-white font-semibold hover:opacity-70 transition ease-in-out duration-300 ml-0 md:ml-[2px]" aria-label='request estimate page'>
                      {/* <a href={`tel:${tel}`}>{mobile}</a> */}
                      REQUEST ESTIMATE
                    </a>
                  </Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RightHero;
