export const Footer = ({ Nombre, edad, parrafo }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Peliculas</a>
          </li>
          <li>
            <a href="#">Recomendaciones</a>
          </li>
        </ul>
      </nav>
      <h2>{Nombre}</h2>
      <h2>{edad}</h2>
      <p>{parrafo}</p>{" "}
    </div>
  );
};
