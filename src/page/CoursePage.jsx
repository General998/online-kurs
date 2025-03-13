

import { Title, CardTitle, CourseAbout, CourseCurator,CourseStep, CourseCTA, CourseForWhom, Listings} from "../components";
function CoursePage() {
  return (
    <div className="py-[120px]">
      <div className="bg-[#FEDECF]">
        <div className="container py-[120px]  ">
          <Title
            secondaryTitle={"COURSE"}
            primaryTitle={
              "User Experience. Principles of Human-Centered Design"
            }
          />
        </div>
      </div>
      <div>
        <div className="container flex flex-col gap-[180px]">
          <CourseAbout/>
          <CourseCurator/>
          <CourseStep/>
          <CourseCTA/>
          <CourseForWhom/>
        </div>
      </div>
    </div>
  );
}
export default CoursePage;
