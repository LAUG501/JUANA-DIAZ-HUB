import { getCourseBySlug } from "../../../lib/school-service";
import { getSession } from "../../../lib/auth";
import { notFound } from "next/navigation";
import CourseDetailView from "../../../components/school/CourseDetailView";

export const dynamic = "force-dynamic";

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const session = await getSession();
  const course = await getCourseBySlug(params.slug, session?.id);
  if (!course) {
    notFound();
  }

  return <CourseDetailView course={course} />;
}
