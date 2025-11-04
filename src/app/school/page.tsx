import { listCourses } from "../../lib/school-service";
import { getSession } from "../../lib/auth";
import SchoolOverview from "../../components/school/SchoolOverview";

export const dynamic = "force-dynamic";

export default async function SchoolPage() {
  const session = await getSession();
  const courses = await listCourses(session?.id);
  return <SchoolOverview courses={courses} />;
}
