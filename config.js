// Supabase এর Project Settings → API থেকে এই দুটি মান কপি করে বসান।
// anon key প্রকাশ্য হওয়ার জন্যই তৈরি — ডেটা সুরক্ষিত থাকে schema.sql এর Row Level Security দিয়ে।
// কখনোই "service_role" key এখানে বসাবেন না।
window.YP_CONFIG = {
  SUPABASE_URL: "https://qffghzuezkdalwoalsbd.supabase.co",       // যেমন: https://abcdxyz.supabase.co
  SUPABASE_ANON_KEY: "sb_publishable_1fIpEiuNQ2cTPhshqmTDuw_MHUQH19P"   // "anon public" key
};
