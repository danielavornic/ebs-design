import * as React from 'react';
import cn from 'classnames';
import { Row, RowProps } from 'components/atoms/Grid/Row/Row';
import { Col } from 'components/atoms/Grid/Col/Col';
import { LabelOptions, ControlOptions } from './interface';
import { FormContext } from './Form';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  labelOptions?: LabelOptions;
  controlOptions?: ControlOptions;
  fieldRow?: RowProps; // The layout for field columns
  required?: boolean;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  labelOptions,
  controlOptions,
  fieldRow,
  className,
  children,
  required,
  ...props
}) => {
  const formCtx = React.useContext(FormContext);

  // Field's components props
  const labelProps = Object.assign({}, formCtx.labelOptions, {
    align: 'start', // Align field group label to the top
    ...labelOptions,
  });
  const controlProps = Object.assign({}, formCtx.controlOptions, controlOptions);
  const fieldRowProps = Object.assign({}, formCtx.fieldRow, fieldRow);

  return (
    <Row className={cn(`ebs-form__item ebs-form__group`, className)} {...fieldRowProps} {...props}>
      <Col {...labelProps.col}>
        <div
          className={cn('ebs-form__field__label', labelProps.className, {
            [`align-items--${labelProps.align}`]: labelProps.align,
            [`justify-content--${labelProps.justify}`]: labelProps.justify,
          })}
        >
          {label} {label && required && <span className="ebs-form__field__required">*</span>}
        </div>
      </Col>
      <Col {...controlProps.col} className={cn('ebs-form__field__control', controlProps.className)}>
        {children}
      </Col>
    </Row>
  );
};
