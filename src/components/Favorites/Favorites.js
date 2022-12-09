import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import styles from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions";


function Favorites({myFavorites, filterCard, orderCard}){

    const [stateSort, setStateSort] = React.useState('Ascendente')

    // const dispatch = useDispatch();

    function orderCards(e){
        orderCard(e.target.value)
        setStateSort(e.target.value)
    }

    function filterCards(e){
       filterCard(e.target.value)
    }


    
    return <div className={styles.containerFavorites}>
        <div>
            <select onChange={orderCards} value={stateSort}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={filterCards}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div className={styles.containerFavoritesCard}>
            {
                myFavorites?.map((c, i) => <div key={i} className={styles.card}>
                    <div className={styles.name}>
                        <h2>{c?.name}</h2>
                    </div>
                    <div className={styles.imgClass}>
                        <img  src={c?.image} alt="" />
                    </div>
                    <div className={styles.nameClass}>
                    <h2>{c?.gender}</h2>
                    <h2>{c?.species}</h2>
                    </div>
                </div>)
            }
                
        </div>
    </div>
}


export function mapStateToProps(state){
    return {
        myFavorites: state?.myFavorites
    }
}

export function mapDispatchToProps(dispatch){
    return {
        filterCard: (gener) => dispatch(filterCards(gener)),
        orderCard: (order) => dispatch(orderCards(order))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
