import * as React from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import { usePopperTooltip } from 'react-popper-tooltip';

import { Icon } from 'components/atoms';

export type TooltipTriggerType = 'click' | 'right-click' | 'hover' | 'focus';

export type TooltipPlacement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type TooltipConfig = Partial<{
  //                             // default value
  closeOnOutsideClick: boolean; // true
  closeOnTriggerHidden: boolean; // false
  defaultVisible: boolean; // false
  delayHide: number; // 0
  delayShow: number; // 0
  followCursor: boolean; // false
  interactive: boolean;
  mutationObserverOptions: MutationObserverInit; // { attributes: true, childList: true, subtree: true }
  offset: [number, number]; // [0, 0]
  onVisibleChange: (state: boolean) => void;
  placement: TooltipPlacement;
  trigger: TooltipTriggerType | null; // 'hover'
  visible: boolean;
}>;

export interface TooltipProps extends TooltipConfig {
  className?: string;
  bodyClass?: string;
  title?: React.ReactNode;
  tooltip?: React.ReactNode;
  hideArrow?: boolean;
  width?: number | string;
  nowrap?: boolean;
  inline?: boolean;
}

export const Tooltip: React.FC<React.PropsWithChildren<TooltipProps>> = ({
  className,
  bodyClass,
  children,
  title,
  tooltip,
  hideArrow,
  width,
  nowrap,
  inline,
  interactive = true,
  ...tooltipConfig
}) => {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    ...{ ...tooltipConfig, interactive },
  });

  return (
    <div className={cn(`ebs-tooltip`, { [`ebs-tooltip--nowrap`]: nowrap, [`ebs-tooltip--inline`]: inline })}>
      <div className="ebs-tooltip__trigger" ref={setTriggerRef}>
        {children}
      </div>
      {visible &&
        createPortal(
          <div
            ref={setTooltipRef}
            {...getTooltipProps({
              className: cn(`ebs-tooltip__wrapper`, className, { [`ebs-tooltip--nowrap`]: nowrap }),
              style: { width },
            })}
          >
            {!hideArrow && (
              <div
                {...getArrowProps({
                  className: 'ebs-tooltip__arrow',
                })}
              >
                <Icon type="arrow-top" />
              </div>
            )}

            <div className={cn(`ebs-tooltip__body`, bodyClass)}>
              {title && <div className="ebs-tooltip__body-title">{title}</div>}

              {tooltip}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
