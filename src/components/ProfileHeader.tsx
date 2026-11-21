import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="size-32 rounded-full object-cover ring-[5px] ring-white/80 shadow-[0_2px_4px_rgb(120_70_30/0.08),0_12px_24px_-4px_rgb(120_70_30/0.18),0_28px_48px_-12px_rgb(120_70_30/0.22)]"
      />
      <h1 className="mt-7 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-[19rem] text-[15px] leading-relaxed text-muted text-balance">
        {bio}
      </p>
    </header>
  );
}
