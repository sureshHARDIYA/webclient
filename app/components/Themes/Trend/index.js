import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';

const Trend = ({ colorful = true, reverseColor = false, flag, children, className, ...rest }) => {
  const classString = classNames(
    'trend-themes-components',
    {
      trendItemGrey: !colorful,
      reverseColor: reverseColor && colorful,
    },
    className
  );
  return (
    <div
      {...rest}
      className={classString}
      title={typeof children === 'string' ? children : ''}
    >
      <span>{children}</span>
      {flag && (
        <span className={flag || undefined}>
          <Icon type={`caret-${flag}`} />
        </span>
      )}
    </div>
  );
};

export default Trend;
