export default function Hero({ blok }) {
  return (
  
    <section className="flex w-full lg:justify-start justify-center max-w-default mt-5">
      <div className="w-full md:w-1/2 pr-0 flex flex-col lg:justify-start justify-center mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          {blok?.title}
        </h1>
        
        <p className="text-base md:text-lg mb-4">
          {blok?.text}
        </p>
      
      </div>
    </section>
  );
}
