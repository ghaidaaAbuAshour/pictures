import React from 'react';

class SearchBar extends React.Component
{
state ={term :''};
onInputClick()
{
  console.log("input was clicked");
}
onInputChnage(event)
{
console.log(event.target.value);
}

onFormSubmit = (event) =>
{
event.preventDefault();
this.props.onSubmit(this.state.term);
}


  render(){

  /* return(
      <div className="ui segment">
      <form className="ui form">
      <div className="field">
      <label>Iamge search </label>
      <input type="text"  onChange={this.onInputChnage} />
      </div>
      </form>
      </div>
   );
*/
  /* return(
       <div className="ui segment">
       <form className="ui form">
       <div className="field">
       <label>Iamge search </label>
       <input type="text"  onChange={(event => console.log(event.target.value))} />
       </div>
       </form>
       </div>
    );*/

     return(
         <div className="ui segment">
         <form className="ui form" onSubmit={this.onFormSubmit}>
         <div className="field">
         <label>Iamge search </label>
         <input type="text"  value={this.state.term} onChange={(event => this.setState({term : event.target.value}))} />
         </div>
         </form>
         </div>
      );
  }
}


export default SearchBar;
