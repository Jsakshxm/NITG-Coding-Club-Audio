import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zjrwuydslhrxmvlayugr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqcnd1eWRzbGhyeG12bGF5dWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNTg4MzgsImV4cCI6MjAyNDYzNDgzOH0.AahkUdkz4B27x5JGbr6Yb3bN4AsN3UZyQmd2uh-itoM"
export  const supabase = createClient(supabaseUrl, supabaseKey)