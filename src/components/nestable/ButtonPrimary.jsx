// components/Button.js
export default function Button({ blok }) {
    return (
      <a
        href={blok?.link}
        className="inline-block mt-4 w-[160px] h-[50px] bg-black text-white font-[Public Sans] font-semibold text-[16px] rounded-none hover:border hover:border-[#0D0D0D] hover:bg-black hover:bg-white hover:text-black text-center leading-[50px]
"
      >
        {blok?.button_text}
      </a>
    );
  }
  