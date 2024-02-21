// pages/api/companyFacts.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cik } = req.query; // Assuming you're passing a CIK as a query parameter

  try {
    const cikPadded = String(cik).padStart(10, '0'); // Ensure cik is a string and pad it
    const apiUrl = `https://data.sec.gov/api/xbrl/companyfacts/CIK${cikPadded}.json`;
    const apiRes = await fetch(apiUrl);
    const data = await apiRes.json();

    // Check if the external API returned a non-200 response
    if (apiRes.status !== 200) {
      return res.status(apiRes.status).json({ message: 'Failed to fetch data' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Failed to fetch company facts:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}