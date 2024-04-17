import ProjectPage from "@/components/project/ProjectPage";
import { Modal } from "./modal";

export default function ModalProject({
  params: { id: projectId },
}: {
  params: { id: any };
}) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(`Parallel Intercepting ${projectId}`);

  return (
    <Modal>
      <ProjectPage id={projectId} standalone={false} />
    </Modal>
  );
}
