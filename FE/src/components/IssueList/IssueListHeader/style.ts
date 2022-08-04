import styled from 'styled-components';

import { FONT_MIXIN, mixins } from '@/styles/mixins';

const IssueListHeader = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  padding: 10px 0;
  ${FONT_MIXIN.small(400)}
  color: ${({ theme: { color } }) => color.cell.font.initial};
  background: ${({ theme: { color } }) => color.cell.bg.cellHeaderBg};
`;

const Tabs = styled.div`
  ${mixins.flexBox({})}
`;

const TabItem = styled.button<{ isCurrentTab: boolean }>`
  ${mixins.flexBox({})}
  margin-right: 24px;
  gap: 8px;
  ${FONT_MIXIN.small(400)}
  color: ${({ isCurrentTab, theme: { color } }) => isCurrentTab && color.cell.font.active};
  font-weight: ${({ isCurrentTab }) => isCurrentTab && 600};

  :hover {
    color: ${({ theme: { color } }) => color.cell.font.active};
  }
`;

const Flex = styled.div`
  ${mixins.flexBox({})}
`;

const ListFilter = styled.div`
  ${mixins.flexBox({})}
  padding-right: 20px;
`;

const ListFilterItem = styled.div`
  margin-left: 32px;
`;

export { Flex, ListFilter, ListFilterItem, IssueListHeader, Tabs, TabItem };
