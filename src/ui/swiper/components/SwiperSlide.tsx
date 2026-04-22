import React, { HTMLAttributes } from 'react';

function Slide(props: SlideProps, ref: React.Ref<HTMLElement>) {
  const { as: Component = 'div', ...rest } = props;
  return <Component ref={ref} {...rest} />;
}

type SlideProps = HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

export const SwiperSlide = React.forwardRef(Slide);
