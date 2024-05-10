import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, data: any) {
  try {
    const body = await req.json();
    console.log(body);
    let formData = [];
    for (let property in body) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(body[property]);
      formData.push(encodedKey + "=" + encodedValue);
    }
    formData = formData.join("&");
    // {kw: 7.4,model: 'Tak Çalıştır',color: '#3C2D49',customColor: null,email: 'ercansahin@outlook.com',car: 'Audi e-tron'}
    const res = await fetch(
      "https://piller.com.tr/wp-admin/admin-ajax.php?action=invio_mail",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      }
    );
    if (res.ok) {
      console.log(res);

      const data = await res.text();
      console.log(data);
      return new Response(data, { status: 200 });
    } else {
      throw new Error("Mail gönderilirken bir hata oluştu");
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
    return NextResponse.json(
      { data: "Testing Sentry Error..." },
      { status: 500 }
    );
  }
}
