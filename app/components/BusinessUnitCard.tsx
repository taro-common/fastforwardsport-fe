type BusinessUnit = {
  tag: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

const TAG_COLORS: Record<string, string> = {
  MOTORSPORT: "bg-accent-yellow text-black",
  "FAST-S": "bg-accent-purple text-white",
  "Engineering & R&D": "bg-accent-lime text-black",
  DISTRIBUTOR: "bg-white text-black",
};

export default function BusinessUnitCard({ unit }: { unit: BusinessUnit }) {
  const tagColor = TAG_COLORS[unit.tag] ?? "bg-accent-yellow text-black";

  return (
    <div className="group relative flex flex-col overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-accent-yellow transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      {/* Tag badge */}
      <span
        className={`${tagColor} text-xs font-bold px-3 py-1.5 tracking-wide`}
      >
        {unit.tag}
      </span>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white leading-snug group-hover:text-accent-yellow transition-colors duration-200">
            {unit.title}
          </h3>
          <p className="text-zinc-500 text-xs mt-1">{unit.date}</p>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed flex-1">
          {unit.description}
        </p>

        {/* Divider + arrow */}
        <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
            Learn More
          </span>
          <span className="text-accent-yellow font-bold transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </div>
  );
}
