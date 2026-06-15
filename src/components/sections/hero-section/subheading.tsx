import Image from "next/image";

type PropsType = {
  text: string;
};

export function Subheading({ text }: PropsType) {
  return (
    <div className="rounded-full mb-6 max-w-fit mx-auto border border-gray-300 dark:border-white/20">
      <div className="bg-transparent dark:bg-transparent py-2 text-sm items-center gap-2 px-5 inline-flex text-gray-600 dark:text-white/90 rounded-full">
        <Image
          src="/images/hero/icons/okicon.svg"
          alt=""
          width={16}
          height={16}
          className="dark:brightness-0 dark:invert"
        />
        <p>{text}</p>
      </div>
    </div>
  );
}
