import IdeaPage from "@/components/idea/IdeaPage";

export default function IdeaPageStatic({
  params: { id },
}: {
  params: { id: any };
}) {
  console.log(`Into ${id} static`);

  return <IdeaPage id={id} standalone={true} />;
}
