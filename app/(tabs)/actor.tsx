import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AddPostForm from "@/components/AddPostForm";
import { fetchData, Data } from "@/lib/api";
import PostCard from "@/components/PostCard";

export default function Actor() {
  const [post, setPost] = useState<Data<"posts">>([]);

  useEffect(() => {
    fetchData("posts").then((data) => {
      setPost(data);
    });
  }, []);

  const handleSubmit = async (content: string) => {
    const { data, error } = await supabase
      .from("posts")
      .insert({ content })
      .select();
    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      // Refetch posts after inserting a new one
      fetchData("posts").then((newData) => {
        setPost(newData);
      });
    }
  };

  return (
    <View style={styles.container}>
      <AddPostForm onSubmit={handleSubmit} />
      <FlatList
        data={post}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 8 }}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});