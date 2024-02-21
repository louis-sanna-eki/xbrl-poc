// pages/api/companyFacts.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch"; // Import node-fetch

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cik } = req.query; // Assuming you're passing a CIK as a query parameter

  try {
    const cikPadded = String(cik).padStart(10, "0"); // Ensure cik is a string and pad it
    const apiUrl = `https://data.sec.gov/api/xbrl/companyfacts/CIK${cikPadded}.json`;
    console.log(`Fetching data from SEC API for CIK: ${cikPadded}`); // Log the URL being fetched
    const apiRes = await fetch(apiUrl);
    const data = await apiRes.json();

    // Check if the external API returned a non-200 response
    if (apiRes.status !== 200) {
      console.error(`Failed to fetch data. Status: ${apiRes.status}`); // Log the error status
      return res
        .status(apiRes.status)
        .json({ message: "Failed to fetch data" });
    }

    console.log(`Data fetched successfully for CIK: ${cikPadded}`); // Log successful data fetch
    return res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch company facts:", error); // Log the error object
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
    return res
      .status(500)
      .json({
        message: "Internal server error",
        error: "An unknown error occurred",
      });
  }
}
