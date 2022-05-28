export type TStudentListProps = {
  id: number;
  name: string;
  note: number;
};

export default function StudentList({ id, name, note }: TStudentListProps) {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>{`${id + 1}) ${name} -> ${note}`}</li>
      </ul>
    </div>
  );
}
