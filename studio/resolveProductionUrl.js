const remoteUrl = `https://feature-aws-amplify.dqmw01ax6yyuw.amplifyapp.com/`;
const localUrl = `http://localhost:3000`;

const previewSecret = process.env.SANITY_PREVIEW_SECRET;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.uid?.current ?? `/`);

  return previewUrl.toString();
}
