import React, { useState, useEffect } from "react";
import style from "./infocat.module.css";
import lamiagiornata from "../../Assets/infocatimgs/lamiagiornata.png";
import pianificato from "../../Assets/infocatimgs/pianificato.png";
import assegnate from "../../Assets/infocatimgs/assegnate a me.png";
import attivita from "../../Assets/infocatimgs/attività.png";
function InfoCat({ categoryTitle }) {
  const [catimg, setcatimg] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (categoryTitle === "La mia giornata") {
      setcatimg(lamiagiornata);
      setDescription(
        "Porta a termine il lavoro con La mia giornata, un elenco che si aggiorna ogni giorno."
      );
    } else if (categoryTitle === "Pianificato") {
      setcatimg(pianificato);
      setDescription(
        "Le attività con scadenze o promemoria sono visualizzate qui."
      );
    } else if (categoryTitle === "Assegnate a me") {
      setcatimg(assegnate);
      setDescription(
        "Le attività che ti sono state assegnate sono visualizzate qui."
      );
    } else if (categoryTitle === "Attività") {
      setcatimg(attivita);
      setDescription(
        "Le attività vengono visualizzate qui se non fanno parte di alcun elenco creato da te."
      );
    }
  }, [categoryTitle]);

  return (
    <>
      {categoryTitle !== "Importante" ? (
        <div className={style.infocatwrap}>
          <div className={style.infocatimg}>
            {" "}
            <img src={catimg} alt="category info" />
          </div>
          {categoryTitle === "La mia giornata" ? (
            <div className={style.infocath3}>
              <h3>Concentrati sulla tua giornata</h3>
            </div>
          ) : null}
          <div className={style.infocatdescription}>
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default InfoCat;
