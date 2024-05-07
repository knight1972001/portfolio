export default function IdeaPageStatic({
  params: { id },
}: {
  params: { id: any };
}) {
  console.log(`Into ${id} static`);

  return <div>Hello from Idea {id}</div>;
}
