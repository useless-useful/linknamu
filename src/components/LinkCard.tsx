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
      className="block w-full rounded-3xl border border-white/70 bg-white/45 px-6 py-[1.125rem] text-center text-base font-semibold text-foreground shadow-[0_8px_24px_-8px_rgb(120_70_30/0.16),inset_0_1px_0_rgb(255_255_255/0.7)] backdrop-blur-xl backdrop-saturate-150 transition duration-200 hover:bg-white/60 hover:shadow-[0_12px_28px_-8px_rgb(120_70_30/0.22),inset_0_1px_0_rgb(255_255_255/0.8)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/60 active:bg-white/50 motion-reduce:transition-none"
    >
      {title}
    </a>
  );
}
