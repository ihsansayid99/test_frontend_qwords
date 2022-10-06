import React, { useEffect, useRef, useState } from "react";

export default function Jumbotron() {
  const itemCarousel = [
    {
      title: "Improving people's futures through building",
      content:
        "Develop new solutions to meet changing needs, leveraging our deep customer insight, practical expertise and broad range of capabilities.",
    },
    {
      title: "2. Improving people's futures through building",
      content:
        "2. Develop new solutions to meet changing needs, leveraging our deep customer insight, practical expertise and broad range of capabilities.",
    },
    {
      title: "3. Improving people's futures through building",
      content:
        "3. Develop new solutions to meet changing needs, leveraging our deep customer insight, practical expertise and broad range of capabilities.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const refCarousel = useRef(null);

  const next = () => {
    if (currentSlide >= itemCarousel.length - 1) {
        setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev = () => {
    if (currentSlide === 0) return;
    else setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    refCarousel.current.style.transition = "all 0.2s ease-in-out";
    refCarousel.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <>
      <section className="md:py-6 md:px-20 px-6">
        <div className="overflow-hidden">
            <div className="flex" ref={refCarousel}>
            {itemCarousel?.map((item) => (
                    <div className="w-full flex items-end justify-between flex-shrink-0 box-border">
                        <div className="py-10 md:py-24 md:pl-80 w-full md:w-3/5">
                            <h2 className="text-3xl md:text-6xl font-bold leading-relaxed w-full md:w-3/4">
                            {item.title}
                            </h2>
                        </div>
                        <div className="w-2/5 py-24 hidden md:block">
                            <hr className="w-1/6 my-4" />
                            <h4 className="text-base font-medium text-gray-600 w-60">
                            {item.content}
                            </h4>
                        </div>
                    </div>
            ))}
            </div>
        </div>
        <div className="w-full py-6 flex">
          <div className="mx-auto">
            <button
              className="py-2 px-8 border-2 rounded-3xl text-gray-900 mr-4"
              onClick={prev}
            >
              Back
            </button>
            <button
              className="py-2 px-8 bg-gray-900 rounded-3xl text-white"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
