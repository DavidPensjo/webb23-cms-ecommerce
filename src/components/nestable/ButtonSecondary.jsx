import Link from 'next/link';

export default function Button({ blok }) {
  // Determine the width class based on the Storyblok width value
  const widthClass = blok?.button_width === '194px' ? 'w-[194px]' : 'w-[160px]';

console.log(blok);

  return (
    <Link href={blok?.button_link}>
      <button
        className={`inline-block mt-4 ${widthClass} h-[50px] text-black font-[Public Sans] font-semibold text-[16px] rounded-none text-center leading-[50px] border border-[#0D0D0D] hover:bg-black hover:text-white`}
      >
        {blok?.button_text}
      </button>
    </Link>
  );
}
