type Props = {
  title: string;
  image: JSX.Element;
  text: string;
};

export default function OrgSetupCard({ title, image, text }: Props) {
  return (
    <div className="flex flex-col justify-between h-72 w-72 md:h-80 md:w-80 border border-white shadow-md shadow-white p-6 hover:shadow-red-300 hover:border-red-300">
      <h3 className="text-4xl text-center font-bold">{title}</h3>
      <div className="flex justify-center">{image}</div>
      <p className="text-center">{text}</p>
    </div>
  );
}
