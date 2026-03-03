import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://zxnsubmxqoplohcngntu.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4bnN1Ym14cW9wbG9oY25nbnR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjExOTkwMCwiZXhwIjoyMDg3Njk1OTAwfQ.-YuMRl2xdHKV95xEJ_G3s2Nt8WGL840_Tvo7znD5CWk';

if (!supabaseKey) {
  console.warn('SUPABASE_SERVICE_ROLE_KEY is missing. Database operations will fail.');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
