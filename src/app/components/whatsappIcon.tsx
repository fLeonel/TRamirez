import Link from "next/link";
import Image from "next/image";

const WhatsappIcon = () => {
  const whatsappNumber = "+50255248332";
  const message = "¡Hola! Estoy interesado en sus servicios.";

  return (
    <>
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600"
      >
        <Image
          src="/assets/whatsapp-icon.png"
          alt=""
          width={350}
          height={350}
          className="w-10 h-10"
        />
      </Link>
    </>
  );
};

export default WhatsappIcon;
