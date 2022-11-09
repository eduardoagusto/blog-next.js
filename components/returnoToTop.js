import { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
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
    <div className="fixed md:bottom-8 md:right-8 bottom-4 right-4 ">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "visible" : "invisible",
          "p-2 inline-flex items-center animate-bounce "
        )}
      >
        <HiChevronUp
          className="md:h-8 md:w-8 h-6 w-6 text-teal-400 hover:text-teal-600 "
          aria-hidden="true"
        />
      </button>
    </div>
  );
};
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
