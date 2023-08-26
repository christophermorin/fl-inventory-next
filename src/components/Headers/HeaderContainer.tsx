export default function HeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="p-2 flex justify-between items-center shadow-md shadow-slate-300">
      {children}
    </header>
  );
}
