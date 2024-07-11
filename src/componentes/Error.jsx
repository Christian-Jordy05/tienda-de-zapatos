

function Error() {
  
  return (
    //aqui hago un div que va a contener las letras para cuando un usuario se intente meter una pag que no puede o que no exista
    <div className="glitch-container">
      <div className="glitch-text" data-text="PÁGINA NO EXISTE!">PÁGINA NO EXISTE!</div>
    </div>
  );
}

export default Error;