import * as dotenv from 'dotenv';
import { ConfigContext } from 'expo/config';

dotenv.config();

export default ({ config }: ConfigContext, ) => {
    return {
        ...config,
        slug: 'supabook',
        name: 'SupaBook',
        extra: {
            ...config.extra,
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
        }
    }
}