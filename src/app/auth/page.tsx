import { Database } from '@/lib/database.types';
import { Auth } from '@/page-component/Auth/Auth';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export const dynamic = 'force-dynamic';
export default async function AuthPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/');
  }

  return (
    <section className="py-4">
      <Auth />
    </section>
  );
}
