import styled from "styled-components";

export const DdayBadge = styled.div.attrs<{ $backColor: string }>(props => ({
  style: {
    backgroundColor: props.$backColor,
  },
}))`
  position: absolute;
  top: -7px;
  right: -3px;
  color: white;
  padding: 0 5px 1px;
  font-size: 11px;
  border-radius: 8px;
`;
