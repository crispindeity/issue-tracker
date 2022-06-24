import styled from 'styled-components';

import { LabelStyle } from './type';

import { COLOR } from '@/styles/color';
import { FONT_MIXIN } from '@/styles/mixins';

const LargeStyle = `
  width: 100px;
  padding: 5px 12px;
  text-align: center;
  color: ${COLOR.white};
  ${FONT_MIXIN.medium(500)}
`;
const SmallStyle = `
  padding: 4px 16px;
  ${FONT_MIXIN.xSmall(700)}
`;

const LabelStyleObj = {
  large: LargeStyle,
  small: SmallStyle,
};

const Label = styled.div<LabelStyle>`
  color: ${({ textColor }) => textColor};
  border-radius: 30px;
  background: ${({ backgroundColor }) => backgroundColor};
  ${({ size }) => LabelStyleObj[size]}
`;

export { Label };
