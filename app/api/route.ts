import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const word = url.searchParams.get("word");
  const api = `https://jisho.org/api/v1/search/words?keyword=${word}`;
  let data;

  if (word) {
    try {
      const response = await fetch(api, {
        headers: {
          "user-agent": "_",
        },
      });

      if (response.ok) {
        data = await response.json();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return NextResponse.json({ data });
}
