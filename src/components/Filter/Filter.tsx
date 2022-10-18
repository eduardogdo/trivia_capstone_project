import { FormEvent, useEffect, useState } from "react";
import TriviaCategory from "../../services/TriviaCategory";
import { getCategories } from "../../services/TriviaService";
import Button from "@mui/material/Button";
import "./Filter.css";
import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  onFilter: (categories: string, difficulty: string) => void;
}

const DIFFICULTY_VALUES: string[] = ["Easy", "Medium", "Hard"];

const Filter = ({ onFilter }: Props) => {
  const [categoryList, setCategories] = useState<TriviaCategory[]>();
  const [categories, setSelectedCategories] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (categories) {
      onFilter(categories.toString(), difficulty);
    }
  };

  const handleOnChange = (event: SelectChangeEvent<string[]>) => {
    const value =
      typeof event.target.value == "string"
        ? [event.target.value]
        : event.target.value;
    setSelectedCategories(value);
  };

  return (
    <section className="Filter">
      <h4>Filter</h4>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="trivia-category-label">Categories</InputLabel>
              <Select
                labelId="trivia-category-label"
                id="trivia-category"
                value={categories}
                label="Categories"
                onChange={handleOnChange}
                renderValue={(selected) => selected.join(", ")}
                multiple
              >
                {categoryList &&
                  categoryList.map((item: TriviaCategory, index) => {
                    return (
                      <MenuItem key={index} value={item.value}>
                        <ListItemIcon>
                          <Checkbox
                            checked={categories.indexOf(item.value) > -1}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="trivia-difficulty-label">Difficulty</InputLabel>
              <Select
                labelId="trivia-difficulty-label"
                id="trivia-difficulty"
                value={difficulty}
                label="Difficulty"
                onChange={(e) => setDifficulty(e.target.value)}
              >
                {DIFFICULTY_VALUES.map((item: string, index) => {
                  return (
                    <MenuItem key={index} value={item.toLowerCase()}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button variant="contained" type="submit" size={"large"}>
              Filter
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};

export default Filter;
