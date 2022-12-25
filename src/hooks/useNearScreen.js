import { useEffect, useRef, useState } from "react";

export const useNearScreen = () => {
  const photoContainer = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(photoContainer.current);
  }, [photoContainer]);

  return [show, photoContainer];
};
