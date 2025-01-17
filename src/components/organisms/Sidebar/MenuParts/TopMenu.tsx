import * as React from 'react';
import cn from 'classnames';
import { Icon } from 'components/atoms';
import { useLayoutState } from 'components/organisms/Layout/context';

import Item from '../Item';

export interface TopMenuProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  showToggle?: boolean;
  toggleText?: React.ReactNode;
}

export const TopMenu: React.FC<React.PropsWithChildren<TopMenuProps>> = ({
  className,
  showToggle = true,
  toggleText = 'Hide titles',
  children,
  ...props
}) => {
  const { toggled, onSetToggled } = useLayoutState();

  return (
    <div className={cn('ebs-sidebar__top', className)} {...props}>
      {showToggle && onSetToggled !== undefined && (
        <Item
          className="ebs-sidebar__toggler"
          invert
          prefix={<Icon type={`${toggled ? 'open' : 'close'}-sidebar`} />}
          text={toggleText}
          onClick={onSetToggled}
        />
      )}

      {children}
    </div>
  );
};
