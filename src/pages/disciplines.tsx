import DisciplineCard from "@/components/discipline-card";
import Layout from "@/components/layout";
import useFetch from "@/hooks/use-fetch";

// Create an interface for the discipline object
interface Discipline {
  discipline: {
    _id: string;
    name: string;
    semesters: number;
  };
  studentCount: number;
  teacherCount: number;
  courseCount: number;
}

const Disciplines = () => {
  // Use the custom hook to fetch data from the API
  const { data, error } = useFetch("https://nustx.herokuapp.com/disciplines");

  // Handle loading and error states
  if (error) return <div>Something went wrong</div>;
  if (!data) return <div>Loading...</div>;

  // Destructure the disciplines array from the data object and annotate it as Discipline[]
  const { disciplines }: { disciplines: Discipline[] } = data;

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {disciplines.map((discipline) => (
          <DisciplineCard
            key={discipline.discipline._id}
            name={discipline.discipline.name}
            semesters={discipline.discipline.semesters}
            students={discipline.studentCount}
            teachers={discipline.teacherCount}
            courses={discipline.courseCount}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Disciplines;
