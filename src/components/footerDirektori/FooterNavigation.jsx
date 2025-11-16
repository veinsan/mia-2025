import { NAV_LINKS } from "./footerConfig";

export default function FooterNavigation() {
  return (
    <nav aria-label="Footer navigation">
      <h3 className="font-bold mb-3">Navigasi</h3>
      {NAV_LINKS.map((item) => (
        <p key={item.name}>
          <a href={item.link} className="hover:underline">
            {item.name}
          </a>
        </p>
      ))}
    </nav>
  );
}