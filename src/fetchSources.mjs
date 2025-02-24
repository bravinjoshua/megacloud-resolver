import { MegaCloud } from "./puppeteer.mjs";

export async function ResolveSources(id) {
  if (!id) {
    return {
      success: false,
      error: "Missing required params",
    };
  }

  const url = `https://megacloud.tv/embed-2/e-1/${id}&autoPlay=1&oa=0&asi=1`;

  try {
    const result = await MegaCloud(url);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unable to resolve",
    };
  }
}

// export { ResolveSources };
//IG37fwadA6iU?k=1
//'https://megacloud.tv/embed-2/e-1/IG37fwadA6iU?k=1&autoPlay=1&oa=0&asi=1
