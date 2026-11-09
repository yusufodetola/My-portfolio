import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-2 text-cyan-300">
            <FileText size={20} />
            <span className="font-semibold">My Curriculum Vitae</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
          <iframe
            src="/images/Odetola_Yusuf_CV.pdf"
            title="Yusuf Odetola CV"
            className="h-[85vh] min-h-[650px] w-full"
          />
        </div>
      </div>
    </main>
  );
}
