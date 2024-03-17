import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	'https://lnuzzckynzfmxyxkfgbz.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudXp6Y2t5bnpmbXh5eGtmZ2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxMDIwNDMsImV4cCI6MjAyNTY3ODA0M30.19fLtRhfa-TBMMXX0BeTWGgTE60Ju2mYFvEpxvjnxbw'
);

export default supabase;
