import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eopclzxbozxjfckmjskd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvcGNsenhib3p4amZja21qc2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3OTU4MzAsImV4cCI6MjA1MjM3MTgzMH0.DlcRR08ShpXxDYaxgCv7eTYVeYsx3OWw1i7tt8xQt9Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
