// File: app/api/register/route.ts
import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API received:", body);

    // Convert Oui/Non to boolean
    const cnssBool = body.cnss?.toString().toLowerCase() === "oui";
    const firstTimeScoutBool = body.first_time_scout?.toString().toLowerCase() === "oui";

    // Format date to YYYY-MM-DD
    const dateDeNaissance = body.date_de_naissance
      ? new Date(body.date_de_naissance).toISOString().split("T")[0]
      : null;

    // Use server-side client (service role)
    const supabase = createServerClient();

    const { data, error } = await supabase.from("users").insert([
      {
        last_name: body.last_name,
        first_name: body.first_name,
        father_name: body.father_name,
        mother_name: body.mother_name,
        cnss: cnssBool,
        family_status: body.family_status,
        email: body.email,
        phone: body.phone,
        father_phone: body.father_phone,
        gender: body.gender,
        date_de_naissance: dateDeNaissance,
        first_time_scout: firstTimeScoutBool,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { message: "Erreur lors de l'insertion dans la DB.", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Inscription réussie!", data });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ message: err.message || "Erreur lors de l'inscription." }, { status: 500 });
  }
}