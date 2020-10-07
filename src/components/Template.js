import React from 'react';
import {numeroALetras} from "../numeroALetras";
export const Template = ({values}) => {
  return (
    <React.Fragment>
      <div id="source-html" className="page p-3">
        <center>
          <div></div>
          <span style={{ fontSize: "13px" }}>
            <b>RNC #-##-#####-#, RNL #-##-######-####</b>
          </span>
          <span style={{ fontSize: "11.5px" }}>
            <div>Plantilla de contratos - Desarrollado con React</div>
            Teléfonos: ###-###-####
          </span>
        </center>
        <br />
        <br />
        <br />
        <br />
        <div style={{ fontSize: "14px" }}>
          6 de Octubre de 2020
          <br />
          Santo Domingo, R.D
        </div>
        <br />
        <br />
        <br />
        <div style={{ fontSize: "14px" }}>
          Distinguidos señores del {values.bankName}:
        </div>
        <br />
        <br />
        <br />
        <div>
          <p style={{ fontSize: "14px" }}>
            Por medio de la presente nos dirigimos a ustedes para certificar que
  el(la) señor(a) <b>{(values.name).toUpperCase()}</b> portador(a) de la cédula <b>No. {values.identification}</b>{" "}
            labora en nuestra empresa en la posición <b>{values.position}</b> desde el{" "}
            <b>6 de Octubre de 2020</b>, devengando un salario por hora de{" "}
            <b>RD${values.salary} {numeroALetras(values.salary)} CON 00/100</b>, sin sus respectivos
            incentivos incluidos. Solicitamos la apertura de una cuenta nomina
            en su banco.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ fontSize: "14px" }}>
          <span style={{ fontSize: "15px" }}>
            <b>{(values.attendedBy).toUpperCase()}</b>
          </span>
          <br />
          Coordinadora de Reclutamiento
          <br />
          Unboxing Software
        </div>
      </div>
    </React.Fragment>
  );
};
