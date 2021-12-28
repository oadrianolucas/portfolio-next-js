import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon, BiMenu, BiCodeAlt } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io";
export const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BiSun
          className="h-7 w-7"
          role="button"
          onClick={() => setTheme("ligth")}
        />
      );
    } else {
      return (
        <BiMoon
          className="h-7 w-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div>
      <div className="flex justify-between p-3 pb-1 border-b dark:border-gray-700">
        <div>
          <button className="mobile-menu-button font-bold text-3xl pb-2 md:hidden">
            <BiMenu />
          </button>
          <p className="font-bold text-3xl pb-1 hidden md:block">
            <BiCodeAlt />
          </p>
        </div>
        <div>
          <p className="font-bold text-3xl md:hidden">
            <BiCodeAlt />
          </p>
        </div>
        <div>{renderThemeChanger()}</div>
      </div>
    </div>
  );
};
