import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import DayPicker, { DateUtils } from "react-day-picker"
import moment from "moment"

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css';

class ArticleList extends Component {

    constructor(props) {
      super(props);
      //у тебя handleResetClick и так задается через =>, этот .bind лишний
      this.handleResetClick = this.handleResetClick.bind(this);
    }

    state = {
      selectedArticles: null,
      from: new Date(),
      to: null
    }

    handleDayClick = (e, day) => {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range);
    }

    handleResetClick = (e) => {
      this.setState({
        from: null,
        to: null
      });
    }

    render() {
        const { articles, isItemOpen, toggleOpenItem } = this.props
        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isItemOpen(article.id)}
                openArticle = {toggleOpenItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        const
          {from, to} = this.state,
          firstDate = from ? moment(from).format('dddd, DD MMMM YYYY') : <i>Select first day</i>,
          lastDate = to ? moment(to).format('dddd, DD MMMM YYYY') : <i>Select last day</i>

        return (
            <div>
                <h1>Article list</h1>
                {/*Эти спаны не обязательны*/}
                <span>{firstDate} - </span>
                <span>{lastDate}</span>
                <span onClick = {this.handleResetClick}> очистить</span>

                <DayPicker
                selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                onDayClick={this.handleDayClick}
                />

                <Select
                    options = {options}
                    multi = {true}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange}
                />
                <ul>
                    {listItems}
                </ul>


            </div>
        )
    }

    handleSelectChange = (selectedArticles) => {
        console.log(selectedArticles)
        this.setState({
            selectedArticles
        })
    }
}

export default oneOpen(ArticleList)
