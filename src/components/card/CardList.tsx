import React from "react";
import {Card} from "./card";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./jss/CardListStyle";
import { pokemon } from "../../App";

interface ICardListProps extends WithStyles<typeof styles> {
  pokemons: pokemon[];
}
const CardList: React.FC<ICardListProps> = ({ pokemons, classes }) => {
  return (
    <div className={classes.root}>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon}></Card>
      ))}
    </div>
  );
};

export default withStyles(styles)(CardList);
