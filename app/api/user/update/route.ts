import { createClient } from "@/utils/supabase/server";

export async function PUT(request: Request) {
  const supabase = createClient();
  const { id, updateValues } = await request.json();

  const { error } = await supabase
    .from("profiles")
    .update({
      full_name: updateValues.name,
      avatar: updateValues.avatar,
    })
    .eq("id", id);

  if (error) return Response.json("Error!");
  return Response.json("Update Successfully!");
}
