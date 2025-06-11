import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



const About = () => {
    const team = [
        {
            nama: "Abaraham",
            position: "membantu tim untuk membuat fitur search, dan membetulkan beberapa error atau bug dalam web, tidak hanya fitur search abraham juga membuat card, selain itu semua abraham membantu tim untuk menambahkan data data di dalam about us dan juga memberikan animasi kepada card card berita",
            foto: "/assets/Photos/Photo-Abe.jpg",
        },
        {
             nama: "Bagas Aditya",
            position: "membantu tim untuk membangun kerangka web , mulai dari page home , page category , hingga page about us , bagas juga membantu dalam membuat layout di bagian berita , selain itu bagas juga ikut kontribusi dalam pembuatan halaman News Detail, serta membantu memodifikasi navbar nya agar terlihat menarik",
            foto:"/assets/Photos/Photo-Bag.jpg",
        },
        {
             nama: "Raihan Saca",
            position: "membantu tim untuk mencari data data berita yang real time , rehan juga berkontribusi besar dalam pembuatan navbar",
            foto:"/assets/Photos/Photo-Rai.jpg",
        }
    ];

    const projects = [
        {
            judul: "Web E-comerce",
            keterangan: "Project membuat web E-comerce tentang penjualan hp , project ini berjalan dengan baik pada semester 1 kemarin , web ini dibuat menggunakan html dan javascript , serta dibantu oleh bosstrap untuk memperindah tampilan ",
            img: "/assets/Photos/Ss-ECommerce.jpg",
        },
        {
            judul: "Web Berita",
            keterangan: "Project membuat web berita tentang olahraga otak , yang isinya ada catur , bridge , dan juga esport , web ini dibuat menggunakan tailwind dan vite  dengan bantuan tailwind untuk membuat tampilan menjadi indah",
            img: "/assets/Photos/Ss-BeritaOtak.jpg",
        },
        {
            judul: "Web sumpah Pemuda",
            keterangan: "Project membuat web tentang sumpah pemuda , team kita dipercaya untuk membuat ini, web ini dikembangkan menggunakan html dan juga javadcript , untuk css nya team kita menggunakan css murni atau bawaan aplikasi vs code sendiri , dan project ini membuahkan hasil , yaitu menjadi top 50 se indonesia dalam lomba ajang coding",
            img: "/assets/Photos/ss-SumpahPemuda.jpg",
        }
    ];

    return (
    <div className="p-8 space-y-20">
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Team Developer Brainrot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-xl p-4 rounded-md"
            >
              <img
                src={person.foto}
                alt={person.nama}
                className="rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold">{person.nama}</h3>
              <p className="text-gray-600">{person.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Team Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg text-center p-3 rounded-s-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.img}
                alt={project.judul}
                className="w-full h-48 object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold mb-2">{project.judul}</h4>
                <p className="text-gray-600">{project.keterangan}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Team</h2>
        <div className="space-y-2 text-lg">
          <p>
            <FontAwesomeIcon icon={faEnvelope} size="2x mr-2" />
            <a className="text-blue-600 hover:underline">
              BrainrotDev@gmail.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faInstagram} size="2x mr-2" />
            <a className="text-blue-600 hover:underline">
              DeveloperBrainrotOfc.id
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebook} size="2x mr-2" />
            <a className="text-blue-600 hover:underline">
              BelajarBersamaBrainrot
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
