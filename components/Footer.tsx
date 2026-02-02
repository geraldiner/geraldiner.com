import config from "../content/config/config.json";

export default function Footer() {
  const emailItem = config.contactLinks.find((item) => !item.link);
  return (
    <footer className="w-full bg-off-white dark:bg-dark-black">
      <div className="w-full md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-5 py-16 mt-16">
        <p>
          © {new Date().getFullYear()} Geraldine Ragsac. All rights reserved.
        </p>
        <div>
          {emailItem && <p>{emailItem.label}</p>}
          <nav className="grid grid-cols-1 gap-4">
            {config.contactLinks.map((item) => {
              if (item.link) {
                return (
                  <a
                    key={item.link}
                    href={item.link}
                    className="w-fit no-underline!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                );
              }
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
