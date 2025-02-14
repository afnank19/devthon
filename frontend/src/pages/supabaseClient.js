import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://euggzmfonogureiaadwv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1Z2d6bWZvbm9ndXJlaWFhZHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1MTU2MjksImV4cCI6MjA1NTA5MTYyOX0.s70Bsf7esX4WqLaFRlOEriIdhEodN8SYsJe0293cfjQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
