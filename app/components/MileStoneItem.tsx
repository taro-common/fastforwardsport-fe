import { useLocale } from "next-intl";
import { MileStone } from "../api/milestones/types";
import { Link } from "@/i18n/routing";

export default function MileStoneItem({ mileStone }: { mileStone: MileStone }) {
  const locale = useLocale();

  const title = locale === "en" ? mileStone.title_en : mileStone.title_th;
  const description =
    locale === "en" ? mileStone.description_en : mileStone.description_th;
  return (
    <Link
      href={`/milestones/${mileStone.documentId}`}
      className="block group overflow-hidden hover:border-accent-yellow transition-all duration-300 w-52 shrink-0"
    >
      <div className="relative h-65 overflow-hidden">
        <img
          src={mileStone.image.url}
          alt={mileStone.image.url}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`text-black text-xs font-bold px-3 py-1.5 bg-accent-yellow`}
          >
            {mileStone.year}
          </span>
        </div>
      </div>
      <div className="py-4">
        <div className="flex flex-col justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-accent-purple line-clamp-2">
            {title}
          </h3>
        </div>
        {/* <p className="text-zinc-600 text-sm line-clamp-2">{description}</p> */}
        <p className="text-accent-purple text-sm font-semibold mt-4 flex items-center">
          Read More{" "}
          <span className="ml-2 group-hover:ml-3 transition-all duration-300">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
