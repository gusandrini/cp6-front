"use client";

import { TipoTrabalhos } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadCpSora() {

    const navigate = useRouter();

    const [trabalho, setTrabalho] = useState<TipoTrabalhos>({
        id:0,
        nome: "",
        descricao: "",
        materia: "",
        nota: 0,
      });

      const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=> {

        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/felipe-sora",{
                method: "POST",
                headers:{
                  "Content-Type": "application/json",
                  },
                  body: JSON.stringify(trabalho),
              });

            if(response.ok) {
                setTrabalho({id:0,nome:"",descricao:"",materia:"", nota: 0});
                alert("Trabalho cadastrado com sucesso!");
                navigate.push("/integrantes/sora/sora-cp");
            } else{
                alert("Erro ao cadastrar produto!");
            }


        } catch (error) {
            console.error("Erro ao cadastrar trabalho: " , error);
        }
      }

    return(
        <div>
            <h1>Cadastro de CheckPoint</h1>

            <div>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div>
                        <label htmlFor="idNome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome do Checkpoint:</label>
                        <input type="text" name="nome" id="idNome" className="text-black"  value={trabalho.nome} onChange={(e)=> setTrabalho({...trabalho,nome:e.target.value})} placeholder="Nome do Produto"/>
                    </div>

                    <div>
                        <label htmlFor="idDescricao" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição do Checkpoint:</label>
                        <input type="text" name="descricao" id="idDescricao" className="text-black" value={trabalho.descricao} onChange={(e)=> setTrabalho({...trabalho,descricao:e.target.value})} placeholder="Descrição do Produto"/>
                    </div>

                    <div>
                        <label htmlFor="idMateria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Matéria do CheckPoint:</label>
                        <input type="text" name="materia" id="idMateria" className="text-black" value={trabalho.materia} onChange={(e)=> setTrabalho({...trabalho,materia:e.target.value})} placeholder="Matéria do CheckPoint"/>
                    </div>

                    <div>
                        <label htmlFor="idNota">Nota do CheckPoint:</label>
                        <input type="number" name="nota" id="idNota" className="text-black" value={trabalho.nota} onChange={(e)=> setTrabalho({...trabalho,nota: parseInt(e.target.value) })}/>
                    </div>

                    <div>
                        <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}