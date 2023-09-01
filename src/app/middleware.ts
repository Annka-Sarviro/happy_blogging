import { Database } from '@/lib/database.types';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
export const dynamic = 'force-dynamic';
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession();
  return res;
}
