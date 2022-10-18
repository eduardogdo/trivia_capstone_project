import { FormEvent, useEffect, useState } from "react";
import TriviaCategory from "../../services/TriviaCategory";
import {
  getCategories,
  getTriviaQuestions,
} from "../../services/TriviaService";
import "./Filter.css";

const Filter = () => {
  const [categories, setCategories] = useState<TriviaCategory[]>();
  const [selectedCategories, setSelectedCategories] = useState<
    string | undefined
  >();

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getTriviaQuestions(selectedCategories, "medium");
  };

  const setSelected = (value: string) => {
    setSelectedCategories((prev) => (prev ? prev + "," + value : value));
  };

  return (
    <section className="Filter">
      <h4>Filter</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Categories</label>
          <select
            multiple
            name="category"
            value={selectedCategories}
            onChange={(e) => setSelected(e.target.value)}
          >
            <>
              <option value={""}>Select a category</option>
              {categories &&
                categories.map((item: TriviaCategory, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.name}
                    </option>
                  );
                })}
            </>
          </select>
          <button type="submit">Filter</button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
