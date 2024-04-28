import { createClient } from "@/utils/supabase/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const searchParams = request.nextUrl.searchParams;
  const uid = searchParams.get("uid");

  const { data: users, error } = await supabase
    .from("profiles")
    .select()
    .eq("id", uid);

  if (users) return Response.json(users[0]);
  return Response.json(error);
}
