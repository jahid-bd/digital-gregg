import { useState } from 'react';
import Steps from './components/Steps';
import Nav from './partials/Nav';
import SuccessPage from './partials/SuccessPage';

const GetStarted = () => {

  // states
  const [getStarted, setGetStarted] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <>
      {/* top navabr */}
      <Nav />

      <section>
        <div className="mt-12">
          {!success ? <Steps
            setSuccess={setSuccess}
            setGetStarted={setGetStarted}
          /> : <SuccessPage />}
        </div>

        {/* {!getStarted ? (
          <Main setGetStarted={setGetStarted} success={success} />
        ) : (
          <div className="mt-12">
            <Steps setSuccess={setSuccess} setGetStarted={setGetStarted} />
          </div>
        )} */}
      </section>
    </>
  );
};

export default GetStarted;
