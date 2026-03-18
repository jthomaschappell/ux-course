import { COURSE_INTRO } from '../data/days';

export function CourseIntro() {
  return (
    <section className="course-intro" aria-label="Course introduction">
      <p>{COURSE_INTRO}</p>
    </section>
  );
}
