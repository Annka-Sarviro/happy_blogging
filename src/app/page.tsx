import { Database } from '@/lib/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Blogs } from '@/page-component/Blogs';
export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/auth');
  }
  const roles = session.user.user_metadata.roles;
  const id = session.user.id;

  const { data: blogs } = await supabase.from('blogs').select();

  return <Blogs blogs={blogs ?? []} roles={roles} id={id} />;
}
