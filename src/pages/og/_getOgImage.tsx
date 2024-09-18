import satori from "satori";
import { OgImage } from "./_OgImage";
const sharp = require("sharp");
// import sharp from "sharp";

export async function getOgImage(text: string): Promise<Buffer> {
  const notoSansJpUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@600`;
  const reggeaeOneUlr =
    "https://fonts.googleapis.com/css2?family=Reggae+One&display=swap&text=ゆっきーの砂場";
  const notoSansJpFontData = await getFontData(notoSansJpUrl);
  const reggeaeOneFontData = await getFontData(reggeaeOneUlr);
  const svg = await satori(<OgImage text={text} />, {
    width: 800,
    height: 400,
    fonts: [
      {
        name: "Noto Sans JP",
        data: notoSansJpFontData,
        style: "normal",
      },
      {
        name: "Reggae One",
        data: reggeaeOneFontData,
        style: "normal",
      },
    ],
  });

  return await sharp(Buffer.from(svg)).png().toBuffer();
}

const getFontData = async (url: string): Promise<ArrayBuffer> => {
  const css = await (
    await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource === null) {
    throw new Error("Font resource not found");
  }

  return await fetch(resource[1]).then(async (res) => await res.arrayBuffer());
};
