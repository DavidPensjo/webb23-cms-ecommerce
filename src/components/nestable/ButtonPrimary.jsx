import Link from 'next/link';

export default function Button({ blok }) {
  return (
    <Link href={blok?.button_link}>
      <button className="inline-block mt-4 w-[160px] h-[50px] bg-black text-white font-[Public Sans] font-semibold text-[16px] rounded-none text-center leading-[50px] border border-[#0D0D0D] hover:border hover:border-[#0D0D0D] hover:bg-white hover:text-black">
        {blok?.button_text}
      </button>
    </Link>
  );
}
