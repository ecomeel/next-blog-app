import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // const cooks = cookies();

  // const headers = headers()

  // redirect('/blog');

  return NextResponse.json({ id });
}
