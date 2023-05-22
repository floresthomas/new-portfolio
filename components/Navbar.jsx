import DarkMode from "./DarkMode";

export default function Navbar() {

  return (
    <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="ml-3 flex items-center">
            Hola!
        </a>
        <div>
          <ul className="mr-5 flex text-white">
            <DarkMode/>
          </ul>
        </div>
      </div>
    </nav>
  );
}
