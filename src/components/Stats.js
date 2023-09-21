export default function Stats({ items }) {
  if (items.length === 0)
    return <footer class="stats"><em>Start adding items to your packing List!!</em></footer>;

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {(percentage === 100) ? "You have got everything!Ready to go" : `💼You have ${numItems} items on your list,and you have already packed ${packedItems}( ${percentage} %)`}

      </em>
    </footer>
  );

}
