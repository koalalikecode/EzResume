import { createClient } from "@/utils/supabase/server";

export async function PUT(request: Request) {
  const supabase = createClient();
  const { id, updateValues } = await request.json();

  const { error } = await supabase
    .from("resume")
    .update({
      info: updateValues.info,
      skills: updateValues.skills,
      links: updateValues.links,
      works: updateValues.works,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) return Response.json("Error!");
  return Response.json("Update Successfully!");
}
