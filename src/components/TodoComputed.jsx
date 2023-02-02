const TodoComputed = ({computedItemsLeft, clearComplete}) => {
    return (
        <section className="dark:bg-gray-800 py-4 px-4 flex justify-between bg-white rounded-b-md transition-all duration-1000">
            <span className="text-gray-400">{computedItemsLeft} items left</span>
            <button onClick={clearComplete} className="text-gray-400">clear completed</button>
          </section>
    )
}

export default TodoComputed