
function Section({ children, needMB = false }) {
  return (
    <section className={`mt-5 ${needMB && "mb-15"}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

export default Section;
