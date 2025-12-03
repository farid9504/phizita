export default function TitleForm({ title }: { title: string }) {
  return (
    <h2 className="text-[var(--defaultColor)] font-medium">
      {title}
    </h2>
  );
}
