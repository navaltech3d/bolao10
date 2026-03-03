import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://zxnsubmxqoplohcngntu.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy_key_to_prevent_crash';

if (supabaseKey === 'dummy_key_to_prevent_crash') {
  console.warn('SUPABASE_SERVICE_ROLE_KEY is missing. Database operations will fail.');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
