"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import Image from "next/image";

function Courses() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 px-4">
      <h1 className="text-2xl md:text-4xl text-center font-sans font-bold mb-10 text-white">
        Discover {courseData.courses.length} Expertly Curated{" "}
        {courseData.courses.length > 1 ? "Courses" : "Course"}
      </h1>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {courseData.courses.map((item) => (
          <CardContainer className="inter-var" key={item?.id}>
            <CardBody className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-violet-500/50 shadow-xl hover:shadow-violet-500/20 transition-all duration-300 dark:bg-black rounded-2xl w-[90vw] sm:w-[28rem] p-6 relative group/card hover:scale-[1.015]">
              <CardItem
                translateZ="50"
                className="text-xl sm:text-2xl font-semibold text-white tracking-tight"
              >
                {item?.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-sm text-neutral-300 mt-3 leading-relaxed line-clamp-3"
              >
                {item?.description}
              </CardItem>

              <CardItem
                translateZ="100"
                className="w-full mt-6 rounded-xl overflow-hidden"
              >
                <Image
                  src={item?.image}
                  height={1000}
                  width={1000}
                  className="h-56 w-full object-cover rounded-xl transition-transform duration-300 group-hover/card:scale-105"
                  alt="course thumbnail"
                />
              </CardItem>

              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="a"
                  // href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Courses;
