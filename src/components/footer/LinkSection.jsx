"use client";

export default function LinkSection({ title, links, ariaLabel }) {
  return (
    <nav aria-label={ariaLabel}>
      {title && <h3 className="font-bold mb-3">{title}</h3>}
      {links.map((item) => (
        <p key={item.name}>
          <a
            href={item.link}
            className="hover:underline"
            {...(item.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {item.name}
          </a>
        </p>
      ))}
    </nav>
  );
}