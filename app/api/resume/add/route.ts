import { createClient } from "@/utils/supabase/client";

export async function POST(request: Request) {
  const supabase = createClient();
  const { uid } = await request.json();

  const { data: resume, error } = await supabase
    .from("resume")
    .insert({
      uid: uid,
      info: {
        resumeName: "",
        name: "",
        email: "",
        phone: "",
        website: "",
      },
      skills: [
        {
          groupName: "",
          groupSkills: "",
        },
      ],
      links: [
        {
          label: "",
          href: "",
        },
      ],
      works: [
        {
          companyName: "",
          position: "",
          startDate: new Date().toString(),
          endDate: new Date().toString(),
          description: "",
          isWorking: false,
        },
      ],
    })
    .select();

  if (resume) return Response.json(resume[0]?.id);
  return Response.json(error);
}
