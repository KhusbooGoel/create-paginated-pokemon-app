import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./components/search/search";
import "./App.css";
import {
  createMuiTheme,
  MuiThemeProvider,
  ThemeOptions,
} from "@material-ui/core/styles";
import PokeCard from "./components/pokecard/Pokecard";

// @ts-ignore
const options: ThemeOptions = {
  ...{
    palette: {
      type: "light",
      tonalOffset: 0.2,
      background: { paper: "#fff", default: "#F5F5F5" },
      contrastThreshold: 3,
      grey: {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        A700: "#616161",
        A100: "#d5d5d5",
        A400: "#303030",
        A200: "rgba(215, 220, 224, 1)",
      },
      text: {
        primary: "rgba(0, 0, 0, 1)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(12, 19, 26, 0.7)",
        hint: "rgba(28, 38, 51)",
      },
      divider: "rgba(0, 0, 0, 0.12)",

      common: { black: "#000000", white: "#ffffff" },

      action: {
        hoverOpacity: 0.08,
        hover: "rgba(0, 0, 0, 0.08)",
        selected: "rgba(0, 0, 0, 0.14)",
        disabledBackground: "rgba(233, 236, 240, 1)",
        disabled: "rgba(0, 0, 0, 0.82)",
        active: "rgba(0, 0, 0, 0.54)",
      },
    },
  },
};

export type pokemon = {
  name: string;
  url: string;
};
export type pokemonType = {
  name: string;
  id: number;
  height: string;
  weight: string;
  sprites: any;
};

interface IAppState {
  pokemons: pokemon[];
  search: string;
  pokemonDetails: any;
  itemsCountPerPage: number;
  activePage: number;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      pokemons: [],
      search: "",
      pokemonDetails: [],
      activePage: 1,
      itemsCountPerPage: 10,
    };
  }

  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    let url =
      "https://pokeapi.co/api/v2/pokemon?offset=" +
      this.state.activePage +
      "&limit=" +
      this.state.itemsCountPerPage;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.setState({ pokemons: data.results }, () => {
            this.state.pokemons.map((pokemon) => {
              return fetch(pokemon.url)
                .then((response) => response.json())
                .then((data) => {
                  if (data) {
                    var temp = this.state.pokemonDetails;
                    temp.push(data);
                    this.setState({ pokemonDetails: temp });
                  }
                })
                .catch(console.log);
            });
          });
        }
      })
      .catch(console.log);
  }
  public handleChange = (event: { target: { value: any } }) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { pokemons, search, pokemonDetails } = this.state;
   
    const filterPoke =pokemonDetails.filter((pokemon: { name: string; })=>pokemon.name.toLowerCase().includes(search.toLowerCase()));

    const renderedPokemonList = filterPoke.map(
      (pokemon: pokemonType, index: number) => {
        return <PokeCard key={index} pokemon={pokemon} />;
      }
    );

    return (
      <MuiThemeProvider theme={createMuiTheme(options)}>
        <div className="App">
          <h1>Pokemon App</h1>
          <Search
            placeholder="Search Pokemon"
            handleChange={this.handleChange}
          />

          <div className="container">
            <div className="card-columns">{renderedPokemonList}</div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
