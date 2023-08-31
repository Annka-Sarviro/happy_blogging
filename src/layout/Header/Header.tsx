'use client';
import { Logo } from '@/layout/Logo';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export const Header = ({ session }: any) => {
  const router = useRouter();
  const supabase = createClientComponentClient<any>();

  const handleClick = async () => {
    await supabase.auth.signOut();
    router.refresh();
    console.log('logout');
  };

  return (
    <header>
      <div className="container">
        <Logo />
        {session && <button onClick={handleClick}>LogOut</button>}
      </div>
    </header>
  );
};
