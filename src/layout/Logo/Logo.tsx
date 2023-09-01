import { routs } from '@/helper/routs';
import NextLink from 'next/link';
import LogoImg from '../../../public/svg/logo.svg';

export const Logo = () => {
  return (
    <div className="w-12 h-12 fill-main_card hover:fill-main_dark focus:fill-main_dark duration-300">
      <NextLink href={routs.HOME}>
        <LogoImg
          aria-label="Company logo"
          className="fill-inherit hover:fill-inherit focus:fill-inherit"
        />
      </NextLink>
    </div>
  );
};
