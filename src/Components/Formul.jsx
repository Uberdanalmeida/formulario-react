function Formul() {
    return(
        <div className="formu">
            <form action="">
                <h1>Preencha o formulario</h1>
                <p>Nome: <input type="text" name="" id="" /></p>
                <p>Email: <input type="email" name="" id="" /></p>
                <p>Senha: <input type="password" name="" id="" /></p>
                <p><input  className="button" type="button" value="ENTRAR" /></p>
                <p className="recuperar">Esqueceu a senha? <a href="#">Recuperar</a></p>
            </form>
        </div>
    )
}

export default Formul