import ProjectPage from "@/components/project/ProjectPage";

export default function ProjectPageStatic({
  params: { id },
}: {
  params: { id: any };
}) {
  console.log(`Into ${id} static`);

  return <ProjectPage id={id} standalone={true} />;
}
