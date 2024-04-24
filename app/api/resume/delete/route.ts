import { createClient } from "@/utils/supabase/server";
import { type NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  const supabase = createClient();
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  const { error } = await supabase.from("resume").delete().eq("id", id);

  if (error) return Response.json("Error!");
  return Response.json("Delete Successfully!");
}
