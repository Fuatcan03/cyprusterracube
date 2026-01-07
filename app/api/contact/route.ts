import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tüm alanlar zorunludur" }, { status: 400 })
    }

    // Here you would typically send an email or save to database
    console.log("Contact form submission:", { name, email, message })

    // Return success response
    return NextResponse.json({ message: "Mesajınız başarıyla gönderildi!" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Bir hata oluştu. Lütfen tekrar deneyin." }, { status: 500 })
  }
}
