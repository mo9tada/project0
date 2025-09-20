import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabaseClient";

// Helper to convert Oui/Non to boolean
const toBoolean = (value: any) => value === true || value === "Oui";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Type-safe mapping
    const payload = {
      last_name: String(body.last_name || ""),
      first_name: String(body.first_name || ""),
      father_name: String(body.father_name || ""),
      mother_name: String(body.mother_name || ""),
      cnss: toBoolean(body.cnss),
      family_status: String(body.family_status || ""),
      email: String(body.email || ""),
      phone: String(body.phone || ""),
      father_phone: String(body.father_phone || ""),
      gender: String(body.gender || ""),
      date_de_naissance: String(body.date_de_naissance || ""), // YYYY-MM-DD from input[type=date]
      first_time_scout: toBoolean(body.first_time_scout),
    };

    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("users")
      .insert([payload])
      .select(); // optional: returns inserted row

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { message: `Erreur DB: ${error.message}`, details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Inscription réussie!", data });
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: error.message || "Erreur lors de l'inscription." },
      { status: 500 }
    );
  }
}