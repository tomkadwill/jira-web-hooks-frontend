import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webhooks: [],
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({webhooks: this.state.webhooks.concat(this.state.value)});
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Introduction />
        <Description />

        <WebhookTable webhooks={this.state.webhooks}/>
        <InputWebhook handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value}/>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <h1>JIRA Webhooks</h1>
    )
  }
}

class Introduction extends Component {
  render() {
    return (
      <p className="description">
        Welcome to the JIRA Webhooks app. This app will allow you to create, update and delete webhooks.
      </p>
    )
  }
}

class Description extends Component {
  render() {
    return (
      <p className="description">
        To add your first webhook, scroll down and click "Add Webhook".
      </p>
    )
  }
}

class WebhookTable extends Component {
  render() {
    return (
      <ul className="webhooks_content">
        {this.props.webhooks.map(function(webhook) {
          return (
            <WebhookRow row={webhook}/>
          );
        })}
      </ul>
    )
  }
}

class WebhookRow extends Component {
  render() {
    return (
      <li>{this.props.row}</li>
    )
  }
}

class InputWebhook extends Component {
  render() {
    return (
      <form className="webhooks_content" onSubmit={this.props.handleSubmit}>
        <label>
          Add a new webhook: <input type="text" value={this.props.value} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
