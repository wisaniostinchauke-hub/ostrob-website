import TitleBlock from "./TitleBlock";
import Logo from "./Logo";
import { site, telLink, mailtoLink, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--navy-deep)] text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo size={26} tone="dark" />
            <p className="mt-4 max-w-xs text-sm text-white/50">{site.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-3">
            <div>
              <h2 className="mono-label text-[10px] text-white/40">Services</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white">Websites</a></li>
                <li><a href="#services" className="hover:text-white">Applications</a></li>
                <li><a href="#services" className="hover:text-white">Automation</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mono-label text-[10px] text-white/40">Studio</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#process" className="hover:text-white">Process</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#builds" className="hover:text-white">What We Build</a></li>
                <li><a href="#work" className="hover:text-white">Why {site.shortName}</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h2 className="mono-label text-[10px] text-white/40">Contact</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>
                  <a href={mailtoLink} className="break-all hover:text-white">{site.email}</a>
                </li>
                <li>
                  <a href={telLink} className="hover:text-white">{site.phoneDisplay}</a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="text-white/50">{site.region}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h2 className="mono-label text-[10px] text-white/40">Business Hours</h2>
          <dl className="mt-3 grid gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {site.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4 sm:block">
                <dt className="text-white/50">{h.day}</dt>
                <dd className="text-white/80 sm:mt-1">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <span className="mono-label text-[10px] text-white/35">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <TitleBlock sheet="FOOTER" rev="02" tone="dark" />
        </div>
      </div>
    </footer>
  );
}
