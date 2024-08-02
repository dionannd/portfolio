interface TitlePageProps {
  title: string;
}

export function TitlePage(props: TitlePageProps) {
  return (
    <h1 className='font-medium text-2xl mb-8 tracking-tighter'>
      {props.title}
    </h1>
  );
}
