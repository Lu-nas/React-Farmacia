import React, { useState } from 'react';
import { Produto } from '../../models/produtos';

const Home: React.FC = () => {


    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

    const produtos: Produto[] = [
        { id: 1, nome: ' Metilcobalamina Vitamina-B12', descricao: '  Comprimidos', preco: 39.99, categoria: 'Saúde' },
        { id: 2, nome: 'Protetor Solar Facial Creme-FPS', descricao: 'Alta proteção', preco: 49.99, categoria: 'Beleza' },
    ];

    const handleProdutoClick = (produto: Produto) => {
        setProdutoSelecionado(produto);
    };

    return (
        <div className='container mx-auto text-center py-10'>
            <h1 className='text-4xl font-bold mb-4'>Bem-vindo à Farmacia</h1>
            <p className='text-lg text-gray-700'>O que deseja encontrar?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {produtos.map((produto) => (
                    <div key={produto.id} className="border p-4 rounded">
                        <h2 className="text-xl font-semibold">{produto.nome}</h2>
                        <p>{produto.descricao}</p>
                        <p className="text-lg font-bold">R$ {produto.preco.toFixed(2)}</p>
                        <button
                            onClick={() => handleProdutoClick(produto)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Ver Produto
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-around gap-4"></div>

            {produtoSelecionado && (
                <div className="mt-8 p-4 bg-gray-100 rounded">
                    <h2 className="text-2xl font-bold">Produto Selecionado:</h2>
                    <p>Nome: {produtoSelecionado.nome}</p>
                    <p>Descrição: {produtoSelecionado.descricao}</p>
                    <p>Preço: R$ {produtoSelecionado.preco.toFixed(2)}</p>
                    <p>Categoria: {produtoSelecionado.categoria}</p>
                </div>
            )}
        </div>

    );
};

export default Home;
