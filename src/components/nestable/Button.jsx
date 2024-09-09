import Link from 'next/link';

export default function Button({ blok }) {
  // Determine the button style based on the Storyblok value
  const buttonStyle = blok?.button_style === 'black'
    ? 'bg-black text-white hover:bg-white hover:text-black'
    : 'bg-white text-black hover:bg-black hover:text-white';
    

    const widthClass = `w-[${blok?.button_width || '160px'}]`;
    const heightClass = `h-[${blok?.button_height || '50px'}]`;
    const fontSizeClass = `text-[${blok?.font_size || '16px'}]`;
    const fontWeightClass = blok?.font_weight === '600' ? 'font-semibold' : 'font-normal';


  return (
    <Link href={blok?.button_link}>
      <button 
      className={`inline-block mt-4 ${widthClass} ${heightClass} ${fontSizeClass} ${fontWeightClass} font-[Public Sans] rounded-none text-center border border-[#0D0D0D] ${buttonStyle}`}
      >
        {blok?.button_text}
      </button>
    </Link>
  );
}
