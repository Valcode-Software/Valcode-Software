import GlassSurface from "../aliados/Aliados";

const HeroGlass = () => {
  return (
    <section className="w-full flex justify-center items-center py-32 bg-black">
      <GlassSurface
        width="100%"
        height={160}
        borderRadius={28}
        blur={14}
        brightness={15}
        opacity={0.9}
        className="shadow-xl max-w-[420px]"
      >
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white">
            Construimos el futuro
          </h1>
          <p className="mt-2 text-gray-200">
            Ingeniería sólida, diseño inteligente
          </p>
        </div>
      </GlassSurface>
    </section>
  );
};

export default HeroGlass;
