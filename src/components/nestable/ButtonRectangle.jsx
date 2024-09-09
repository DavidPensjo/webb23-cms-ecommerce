import Link from 'next/link';

export default function Button({ blok }) {
  // Determine the button style based on the Storyblok value
  const buttonStyle = blok?.button_style === 'black'
    ? 'bg-black text-white hover:bg-white hover:text-black'
    : 'bg-white text-black hover:bg-black hover:text-white';
    
  return (
    <Link href={blok?.button_link}>
      <button
        className={`inline-block mt-4 w-[95px] h-[31px] font-[Public Sans] font-normal text-[13px] rounded-none text-center border border-[#0D0D0D] ${buttonStyle}`}
      >
        {blok?.button_text}
      </button>
    </Link>
  );
}
