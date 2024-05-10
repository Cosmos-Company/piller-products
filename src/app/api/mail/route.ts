import { NextRequest } from "next/server";

export async function POST(req: NextRequest, data: any) {
  try {
    const body = await req.json();
    console.log(body);
    const res = await fetch(
      "https://piller.com.tr/wp-admin/admin-ajax.php?action=invio_mail",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    if (res.ok) {
      return res;
    } else {
      throw new Error("Mail gönderilirken bir hata oluştu");
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
