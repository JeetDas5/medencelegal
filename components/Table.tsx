import Image from "next/image";

export const Table: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <table className={`w-full max-w-[90vw] mx-auto text-left ${className}`}>
      <thead>
        <tr>
          <th className="px-4  bg-white mr-2 rounded-t-2xl"></th>
          <th className="px-4  bg-[#f0fdf4] text-center text-[#053045] text-xl font-semibold mr-2 rounded-t-2xl">
            <Image
              src="/logo.webp"
              alt="Medence Legal Logo"
              width={100}
              height={40}
              className="inline-block mb-1 text-md"
            />
            Medence Legal
          </th>
          <th className="px-4 bg-[#fee2e1] text-center text-[#3b0b0b] font-semibold rounded-t-2xl">
            Other &quot;Typical&quot; Lawyers
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-3 bg-white border-b-1 border-gray-300">
            Pricing model
          </td>
          <td className="px-4 py-3 bg-[#f0fdf4] border-b-1 border-gray-300">
            Transparent subscription & fixed fees
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border-b-1 border-gray-300">
            Hourly billing & unpredictable extras
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3 bg-white border-b-1 border-gray-300">
            Access & availability
          </td>
          <td className="px-4 py-3 bg-[#f0fdf4] border-b-1 border-gray-300">
            Online portal & faster response times
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border-b-1 border-gray-300">
            Office hours, slower callbacks
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3 bg-white border-b-1 border-gray-300">
            Technology
          </td>
          <td className="px-4 py-3 bg-[#f0fdf4] border-b-1 border-gray-300">
            AI-assisted docs, centralized dashboard
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border-b-1 border-gray-300">
            Manual paperwork and email threads
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3 bg-white border-b-1 border-gray-300">
            Lawyer matching
          </td>
          <td className="px-4 py-3 bg-[#f0fdf4] border-b-1 border-gray-300">
            Curated, domain-specific matches
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border-b-1 border-gray-300">
            Generic assignment, variable expertise
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3 bg-white border-b-1 border-gray-300">
            Turnaround & SLAs
          </td>
          <td className="px-4 py-3 bg-[#f0fdf4] border-b-1 border-gray-300">
            Clear SLAs & predictable delivery times
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border-b-1 border-gray-300">
            No guaranteed timelines, variable delays
          </td>
        </tr>
      </tbody>
    </table>
  );
};
