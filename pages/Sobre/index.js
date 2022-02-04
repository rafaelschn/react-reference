import { useState, useMemo } from 'react'
import { debounce } from 'lodash'

export default function Sobre() {
    const [nome, setNome] = useState('')

    const handleInput = (e) => {
        setNome(e.target.value)
    }

    const debounced = useMemo(() => debounce(handleInput, 300), [])

    return (
        <div>
            <h2>Sobre</h2>
            <input type="text" onChange={debounced} />
            {nome}
        </div>
    );
}
