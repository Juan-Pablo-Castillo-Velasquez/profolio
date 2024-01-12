import { useForm } from '@formspree/react';

const ContactForm = () => {
  const [state, ] = useForm("xbjnlgqz");

  return (
    <div className="max-w-md mx-auto mt-8 p-4 sm:p-8 bg-white rounded-xl shadow-md relative" style={{ zIndex: 1000 }}> {/* Ajusta el valor de zIndex según sea necesario */}
      <form action="https://formspree.io/f/xbjnlgqz" method="POST">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2  text-black border rounded-md w-full"
            placeholder="juanpablo2007k@gmail.com"
            defaultValue="juanpablo2007k@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 border text-black rounded-md w-full"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="fontStyle" className="block text-sm font-medium text-black">
            Estilo de letra
          </label>
          <select id="fontStyle" name="fontStyle" className="mt-1 p-2 text-black border rounded-md w-full">
            <option value="arial">Arial</option>
            <option value="times-new-roman">Times New Roman</option>
            {/* Agrega más opciones según tus preferencias */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-black">
            Adjuntar imagen
          </label>
          <input type="file" id="image" name="image" accept="image/*" className="mt-1 p-2 border text-black rounded-md w-full" />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full"
        >
          Enviar
        </button>
      </form>

      {state.succeeded && <p className="mt-4 text-green-600">¡Gracias por tu interés!</p>}
    </div>
  );
};

export default ContactForm;
