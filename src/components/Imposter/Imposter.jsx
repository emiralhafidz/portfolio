import React from "react";
import "./Imposter.css";

const Imposter = () => {
  return (
    <>
      <div className="imposterWrapper">
        <div className="item content1">
          <h2>IMPOSTER</h2>
          <p className="textImposter1">At times, I feel like an imposter.</p>
          <p className="textImposter2">
            Every year, I will always pick some things to focus on learning.
            Focusing on just enough stuff in a year helped me learn far and
            deep. And as I try new things every year, I feel like an imposter.
          </p>
        </div>
        <hr />
        <div className="item content2">
          <h3>
            These days, I am immersed in learning full-stack development,
            focusing on Node.js and MongoDB. Additionally, I am delving into
            Arduino, particularly in the realm of IoT
          </h3>
          <p>
            <span>Co-authoring a book.</span> With my two friends I met online,
            Alice and Gladys, I am co-authoring a book called “Before the Good
            Things Come.” It’s a book about career progressions for fresh grads
            and seasoned professionals. This is a book that I wished I had read
            when I started my career.
          </p>
          <br />
          <p>
            <span>Learning 3D design.</span> I have always been a tinkerer.
            Every year, I will focus on picking up a new skill or mastering a
            new tool. Previously I learned how to write, draw comic strips, and
            grow my online presence. This year, it’s about creating magic in 3D.
          </p>
          <br />
          <p>
            <span>Writing.</span> I have been and always will be writing every
            day. It’s a habit that I picked up early in my career. To me,
            writing clarifies my thinking. And these days, I am lucky enough to
            have people who appreciate me for my writing. It’s a dream come
            true.
          </p>
        </div>
      </div>
    </>
  );
};

export default Imposter;
