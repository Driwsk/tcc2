export default function Obras() {
    return (
      <main>
        <div className="h-screen flex justify-center items-center bg-slate-900 px-2">
          <div className="rounded-lg w-100 max-w-full flex justify-left items-left flex-col gap-4">
            <div className="card bg-primary text-primary-content w-96">
              <div className="card-body">
                <h2 className="card-title">Cadastro de Obra</h2>
                <input 
                  className="bg-white rounded-lg"
                  type="nomeObra"
                  placeholder="Insira aqui o nome da obra"
                  />
  
                  <input 
                  className="bg-white rounded-lg"
                  type="nomeObra"
                  placeholder="Insira a sinopse"
                  />
  
                  <input 
                  className="bg-white rounded-lg"
                  type="nomeObra"
                  placeholder="Insira direitos autorias"
                  />
  
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  