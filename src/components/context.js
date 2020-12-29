import React, { Component } from "react";
import Client from "./Contentiful";

const SancorpContext = React.createContext();
export default class SancorpProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      context: [],
      santeam: [],
      team: [],
      sanServices: [],
      services: [],
    };
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "sancorphome",
      }).then((response) =>
        this.setState({
          items: response.items,
        })
      );
      let posts = this.organiseData(this.state.items);

      this.setState({
        context: posts,
      });
    } catch (error) {
      console.log(error);
    }
  };
  getTeam = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "sancorpteam",
      }).then((response) =>
        this.setState({
          santeam: response.items,
        })
      );
      let posts = this.organiseData(this.state.santeam);

      this.setState({
        team: posts,
      });
    } catch (error) {
      console.log(error);
    }
  };
  getServices = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "sancorpServices",
      }).then((response) =>
        this.setState({
          sanServices: response.items,
        })
      );
      let posts = this.organiseData(this.state.sanServices);


      this.setState({
        services: posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  organiseData = (items) => {
    let temppost = items.map((item) => {
      let id = item.sys.id;
      let imagez = item.fields.imagez.map((image) => image.fields.file.url);
      let post = { ...item.fields, imagez, id };
      return post;
    });
    return temppost;
  };

  componentDidMount() {
    this.getData();
    this.getTeam();
    this. getServices();
  }

  render() {
    return (
      <SancorpContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SancorpContext.Provider>
    );
  }
}

const SancorpConsumer = SancorpContext.Consumer;

export { SancorpProvider, SancorpContext, SancorpConsumer };
