import React, { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ required, children, className, ...rest }) => {
  return (
    <label className={className} {...rest}>
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
};

export default Label;