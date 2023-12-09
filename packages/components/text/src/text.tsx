import React from 'react';

export interface TextProps {
  /**
   * The content to be rendered within the Text component.
   * @default null
   */
  children: React.ReactNode;
}

const Text = (props: TextProps) => {
  const { children } = props;

  return <span>{children}</span>;
};

export default Text;
