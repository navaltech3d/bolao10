import { supabase } from './src/supabase';

async function run() {
  const { error } = await supabase.rpc('exec_sql', { sql: 'ALTER TABLE rounds ADD COLUMN jackpot_winners_names TEXT, ADD COLUMN jackpot_prize_paid NUMERIC;' });
  console.log('Result:', error);
}
run();
