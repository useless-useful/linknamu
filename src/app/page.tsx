import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 더미 데이터: 나중에 실제 내용으로 교체
const profile = {
  name: "김개발",
  bio: "풀스택 개발자: 요즘에는 AI 개발에 관심이 많아요.",
  imageSrc: "https://placehold.co/160x160/orange/white",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 py-12">
      <ProfileHeader {...profile} />
      <ul className="mt-8 flex flex-col gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
