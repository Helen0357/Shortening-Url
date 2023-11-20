import showcase from "/images/2851877.jpg"

export default function Showcase() {
  return (
    <>
      <section className="py-10 lg:py-20 ">
        <div className="max-width mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl mb-5 font-bold text-slate-800">
              More than just shorter links
            </h1>
            <p className="lg:text-lg login mb-8">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn-cta rounded-full">Get Started</button>
          </article>

          <article>
            <img src={showcase} alt="Shortly" />
          </article>
        </div>
      </section>
    </>
  )
}
