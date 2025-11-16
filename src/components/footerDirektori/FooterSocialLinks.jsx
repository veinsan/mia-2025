import { SOCIAL_LINKS } from "./footerConfig";

export default function FooterSocialLinks() {
  return (
    <nav aria-label="Social media">
      <h3 className="font-bold mb-3">Media Sosial</h3>
      {SOCIAL_LINKS.map((s) => (
        <p key={s.name}>
          <a
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {s.name}
          </a>
        </p>
      ))}
    </nav>
  );
}