"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import { MileStone } from "@/app/api/milestones/types";
import { getMilestoneById } from "@/app/api/milestones/api";

export default function MilestoneDetailPage() {
  const params = useParams<{ documentId: string }>();
  const documentId = params?.documentId;
  const locale = useLocale();

  const [milestone, setMilestone] = useState<MileStone | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMilestone = async () => {
      if (!documentId) return;

      try {
        const response = await getMilestoneById(documentId);
        setMilestone(response);
      } catch (err) {
        console.error("Failed to load milestone:", err);
        setError("Failed to load milestone. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMilestone();
  }, [documentId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-600">Loading...</p>
      </div>
    );
  }

  if (error || !milestone) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-zinc-600 mb-4">{error || "Milestone not found"}</p>
        <Link
          href="/milestones"
          className="inline-flex items-center gap-2 text-accent-yellow hover:text-accent-lime transition-colors"
        >
          <IconArrowLeft size={20} />
          Back to About
        </Link>
      </div>
    );
  }

  const title = locale === "th" ? milestone.title_th : milestone.title_en;
  const description =
    locale === "th" ? milestone.description_th : milestone.description_en;
  const content = locale === "th" ? milestone.content_th : milestone.content_en;

  return (
    <section className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-28">
      {/* Back Button */}
      <div>
        <Link
          href="/about"
          className="pt-16 md:pt-20 pb-6 flex items-center gap-2 hover:text-accent-purple transition-colors cursor-pointer font-semibold"
        >
          <IconArrowLeft size={16} />
          <p>About</p>
        </Link>
        <img
          src={milestone?.image?.url}
          alt={title}
          className="h-80 sm:100 lg:h-120 w-full object-cover"
        />
      </div>

      <div className="mt-8">
        <div className="flex gap-2 items-center">
          <div
            className={`px-4 py-2 bg-accent-yellow text-black text-xs font-bold inline-block`}
          >
            <p>{milestone.year}</p>
          </div>
          <div className="flex gap-1 items-center">
            <IconCalendar
              size={20}
              className="inline-block mr-1 text-zinc-400"
            />
            <p className="text-zinc-400">
              {milestone.publishedAt
                ? new Date(milestone.publishedAt).toLocaleDateString(
                    locale === "th" ? "th-TH" : "en-GB",
                    { year: "numeric", month: "long", day: "numeric" },
                  )
                : "-"}
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight my-6">
          {title}
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          {description}
        </p>
      </div>
      <div className="h-px bg-zinc-800 my-10"></div>
      <div
        className="prose prose-zinc max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
