import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://shvzmfdytpvelptodnfz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNodnptZmR5dHB2ZWxwdG9kbmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NjExNjcsImV4cCI6MjA1NTAzNzE2N30.DmgXw4YoxMztpWXtgj0Kt5dlzDGzmhEZLhB5_OWbxC8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
