type TFamilyMemberProps = {
  name: string;
  surname?: string;
};

export default function FamilyMember({ name, surname }: TFamilyMemberProps) {
  return (
    <div>
      {name} <strong>{surname}</strong>
    </div>
  );
}
