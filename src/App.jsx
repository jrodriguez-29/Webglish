import React from 'react';
import './App.css';

function Encabezado() {
  return (
    <header className="header-box">
      <h1>Portal del Proyecto de Grado</h1>
      <p>Institución Educativa - Educación Media Technical</p>
    </header>
  );
}

function Presentacion() {
  return (
    <section className="card-box">
      <h2>Webglish</h2>
      <p><strong>Estado del Proyecto:</strong> Fase de Desarrollo y Prototipado</p>
      <p>
        Este proyecto surge como respuesta aquellos estudiantes que desconocen su nivel de ingles y requieren metodos para avanzar en el idioma.
      </p>
    </section>
  );
}

function Objetivos() {
  return (
    <section className="card-box">
      <h3>Objetivo General</h3>
      <p>
        Diseñar e implementar una pagina web funcional de aprendizaje de ingles basado en hardware libre y desarrollo web para la comunidad educativa.
      </p>
    </section>
  );
}

function Integrantes() {
  return (
    <section className="card-box">
      <h3>Equipo de Trabajo</h3>
      <p>Karle Castro y Janna Rodriguez: Desarrollador Front-end y Documentador</p>
      <p>Jesus Alvarez y Luis Saavedra: Técnico en Hardware y Gestión de Datos</p>
    </section>
  );
}
function SolucionTecnica() {
  return (
    <section className="card-box">
      <h3>Solución Técnica</h3>
      <p>
        implementaremos una pagina web capaz de hacer un examen el cual arrojara como resultados el nivel en el idioma el cual el examinado se encuentra,para luego metodos para avanzar el idioma.
      </p>
    </section>
  );
}
export default function App() {
  return (
    <div className="main-container">
      <Encabezado />
      <main>
        <Presentacion />
        <Objetivos />
        <SolucionTecnica />         
        <Integrantes />
      </main>
      <footer className="footer-box">
        <p>2026 - Proyecto de Grado Undécimo</p>
      </footer>
    </div>
  );
}