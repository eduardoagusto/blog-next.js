import { useEffect, useState } from "react";

export function useReadingProgress() {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY;
      console.log(currentProgress);
      let scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }

    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return completion;
}

export default function NavBar() {
  const completion = useReadingProgress();
  return (
    <span
      style={{
        transform: `translateX(${completion - 100}%)`,
      }}
      className={`fixed bottom-0 w-screen transition-transform duration-150 h-1 bg-teal-400 z-50 top-0`}
    />
  );
}
