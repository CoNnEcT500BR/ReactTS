import FamilyMember from "./FamilyMember";

type TFamilyProps = {
  surname: string;
};

export default function Family({ surname }: TFamilyProps) {
  return (
    <div>
      <FamilyMember name="Pedro" surname={surname} />
      <FamilyMember name="Hugo" surname={surname} />
      <FamilyMember name="Taís" surname="Branda" />
    </div>
  );
}
