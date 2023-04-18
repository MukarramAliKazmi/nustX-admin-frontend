import DisciplineCard from "@/components/discipline-card";
import Layout from "@/components/layout";
import { useState, useEffect } from "react";
import axios from "axios";

const Disciplines = () => {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    async function getDisciplines() {
      try {
        let res = await axios.get("https://nustx.herokuapp.com/disciplines");
        setDisciplines(res.data.disciplines);
      } catch (err) {
        console.error(err);
      }
    }
    getDisciplines();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {disciplines.map((discipline: any) => (
          <DisciplineCard
            key={discipline._id}
            name={discipline.name}
            semesters={discipline.semesters}
            students={0}
            teachers={0}
            courses={0}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Disciplines;
