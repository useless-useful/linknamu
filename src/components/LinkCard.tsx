type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-foreground/15 px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:bg-foreground/5 active:translate-y-0"
    >
      {title}
    </a>
  );
}
