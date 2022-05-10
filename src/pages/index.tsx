import s from "assets/styles/home.module.scss";
import { Layout } from "layout";
import gate from "../gate";
import { ResponseGetProjectsDataType } from "../gate/inerface/projects.interface";
import {Section} from "components/explore";
interface HomePageProps {
  projects: ResponseGetProjectsDataType[];
}

export default function Home({ projects }: HomePageProps) {

  return (
    <div className={s.body}>
      <Layout footer header>
        <Section  />
      </Layout>
    </div>
  );
}

// export async function getServerSideProps() {
//   try {
//     const projects = await gate.getProjects();
//     console.log(
//       projects
//     );
//     return {
//       props: { projects }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     console.log(
//       error
//     );
//     return {
//       props: {
//         projects: [],
//       },
//     };
//   }
// }
