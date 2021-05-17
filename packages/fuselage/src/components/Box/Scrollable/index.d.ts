import { ForwardRefExoticComponent, PropsWithChildren } from 'react';

type ScrollableProps = PropsWithChildren<{
  horizontal?: boolean;
  vertical?: boolean;
  onScrollContent?: (touching: { top: boolean }) => void;
}>;
export const Scrollable: ForwardRefExoticComponent<ScrollableProps>;