import CreateOrgForm from "@/components/Forms/CreateOrgForm";
import getUserId from "@/utils/getUserId";
export default async function Create() {
  const userId = await getUserId();
  return (
    <div>
      Create
      <CreateOrgForm userId={userId} />
    </div>
  );
}
