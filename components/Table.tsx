import Image from "next/image";

export const Table: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <table className={`w-full text-left ${className}`}>
      <thead>
        <tr>
          <th className="px-4 py-3 bg-white border"></th>
          <th className="px-4 py-3 bg-[#f0fdf4] text-[#053045] text-xl border font-semibold">
            <Image
              src="/logo.webp"
              alt="Medence Legal Logo"
              width={100}
              height={40}
              className="inline-block mb-1 text-md"
            />
            Medence Legal
          </th>
          <th className="px-4 py-3 bg-[#ff6b6b]/30 text-[#3b0b0b] border font-semibold">
            Other &quot;Typical&quot; Lawyers
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-3 bg-white border">Pricing model</td>
          <td className="px-4 py-3 bg-[#f0fdf4] border">
            Transparent subscription & fixed fees
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border">
            Hourly billing & unpredictable extras
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3 bg-white border">Access & availability</td>
          <td className="px-4 py-3 bg-[#f0fdf4] border">
            Online portal & faster response times
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border">
            Office hours, slower callbacks
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3 bg-white border">Technology</td>
          <td className="px-4 py-3 bg-[#f0fdf4] border">
            AI-assisted docs, centralized dashboard
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border">
            Manual paperwork and email threads
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3 bg-white border">Lawyer matching</td>
          <td className="px-4 py-3 bg-[#f0fdf4] border">
            Curated, domain-specific matches
          </td>
          <td className="px-4 py-3bg-[#ff6b6b]/30 border">
            Generic assignment, variable expertise
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3 bg-white ">Turnaround & SLAs</td>
          <td className="px-4 py-3 bg-[#f0fdf4] border">
            Clear SLAs & predictable delivery times
          </td>
          <td className="px-4 py-3 bg-[#ff6b6b]/30 border">
            No guaranteed timelines, variable delays
          </td>
        </tr>
      </tbody>
    </table>
  );
};
