export default function Body(){
    return(
        <main id="body">
             <div><h1>Faça Conexoes que façam a diferença</h1>
            <form id="form-index">
                <label className="label-form" name="fnome">Email:</label> <br/>
                <input type="text" id="fnome" name="fnome"></input><br/>
                <label className="label-form">Senha:</label> <br/>
                <input type="password" name="fsenha"></input><br/>
                <button type="submit" id="submit-index">Entrar</button>
            </form>
            
            </div>
            <img src="puzle.jpg" width='500px' height='500px'></img>
           
        </main>
    )
}