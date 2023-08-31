import { Auth } from '@/page-component/Auth/Auth';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AuthPage() {
  const supabase = createServerComponentClient<any>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/');
  }

  return (
    <section>
      <Auth />
    </section>
  );
}
