import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-teal-400 hover:bg-teal-600 inline-flex items-center rounded-full p-1 text-white shadow-sm transition-opacity "
        )}
      >
        <GoArrowUp className="h-5 w-5 text-zinc-900" aria-hidden="true" />
      </button>
    </div>
  );
};
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
