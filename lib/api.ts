import { Database } from "@/db_types";
import { supabase } from "./supabase";



export const fetchData = async (tableName: keyof Database["public"]["Tables"]) => {
const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .order("created_at", { ascending: false });

if (error) {
    console.log(error);
    return [];
}

return data;
};

fetchData("actor");

export type Data<T> = Awaited<ReturnType<typeof fetchData>>;
export type Item<T> = Data<T>[number];