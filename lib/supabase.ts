import { Database } from "@/db_types";
import { createClient } from "@supabase/supabase-js";
import Constants  from "expo-constants";

const supabaseUrl = Constants?.expoConfig?.extra?.supabaseUrl;
const supabaseAnonKey = Constants?.expoConfig?.extra?.supabaseAnonKey;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
