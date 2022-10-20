import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import Score from "../../models/ScoreModel";
import { getScore, deleteScore } from "../../services/ScoreService";
import "./HighScore.css";

const HighScore = () => {
  const [scores, setScores] = useState<Score[]>();
  useEffect(() => {
    onGetScore();
  });

  const onGetScore = () => {
    getScore().then((scores: Score[]) => {
      setScores(scores);
    });
  };

  const onDeleteScore = (score: Score) => {
    deleteScore(score._id).then((resp) => {});
    onGetScore();
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12} md={6}>
        <List>
          {scores &&
            scores.map((item, index) => (
              <div key={index}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => onDeleteScore(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.username}
                    secondary={"Score: " + item.score}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default HighScore;
