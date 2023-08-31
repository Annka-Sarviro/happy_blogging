import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { BlogList } from '@/page-component/BlogsList';

export default async function Home() {
  const supabase = createServerComponentClient<any>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/auth');
  }
  return (
    <main className="">
      <div className="container">
        <BlogList />
      </div>
    </main>
  );
}
