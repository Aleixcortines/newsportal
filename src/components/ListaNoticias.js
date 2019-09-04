import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types'

const ListaNoticias = ({noticias}) => (

    <div className="row">

    {noticias.map(noticia =>(

        <Noticia
        key= {noticia.url}
        noticia={noticia}
        />
    ))}
    
</div>
);

ListaNoticias.propTypes ={
    ListaNoticias: PropTypes.array.isRequired
}
  

export default ListaNoticias;