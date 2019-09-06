import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
// import ImageList from './ImageList';

class App extends React.Component{
  // onSearchSubmit(term){
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID e2bd6e790d00cde2b7319edc6126be7572f28b9860537f5197283e64e3fcb438'
  //     }
  //   }).then((response)=>{
  //     console.log(response.data.results);
  //   });
  // }

    async onSearchSubmit(term){
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID e2bd6e790d00cde2b7319edc6126be7572f28b9860537f5197283e64e3fcb438'
        }
      });
      console.log(response.data.results);
    }


  render(){
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>)
  }
};

export default App;
