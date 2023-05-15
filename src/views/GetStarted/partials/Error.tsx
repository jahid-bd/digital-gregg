import React from 'react'

type Props = {
    error: boolean;
}

const Error = ({ error }: Props) => {

  return (
    <>
      {error ? (
        <p className="text-primary font-medium text-sm cursor-default">
          Please select at least one option.
        </p>
      ) : null}
    </>
  );
}

export default Error