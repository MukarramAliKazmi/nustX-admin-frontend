import DisciplineCard from "@/components/discipline-card";
import Layout from "@/components/layout";

const Disciplines = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <DisciplineCard
          name="BS Computer engineering"
          semesters={8}
          students={200}
          teachers={30}
          courses={60}
        />
        <DisciplineCard
          name="BS Computer engineering"
          semesters={8}
          students={200}
          teachers={30}
          courses={60}
        />
        <DisciplineCard
          name="BS Computer engineering"
          semesters={8}
          students={200}
          teachers={30}
          courses={60}
        />
        <DisciplineCard
          name="BS Computer engineering"
          semesters={8}
          students={200}
          teachers={30}
          courses={60}
        />
      </div>
    </Layout>
  );
};

export default Disciplines;
