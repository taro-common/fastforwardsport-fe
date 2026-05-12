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
    <div className="group relative flex overflow-hidden rounded-md border border-zinc-200 bg-white transition-all duration-300 hover:translate-x-10 cursor-pointer z-30">
      {/* Image */}
      <div className="flex flex-col p-4">
        {/* Tag badge */}
        <span className="inline-flex w-fit text-xs font-bold tracking-wide text-accent-purple">
          {unit.tag}
        </span>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-bold leading-snug transition-colors duration-200">
            {unit.title}
          </h3>

          <p className="text-zinc-600 text-sm leading-relaxed flex-1">
            {unit.description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-2 bg-accent-purple opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </div>
  );
}
