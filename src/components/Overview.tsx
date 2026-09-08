import type { ReactNode } from "react";
import { SocialIcon } from "react-social-icons";

type InfoBlock = {
  title: string;
  content: ReactNode;
};

const divs: InfoBlock[] = [
  {
    title: "Njoroge Muigai",
    content:
      "Journalist and documentary storyteller focused on climate, technology, governance, and development across Africa.",
  },
  {
    title: "Location",
    content:
      "Experienced senior international journalist. Has a reporting footprint across Africa, Europe, and the United States; open to relocation.",
  },
  {
    title: "Contact",
    content: (
      <a
        href="mailto:njorogemuigai@gmail.com"
        className="text-inherit hover:text-blue-600 hover:underline underline-offset-4 decoration-1"
      >
        njorogemuigai@gmail.com
      </a>
    ),
  },
] as const;

type SociallLink = {
  url: string;
  network: string;
};

const socialLinks: SociallLink[] = [
  {
    url: "https://www.instagram.com/njorogemuigai?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    network: "instagram",
  },
  { url: "https://www.youtube.com/njorogemuigai", network: "youtube" },
  { url: "https://www.linkedin.com/in/njorogemuigai/", network: "linkedin" },
] as const;

export function Overview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 border-b border-light-ink p-4">
        {divs.map((block) => (
          <div className="flex flex-col gap-2 font-body">
            <h3 className="font-tile font-medium text-base/7 tracking-wider">{block.title}</h3>
            <p className="font-normal text-sm">{block.content}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-8 items-center justify-center">
        {socialLinks.map((link) => (
          <SocialIcon url={link.url} key={link.network} className="hover:scale-90" />
        ))}
      </div>
    </div>
  );
}
