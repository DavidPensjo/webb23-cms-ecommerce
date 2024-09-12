import Button from "./Button";

export default function CategoriesNav({ blok }) {
  return (
    <section className="">
      <nav className="">
        {blok.rectangles.map((rectangle, index) => (
          <Button key={index} blok={rectangle} />
        ))}
      </nav>
    </section>
  );
}
