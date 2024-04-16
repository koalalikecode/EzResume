import { createClient } from "@/utils/supabase/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const searchParams = request.nextUrl.searchParams;
  const uid = searchParams.get("uid");

  const { data: resumes, error } = await supabase
    .from("resume")
    .select()
    .order("updated_at", { ascending: false })
    .eq("uid", uid);

  if (resumes) return Response.json(resumes);
  return Response.json(error);
}
