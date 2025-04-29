import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface LinkItem {
  text: string;
  path: string;
}

const links: LinkItem[] = [
  { text: 'Privacy Policy', path: '/privacy-policy' },
  { text: 'Terms of Service', path: '/terms-of-service' },
  { text: 'Pricing Policy', path: '/pricing-policy' },
  { text: 'Editor Policy', path: '/editor-policy' },
];

const MainFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">GW</span>
            </div>
            <span className="text-gray-700 font-semibold text-base">
              © {currentYear} gogetwell.ai
            </span>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/gogetwellai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 hover:bg-indigo-50 transition"
            >
              <FaTwitter
                size={18}
                className="text-gray-500 group-hover:text-indigo-600 transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/gogetwellai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 hover:bg-indigo-50 transition"
            >
              <FaLinkedinIn
                size={18}
                className="text-gray-500 group-hover:text-indigo-600 transition-colors"
              />
            </a>
          </div>
        </div>

        {/* Bottom text for mobile */}
        <div className="mt-10 text-center text-xs text-gray-400 md:hidden">
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
