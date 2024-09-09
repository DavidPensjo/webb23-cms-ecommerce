// components/Button.js
export default function Button({ blok }) {
  return (
    <a
      href={blok?.link}
      className="inline-block mt-4 w-[160px] h-[50px] bg-white text-black font-[Public Sans] font-semibold text-[16px] rounded-none text-center leading-[50px] border border-[#0D0D0D] hover:bg-black hover:text-white"
    >
      {blok?.button_text}
    </a>
  );
}
