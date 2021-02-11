import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(items)
  const [categories, setCategories] = useState([])

  const filterItems = (category) => {
    if (category == 'all') {
      setMenu(menu)
    }
    const newItems = menu.map((item) => item.category !== category)
    setMenu(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>
            our menu items
        </h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} allCategories={allCategories} />
        <Menu items={items} />
      </section>
    </main>
  )
}

export default App;
