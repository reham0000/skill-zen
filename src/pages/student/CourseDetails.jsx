import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);

  const { allCourses, calculateRating } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="flex md:flex-row  flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left bg-gradient-to-b from-cyan-100/70">
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 "></div>
        {/* Left column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="font font-semibold text-gray-800 text-3xl md:text-4xl lg:text-5xl">
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>
          {/* review and ratings */}
          <div className="flex items-center space-x-2">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-gray-500">
              {courseData.courseRatings.length}
              {courseData.courseRatings.length > 1 ? "ratings" : "rating"}
            </p>
            <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
          </div>
        </div>
        {/* Right column */}
        <div></div>
      </div>
    </>
  ) : (
    <Loading></Loading>
  );
};

export default CourseDetails;
