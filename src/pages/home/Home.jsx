import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-end">
      {/* Contenido principal vacío por ahora, el footer se empuja al final */}
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Home;