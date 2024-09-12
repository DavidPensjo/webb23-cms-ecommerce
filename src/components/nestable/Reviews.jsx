import React from "react";
import { Star, StarHalf } from "lucide-react";

const Reviews = () => {
  return (
    <div className="w-full flex justify-center mt-52 mb-24">
      <div className="lg:w-[823px] w-[340px]">
        <h3 className=" mb-4">Reviews</h3>
        <div className="">
          <div className="flex justify-between pt-16">
            <div className="relative">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (item, index) => (
                  <Star key={index} fill="#e5e7eb" strokeWidth={0} />
                ))}
              </div>
              <div className="absolute top-0 flex gap-1">
                <Star fill="black" strokeWidth={0} />
                <Star fill="black" strokeWidth={0} />
                <Star fill="black" strokeWidth={0} />
                <Star fill="black" strokeWidth={0} />
                <StarHalf fill="black" strokeWidth={0} />
              </div>
            </div>
            <div className="text-sm">October 21, 2020</div>
          </div>
          <div className="flex justify-between pt-5">
            <h4 className="relative">Amazing and durable</h4>
            <div className="font-bold text-sm">Ryan M</div>
          </div>
          <p className="lg:w-[684px] w-[350px] text-p3 pt-5">
            I am very happy with this chair. The design is elegant and the
            height adjustment feature is easy to use (though I would love
            something with a bit more height range). It is well built and seems
            like it will be long lasting. Is it worth the cost? Not so sure
            about that. There are other equally beautiful and comfortable chairs
            out there that I suspect are as well made and sturdy as this one but
            lower in cost. I did not want Read More
          </p>
          <div className="flex gap-5 pt-5">
            <div className="flex gap-1">
              <div className="">Was this review helpful?</div>
              <div className="cursor-pointer">Yes (2) No (7)</div>
            </div>
            <div className="border-r border-black"></div>
            <div className="cursor-pointer">Flag as inapproriate</div>
          </div>

          <div className="flex justify-between pt-16">
            <div className="relative">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (item, index) => (
                  <Star key={index} fill="#e5e7eb" strokeWidth={0} />
                ))}
              </div>
              <div className="absolute top-0 flex gap-1">
                <Star fill="black" strokeWidth={0} />
                <Star fill="black" strokeWidth={0} />
                <StarHalf fill="black" strokeWidth={0} />
              </div>
            </div>
            <div className="text-sm">October 22, 2020</div>
          </div>
          <div className="flex justify-between pt-5">
            <h4 className="relative">Horrible durability</h4>
            <div className="font-bold text-sm">Bryan M</div>
          </div>
          <p className="lg:w-[684px] w-[350px] text-p3 pt-5">
            This chair is a disaster from start to finish. The design is far
            from elegant—its bulky and awkward to fit into my space. The height
            adjustment feature is frustratingly difficult to use, and it doesnt
            offer enough range. It feels flimsy and cheap, and after just a few
            weeks, the chair started showing signs of wear and tear. The build
            quality is severely lacking, and I doubt it will last much longer.
            For the price, this chair is absolutely not worth it. There are far
            better options that are more durable, comfortable, and cheaper. I
            regret this purchase completely.
          </p>
          <div className="flex gap-5 pt-5">
            <div className="flex gap-1">
              <div className="">Was this review helpful?</div>
              <div className="cursor-pointer">Yes (18) No (2)</div>
            </div>
            <div className="border-r border-black"></div>
            <div className="cursor-pointer">Flag as inapproriate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
