'use client';
import { Logo } from '@/layout/Logo';
import { Button } from '@mui/material';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import d from '@/data/header.json';

export const Header = ({ session }: any) => {
  const router = useRouter();
  const supabase = createClientComponentClient<any>();

  const handleClick = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="bg-green_back py-3 ">
      <div className="container flex justify-between items-center">
        <Logo />
        {session && (
          <Button
            variant="contained"
            onClick={handleClick}
            className=" bg-main_card hover:bg-main_dark"
          >
            {d.button.text}
          </Button>
        )}
      </div>
    </header>
  );
};
