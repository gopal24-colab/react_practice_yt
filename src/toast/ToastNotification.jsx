import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const options = {
  position: "top-left",
  autoClose: 10000,
  background: "darkblue",
};

const toastNotify = () => {
  toast.warning("Hello", options);
  toast.success("Hello", options);
  toast.info("Hello", options);
  toast.warning("Hello", options);
};

const ToastNotification = () => {
  return (
    <>
      <div className="text">
        <input type="button" onClick={toastNotify} value="Click Me!" />
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          mollitia culpa autem accusantium nam iure voluptatum. Quis, alias
          nostrum distinctio voluptates quos laudantium id animi necessitatibus
          nihil? Maxime, nostrum vel. Dolor eius aperiam, architecto velit
          similique deserunt nesciunt impedit enim aut non facilis vero numquam
          doloremque sapiente voluptates placeat sit nihil laborum eaque magnam
          alias veniam perspiciatis. Animi, culpa architecto? Molestiae et dicta
          eveniet esse veritatis, excepturi sunt, consectetur nesciunt hic
          explicabo at aperiam atque labore veniam nulla earum quaerat maiores
          adipisci ab voluptates iusto laborum expedita! Fugiat, eius nulla!
          Expedita debitis iure ratione illo laudantium. Aspernatur dolor
          perspiciatis odio velit recusandae aliquam libero reiciendis
          exercitationem laboriosam natus. Debitis repellat minima quasi
          suscipit assumenda accusantium earum facilis quia excepturi dolore.
          Dolore quas vitae quasi, aliquam facilis laboriosam est explicabo!
          Facilis suscipit placeat modi id debitis atque dolorum consectetur
          impedit quidem? At, cupiditate delectus officia blanditiis dolorem
          dolores. Harum, unde voluptatibus! Distinctio voluptates, delectus
          eius voluptatum voluptatibus dolore dolores quae quibusdam minima, ex
          doloremque quia qui iusto nobis, sint eos exercitationem molestiae
          dolor sequi. Rem pariatur, numquam architecto id recusandae maiores?
          Sint omnis non, doloribus, maxime eum dolores, itaque modi sit placeat
          soluta saepe neque hic delectus voluptatem et molestiae fugiat sunt
          adipisci maiores quo voluptates? Quae explicabo sunt culpa fuga.
          Commodi veniam tempore impedit maiores placeat qui, at praesentium
          velit dignissimos repellat ullam iure corporis modi fugiat fuga
          veritatis dicta dolorem pariatur officia maxime et dolores repellendus
          nostrum! In, magnam! Ipsam adipisci distinctio provident, sequi
          consequuntur eligendi! Quidem, amet cupiditate iste dolorum odio, quod
          accusamus nobis illum obcaecati ullam sint. Corrupti soluta, incidunt
          repudiandae amet esse omnis exercitationem aspernatur atque. Labore
          sint pariatur illo dicta natus blanditiis, rerum nulla, facilis atque
          iure rem amet numquam dolore iste, id nesciunt corrupti dolorem totam
          impedit accusamus soluta sit omnis officia libero! Animi.
        </h4>
        <ToastContainer />
      </div>
    </>
  );
};

export default ToastNotification;
