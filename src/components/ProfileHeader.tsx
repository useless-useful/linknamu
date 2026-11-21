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
        className="size-40 rounded-full object-cover ring-4 ring-foreground/10"
      />
      <h1 className="mt-5 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-foreground/60">{bio}</p>
    </header>
  );
}
