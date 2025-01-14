import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR } from '@/styles/color';
import { FONT_MIXIN, mixins } from '@/styles/mixins';

const TabLink = styled.div`
  ${mixins.flexBox({})}
  width: 320px;
  height: 40px;
  border-radius: 11px;
  border: 1px solid ${({ theme: { color } }) => color.line};
  overflow: hidden;
`;

const Link = styled(NavLink)`
  width: 100%;
  height: 100%;
  color: ${({ theme: { color } }) => color.tabLink.font.initial};
  background: ${({ theme: { color } }) => color.tabLink.bg.initial};

  + a {
    border-left: 1px solid ${({ theme: { color } }) => color.line};
  }

  &.active {
    color: ${({ theme: { color } }) => color.tabLink.font.active};
    background: ${({ theme: { color } }) => color.tabLink.bg.active};
  }

  &:not(.active):hover {
    background: ${({ theme: { color } }) => color.tabLink.bg.hover};
  }
`;

const TabItem = styled.div`
  ${mixins.flexBox({})}
  height: 100%;
  gap: 8px;
  ${FONT_MIXIN.small(500)}
`;

const Count = styled.span`
  ${FONT_MIXIN.xSmall(500)}
  background: ${COLOR.transparent[100]};
  color: ${({ theme: { color } }) => color.text};
  min-width: 20px;
  padding: 0 6px;
  border-radius: 2em;
  text-align: center;
`;

export { TabLink, Link, TabItem, Count };
