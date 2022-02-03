import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReserve, removeReserve } from '../../store/modules/reserve/actions';
import api from '../../services/api';

export default function Filmes() {
    const dispatch = useDispatch();
    const reservas = useSelector(state => state.reserve)
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const res = await api.get('r-api/?api=filmes', { signal: controller.signal });
                setFilmes(res.data);
            } catch (e) { }
        })();
        return () => controller.abort();
    }, []);

    function handleAdd(filme) {
        dispatch(addReserve(filme));
    }

    function handleRemove(id) {
        dispatch(removeReserve(id));
    }

    return (
        <div>
            <h2>Filmes</h2>
            {filmes.map((filme) => {
                return (
                    <article key={filme.id}>
                        <h3>{filme.nome}</h3>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        <button type="button" onClick={() => handleAdd(filme)}>Reserva</button>
                    </article>
                )
            })}
            {reservas.map((filme) => {
                return (
                    <article key={filme.id}>
                        <h3>{filme.nome} - {filme.amount}</h3>
                        <button type="button" onClick={() => handleRemove(filme.id)}>Remove</button>
                    </article>
                )
            })}
        </div>
    );
}
