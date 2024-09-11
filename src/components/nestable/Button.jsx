export default function Button({ blok }) {

  const buttonStyle = blok?.button_style === 'black'
    ? 'bg-black text-white hover:bg-white hover:text-black'
    : 'bg-white text-black hover:bg-black hover:text-white';

  const dynamicStyles = {
    width: blok?.button_width || '160px',
    height: blok?.button_height || '50px',
    fontSize: blok?.font_size || '16px',
  };

  const fontWeightClass = blok?.font_weight === '600' ? 'font-semibold' : 'font-normal';

  return (
    <button 
      className={`inline-block mt-4 ${fontWeightClass} font-[Public Sans] rounded-none text-center border border-[#0D0D0D] ${buttonStyle}`}
      style={dynamicStyles}
    >
      {blok?.button_text}
    </button>
  );
}
