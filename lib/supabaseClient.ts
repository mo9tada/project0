// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
// Server-side client for server actions
export const createServerClient = () => {
  return createClient(supabaseUrl!,supabaseKey!)

}
