import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    appName: "有点想法开放平台",
  });
}
