/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/KWot8TTw4Qb
 */
import { Select } from "@/components/ui/select"

export function XBRL() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container px-4 py-2 md:py-4 lg:py-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BarChartIcon className="h-6 w-6 text-blue-500" />
              <h1 className="text-xl font-bold tracking-tight">SEC XBRL API Explorer</h1>
            </div>
            <div className="flex-1">
              <div className="w-full max-w-md rounded-lg border">
                {/* @ts-ignore */}
                <Select className="w-full" placeholder="Search company" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 py-4">
        <div className="container grid gap-4 px-4 text-sm md:gap-8 md:px-6">
          <div className="grid gap-2">
            <h2 className="font-semibold">Acme Inc</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ACME Inc is a leading provider of innovative products and solutions in the technology industry. Their
              stock symbol is ACME, and they operate in the software and hardware industry.
            </p>
          </div>
          <div className="border rounded-lg overflow-auto max-h-[400px]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-2 py-2">Name</th>
                  <th className="px-2 py-2">Value</th>
                  <th className="px-2 py-2">Additional Information</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-2">Net Income</td>
                  <td className="px-2 py-2">$1,000,000</td>
                  <td className="px-2 py-2">Fiscal Year 2022</td>
                </tr>
                <tr className="border-b bg-gray-100 dark:bg-gray-800">
                  <td className="px-2 py-2">Revenue</td>
                  <td className="px-2 py-2">$5,000,000</td>
                  <td className="px-2 py-2">Fiscal Year 2022</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">Total Assets</td>
                  <td className="px-2 py-2">$10,000,000</td>
                  <td className="px-2 py-2">Fiscal Year 2022</td>
                </tr>
                <tr className="border-b bg-gray-100 dark:bg-gray-800">
                  <td className="px-2 py-2">Total Liabilities</td>
                  <td className="px-2 py-2">$3,000,000</td>
                  <td className="px-2 py-2">Fiscal Year 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}


function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}