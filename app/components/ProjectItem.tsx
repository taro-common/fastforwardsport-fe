type Project = {
  tag: string;
  title: string;
  date: string;
  description: string;
  image: string;
  color: string;
};

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-accent-yellow transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`${project.color} text-black text-xs font-bold px-3 py-1.5`}
          >
            {project.tag}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-zinc-500 text-xs">{project.date}</p>
        </div>
        <p className="text-zinc-400 text-sm">{project.description}</p>
      </div>
    </div>
  );
}
