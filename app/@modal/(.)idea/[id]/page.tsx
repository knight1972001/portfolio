import ProjectPage from "@/components/project/ProjectPage";
import { Modal } from "../../(.)project/[id]/modal";
import IdeaPage from "@/components/idea/IdeaPage";

export default function ModalProject({
  params: { id: projectId },
}: {
  params: { id: any };
}) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(`Parallel Intercepting ${projectId}`);

  return (
    <Modal>
      <IdeaPage id={projectId} standalone={false} />
    </Modal>
  );
}
