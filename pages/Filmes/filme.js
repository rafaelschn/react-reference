import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const res = await api.get('r-api/?api=filmes/' + id, { signal: controller.signal });
                if (res.data.length === 0){
                    navigate('/filmes');
                    return;
                }

                setFilme(res.data);
                setLoading(false);
            } catch (e) { }
        })();
        return () => { controller.abort(); setLoading(false); }
    }, [navigate, id]);

    if (loading)
        return <div>Carregando...</div>;

    return (
        <div>
            <h2>Filme</h2>
            <h3>{filme.nome}</h3>
            <p>{filme.sinopse}</p>
            <img src={filme.foto} alt={"img " + filme.id} />
        </div>
    );
}
