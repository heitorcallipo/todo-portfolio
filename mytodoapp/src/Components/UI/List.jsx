import styles from "./List.module.css"

const List = ({ list }) => {
    return (
        <main className={styles.list}>
            {list.map(item => item) /* Para cada item da LIST será renderizando um componente <Todo /> (representado como item) */}
        </main>
    )
}

export default List