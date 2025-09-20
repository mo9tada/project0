// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL,
  const supabaseKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
export const supabase = createClient(supabaseUrl, supabaseKey);
// Server-side client for server actions
export const createServerClient = () => {
  return createClient(supabaseUrl!,supabaseKey!)

}
