import { supabase } from './src/supabase';

async function run() {
  const { data, error } = await supabase.from('rounds').select('*').limit(1);
  console.log('Data:', data);
  console.log('Error:', error);
}
run();
