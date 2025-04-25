import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-orange-400 text-white text-center p-6 mt-auto">
        <div className="flex justify-center space-x-6 mb-3 text-2xl">
          <a
            href="https://github.com/M-muchoki-i"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub title="User 1" />
          </a>
          <a
            href="https://github.com/RobertHaji"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub title="User 2" />
          </a>
          <a
            href="https://github.com/raphaelkihiro"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub title="User 3" />
          </a>
          <a
            href="https://github.com/Techbandit-001"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub title="User 4" />
          </a>
        </div>
        <div className="text-sm">
          &copy; 2025 <span className="font-semibold">Recipe Book</span>. All
          rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
